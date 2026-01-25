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
  deepEqual,
  HttpActionClient,
  mergeDeep
} from '@se-ng/signal-utils';

import { type UserCard } from '../generic-services/address.service';

import { firstValueFrom } from 'rxjs';
import { addCachingContext, HttpCache } from '../util/http-cache-system';
import { couchEventLister } from './couch-event-lister';
import {
  Authorization,
  createIndexes,
  goAddData,
  headers
} from './couch-helpers';
import type { CouchUpdate } from './couch.types';
import { NotifyDialogService } from './notify-dialog/notify-dialog.service';
import { deepDiff } from '@se-ng/signal-utils';
import { earlyReadToUndefined } from './utils/earlyread-undefined';

const sortFields = ['name', 'username', 'email'] as const;
export type SortField = (typeof sortFields)[number];

// const base = 'https://couchdb.localhost';
export const base = 'http://kapow.local:5984'; // CouchDB running on local network

// enable caching for all requests from this service
const httpCachedOptions = addCachingContext({ headers });
// const httpOptions = ({ headers });

// note: not injected in root, it is supposed to be provided in the route/component that holds the component-tree that uses it.
@Injectable()
export class RelationsService {
  baseUrl = `${base}/relations` as const;
  idUrl = (id: string) => `${this.baseUrl}/${id}`;
  // HttpActionClient is a wrapper around HttpClient that allows to use promises over observables.
  // also, it exposes a busy indicator I'm not( (yet) using in this sample.)
  #http = inject(HttpActionClient);
  #httpo = inject(HttpClient);
  #notifyDialog = inject(NotifyDialogService);
  #cache = inject(HttpCache);
  #des = inject(DestroyRef);

  filter = signal('');
  #filter = debouncedComputed(() => `(?i)${this.filter()}`, { delay: 250 }); //debounce and wrap it inside an couchDB regex.
  #refresh = signal(0);
  sort = signal<SortField>('name');
  order = signal<'asc' | 'desc'>('asc');

  #listRes = httpResource<[string, string][]>(
    () => ({
      url: `${this.baseUrl}/_find?v=${this.#refresh()}`,
      method: 'POST',
      body: {
        selector: {
          $or: [
            { name: { $regex: this.#filter() } },
            { username: { $regex: this.#filter() } },
            { email: { $regex: this.#filter() } }
          ]
        },
        fields: ['id', '_rev'],
        sort: [{ [this.sort()]: this.order() }],
        limit: 15
      },
      headers
    }),
    {
      defaultValue: [],
      // unwrap the CouchDB response to get the list of ids.
      parse: (response: any) =>
        (response?.docs ?? []).map(
          (i: { id: string; _rev: string }) =>
            [i.id, i._rev] as [string, string]
        )
    }
  );
  #list = this.#listRes.value;
  list = this.#list.asReadonly(); // expose the list as a readonly signal.
  listIsLoading = this.#listRes.isLoading;

  /** This handles CouchDB Database Errors that are not related to the data itself  */
  _DbError = effect(async () => {
    // As I'm using couchDB, there might be some errors that are not related to the data itself, but to the database.
    // for example, if the database does not exist, or the index is not created.
    // So, for demo purposes, I'm creating those automatically when the error happens.
    // don't do this in production, as creating a DB or index should _not_ be a concern of the frontend.
    const err: any = this.#listRes.error();
    if (!err) {
      return;
    }
    const reason: string = err.error?.reason;
    if (!reason) {
      console.error('Unknown error', err);
      this.#notifyDialog.show({
        title: 'CouchDB not found?',
        message: `This is a demo app, and it expects CouchDB to be running locally. Please check the console for more information.`
      });
      return;
    }
    if (reason.startsWith('No index exists')) {
      console.error('Index not found, creating it');
      try {
        await createIndexes().catch(e =>
          console.error('Error creating index', e)
        );
        this.#listRes.reload(); // reload the list after creating the index.
      } catch (e) {
        console.error('Error creating index', e);
      }
    }
    if (reason.startsWith('Database does not exist')) {
      console.error('Database not found, creating it');
      try {
        await untracked(
          async () => await this.#http.put(this.baseUrl, {}, httpCachedOptions)
        );
        await goAddData();
        this.#listRes.reload(); // reload the list after creating the index.
      } catch (e) {
        console.error('Error creating database', e);
      }
    }
    console.error(err);
    this.#notifyDialog.show({
      title: 'CouchDB error?',
      message: `There is an unknown error with the database. Please check the console for more information.`
    });
  });

  constructor() {
    // use a timeout to prevent the page-spinner
    setTimeout(() => {
      const s = couchEventLister(base, 'relations', Authorization).subscribe(
        event => {
          this.#cache.purge(this.idUrl(event.id)); // remove from cache as well.
          if (event.deleted) {
            // remove from list
            this.#list.update(oldList =>
              oldList.filter(i => i[0] !== event.id)
            );
          } else {
            // update or add to list
            const rev = event.changes[0]?.rev ?? '';
            this.#list.update(oldList =>
              oldList.map(i =>
                i[0] === event.id ? ([i[0], rev] as [string, string]) : i
              )
            );
          }
        }
      );

      this.#des.onDestroy(() => {
        s.unsubscribe();
      });
    }, 1000);
  }

  create = async (data: UserCard) => {
    const url = this.idUrl(data.id);
    try {
      // await firstValueFrom(this.#http.post(url, data));
      const response = await this.#http.put(url, data, httpCachedOptions);
      console.dir(response);
      this.#list.update(oldList =>
        [[data.id, ''] as [string, string], ...oldList].splice(0, 50)
      );
      return true;
    } catch (e) {
      console.error('Error creating user', e);
      return false;
    }
  };

  read = (
    ids: Signal<string>,
    options: Record<string, unknown> = httpCachedOptions
  ): HttpResourceRef<UserCard | Partial<UserCard>> => {
    // cater for empty, or early read undefined ids.
    const id = computed(() => earlyReadToUndefined(ids) ?? '');
    // prevent creating a resource for undefined ids.
    const httpOptions = computed(() => {
      if (!id()) return undefined;
      return {
        url: this.idUrl(id()),
        ...options
      };
    });
    return httpResource<UserCard | Partial<UserCard>>(httpOptions, {
      defaultValue: { id: id() } as unknown as Partial<UserCard>
    });
  };

  update = async (
    data: UserCard
  ): Promise<
    | { result: string; rev?: undefined; user?: undefined; error?: undefined }
    | { result: string; rev: string; user?: undefined; error?: undefined }
    | { result: string; user: UserCard; rev?: undefined; error?: undefined }
    | { result: string; error: any; rev?: undefined; user?: undefined }
  > => {
    const id = data.id;
    const url = this.idUrl(id);
    // get the current revision(uses the cacheInterceptor!)
    const oldData = (await this.#http.get(url, httpCachedOptions)) as UserCard;
    if (deepEqual(oldData, data)) {
      // no changes to the data, so we don't need to update the server.
      return { result: 'noChange' };
    }
    try {
      const { rev } = await this.#http.put<CouchUpdate>(
        url,
        data,
        httpCachedOptions
      );
      if (oldData[this.sort()] !== data[this.sort()]!) {
        console.log(
          `sort field changed from ${oldData[this.sort()]} to ${data[this.sort()]}`
        );
        // if the sort field has changed, we need to update the list.
        this.#refresh.update(old => old + 1);
      } else {
        // update the revision in the list
        this.#list.update(oldList =>
          oldList.reduce(
            (acc, item) => [
              ...acc,
              [item[0], item[0] === id ? rev : item[1]] as [string, string]
            ],
            [] as [string, string][]
          )
        );
      }
      return { result: 'ok', rev };
    } catch (e: any) {
      const {
        error: { error: err, reason }
      } = e ?? {};
      console.log(e, err, reason);
      if (reason.startsWith('Document update conflict')) {
        // updated from elsewhere.
        try {
          // the cached version is stale, so remove it.
          this.#cache.purge(url);
          // create a object that has only the properties that are different from the original.
          const myDiff = deepDiff(oldData, data);
          // now fetch the updated remote data.
          const remoteData = (await this.#http.get(
            url,
            httpCachedOptions
          )) as UserCard;
          // mergeDeep will overwrite the properties of the updated remote with the changes I extracted above.
          const remoteDiff = deepDiff(oldData, remoteData);
          const merged = mergeDeep(remoteData, myDiff);
          // this.#cache.get(url)?.set(mergeDeep(remoteData, myDiff)); // update the cached value with the merged data
          // inform the user
          this.#notifyDialog.show({
            title: 'Sorry, we detected a conflict',
            message:
              'we have merged in the upstream change, please verify your edit, and submit your changes again'
          });
          return { result: 'conflict', user: merged as UserCard };
        } catch {
          // cheap bail out, in real world apps, it should be discussed what needs to happen here...
          // will only happen when the re-fetch fails, but still...
          this.#notifyDialog.show({
            title: 'Sorry, but an unrecoverable error happened',
            message: 'please reload your app'
          });
        }
      }
      return { result: 'error', error: e };
    }
  };

  delete = async (user: UserCard): Promise<boolean> => {
    const id = user.id;
    // the rev is mandatory to delete a document in CouchDB
    const url = this.idUrl(id) + `?rev=${user._rev}`;
    try {
      await this.#http.delete(url, httpCachedOptions);
    } catch (e: any) {
      const {
        error: { error: err, reason }
      } = e ?? {};
      if (err === 'not_found' && reason === 'deleted') {
        console.log('already deleted, ignore this log');
      } else {
        this.#cache.purge(url); // remove the cached version, it is stale.
        this.#notifyDialog.show({
          title: 'The data was updated',
          message:
            'There was an update on the data you tried to delete. I have loaded the update into the view. Review, and try to delete again if still needed.'
        });
        const { _rev } = await this.#http.get(url, httpCachedOptions);
        // update the rev in the list so related components can decide to reload.
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
    await goAddData();
    const url = `${this.baseUrl}`;
    return this.#http.get(url, httpCachedOptions);
  };
}
