import { Subject, ReplaySubject, BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';

/**
 * Function that takes a state observable and returns a method for your component
 * that allows you to get an individual property from the state. It will return
 * a promise that will resolve to the current property on the state
 */
export function createGetStateMethod<T>(
  state$:  ReplaySubject<T> | BehaviorSubject<T>
) {
  /** getState lets you pull an property out. use it in async functions */
  return async function getState<K extends keyof T>(prop: K): Promise<T[K]> {
    const state = await state$.pipe(first()).toPromise();
    return state[prop];
  };
}
