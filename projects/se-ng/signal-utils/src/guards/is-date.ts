/**
 * Checks if the given parameter is a Date object.
 * also functions as a type guard
 * @param date parameter to check
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isDate(date: any): date is Date {
  return typeof date?.getMonth === 'function';
}
