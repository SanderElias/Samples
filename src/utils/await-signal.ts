import { effect, type Signal } from '@angular/core';

import { Deferred } from './deferred';
import { ca } from 'dist/samples/browser/chunk-XM75YRED';

export type Predicate<T> = (x: Partial<T>) => boolean;

export const awaitSignal = <T extends {}>(signal: Signal<T>, predicate: Predicate<T>): Promise<T> => {
  const deferred = new Deferred<T>();
  const effectRef = effect(
    () => {
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
    },
    { manualCleanup: true }
  );

  return deferred.promise;
};
