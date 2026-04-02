import { isObject } from '../guards/is-object';

/**
 * Ensure a value is an object (not a primitive, null, array, date, or Temporal).
 *
 * Throws an Error with the provided message when the value fails the `isObject`
 * check. Returns the value cast to `T` when it passes, so callers can use the
 * result directly without a separate type narrowing step.
 *
 * @example
 * ```ts
 * const raw: unknown = getConfig();
 * const config = assertObject<Config>(raw, 'config must be an object');
 * ```
 *
 * @param value - The value to assert as an object
 * @param message - Error message used when the assertion fails
 * @returns The original value cast to `T`
 */
export const assertObject = <T extends object>(
  value: unknown,
  message = 'Expected an object value'
): T => {
  if (!isObject(value)) {
    throw new Error(message);
  }
  return value as T;
};
