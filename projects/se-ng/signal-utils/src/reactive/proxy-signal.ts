import {
  isWritableSignal,
  linkedSignal,
  type WritableSignal
} from '@angular/core';

import { assertObject } from '../helpers/assert-object';

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
 * @throws If the current source value is not an object.
 */
export const proxySignal = <T extends object, K extends keyof T>(
  prop: K,
  source: WritableSignal<T>
): WritableSignal<T[K]> => {
  if (!isWritableSignal(source)) {
    throw new Error('Source signal must be writable');
  }

  const proxy = linkedSignal(() => assertObject<T>(source(), 'Source signal must be an object')[prop], {
    debugName: `proxySignal(${String(prop)})`
  });

  // The linkedSignal computation is lazy — it won't re-run (and won't guard) until proxy() is read.
  // Without the assertObject here, a non-object source would silently spread as `{}`,
  // losing all sibling fields with no error thrown. So we guard eagerly in set and update too.
  proxy.set = newValue => {
    source.update(currentSource => ({
      ...assertObject<T>(currentSource, 'Source signal must be an object'),
      [prop]: newValue
    }));
  };

  proxy.update = fn => {
    source.update(currentSource => {
      const sourceValue = assertObject<T>(currentSource, 'Source signal must be an object');
      return {
        ...sourceValue,
        [prop]: fn(sourceValue[prop])
      };
    });
  };

  return proxy;
};
