/* eslint-disable array-callback-return */
/* eslint-disable complexity */

import { isDate } from '../dates/is-date';

/**
 * @description
 * @param {T} value any value
 * @returns {*} deep clone of the value
 */
type DeepClone = <T>(value: T) => T;
// eslint-disable-next-line @typescript-eslint/naming-convention
export const deepClone: DeepClone = <T>(value: T, existingClones = new Map()): T => {
  if (value === null || typeof value !== 'object') {
    return value;
  }
  if (isDate(value)) {
    return new Date(value.getTime()) as unknown as T;
  }
  if (existingClones.has(value)) {
    return existingClones.get(value) as T;
  }
  // @ts-expect-error - we know the second argument is there, its just not made public.
  const cloneObj = <X>(x: X): X => deepClone(x, existingClones);
  if (value instanceof RegExp) {
    const clone = new RegExp(value.source, value.flags);
    clone.lastIndex = value.lastIndex;
    existingClones.set(value, clone);

    return clone as unknown as T;
  }
  if (value instanceof Set) {
    const clone = new Set();
    existingClones.set(value, clone);
    [...value].forEach(val => clone.add(cloneObj(val)));

    return clone as unknown as T;
  }
  if (value instanceof Map) {
    const clone = new Map();
    existingClones.set(value, clone);
    [...value.entries()].forEach(val => clone.set(cloneObj(val[0]), cloneObj(val[1])));

    return clone as unknown as T;
  }
  if (Array.isArray(value)) {
    const clone = new Array(value.length);
    existingClones.set(value, clone);
    value.forEach((val, i) => (clone[i] = cloneObj(val)));

    return clone as unknown as T;
  }
  const clone = { ...value }; // shallow copy
  existingClones.set(value, clone);

  for (const [key, val] of Object.entries(clone)) {
    if (val !== null && typeof val === 'object') {
      clone[key] = cloneObj(val); // deep copy for objects
    }
  }

  return clone;
};
