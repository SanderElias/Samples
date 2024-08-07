import { BehaviorSubject, ReplaySubject, firstValueFrom, map, tap } from 'rxjs';

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
    return firstValueFrom(
      stateSubject.pipe(
        map(currentState => {
          if (typeof prop === 'string') {
            return { ...currentState, [prop]: newValue };
          }
          if (typeof prop === 'object') {
            return { ...currentState, ...prop };
          }
          throw new Error('Property needs to be a string or an object');
        }), // insert the state.
        tap(newState => stateSubject.next(newState)) // push the update to the view.
      )
    );
  }
  return setState;
}
