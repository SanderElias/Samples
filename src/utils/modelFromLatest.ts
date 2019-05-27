import { Observable, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';

export function modelFromLatest<T>(vmBase: {[P in keyof T]: Observable<T[P]>}): Observable<T> {
  return combineLatest(Object.values(vmBase)).pipe(
    map(values =>
      Object.keys(vmBase).reduce(
        (vm, key, i) => {
          vm[key] = values[i];
          return vm;
        },
        {} as T
      )
    )
  );
}


const demo$ = modelFromLatest({
  one: of(1),
  two: of('jj'),
  sub: modelFromLatest({
    tree: of(false)
  })
})
