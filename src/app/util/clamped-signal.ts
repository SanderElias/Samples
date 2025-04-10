import { signal, type CreateSignalOptions, type WritableSignal } from '@angular/core';

interface BaseOptions<T> {
  value: T;
  min: T;
  max: T;
  createSignalOptions?: CreateSignalOptions<T | undefined>;
}

interface ClampedSignalOptions<T> extends BaseOptions<T> {
  undefinedWhenOutOfBounds?: false;
}
interface ClampedSignalOptionsWithUndefined<T> extends BaseOptions<T> {
  undefinedWhenOutOfBounds: true;
}

type AllClampedSignalOptions<T> = ClampedSignalOptionsWithUndefined<T> | ClampedSignalOptions<T>;

export { clampedSignal };

/**
 * @description creates a signal that clamps the value between min and max (including min and max!)
 *              NOTE: when the value starts out of bounds, it will be set to undefined(ignoring the type!)
 * @template T the type of the value
 * @param {ClampedSignalOptions<T>} { value, min, max, options }
 * @param {boolean} [undefinedWhenOutOfBounds=false] if true, the signal will return undefined when the value is out of bounds
 */

function clampedSignal<T>({ value, min, max, createSignalOptions }: ClampedSignalOptions<T>): WritableSignal<T>;
function clampedSignal<T>({
  value,
  min,
  max,
  createSignalOptions,
  undefinedWhenOutOfBounds,
}: ClampedSignalOptionsWithUndefined<T>): WritableSignal<T | undefined>;
function clampedSignal<T>({
  value,
  min,
  max,
  createSignalOptions,
  undefinedWhenOutOfBounds,
}: AllClampedSignalOptions<T>): WritableSignal<T | undefined> {
  const state = signal(value, createSignalOptions) as WritableSignal<T | undefined>;
  const orgSet = state.set;

  return Object.assign(state, {
    set: (val: T) => {
      if (val === undefined || val === null) {
        return;
      }
      if (min <= val && val <= max) {
        orgSet(val);
      } else if (undefinedWhenOutOfBounds) {
        orgSet(undefined);
      }
    },
    update: (fn: (val: T | undefined) => T | undefined) => orgSet(fn(state())),
  });
}

const t = clampedSignal({ value: 5, min: 0, max: 10, undefinedWhenOutOfBounds: true });
t.set(11);
console.log(t());
t.set(5);
console.log(t());
