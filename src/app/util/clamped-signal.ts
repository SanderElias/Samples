import { signal, type CreateSignalOptions, type WritableSignal } from '@angular/core';

interface ClampedSignalOptions<T> {
  value: T;
  min: T;
  max: T;
  options?: CreateSignalOptions<T | undefined>;
}

/**
 * @description creates a signal that clamps the value between min and max (including min and max!)
 *              NOTE: it doesn't throw an error if the value is out of bounds, it assigns undefined instead
 * @template T the type of the value
 * @param {ClampedSignalOptions<T>} { value, min, max, options }
 * @returns {*}  {WritableSignal<T>}
 */
function clampedSignal<T>({ value, min, max, options }: ClampedSignalOptions<T>): WritableSignal<T | undefined> {
  const state = signal(value, options) as WritableSignal<T | undefined>;
  const orgSet = state.set;

  return Object.assign(state, {
    set: (val: T) => {
      if (val === undefined || val === null) {
        return;
      }
      if (min <= val && val <= max) {
        orgSet(val);
      } else {
        orgSet(undefined);
      }
    },
    update: (fn: (val: T | undefined) => T | undefined) => orgSet(fn(state())),
  });
}

const t = clampedSignal({ value: 5, min: 2, max: 10 });

if (t.error()) {
  console.error('error');
}
console.log(t()); // undefined
t.set(11);
console.log(t()); // undefined
