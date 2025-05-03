import { httpResource, type HttpParamsOptions, type HttpResourceRef } from '@angular/common/http';
import { computed, inject, Injector, type Signal, untracked } from '@angular/core';

export const injectCachedHttpResource = <T>(
  baseUrl: string,
  cache = new Map<string, HttpResourceRef<T | undefined>>(),
  options: Record<string, unknown> = {}
) => {
  const injector = inject(Injector);
  const undefResource = httpResource<undefined>(() => undefined, {
    injector,
  });

  const getFromCache = (idVal: string | undefined) => {
    if (idVal === '' || idVal === undefined || idVal === '-1') {
      return undefResource;
    }
    const url = `${baseUrl}/${idVal}`;
    if (!cache.has(url)) {
      untracked(() => {
        const res: HttpResourceRef<T | undefined> = httpResource(
          { url: `${baseUrl}/${idVal}`, ...options },
          {
            injector,
          }
        );
        cache.set(url, res);
      });
    }
    return cache.get(url)!;
  };

  return (idSignal: Signal<string | undefined>) => computed(() => getFromCache(idSignal()));
};
