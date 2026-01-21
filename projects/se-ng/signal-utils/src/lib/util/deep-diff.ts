import { flattenRecord } from './flatten-record';
import { unFlattenRecord } from './un-flattenRecord';

/**
 * Compute a patch object that contains only the keys whose values differ
 * between `a` and `b`. The returned patch is reconstructed so it can be
 * applied to `a` to obtain `b`-like values for changed fields.
 *
 * Values from `b` take precedence; if `b` contains an
 * explicit `undefined` the current implementation will fall back
 * to `a`'s value (`b[key] ?? a[key]`).
 *
 * Example:
 * ```ts
 * const a = { user: { name: 'Alice', age: 30 }, tags: ['x'] };
 * const b = { user: { name: 'Alice', age: 31 }, tags: ['x', 'y'] };
 * deepDiff(a, b); // -> { user: { age: 31 }, tags: ['x', 'y'] }
 * ```
 *
 * @param a Base object
 * @param b Object to diff against `a`
 * @returns Patch object containing only changed keys
 */
export const deepDiff = <T extends {}>(a: T, b: T) => {
  const aFlat = flattenRecord(a as any);
  const bFlat = flattenRecord(b as any);
  const diff: Record<string, unknown> = {};
  for (const key in aFlat) {
    if (aFlat[key] !== bFlat[key]) {
      // use b's value if present, otherwise fall back to a's value
      diff[key] = bFlat[key] ?? aFlat[key];
    }
  }
  for (const key in bFlat) {
    if (!(key in aFlat)) {
      diff[key] = bFlat[key];
    }
  }
  return unFlattenRecord(diff);
};
