/**
 * Check whether a string represents a non-negative integer.
 *
 * Behavior:
 * - Accepts only digit characters [0-9]. Leading zeros are allowed (for example
 *   "0", "00", "01").
 * - Does not accept signs ("-1", "+1"), decimals ("1.0"), or exponential
 *   formats ("1e3").
 *
 * Example:
 * ```ts
 * isIntegerString('0'); // true
 * isIntegerString('01'); // true
 * isIntegerString('-1'); // false
 * isIntegerString('1.0'); // false
 * ```
 *
 * @param str The input string to test.
 * @returns True when the string contains only digits and represents a non-negative integer.
 */
export const isIntegerString = (str: string) => {
  return /^\d+$/.test(str);
};
