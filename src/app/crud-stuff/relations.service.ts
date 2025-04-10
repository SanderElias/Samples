import { httpResource } from '@angular/common/http';
import {
  DestroyRef,
  inject,
  Injectable,
  Injector,
  linkedSignal,
  resource,
  type Signal,
  signal,
  type WritableSignal,
} from '@angular/core';
import { HttpActionClient } from '@se-ng/signal-utils';
import type { UserCard } from '../generic-services/address.service';

@Injectable()
export class RelationsService {
  baseUrl = 'http://localhost:3003/relations' as const;
  #http = inject(HttpActionClient);
  #cache = new Map<string, WritableSignal<UserCard | undefined>>();

  // JSON-server does not support reading just one field, so we have to read the whole object and then extract the field we want.
  // This is a workaround we just dump everything except from the ID.
  #listRes = httpResource<UserCard[]>(() => `${this.baseUrl}`);
  #list = linkedSignal({
    source: this.#listRes.value,
    computation: data => (data && data.map(d => d.id)) ?? [],
  });
  list = this.#list.asReadonly();

  create = async (data: UserCard) => {
    const url = `${this.baseUrl}`;
    try {
      // await firstValueFrom(this.#http.post(url, data));
      await this.#http.post(url, data);
      this.#list.update(oldList => [data.id, ...oldList]);
      return true;
    } catch {
      return false;
    }
  };

  // I'm using a a helper to create the read in a cached version.
  // it returns (id: Signal<string>) => WritableSignal<UserCard | undefined>
  read = injectCachedResource(this.baseUrl, this.#cache);

  update = async (data: UserCard) => {
    const id = data.id;
    const url = `${this.baseUrl}/${id}`;
    try {
      // await firstValueFrom(this.#http.put(url, data));
      await this.#http.put(url, data);
      if (this.#cache.has(id)) {
        this.#cache.get(id)?.update(oldData => ({ ...data }));
      }
      return true;
    } catch {
      return false;
    }
  };

  delete = async (id: string) => {
    const url = `${this.baseUrl}/${id}`;
    try {
      // await firstValueFrom(this.#http.delete(url));
      await this.#http.delete(url);
      this.#list.update(oldList => oldList.filter(i => i !== id));
      return true;
    } catch {
      return false;
    }
  };

}

/**
 * Helper function that uses an cache to keep fetched data.
 * @param baseUrl
 * @param cache
 * @returns
 */
function injectCachedResource<T>(baseUrl: string, cache = new Map<string, WritableSignal<T>>()) {
  const injector = inject(Injector);
  return (id: Signal<string>) => {
    // use a resource put a writableSignal with the value in the cache
    const res = resource({
      request: () => {
        // guard against unset input's
        try {
          const i = id();
          if (i) {
            // check for non-empty id's
            return i;
          }
        } catch (e) {}
        return undefined;
      },
      loader: async ({ request: id, abortSignal }) => {
        const url = `${baseUrl}/${id}`;
        if (!cache.has(id)) {
          const res = await fetch(url, { signal: abortSignal });
          if (!res.ok) {
            throw new Error(`Failed to load user's data, ${res.status} ${res.statusText}`);
          }
          cache.set(id, signal((await res.json()) as T));
        }
        return cache.get(id);
      },
      injector,
    });

    // return a linkedSignal to "unpack" the cached value
    // and return and return writable signal with an reactive copy of the data.
    return linkedSignal({
      source: () => res.value(),
      computation: data => (data ? (data() as T) : undefined),
    });
  };
}
