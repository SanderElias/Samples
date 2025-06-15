import { flattenRecord } from './flatten-record';
import { unFlattenRecord } from './un-flattenRecord';

export const deepDiff = <T extends {}>(a: T, b: T) => {
const aFlat = flattenRecord(a);
  const bFlat = flattenRecord(b);
  const diff: Record<string, unknown> = {};
  for (const key in aFlat) {
    if (aFlat[key] !== bFlat[key])
      // note: think about this some more. Perhaps accepting the undefined is better?
      diff[key] = bFlat[key] ?? aFlat[key];
  }
  for (const key in bFlat) {
    if (!(key in aFlat)) {
      diff[key] = bFlat[key];
    }
  }
  return unFlattenRecord(diff);
};
