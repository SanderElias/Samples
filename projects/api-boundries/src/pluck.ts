import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export function pluck<T, K extends keyof T>(prop: K): (source: Observable<T>) => Observable<T[K]> {
  return (source: Observable<T>): Observable<T[K]> => source.pipe(map(x => x[prop]), filter(x => !!x));
}
