import {
  HttpClient,
  httpResource,
  type HttpResourceRef
} from '@angular/common/http';
import type { Signal } from '@angular/core';
import {
  computed,
  DestroyRef,
  effect,
  inject,
  Injectable,
  Injector,
  signal,
  untracked
} from '@angular/core';
import { deepDiff, deepEqual } from '@se-ng/signal-utils';
import { firstValueFrom } from 'rxjs';

import { LoggedIn } from '../grid-play/logged-in-user.service';
import { addCachingContext, HttpCache } from '../util/http-cache-system';
import type {
  MqttDeviceOptions,
  MqttDeviceSetting
} from './mqtt-device-settings.types';

import { couchEventLister } from '../crud-stuff/couch-event-lister';
import { goAddData } from '../crud-stuff/couch-helpers';
import type { CouchUpdate } from '../crud-stuff/couch.types';
import { NotifyDialogService } from '../crud-stuff/notify-dialog/notify-dialog.service';
import { earlyReadToUndefined } from '../crud-stuff/utils/earlyread-undefined';

// enable caching for all requests from this service, also set some default options for the requests, like credentials and mode. This is to support CouchDB authentication cookies and CORS.
const httpCachedOptions: Record<string, unknown> = {
  ...addCachingContext({
    credentials: 'include',
    mode: 'cors'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MqttDeviceSettingsService {
  user = inject(LoggedIn).user;
  injector = inject(Injector);
  base = computed(
    () =>
      `https://${this.user() === undefined ? 'demodb' : 'couchdb'}.eliasweb.nl` as const
  );
  baseUrl = computed(() => `${this.base()}/mqtt_device_settings` as const);
  idUrl = (id: string, rev?: string) =>
    `${this.baseUrl()}/${id}${rev ? `?rev=${rev}` : ''}`;

  readonly defaultOptions: MqttDeviceOptions = {
    alertWhenLost: false,
    alertWhenOff: false,
    allowPowerControl: false,
    isSubDevice: false
  } as const;

  readonly extractedOptions = (
    options: Partial<MqttDeviceSetting> | MqttDeviceOptions
  ): MqttDeviceOptions => ({
    alertWhenLost: options?.alertWhenLost ?? this.defaultOptions.alertWhenLost,
    alertWhenOff: options?.alertWhenOff ?? this.defaultOptions.alertWhenOff,
    allowPowerControl:
      options?.allowPowerControl ?? this.defaultOptions.allowPowerControl,
    isSubDevice: options?.isSubDevice ?? this.defaultOptions.isSubDevice,
    maxPower: options?.maxPower 
  });

  optionsFromDevResource = (
    resource: HttpResourceRef<MqttDeviceSetting | Partial<MqttDeviceSetting>>
  ) =>
    computed(
      () => {
        if (resource.isLoading()) return this.defaultOptions;
        const data = resource.hasValue() && resource.value();
        if (!data) return this.defaultOptions;
        return this.extractedOptions(data);
      },
      { debugName: 'OptionsFromDevResource' }
    );

  #http = inject(HttpClient);
  #notifyDialog = inject(NotifyDialogService);
  #cache = inject(HttpCache);
  #des = inject(DestroyRef);

  #refresh = signal(0);

  // guard to avoid repeatedly attempting database creation when multiple
  // errors fire in quick succession (prevents repeated PUT /<db>/ calls)
  #dbCreateAttempted = false;
  #listRes = httpResource<[string, string][]>(
    () =>
      this.user() === undefined // don't attempt to load the list if we don't know the user,
        ? undefined
        : {
            url: `${this.baseUrl()}/_all_docs?include_docs=false&v=${this.#refresh()}`,
            method: 'POST',
            body: {
              fields: ['id', '_rev']
            },
            credentials: 'include',
            mode: 'cors'
          },
    {
      defaultValue: [],
      parse: (response: any) =>
        (response?.rows ?? []).map(
          (i: any) => [i.id, i.value.rev] as [string, string]
        )
    }
  );
  #list = this.#listRes.value;
  list = this.#list.asReadonly();
  listIsLoading = this.#listRes.isLoading;

  _DbError = effect(async () => {
    const err: any = this.#listRes.error();
    if (!err) return;
    const reason: string = err.error?.reason;

    // If CouchDB reports the DB already exists (HTTP 412 / file_exists),
    // ignore — this is benign and should not trigger repeated create attempts.
    if (
      err?.status === 412 ||
      err?.error?.error === 'file_exists' ||
      (typeof reason === 'string' &&
        reason.toLowerCase().includes('file exists'))
    ) {
      return;
    }

    if (!reason) {
      console.error('Unknown error', err);
      this.#notifyDialog.show({
        title: 'CouchDB not found?',
        message: `This service expects CouchDB to be available.`
      });
      return;
    }

    if (reason.startsWith('No index exists')) {
      throw new Error(
        'Index missing, please create the required database and indexes by running the createDbAndIndexes function in the console.'
      );
    }
    if (reason.startsWith('Database does not exist')) {
      if (this.#dbCreateAttempted) {
        console.info('Database create already attempted, skipping.');
        return;
      }
      this.#dbCreateAttempted = true;
      try {
        // Double-check with a direct fetch to avoid issuing a PUT if the DB
        // already exists (this helps when multiple instances or retries race).
        const checkRes = await fetch(this.baseUrl(), {
          method: 'GET',
          credentials: 'include',
          mode: 'cors'
        });
        if (checkRes.ok) {
          this.#listRes.reload();
          return;
        }
        await untracked(
          async () =>
            await firstValueFrom(
              this.#http.put(this.baseUrl(), {}, httpCachedOptions)
            )
        );
        await goAddData();
        this.#listRes.reload();
      } catch (e) {
        console.error('Error creating database', e);
      }
    }
    this.#notifyDialog.show({
      title: 'CouchDB error?',
      message: `There is an unknown error with the mqtt_device_settings database.`
    });
  });

  constructor() {
    setTimeout(() => {
      if (!this.user()) return; // don't set up the listener if we don't know the user (e.g. not logged in)
      const s = couchEventLister(this.base(), 'mqtt_device_settings').subscribe(
        event => {
          console.log('CouchDB change event');
          // console.log(JSON.stringify(event, null, 2));
          this.#cache.purge(this.idUrl(event.id));
          if (event.deleted) {
            this.#list.update(oldList =>
              oldList.filter(i => i[0] !== event.id)
            );
          } else {
            const rev = event.changes[0]?.rev ?? Date.now().toString(36);
            this.#list.update(oldList => {
              // Find the item index once, then update or append accordingly.
              const idx = oldList.findIndex(i => i[0] === event.id);
              if (idx === -1) {
                // Not present: append new id/rev tuple.
                return [...oldList, [event.id, rev]];
              } else {
                const newList = [...oldList];
                newList[idx] = [event.id, rev];
                return newList;
              }
            });
          }
        }
      );
      this.#des.onDestroy(() => s.unsubscribe());
    }, 2000);
  }

  create = async (data: MqttDeviceSetting) => {
    if (!data?.id) return false;
    const url = this.idUrl(data.id);
    try {
      const response = await firstValueFrom(
        this.#http.put(url, data, httpCachedOptions)
      );
      this.#list.update(oldList => [
        [data.id, ''] as [string, string],
        ...oldList
      ]);
      return true;
    } catch (e: any) {
      const { error: { error: err, reason } = {} } = e ?? {};
      if (err === 'forbidden') {
        await this.#notifyDialog.show({
          title: 'You are not allowed to add data',
          message: 'Write access is not available for this account.'
        });
        return false;
      }
      console.error('Error creating mqtt device setting', e);
      return false;
    }
  };

  read = (
    ids: () => string | undefined,
    options: Record<string, unknown> = httpCachedOptions
  ): HttpResourceRef<MqttDeviceSetting | Partial<MqttDeviceSetting>> => {
    const id = computed(() => earlyReadToUndefined(ids) ?? '');
    // use the list signal to get the current revision for this id, so that the resource updates when the revision changes (e.g. after an update or external change)
    const rev = computed(() => {
      const list = earlyReadToUndefined(this.list) ?? [];
      const item = list.find(i => i[0] === id());
      return item ? item[1] : undefined;
    });
    const httpOptions = computed(() => {
      if (!id()) return undefined;
      return { url: this.idUrl(id(), rev()), ...options };
    });
    return httpResource<MqttDeviceSetting | Partial<MqttDeviceSetting>>(
      httpOptions,
      {
        defaultValue: { id: id() } as unknown as Partial<MqttDeviceSetting>,
        injector: this.injector
      }
    );
  };

  update = async (data: MqttDeviceSetting) => {
    const id = data?.id;
    if (!id) return { result: 'error', error: 'missing-id' };
    const url = this.idUrl(id);
    const oldData = (await firstValueFrom(
      this.#http.get(url, httpCachedOptions)
    )) as MqttDeviceSetting;
    // Ensure we include the current revision when updating so CouchDB accepts the PUT
    const toSend = { ...data, _rev: oldData._rev } as MqttDeviceSetting;
    if (deepEqual(oldData, toSend)) return { result: 'noChange' };
    try {
      const { rev } = await firstValueFrom(
        this.#http.put<CouchUpdate>(url, toSend, httpCachedOptions)
      );
      this.#list.update(oldList =>
        oldList.reduce(
          (acc, item) => [
            ...acc,
            [item[0], item[0] === id ? rev : item[1]] as [string, string]
          ],
          [] as [string, string][]
        )
      );
      return { result: 'ok', rev };
    } catch (e: any) {
      const { error: { error: err, reason } = {} } = e ?? {};
      if (err === 'forbidden') {
        await this.#notifyDialog.show({
          title: 'You are not allowed to update this data',
          message: 'This account has no write access.'
        });
        return { result: 'error', error: 'forbidden' };
      }
      if (reason?.startsWith('Document update conflict')) {
        try {
          this.#cache.purge(url); // purge the cache to avoid repeated conflicts on retry
          const myDiff = deepDiff(oldData, data);
          const remoteData = (await firstValueFrom(
            this.#http.get(url, { mode: 'cors', credentials: 'include' }) // don't use cache here to ensure we get the latest revision and data, even if it's a bit slower
          )) as MqttDeviceSetting;
          console.log({ myDiff, remoteData });
          const merged = {
            ...remoteData,
            ...myDiff,
            // for maxPower, we want to keep the highest value to avoid losing important data about power usage
            maxPower: Math.max(
              remoteData.maxPower || 0,
              data.maxPower || 0,
              oldData.maxPower || 0
            )
          } as MqttDeviceSetting;
          console.log(JSON.stringify(merged, null, 2));
          // return this.update({...merged, maxPower: Math.max(merged.maxPower || 0, data.maxPower)});
          return { result: 'conflict', error: 'conflict', merged };
        } catch {
          this.#notifyDialog.show({
            title: 'Unrecoverable error',
            message: 'Please reload the app.'
          });
        }
      }
      return { result: 'error', error: e };
    }
  };

  delete = async (item: MqttDeviceSetting): Promise<boolean> => {
    const id = item.id;
    const url = this.idUrl(id) + `?rev=${item._rev}`;
    try {
      await firstValueFrom(this.#http.delete(url, httpCachedOptions));
    } catch (e: any) {
      const { error: { error: err, reason } = {} } = e ?? {};
      if (err === 'forbidden') {
        this.#notifyDialog.show({
          title: 'Not allowed',
          message: 'No delete permission.'
        });
        return false;
      }
      if (err === 'not_found' && reason === 'deleted') {
        console.log('already deleted');
      } else {
        this.#cache.purge(url);
        this.#notifyDialog.show({
          title: 'Data updated',
          message: 'Data changed; review and try again.'
        });
        const { _rev } = await firstValueFrom(
          this.#http.get<{ _rev: string }>(url, httpCachedOptions)
        );
        this.#list.update(oldList => [
          ...oldList.map(i =>
            i[0] === id ? ([i[0], _rev] as [string, string]) : i
          )
        ]);
        return false;
      }
    }
    this.#list.update(oldList => oldList.filter(i => i[0] !== id));
    return true;
  };

  // Temp helper function to
  reFetch = async (ids: string) => {
    const url = this.idUrl(ids);
    return firstValueFrom(this.#http.get(url, httpCachedOptions));
  };

  info = async () => {
    const url = this.baseUrl();
    return firstValueFrom(this.#http.get(url, httpCachedOptions));
  };
}
