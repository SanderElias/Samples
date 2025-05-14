import { httpResource, type HttpRequest, type HttpResourceRef } from '@angular/common/http';
import { effect, inject, Injectable, signal, untracked } from '@angular/core';
import { debouncedComputed, deepEqual, HttpActionClient, mergeDeep } from '@se-ng/signal-utils';
import { userCard, type UserCard } from '../generic-services/address.service';
import { injectCachedHttpResource } from './inject-cached-httpresource';
import { NotifyDialogService } from './notify-dialog/notify-dialog.service';
import { deepDiff } from './utils/deep-diff';
import { generateRelation } from './generateRelation';
import test from 'node:test';

const sortFields = ['name', 'username', 'email'] as const;
export type SortField = (typeof sortFields)[number];

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
  baseUrl = 'http://127.0.0.1:5984/relations' as const;
  // HttpActionClient is a wrapper around HttpClient that allows to use promises over observables.
  // also, it exposes a busy indicator I'm not( (yet) using in this sample.)
  #http = inject(HttpActionClient);
  #nds = inject(NotifyDialogService);
  // this cache has the same lifetime as the service, so it will be cleared when the service is destroyed.
  #cache = new Map<string, HttpResourceRef<UserCard | undefined>>();

  filter = signal('');
  #filter = debouncedComputed(() => `(?i)${this.filter()}`, { delay: 250 }); //debounce and wrap it inside an couchDB regex.
  sort = signal<SortField>('name');
  order = signal<'asc' | 'desc'>('asc');
  refresh = signal(0);

  #listRes = httpResource<string[]>(
    () => ({
      url: `${this.baseUrl}/_find?v=${this.refresh()}`,
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
        limit: 10
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
  list = this.#list.asReadonly();
  listIsLoading = this.#listRes.isLoading;

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
    console.error('Error getting list', err);
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

  // I'm using a a helper to create the read in a cached version.
  // it returns (id: Signal<string>) => Signal<HttpResourceRef<UserCard | undefined>
  read = injectCachedHttpResource(this.baseUrl, this.#cache, {
    headers
  });

  update = async (data: UserCard) => {
    const id = data.id;
    const url = `${this.baseUrl}/${id}`;
    if (this.#cache.has(url) && deepEqual(this.#cache.get(url)?.value(), data)) {
      // no changes to the data, so we don't need to update the server.
      return true;
    }
    try {
      // await firstValueFrom(this.#http.put(url, data));
      await this.#http.put(url, data, httpOptions);
      if (this.#cache.has(url)) {
        const oldData = this.#cache.get(url)?.value()!;
        if (oldData[this.sort()] !== data[this.sort()]!) {
          console.log(`sort field changed from ${oldData[this.sort()]} to ${data[this.sort()]}`);
          // if the sort field has changed, we need to update the list.
          this.refresh.update(old => old + 1);
        }
        this.#cache.get(url)?.update(oldData => ({ ...data }));
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
          const myDiff = deepDiff(this.#cache.get(url)?.value()! as any, data as any);
          const request = await fetch(url, { headers });
          const remoteData = await request.json();
          this.#cache.get(url)?.set(mergeDeep(remoteData, myDiff)); // update the cached value with the merged data
          // inform the user
          this.#nds.show(
            'we have merged in the upstream change, please verify your edit, and submit your changes again',
            'Sorry, we detected a remote data change'
          );
        } catch {
          // cheap bail out, in real world apps, it should be discussed what needs to happen here...
          this.#nds.show('please reload your app', 'Sorry, but an unrecoverable error happend');
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
        this.#nds.show(
          'There was an update on the data you tried to delete. I have loaded the update into the view. review, and try to delete again if still needed.',
          'The data was updated'
        );
        this.#cache.get(url)?.reload();
        return false;
      }
    }
    this.#list.update(oldList => oldList.filter(i => i !== id));
    return true;
  };

  listenForDBChanges = () => {
    if (typeof window === 'undefined') return; // I don't want to this this server side.
    const url = new URL(this.baseUrl + '/_changes');
    url.username = 'admin';
    url.password = 'password';
    url.searchParams.set('feed', 'eventsource');
    url.searchParams.set('since', 'now');
    // url.searchParams.set('heartbeat', '10000');

    console.log('Listening for changes on', url.toString());

    const source = new EventSource(url.toString(), { withCredentials: true });
    source.addEventListener('error', (e: any) => {
      console.error('Error in event source', e);
      if (e.target.readyState === EventSource.CLOSED) {
        console.log('Event source closed');
        source.close();
      }
    });
    source.addEventListener(
      'heartbeat',
      function () {
        // this is just a ping to keep the connection alive.
        console.log('heartbeat');
      },
      false
    );
    source.addEventListener(
      'message',
      function (e: any) {
        console.log('Message from event source', e.data);
      },
      false
    );
  };

  constructor() {
    this.listenForDBChanges();
    // this is just me testing some stuf that has nothing to do with the app.
    // this.testLoadAll();
  }

  async testLoadAll() {
    if (typeof window === 'undefined') return; // I don't want to this this server side.
    try {
      const url = `${this.baseUrl}/_all_docs`;
      const body = {
        sort: [{ [this.sort()]: this.order() }],
        include_docs: false
      };
      const start = performance.now();
      const res = await this.#http.post(url, body, httpOptions);
      const end = performance.now();
      console.log('load all', end - start);
    } catch (e: any) {
      console.error('Error getting all docs');
      console.log(e);
    }
  }
}

async function goAddData() {
  const fakerModule = import('@faker-js/faker');
  const module = await fakerModule;
  const url = 'http://127.0.0.1:5984/relations/';
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
async function createIndex(fieldName: string = 'name') {
  const url = 'http://127.0.0.1:5984/relations/_index';
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
