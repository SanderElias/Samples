/* eslint-disable no-useless-escape */

import { isIntegerString } from './is-integer-string';

/**
 * takes a string, and a value, and returns an object with the value at the path
 *
 * @param path a string in the format like `a.b.c` or `a[0].b[1].c`
 * @param value optional, can be any value
 * @returns an object with the value at the path. `a.b.c` will return `{ a: { b: { c: value } } }`
 */
export * from '../path/obj-from-path';
