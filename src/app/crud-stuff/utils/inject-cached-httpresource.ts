import { httpResource, type HttpResourceRef } from '@angular/common/http';
import { computed, inject, Injector, type Signal, untracked } from '@angular/core';

export const injectCachedHttpResource = <T>(
  baseUrl: string,
  cache = new Map<string, HttpResourceRef<T | Partial<T>>>(),
  options: Record<string, unknown> = {}
) => {
  const injector = inject(Injector);
  const undefResource = httpResource<Partial<T>>(() => undefined, {
    injector,
    defaultValue: {} as Partial<T>
  });

  const getFromCache = (idVal: string | undefined) => {
    if (idVal === '' || idVal === undefined || idVal === '-1') {
      return undefResource;
    }
    const url = `${baseUrl}/${idVal}`;
    if (!cache.has(url)) {
      untracked(() => {
        const res: HttpResourceRef<T | Partial<T>> = httpResource(() => ({ url: `${baseUrl}/${idVal}`, ...options }), {
          injector,
          defaultValue: { id: idVal } as unknown as Partial<T>
        });
        cache.set(url, res);
      });
    }
    return cache.get(url)!;
  };

  return (idSignal: Signal<string | undefined>) => computed(() => getFromCache(idSignal()));
};
