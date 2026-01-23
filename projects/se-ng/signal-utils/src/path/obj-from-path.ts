/* eslint-disable no-useless-escape */

import { isIntegerString } from '../guards/is-integer-string';
import { pathToArray } from './path-to-array';

/**
 * takes a string, and a value, and returns an object with the value at the path
 *
 * @param path a string in the format like `a.b.c` or `a[0].b[1].c`
 * @param value optional, can be any value
 * @returns an object with the value at the path. `a.b.c` will return `{ a: { b: { c: value } } }`
 */
export const objFromPath = <T>(path: string, value?: unknown): T => {
  const parts = pathToArray(path);
  if (!parts) {
    throw new Error(`[objFromPath] Invalid path: "${path}", can't be parsed.`);
  }
  return parts.reverse().reduce((acc, part) => {
    const index = parseInt(part, 10);
    // if the part is numeric (parseint returns 1 for `1maString`) its an array, otherwise a number
    if (!isIntegerString(part)) {
      return { [part]: acc };
    }
    const newArr: unknown[] = [];
    newArr[index] = acc;
    return newArr;
  }, value) as T;
};
