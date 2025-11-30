import { effect, inject, Injector, linkedSignal,signal } from '@angular/core';

import { del,get, set } from './custom-idb-keyval';

/**
 * Creates a persistent signal backed by IndexedDB. When not using in injection context, you must provide the injector manually.
 * @param key The storage key.
 * @param initialValue The initial value for the signal.
 * @param injector Angular Injector to provide to the effect.
 * @returns The signal instance.
 */
export function persistentSignal<T>(key: string, initialValue: T, injector = inject(Injector)) {
  const result = signal(initialValue, {
    debugName: `Persisted ${key}`
  });
  // Load initial value from IndexedDB
  get(key)
    .then(value => {
      if (value !== undefined) {
        result.set(value);
      }
    })
    .catch(() => undefined); // ignore errors
  effect(
    async () => {
      const value = result();
      const oldValue = await get(key).catch(() => undefined); // ignore errors
      if (value === oldValue) return; // no change, skip update
      if (value !== undefined) {
        set(key, value).catch(() => undefined); // ignore errors
      } else {
        del(key).catch(() => undefined); // ignore errors
      }
    },
    { injector, debugName: `PersistEffect` }
  );
  return result;
}

export function persistentLinkedSignal<S, D>(
  storageKey: string,
  source: () => S,
  computation: (source: NoInfer<S>, previous?: { source: NoInfer<S>; value: NoInfer<D> } | undefined) => D
) {
  const result = linkedSignal<S, D>({
    source,
    computation: (source, previous) => {
      const newValue = computation(source, previous);
      if (newValue !== previous?.value && newValue !== undefined) {
        set(storageKey, newValue).catch(() => undefined); // ignore errors
      } else if (newValue === undefined) {
        del(storageKey).catch(() => undefined); // ignore errors
      }
      return newValue;
    }
    // debugName: `Persisted ${storageKey}`
  });
  // Load initial value from IndexedDB
  get(storageKey).then(value => {
    if (value !== undefined) {
      result.set(value);
    }
  });

  return result;
}
