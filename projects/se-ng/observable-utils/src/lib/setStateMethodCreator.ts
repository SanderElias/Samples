import { take, map, tap, first } from 'rxjs/operators';
import { Subject, ReplaySubject, BehaviorSubject } from 'rxjs';

/**
 * Function that takes a state subject and returns a method for your component
 * that allows you to set an individual property on the state observable
 */
export function createSetStateMethod<T>(stateSubject: ReplaySubject<T> | BehaviorSubject<T>) {
  /**
   * A state helper method that allows you to easily update the state with
   */
  function setState(newState: Partial<T>): Promise<T>;
  function setState<K extends keyof T>(property: K, newValue: T[K]): Promise<T>;
  function setState<K extends keyof T>(prop: K | Partial<T>, newValue?: T[K]): Promise<T> {
    return stateSubject
      .pipe(
        take(1), // Only update once!
        map(currentState => {
          if (typeof prop === 'string') {
            return { ...currentState, [prop]: newValue };
          }
          return { ...currentState, ...prop };
        }), // insert the state.
        tap(newState => stateSubject.next(newState)) // push the update to the view.
      )
      .toPromise(); // return a promise with handled state, normally unused.
  }
  return setState;
}
