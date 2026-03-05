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
  signal,
  untracked
} from '@angular/core';
import {
  debouncedComputed,
  deepDiff,
  deepEqual,
  HttpActionClient,
  mergeDeep
} from '@se-ng/signal-utils';
import { firstValueFrom } from 'rxjs';

import { LoggedIn } from '../grid-play/logged-in-user.service';
import { addCachingContext, HttpCache } from '../util/http-cache-system';

import { NotifyDialogService } from '../crud-stuff/notify-dialog/notify-dialog.service';
import { earlyReadToUndefined } from '../crud-stuff/utils/earlyread-undefined';
import type { CouchUpdate } from '../crud-stuff/couch.types';
import { couchEventLister } from '../crud-stuff/couch-event-lister';
import { createIndexes, goAddData } from '../crud-stuff/couch-helpers';

// enable caching for all requests from this service, also set some default options for the requests, like credentials and mode. This is to support CouchDB authentication cookies and CORS.
const httpCachedOptions: Record<string, unknown> = {
  ...addCachingContext({
    credentials: 'include',
    mode: 'cors'
  })
};

const sortFields = ['id', 'friendlyName'] as const;
export type SortField = (typeof sortFields)[number];

export interface MqttDeviceSetting {
  id: string; // the device id, also used as the document id in CouchDB
  _rev?: string; // the CouchDB revision, used for updates and deletes
  friendlyName: string; //  the user friendly name for the device
  isSubDevice: boolean; // whether this device is a subDevice of another device (exclude it when totalling up power usage, for example)
}

@Injectable()
export class MqttDeviceSettingsService {
  user = inject(LoggedIn).user;
  base = computed(
    () =>
      `https://${this.user() === undefined ? 'demodb' : 'couchdb'}.eliasweb.nl` as const
  );
  baseUrl = computed(() => `${this.base()}/mqtt_device_settings` as const);
  idUrl = (id: string) => `${this.baseUrl()}/${id}`;

  #http = inject(HttpActionClient);
  #httpo = inject(HttpClient);
  #notifyDialog = inject(NotifyDialogService);
  #cache = inject(HttpCache);
  #des = inject(DestroyRef);

  filter = signal('');
  #filter = debouncedComputed(() => `(?i)${this.filter()}`, { delay: 250 });
  #refresh = signal(0);
  sort = signal<SortField>('id');
  order = signal<'asc' | 'desc'>('asc');

  #listRes = httpResource<[string, string][]>(
    () => ({
      url: `${this.baseUrl()}/_find?v=${this.#refresh()}`,
      method: 'POST',
      body: {
        selector: {
          $or: [{ id: { $regex: this.#filter() } }]
        },
        fields: ['id', '_rev'],
        sort: [{ [this.sort()]: this.order() }],
        limit: 25
      },
      credentials: 'include',
      mode: 'cors'
    }),
    {
      defaultValue: [],
      parse: (response: any) =>
        (response?.docs ?? []).map(
          (i: any) => [i.id, i._rev] as [string, string]
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
    if (!reason) {
      console.error('Unknown error', err);
      this.#notifyDialog.show({
        title: 'CouchDB not found?',
        message: `This service expects CouchDB to be available.`
      });
      return;
    }
    if (reason.startsWith('No index exists')) {
      try {
        await createIndexes().catch(e =>
          console.error('Error creating index', e)
        );
        this.#listRes.reload();
      } catch (e) {
        console.error('Error creating index', e);
      }
    }
    if (reason.startsWith('Database does not exist')) {
      try {
        await untracked(
          async () =>
            await this.#http.put(this.baseUrl(), {}, httpCachedOptions)
        );
        await goAddData();
        this.#listRes.reload();
      } catch (e) {
        console.error('Error creating database', e);
      }
    }
    this.#notifyDialog.show({
      title: 'CouchDB error?',
      message: `There is an unknown error with the mqttDeviceSettings database.`
    });
  });

  constructor() {
    setTimeout(() => {
      const s = couchEventLister(this.base(), 'mqttDeviceSettings').subscribe(
        event => {
          this.#cache.purge(this.idUrl(event.id));
          if (event.deleted) {
            this.#list.update(oldList =>
              oldList.filter(i => i[0] !== event.id)
            );
          } else {
            const rev = event.changes[0]?.rev ?? '';
            this.#list.update(oldList =>
              oldList.map(i =>
                i[0] === event.id ? ([i[0], rev] as [string, string]) : i
              )
            );
          }
        }
      );
      this.#des.onDestroy(() => s.unsubscribe());
    }, 2000);
  }

  create = async (data: MqttDeviceSetting) => {
    const url = this.idUrl(data.id);
    try {
      const response = await this.#http.put(url, data, httpCachedOptions);
      this.#list.update(oldList =>
        [[data.id, ''] as [string, string], ...oldList].splice(0, 50)
      );
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
    ids: Signal<string>,
    options: Record<string, unknown> = httpCachedOptions
  ): HttpResourceRef<MqttDeviceSetting | Partial<MqttDeviceSetting>> => {
    const id = computed(() => earlyReadToUndefined(ids) ?? '');
    const httpOptions = computed(() => {
      if (!id()) return undefined;
      return { url: this.idUrl(id()), ...options };
    });
    return httpResource<MqttDeviceSetting | Partial<MqttDeviceSetting>>(
      httpOptions,
      {
        defaultValue: { id: id() } as unknown as Partial<MqttDeviceSetting>
      }
    );
  };

  update = async (data: MqttDeviceSetting) => {
    const id = data.id;
    const url = this.idUrl(id);
    const oldData = (await this.#http.get(
      url,
      httpCachedOptions
    )) as MqttDeviceSetting;
    if (deepEqual(oldData, data)) return { result: 'noChange' };
    try {
      const { rev } = await this.#http.put<CouchUpdate>(
        url,
        data,
        httpCachedOptions
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
          this.#cache.purge(url);
          const myDiff = deepDiff(oldData, data);
          const remoteData = (await this.#http.get(
            url,
            httpCachedOptions
          )) as MqttDeviceSetting;
          const merged = mergeDeep(remoteData, myDiff);
          this.#notifyDialog.show({
            title: 'Conflict detected',
            message:
              'We merged upstream changes, please review and submit again.'
          });
          return { result: 'conflict', user: merged };
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
      await this.#http.delete(url, httpCachedOptions);
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
        const { _rev } = await this.#http.get(url, httpCachedOptions);
        this.#list.update(oldList =>
          oldList.map(i =>
            i[0] === id ? ([i[0], _rev] as [string, string]) : i
          )
        );
        return false;
      }
    }
    this.#list.update(oldList => oldList.filter(i => i[0] !== id));
    return true;
  };

  reFetch = async (ids: string) => {
    const url = this.idUrl(ids);
    return firstValueFrom(this.#httpo.get(url, httpCachedOptions));
  };

  info = async () => {
    const url = this.baseUrl();
    return this.#http.get(url, httpCachedOptions);
  };
}
