import { isIntegerString } from '../../../../dist/se-ng/signal-utils';

export function unFlattenRecord(r: Record<string, any>): Record<string, any> {
  return Object.entries(r).reduce((acc, [k, v]) => {
    const path = k.split('.');
    const slot = path.pop()!;
    let obj = acc;
    for (let idx = 0; idx < path.length; idx++) {
      const key = path[idx];
      const nextKey = path[idx + 1] ?? slot;
      obj = obj[key] ??= isIntegerString(nextKey) ? [] : {};
    }
    obj[slot] = v;
    return acc;
  }, {});
}
