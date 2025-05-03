import { isObject } from '../../../../dist/se-ng/signal-utils';

export function flattenRecord(r: Record<string, any>, prefix = ''): Record<string, any> {
  return Object.entries(r).reduce((acc, [k, v]) => {
    if (isObject(v)) {
      return { ...acc, ...flattenRecord(v, `${prefix}${k}.`) };
    }
    if (Array.isArray(v)) {
      return { ...acc, ...flattenArray(v, `${prefix}${k}.`) };
    }
    return { ...acc, [`${prefix}${k}`]: v };
  }, {});
}
function flattenArray(a: any[], prefix = '') {
  return a.reduce((acc, v, i) => {
    if (isObject(v)) {
      return { ...acc, ...flattenRecord(v, `${prefix}${i}.`) };
    }
    if (Array.isArray(v)) {
      return { ...acc, ...flattenArray(v, `${prefix}${i}.`) };
    }
    return { ...acc, [`${prefix}${i}`]: v };
  }, {});
}
