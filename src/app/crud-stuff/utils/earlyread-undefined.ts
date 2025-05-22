import { Signal } from '@angular/core';

/**
 * utility function to read a signal and return undefined if the signal is not set yet.
 * This is useful to avoid the NG0950 error when reading a signal before it is set.
 * @param data
 * @returns
 */
export const earlyReadToUndefined = <T>(data: Signal<T>): T | undefined => {
  try {
    return data();
  } catch (err) {
    const e = err as Error;
    if (e?.message?.startsWith('NG0950')) {
      // NG0950: Cannot read from a signal before it is set
      // this is a known error, so we can just return undefined
      // https://angular.io/api/core/NG0950
      return undefined;
    }
    throw e; // rethrow, because we don't know what else to do
  }
};
