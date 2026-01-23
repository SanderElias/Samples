/**
 * Ensure a value is defined (not `undefined`).
 *
 * Throws an Error with the provided message when the value is `undefined`.
 * This is useful in places where a value that may be optional is required at
 * runtime and you want a clear failure instead of proceeding with `undefined`.
 *
 * @example
 * ```ts
 * const maybe = Math.random() > 0.5 ? 1 : undefined;
 * const value = assertDefined(maybe, 'missing value'); // throws when maybe is undefined
 * ```
 *
 * @param value - The value to assert as defined
 * @param message - Error message used when the value is `undefined`
 * @returns The original value (narrowed to exclude `undefined`)
 */
export function assertDefined<T>(value: T | undefined, message: string): T {
  if (value === undefined) {
    throw new Error(message);
  }
  return value;
}
