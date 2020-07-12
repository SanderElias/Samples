import { Subject, ReplaySubject, BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';

/**
 * Function that takes a state observable and returns a method for your component
 * that allows you to get an individual property from the state. It will return
 * a promise that will resolve to the current property on the state
 */
export function createGetStateMethod<T>(state$: ReplaySubject<T> | BehaviorSubject<T>) {
  async function getState(): Promise<T>;
  async function getState<K extends keyof T>(prop: K): Promise<T[K]>;
  async function getState<K extends keyof T>(props: K[]): Promise<Pick<T, K>>;
  /** getState lets you pull an property out. use it in async functions */
  async function getState<K extends keyof T>(prop?: K | K[]): Promise<T[K] | T> {
    const state = await state$.pipe(first()).toPromise();
    if (prop) {
      if (Array.isArray(prop)) {
        return prop.reduce((result, prop) => ({ ...result, [prop]: state[prop] }), {} as T);
      }
      return state[prop];
    }
    return state;
  }
  return getState;
}
