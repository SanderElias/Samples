import { from, mergeMap, Observable, of, OperatorFunction, pipe, shareReplay, tap } from 'rxjs';


function MemoizeByProperty<T, K extends keyof T>(
  prop: K,
  getByProp: (p: T[K]) => Observable<T>
): OperatorFunction<T[K], T> {
  const cache = new Map<T[K], Observable<T>>();
  return pipe(
    mergeMap((value: T[K]) => {
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
  return of({ id, name: `name ${id}` }).pipe(
    /** log so we can see this is called */
    tap(p => console.log(`created ${p.id}`))
  );
}

from([1, 2, 3, 1, 2, 3, 1, 2, 3]).pipe(
  MemoizeByProperty('id', personGet),
  tap(p => console.log(p.name)),
).subscribe()

