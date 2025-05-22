import { inject, Injector, resource, type Signal } from '@angular/core';

/**
 * Helper function that uses an cache to keep fetched data.
 * @param baseUrl
 * @param cache
 * @returns
 */
export function injectCachedResource<T>(baseUrl: string, cache = new Map<string, T>()) {
  const injector = inject(Injector);
  return (id: Signal<string>) => {
    const res = resource({
      params: () => id() || '-1', // change empty string, or undefined to non-existing id
      loader: async ({ params: id, abortSignal }) => {
        if (id === '-1') {
          return undefined;
        }
        const url = `${baseUrl}/${id}`;
        if (!cache.has(url)) {
          try {
            const res = await fetch(url, { signal: abortSignal });
            if (!res.ok) {
              throw new Error(`Failed to load user's data, ${res.status} ${res.statusText}`);
            }
            const data: T = await res.json();
            cache.set(id, data);
          } finally {
            // if the request was aborted, we don't want to cache the result
            if (abortSignal.aborted) {
              return undefined;
            }
          }
        }
        return cache.get(url);
      },
      injector
    });

    return res;
  };
}
