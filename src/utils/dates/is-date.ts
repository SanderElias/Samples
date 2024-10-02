// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isDate(date: any): date is Date {
  return typeof date?.getTime === 'function';
}
