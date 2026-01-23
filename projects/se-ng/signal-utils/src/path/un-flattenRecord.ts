import { isIntegerString } from '../guards/is-integer-string';
import { assertDefined } from '../helpers/assert-defined';
import { pathToArray } from './path-to-array';

export function unFlattenRecord(r: Record<string, any>): Record<string, any> {
  return Object.entries(r).reduce((acc, [k, v]) => {
    const path =  assertDefined(pathToArray(k), `[unFlattenRecord] Invalid path "${k}": found empty segments`);
    const slot = path.pop()!; // take the last element as the slot
    let obj = acc;
    for (let idx = 0; idx < path.length; idx++) {
      const key = path[idx]; // current key in the path
      const nextKey = path[idx + 1] ?? slot; // next key in the path or the slot if at the end
      obj = obj[key] ??= isIntegerString(nextKey) ? [] : {};
    }
    obj[slot] = v;
    return acc;
  }, {});
}


