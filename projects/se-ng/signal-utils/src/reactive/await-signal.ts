import {
  effect,
  inject,
  Injector,
  runInInjectionContext,
} from '@angular/core';
import { Deferred } from '../async/deferred';

export type Predicate<T> = (source: T) => boolean;

/**
 * Returns an awaitSignal function that runs in the current injection context
 * useful when you need to use the awaitSignal inside methods of a component/service
 */
export const injectAwaitSignal = (injector = inject(Injector)) => {
  /**
   * Waits for a signal to satisfy a given predicate and returns a promise that resolves with the signal's value.
   *
   * @template T - The type of the signal's value.
   * @param {() => T} signal - The signal to watch.
   * @param {Predicate<T>} predicate - The predicate function to test the signal's value.
   * @param {AbortSignal} [abortSignal] - Optional AbortSignal to cancel the wait.
   * @returns {Promise<T>} A promise that resolves with the signal's value when the predicate is satisfied.
   */
  return <T>(signal: () => T, predicate: Predicate<T>, abortSignal?: AbortSignal): Promise<T> =>
    runInInjectionContext(injector, () => awaitSignal(signal, predicate, abortSignal));
};

/**
 * Waits for a signal to satisfy a given predicate and returns a promise that resolves with the signal's value.
 *
 * @template T - The type of the signal's value.
 * @param {() => T} signal - The signal to watch.
 * @param {Predicate<T>} predicate - The predicate function to test the signal's value.
 * @param {AbortSignal} [abortSignal] - Optional AbortSignal to cancel the wait.
 * @returns {Promise<T>} A promise that resolves with the signal's value when the predicate is satisfied.
 */
export const awaitSignal = <T>(
  signal: () => T,
  predicate: Predicate<T>,
  abortSignal?: AbortSignal
): Promise<T> => {
  const deferred = new Deferred<T>();

  const effectRef = effect(() => {
    try {
      const result = signal();
      if (predicate(result)) {
        deferred.resolve(result);
        effectRef.destroy(); // stop watching the signal, we are done!
      }
    } catch (e) {
      // NG0950: required input not yet set — wait for the next signal change
      if (e instanceof Error && e.message.startsWith('NG0950')) return;
      deferred.reject(e);
      effectRef.destroy();
    }
  }, { debugName: 'awaitSignal' });

  abortSignal?.addEventListener('abort', () => {
    deferred.reject(abortSignal.reason);
    effectRef.destroy();
  });

  return deferred.promise;
};
