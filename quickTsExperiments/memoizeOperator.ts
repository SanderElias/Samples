import { from, mergeMap, Observable, of, OperatorFunction, pipe, shareReplay, switchMap, tap } from 'rxjs';

/**
 * 
 * @param prop the property to use as memoize key
 * @param getByProp a function that will fetch the data if not cached (returns an observable)
 * @returns Operator that memoizes the result of getByProp
 */
function MemoizeByProperty<T, K extends keyof T>(
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

const personGet = (id: number) => {
  /** fake it till you make it. just create a simple object we can use to demo */
  return of({ id, name: `name ${id}` }).pipe(
    /** log so we can see this is called */
    tap(p => console.log(`created ${p.id}`))
  );
}

/** create a stream with repeated "keys" do demo */
from([1, 2, 3, 1, 2, 3, 1, 2, 3]).pipe(
  /** note how your editor will check if the prop is part of the resulting objects. */
  MemoizeByProperty('id', personGet),
  tap(p => console.log(p.name)),
).subscribe()

