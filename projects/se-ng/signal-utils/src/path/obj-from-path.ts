/* eslint-disable no-useless-escape */

import { isIntegerString } from '../guards/is-integer-string';

/**
 * takes a string, and a value, and returns an object with the value at the path
 *
 * @param path a string in the format like `a.b.c` or `a[0].b[1].c`
 * @param value optional, can be any value
 * @returns an object with the value at the path. `a.b.c` will return `{ a: { b: { c: value } } }`
 */
export const objFromPath = <T>(path: string, value?: unknown): T => {
  if (path.includes('..')) {
    throw new Error(`[objFromPath] Invalid path: "${path}", it contains two dots in a row`);
  }
  const parts = path
    .split(/[\[\]\.]/)
    .filter(p => p)
    .reverse();
  if (parts.some(p => p.trim() === '')) {
    throw new Error(`[objFromPath] Invalid path: "${path}", should not contain whitespace between the dots or brackets`);
  }
  if (parts.length === 0) {
    throw new Error(`[objFromPath] Invalid path: a path can not be empty`);
  }
  return parts.reduce((acc, part) => {
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
