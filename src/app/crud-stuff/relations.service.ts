import { httpResource, type HttpResourceRef } from '@angular/common/http';
import { effect, inject, Injectable, signal, untracked, Signal } from '@angular/core';
import { debouncedComputed, deepEqual, HttpActionClient, mergeDeep } from '@se-ng/signal-utils';
import { userCard, type UserCard } from '../generic-services/address.service';
import { injectCachedHttpResource } from './utils/inject-cached-httpresource';
import { NotifyDialogService } from './notify-dialog/notify-dialog.service';
import { deepDiff } from './utils/deep-diff';

const sortFields = ['name', 'username', 'email'] as const;
export type SortField = (typeof sortFields)[number];

const base = "https://couchdb.localhost"

/**
 * this is how you do professional security!
 * copy this pattern, and you will get raise for sure ;-p
 */
const Authorization = `Basic ${btoa('admin:password')}`; // Not secure, but this is a demo, so we don't care.
const headers = {
  Authorization,
  'Content-Type': 'application/json'
};
const httpOptions = { headers };

// note: not injected in root, it is supposed to be provided in the route/component that holds the component-tree that uses it.
@Injectable()
export class RelationsService {
  baseUrl = `${base}/relations` as const;
  // HttpActionClient is a wrapper around HttpClient that allows to use promises over observables.
  // also, it exposes a busy indicator I'm not( (yet) using in this sample.)
  #http = inject(HttpActionClient);
  #notifyDialog = inject(NotifyDialogService);
  // this cache has the same lifetime as the service, so it will be cleared when the service is destroyed.
  #cache = new Map<string, HttpResourceRef<UserCard | Partial<UserCard>>>();

  filter = signal('');
  #filter = debouncedComputed(() => `(?i)${this.filter()}`, { delay: 250 }); //debounce and wrap it inside an couchDB regex.
  #refresh = signal(0);
  sort = signal<SortField>('name');
  order = signal<'asc' | 'desc'>('asc');

  #listRes = httpResource<string[]>(
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
        fields: ['id'],
        sort: [{ [this.sort()]: this.order() }],
        limit: 15
      },
      headers
    }),
    {
      defaultValue: [],
      // unwrap the CouchDB response to get the list of ids.
      parse: (response: any) => (response?.docs ?? []).map((i: { id: string }) => i.id)
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
        await createIndexes().catch(e => console.error('Error creating index', e));
        this.#listRes.reload(); // reload the list after creating the index.
      } catch (e) {
        console.error('Error creating index', e);
      }
    }
    if (reason.startsWith('Database does not exist')) {
      console.error('Database not found, creating it');
      try {
        await untracked(async () => await this.#http.put(this.baseUrl, {}, httpOptions));
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

  create = async (data: UserCard) => {
    const url = `${this.baseUrl}/${data.id}`;
    try {
      // await firstValueFrom(this.#http.post(url, data));
      await this.#http.put(url, data, httpOptions);
      this.#list.update(oldList => [data.id, ...oldList].splice(0, 50));
      return true;
    } catch (e) {
      console.error('Error creating user', e);
      return false;
    }
  };

  info = async () => {
    const url = `${this.baseUrl} `;
    return this.#http.get(url, httpOptions);
  }



  // I'm using a a helper to create the read in a cached version.
  // it returns (id: Signal<string>) => Signal<HttpResourceRef<UserCard | undefined>
  read = injectCachedHttpResource(this.baseUrl, this.#cache, {
    headers
  });
  // This is the exact same thing, but without the cache.
  uncachedRead = (id: Signal<string>, options: Record<string, unknown> = { headers }) =>
    httpResource<UserCard | Partial<UserCard>>(() => ({ url: `${this.baseUrl}/${id()}`, ...options }), {
      defaultValue: { id: id() } as unknown as Partial<UserCard>
    });

  update = async (data: UserCard) => {
    const id = data.id;
    const url = `${this.baseUrl}/${id}`;
    if (this.#cache.has(url) && deepEqual(this.#cache.get(url)?.value(), data)) {
      // no changes to the data, so we don't need to update the server.
      return true;
    }
    try {
      const { rev } = await this.#http.put<CouchUpdate>(url, data, httpOptions);
      if (this.#cache.has(url)) {
        const oldData = this.#cache.get(url)?.value()!;
        if (oldData[this.sort()] !== data[this.sort()]!) {
          console.log(`sort field changed from ${oldData[this.sort()]} to ${data[this.sort()]}`);
          // if the sort field has changed, we need to update the list.
          this.#refresh.update(old => old + 1);
        }
        // update the cache with the new data, and the new revision.
        this.#cache.get(url)?.update(oldData => ({ ...data, _rev: rev }));
      } else {
        console.log('no cache for', url, this.#cache);
        // this should not happen, but just in case.
      }
      return true;
    } catch (e: any) {
      const {
        error: { error: err, reason }
      } = e ?? {};
      console.log(e, err, reason);
      if (reason.startsWith('Document update conflict')) {
        // updated from elsewhere.
        try {
          // create a object that has only the properties that are different from the original.
          const myDiff = deepDiff(this.#cache.get(url)?.value()!, data);
          const request = await fetch(url, { headers });
          const remoteData = await request.json();
          // mergeDeep will overwrite the properties of the updated remote with the changes I extracted above.
          this.#cache.get(url)?.set(mergeDeep(remoteData, myDiff)); // update the cached value with the merged data
          // inform the user
          this.#notifyDialog.show({
            title: 'Sorry, we detected a conflict',
            message: 'we have merged in the upstream change, please verify your edit, and submit your changes again'
          });
        } catch {
          // cheap bail out, in real world apps, it should be discussed what needs to happen here...
          this.#notifyDialog.show({
            title: 'Sorry, but an unrecoverable error happened',
            message: 'please reload your app'
          });
        }
      }
      return false;
    }
  };

  delete = async (user: UserCard) => {
    const id = user.id;
    const rev = (user as any)._rev;
    const url = `${this.baseUrl}/${id}`;
    try {
      // await firstValueFrom(this.#http.delete(url));
      await this.#http.delete(url + `?rev=${rev}`, httpOptions);
    } catch (e: any) {
      const {
        error: { error: err, reason }
      } = e ?? {};
      console.log(e, err, reason);
      if (err === 'not_found' && reason === 'deleted') {
        console.log('already deleted, ignore this log');
      } else {
        this.#notifyDialog.show({
          title: 'The data was updated',
          message:
            'There was an update on the data you tried to delete. I have loaded the update into the view. Review, and try to delete again if still needed.'
        });
        this.#cache.get(url)?.reload();
        return false;
      }
    }
    this.#list.update(oldList => oldList.filter(i => i !== id));
    return true;
  };
}

// a couple of helper functions to create the database,indexes and add some data to it.

async function goAddData() {
  const fakerModule = import('@faker-js/faker');
  const module = await fakerModule;
  const url = `${base}/relations/`;
  for (let i = 0; i <= 250000; i += 1) {
    const relation = await userCard(module.faker);
    const res = await fetch(`${url}/${relation.id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(relation)
    });
  }
}

async function createIndexes() {
  await createIndex('name');
  await createIndex('username');
  await createIndex('email');
  console.log('Indexes created');
}

async function createIndex(fieldName: SortField) {
  const url = `${base}/relations/_index`;
  const body = {
    index: { fields: [fieldName] },
    name: fieldName,
    type: 'json',
    ddoc: 'fieldIndex-' + fieldName
  };
  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    throw new Error(`Error creating index: ${res.statusText}`);
  }
  const data = await res.json();
  console.log('Index created', data);
  return data;
}

export interface CouchUpdate {
  ok: boolean;
  id: string;
  rev: string;
}
