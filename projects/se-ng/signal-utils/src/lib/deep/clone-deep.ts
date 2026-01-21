/* eslint-disable array-callback-return */
/* eslint-disable complexity */

import { isDate } from '../guards/is-date';

/**
 * creates a deep clone of a value.
 * recursively clones all properties of an object, including nested objects and arrays.
 * handles circular references, dates, sets, maps, and regular expressions.
 * Makes sure there are no references to the original object.
 * @param {T} value any value
 * @returns {*} deep clone of the value
 */
type CloneDeep = <T>(value: T) => T;
// eslint-disable-next-line @typescript-eslint/naming-convention
export const cloneDeep: CloneDeep = <T>(value: T, existingClones = new Map()): T => {
  if (value === null || typeof value !== 'object') {
    return value;
  }
  if (isDate(value)) {
    return new Date(value.getTime()) as unknown as T;
  }
  if (existingClones.has(value)) {
    // this is here to handle circular references
    return existingClones.get(value) as T;
  }
  // @ts-expect-error - we know the second argument is there, its just not made public.
  const deepClone = <X>(x: X): X => cloneDeep(x, existingClones);
  if (value instanceof RegExp) {
    const clone = new RegExp(value.source, value.flags);
    clone.lastIndex = value.lastIndex;
    existingClones.set(value, clone);

    return clone as unknown as T;
  }
  if (value instanceof Set) {
    const clone = new Set();
    existingClones.set(value, clone);
    [...value].forEach(val => clone.add(deepClone(val)));

    return clone as unknown as T;
  }
  if (value instanceof Map) {
    const clone = new Map();
    existingClones.set(value, clone);
    [...value.entries()].forEach(val => clone.set(deepClone(val[0]), deepClone(val[1])));

    return clone as unknown as T;
  }
  if (Array.isArray(value)) {
    const clone = new Array(value.length);
    existingClones.set(value, clone);
    value.forEach((val, i) => (clone[i] = deepClone(val)));

    return clone as unknown as T;
  }
  const clone = { ...value }; // shallow copy
  existingClones.set(value, clone);

  for (const [key, val] of Object.entries(clone)) {
    if (val !== null && typeof val === 'object') {
      clone[key] = deepClone(val); // deep copy for objects
    }
  }

  return clone;
};