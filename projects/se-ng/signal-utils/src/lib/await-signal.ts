import { effect, Injector, linkedSignal, type Signal, inject } from '@angular/core';
import { Deferred } from './deferred';

export type Predicate<T> = (source: Partial<T> | T) => boolean;

export const injectAwaitSignal = function (): typeof awaitSignal {
  const injector = inject(Injector);

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
  const awaitSignal = <T>(signal: Signal<T>, predicate: Predicate<T>): Promise<T> => {
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
          // todo: decide if we want to keep this, or if we want to just resolve with undefined or even something else.
          deferred.reject(new Error('Signal was destroyed before the predicate was satisfied'));
        });
      },
      { injector, forceRoot: true, debugName: 'injectedAwaitSignal' }
    );

    return deferred.promise;
  };

  return awaitSignal;
};

export const awaitSignal = <T>(signal: Signal<T>, predicate: Predicate<T>): Promise<T> => {
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
        deferred.reject(new Error('Signal was destroyed before the predicate was satisfied'));
      });
    },
    { forceRoot: true, debugName: 'awaitSignal' }
  );

  return deferred.promise;
};
