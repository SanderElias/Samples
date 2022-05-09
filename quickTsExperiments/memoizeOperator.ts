import { from, Observable, of, OperatorFunction, pipe, shareReplay, switchMap, tap } from 'rxjs';

/**
 *
 * @param prop the property to use as memoize key
 * @param getByProp a function that will fetch the data if not cached (returns an observable)
 * @returns Operator that memoizes the result of getByProp
 */
export function memoizeByProperty<T, K extends keyof T>(
  prop: K,
  getByProp: (p: T[K]) => Observable<T>
): OperatorFunction<T[K], T> {
  const cache = new Map<T[K], Observable<T>>();
  return pipe(
    switchMap((value: T[K]) => {
      if (!cache.has(value)) {
        cache.set(value, getByProp(value).pipe(
          shareReplay({ bufferSize: 1, refCount: true })
        ));
      }
      return cache.get(value);
    })
  );
}

export const clearCache = Symbol('clearCache');
const cacheAll = new Map<string, Map<unknown, unknown>>()

/**
 * Use an app-lifecycle cache to prevent unnecessary calls to the backend
 * @param cacheKey string the key to use to cache the result
 * @param prop K the property to use as memoize key
 * @param getByProp  (p:T[K]) => Observable<T> a function that will fetch the data if not cached (returns an observable)
 */
export function cacheByProperty<T, K extends keyof T>(cacheKey: string, prop: K, getByProp: (p: T[K]) => Observable<T>): OperatorFunction<T[K], T>
/**
 * Clears the full cache, unless a cacheKey is provided
 * @param clearCache symbol the clearCache symbol, used to clear the cache
 * @param cacheKey string, optional, if provided only the cache for this key will be cleared
 */
export function cacheByProperty(clearCache: symbol, cacheKey?: string): void
export function cacheByProperty<T, K extends keyof T>(...args:
  [string, K, (p: T[K]) => Observable<T>] |
  [symbol, string?]
) {
  const [cacheKey, ...rest] = args;
  if (typeof cacheKey === 'symbol') {
    const [cacheId] = rest as [string];
    if (cacheId !== undefined) {
      cacheAll.clear();
    } else {
      cacheAll.delete(cacheId);
    }
    return;
  }
  const [prop, getByProp] = rest as [K, (p: T[K]) => Observable<T>];

  if (!cacheAll.has(cacheKey)) {
    cacheAll.set(cacheKey, new Map());
  }
  const cache = cacheAll.get(cacheKey) as Map<T[K], Observable<T>>;
  return pipe(
    switchMap((value: T[K]) => {
      if (!cache.has(value)) {
        cache.set(value, getByProp(value).pipe(
          shareReplay({ bufferSize: 1, refCount: true })
        ));
      }
      return cache.get(value);
    })
  );
}

/**
 *  demo code after here
 */

const personGet = (id: number) => {
  /** fake it till you make it. just create a simple object we can use to demo */
  return of({ id, name: `name ${id}` }).pipe(
    /** log so we can see this is called */
    tap(p => console.log(`created ${p.id}`))
  );
}

/**
 * the "cache" version will only log the create once for both runs
 * the "memoize" version will log the create for each run
 */
from([1, 2, 3, 1, 2, 3]).pipe(
  /** note how your editor will check if the prop is part of the resulting objects. */
  cacheByProperty("persons", 'id', personGet),
  tap(p => console.log(p.name)),
).subscribe()

from([1, 2, 3, 1, 2, 3]).pipe(
  cacheByProperty("persons", 'id', personGet),
  tap(p => console.log(p.name)),
).subscribe()

cacheByProperty(clearCache)

from([1, 2, 3, 1, 2, 3]).pipe(
  memoizeByProperty('id', personGet),
  tap(p => console.log('memo', p.name)),
).subscribe()

from([1, 2, 3, 1, 2, 3]).pipe(
  memoizeByProperty('id', personGet),
  tap(p => console.log("memo", p.name)),
).subscribe()

