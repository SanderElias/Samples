import {
  effect,
  inject,
  Injector,
  runInInjectionContext,
  type Signal
} from '@angular/core';
import { Deferred } from './util/deferred';

export type Predicate<T> = (source: Partial<T> | T) => boolean;

/**
 * Returns an awaitSignal function that runs in the current injection context
 * useful when you need to use the awaitSignal inside methods of a component/service
 */
export const injectAwaitSignal = (injector = inject(Injector)) => {
  /**
   * Waits for a signal to satisfy a given predicate and returns a promise that resolves with the signal's value.
   *
   * @template T - The type of the signal's value.
   * @param {Signal<T>} signal - The signal to watch.
   * @param {Predicate<T>} predicate - The predicate function to test the signal's value.
   * @returns {Promise<T>} A promise that resolves with the signal's value when the predicate is satisfied.
   *
   * @throws {Error} If the signal is destroyed before the predicate is satisfied.
   */
  return <T>(signal: () => T, predicate: Predicate<T>): Promise<T> =>
    runInInjectionContext(injector, () => awaitSignal(signal, predicate));
};

/**
 * Waits for a signal to satisfy a given predicate and returns a promise that resolves with the signal's value.
 *
 * @template T - The type of the signal's value.
 * @param {Signal<T>} signal - The signal to watch.
 * @param {Predicate<T>} predicate - The predicate function to test the signal's value.
 * @returns {Promise<T>} A promise that resolves with the signal's value when the predicate is satisfied.
 *
 * @throws {Error} If the signal is destroyed before the predicate is satisfied.
 */
export const awaitSignal = <T>(
  signal: () => T,
  predicate: Predicate<T>
): Promise<T> => {
  const deferred = new Deferred<T>();
  const effectRef = effect(
    onCleanUp => {
      const result = signal();
      try {
        if (predicate(result)) {
          deferred.resolve(result);
          effectRef.destroy(); // stop watching the signal, we are done!
        }
      } catch (e) {
        deferred.reject(e);
        effectRef.destroy();
      }
      onCleanUp(() => {
        deferred.reject(
          new Error(
            '[awaitSignal] the provided signal was destroyed before the predicate was satisfied'
          )
        );
      });
    },
    { debugName: 'awaitSignal' }
  );

  return deferred.promise;
};
