import { from, Observable, of, OperatorFunction, pipe, shareReplay, switchMap, tap } from 'rxjs';

/**
 * type helper to define the function that gets an observable from the property stream
 */
interface GetByProp<Object> {
  (p: unknown): Observable<Object>;
}

/**
 * @param getByProp a function that will fetch the data if not cached (returns an observable)
 * @returns Operator that memoizes the result of getByProp
 */
export function memoizeByProperty<Object>(
  getByProp: GetByProp<Object>
): OperatorFunction<unknown, Object> {
  const cache = new Map<unknown, Observable<Object>>();
  return handleCache(cache, getByProp);
}

export const clearCache = Symbol('clearCache');
const cacheAll = new Map<string, Map<unknown, unknown>>()

/**
 * Use an app-lifecycle cache to prevent unnecessary calls to the backend
 * @param cacheKey string the key to use to cache the result
 * @param getByProp function that will fetch the data if not cached (returns an observable)
 */
export function cacheByProperty<Object>(cacheKey: string, getByProp: GetByProp<Object>): OperatorFunction<unknown, Object>
/**
 * Clears the full cache, unless a cacheKey is provided
 * @param clearCache symbol the clearCache symbol, used to clear the cache
 * @param cacheKey string, optional, if provided only the cache for this key will be cleared
 */
export function cacheByProperty(clearCache: symbol, cacheKey?: string): void
export function cacheByProperty<Object>(
  cacheKey: string | symbol,
  getByProp: GetByProp<Object> | string
) {
  /** handle the symbol scenario */
  if (typeof cacheKey === 'symbol') {
    const cacheId = getByProp as string;
    if (cacheId !== undefined) {
      return cacheAll.clear();
    }
    return cacheAll.delete(cacheId);
  }

  /** handle normal flow */
  if (!cacheAll.has(cacheKey)) {
    cacheAll.set(cacheKey, new Map());
  }
  const cache = cacheAll.get(cacheKey) as Map<unknown, Observable<Object>>;
  return handleCache(cache, getByProp as GetByProp<Object>);
}

/**
 * extracted to helper function, as its the same for both cache and memoize
 */
function handleCache<Object>(cache: Map<unknown, Observable<Object>>, getByProp: GetByProp<Object>) {
  return pipe(
    switchMap((value: unknown) => {
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
  cacheByProperty("persons", personGet),
  tap(p => console.log(p.name)),
).subscribe()

from([1, 2, 3, 1, 2, 3]).pipe(
  cacheByProperty("persons", personGet),
  tap(p => console.log(p.name)),
).subscribe()

cacheByProperty(clearCache)

from([1, 2, 3, 1, 2, 3]).pipe(
  memoizeByProperty(personGet),
  tap(p => console.log('memo', p.name)),
).subscribe()

from([1, 2, 3, 1, 2, 3]).pipe(
  memoizeByProperty(personGet),
  tap(p => console.log("memo", p.name)),
).subscribe()


