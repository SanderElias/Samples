/* eslint-disable @typescript-eslint/naming-convention */
import { isDate } from './is-date';
import { isTemporal } from './is-temporal';

/**
 * Check if an value is an Object, and not a primitive, null, array or date/temporal object.
 * @param x any
 * @returns boolean
 */
export const isObject = <T>(x: T): x is { [K in keyof T]: T[K] } => {
  if (typeof x !== 'object') {
    // rules out all primitives,symbols, and functions
    return false;
  }
  if (x === null) {
    return false;
  }
  if (Array.isArray(x)) {
    return false;
  }
  if (isDate(x)) {
    // a date is an object, but for most purposes, it should be threated as a primitive
    return false;
  }
  if (isTemporal(x)) {
    // a Temporal object is an object, but for most purposes, it should be threated as a primitive
    return false;
  }

  return true;
};
