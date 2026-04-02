import {
  isWritableSignal,
  linkedSignal,
  type WritableSignal
} from '@angular/core';
import { isObject } from '@se-ng/signal-utils';

/**
 * Creates a writable signal that proxies a single property of an object signal.
 *
 * Read behavior mirrors `linkedSignal`: the returned signal value is derived from
 * `source()[prop]` and recomputed whenever `source` changes.
 *
 * Write behavior is intentionally custom: `set` and `update` are forwarded to
 * `source.update(...)` by replacing only the proxied property while preserving the
 * rest of the object shape.
 *
 * @template T Source object type.
 * @template K Property key on the source object.
 * @param prop Property key to proxy.
 * @param source Writable object signal that owns the proxied property.
 * @returns A writable signal for `source()[prop]`.
 * @throws If `source` is not writable.
 * @throws If the current source value is not an object when read.
 */
export const proxySignal = <T extends object, K extends keyof T>(
  prop: K,
  source: WritableSignal<T>
): WritableSignal<T[K]> => {
  const result = linkedSignal(
    () => {
      const sourceValue = source();
      if (!isObject(sourceValue)) {
        throw new Error('Source signal must be an object');
      }
      return sourceValue[prop];
    },
    {
      debugName: `proxySignal(${String(prop)})`
    }
  );
  if (!isWritableSignal(source)) {
    throw new Error('Source signal must be writable');
  }

  const update = (newValue: T[K]) =>
    source.update(currentSource => ({
      ...((currentSource ?? {}) as T),
      [prop]: newValue
    }));

  result.set = newValue => {
    update(newValue);
  };

  result.update = fn => {
    update(fn(source()[prop]));
  };

  return result;
};
