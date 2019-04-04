import { take, map, tap, first } from 'rxjs/operators';
import { Subject, ReplaySubject, BehaviorSubject } from 'rxjs';

/**
 * Function that takes a state subject and returns a method for your component
 * that allows you to set an individual property on the state observable
 */
export function createSetStateMethod<T>(
  state$: Subject<T> | ReplaySubject<T> | BehaviorSubject<T>
) {
  /**
   * A state helper method that allows you to easily update the state with
   */
  return function setState<K extends keyof T>(prop: K, newValue: T[K]) {
    return state$
      .pipe(
        take(1), // Only update once!
        map<T, T>(
          (currentState: any) => ({ ...currentState, [prop]: newValue } as T)
        ), // insert the state.
        tap(newState => state$.next(newState)) // push the update to the view.
      )
      .toPromise(); //return a promise with handled state, normally unused.
  };
}
