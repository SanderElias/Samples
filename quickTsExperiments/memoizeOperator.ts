import { from, Observable, of, OperatorFunction, pipe, shareReplay, switchMap, tap } from 'rxjs';

/**
 * type helper to define the function that gets an observable with the property we want
 */
interface GetByProp<Object, Prop extends keyof Object> {
  (p: Object[Prop]): Observable<Object>;
}


/**
 *
 * @param prop the property to use as memoize key
 * @param getByProp a function that will fetch the data if not cached (returns an observable)
 * @returns Operator that memoizes the result of getByProp
 */
export function memoizeByProperty<Object, Property extends keyof Object>(
  prop: Property,
  getByProp: GetByProp<Object,Property>
): OperatorFunction<Object[Property], Object> {
  const cache = new Map<Object[Property], Observable<Object>>();
  return handleCache<Object, Property>(cache, getByProp);
}

export const clearCache = Symbol('clearCache');
const cacheAll = new Map<string, Map<unknown, unknown>>()

/**
 * Use an app-lifecycle cache to prevent unnecessary calls to the backend
 * @param cacheKey string the key to use to cache the result
 * @param prop K the property to use as memoize key
 * @param getByProp  (p:T[K]) => Observable<T> a function that will fetch the data if not cached (returns an observable)
 */
export function cacheByProperty<Object, Property extends keyof Object>(cacheKey: string, prop: Property, getByProp: GetByProp<Object,Property>): OperatorFunction<Object[Property], Object>
/**
 * Clears the full cache, unless a cacheKey is provided
 * @param clearCache symbol the clearCache symbol, used to clear the cache
 * @param cacheKey string, optional, if provided only the cache for this key will be cleared
 */
export function cacheByProperty(clearCache: symbol, cacheKey?: string): void
export function cacheByProperty<Object, Property extends keyof Object>(...args:
  [string, Property, (p: Object[Property]) => Observable<Object>] |
  [symbol, string?]
) {
  const [cacheKey, ...rest] = args;
  /** handle the symbol scenario */
  if (typeof cacheKey === 'symbol') {
    const [cacheId] = rest as [string];
    if (cacheId !== undefined) {
      cacheAll.clear();
    } else {
      cacheAll.delete(cacheId);
    }
    return;
  }

  /** handle normal flow */
  const [prop, getByProp] = rest as [Property, GetByProp<Object,Property>];
  if (!cacheAll.has(cacheKey)) {
    cacheAll.set(cacheKey, new Map());
  }
  const cache = cacheAll.get(cacheKey) as Map<Object[Property], Observable<Object>>;

  return handleCache<Object, Property>(cache, getByProp);;
}

/**
 * extracted to helper function, as its the same for both cache and memoize
 * @param cache
 * @param getByProp
 * @returns
 */
function handleCache<Object, Property extends keyof Object>(cache: Map<Object[Property], Observable<Object>>, getByProp: GetByProp<Object,Property>) {
  return pipe(
    switchMap((value: Object[Property]) => {
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


