import { isObject } from '@se-ng/signal-utils';

/**
 * Flatten a nested object (and any nested arrays) into a single-level record
 * using dot-separated paths as keys.
 *
 * Example:
 * ```ts
 * const out = flattenRecord({ a: { b: 1 }, c: [2, { d: 3 }] });
 * ```
 * Output:
 *  { 'a.b': 1,
 *    'c.0': 2,
 *    'c.1.d': 3
 *  }
 *
 * Circular handling:
 * - By default the function will **throw** when it encounters a circular reference.
 * - You can set `{ onCircular: 'mark' }` to mark circular references with a
 *   sentinel value (default is `"[Circular]"`). Use `marker` to set a custom
 *   sentinel: `{ onCircular: 'mark', marker: 'CIRCLED' }`.
 *
 * @param r The input record to flatten
 * @param options Optional configuration object. Supported: `{ onCircular?: 'mark'|'throw', marker?: any }`
 * @returns A flat record where keys are dot-separated paths
 *
 * Note: This implementation mutates a single accumulator object to avoid
 * creating many intermediate objects and dampen the performance hit
 * on large inputs.
 */
export function flattenRecord(
  r: Record<string, any>,
  options?: { onCircular?: 'mark' | 'throw'; marker?: any }
): Record<string, any> {
  const onCircular = options?.onCircular ?? 'throw';
  const marker = options?.marker ?? '[Circular]';
  return _flattenRecord(r, '', undefined, onCircular, marker);
}

function _flattenRecord(
  r: Record<string, any>,
  prefix = '',
  ancestors?: WeakSet<object>,
  onCircular: 'mark' | 'throw' = 'throw',
  marker: any = '[Circular]'
): Record<string, any> {
  const acc: Record<string, any> = {};
  ancestors ??= new WeakSet<object>();
  if (ancestors.has(r as object)) {
    if (onCircular === 'throw') throw new Error('Circular reference detected');
    return acc; // already in ancestry -> circular
  }
  ancestors.add(r as object);

  for (const [objectKey, value] of Object.entries(r)) {
    const key = `${prefix}${objectKey}`;

    if (
      (isObject(value) || Array.isArray(value)) &&
      ancestors.has(value as object)
    ) {
      if (onCircular === 'throw')
        throw new Error(`Circular reference detected at key ${key}`);
      acc[key] = marker;
      continue;
    }

    if (isObject(value)) {
      Object.assign(
        acc,
        _flattenRecord(value, `${key}.`, ancestors, onCircular, marker)
      );
      continue;
    }
    if (Array.isArray(value)) {
      Object.assign(
        acc,
        _flattenArray(value, `${key}.`, ancestors, onCircular, marker)
      );
      continue;
    }
    acc[key] = value;
  }

  ancestors.delete(r as object);
  return acc;
}

/**
 * Flatten an array into a flat record using numeric indices as path segments.
 * Nested objects and nested arrays are handled recursively. Circular references
 * within the currently processed ancestry are detected and either marked as
 * `"[Circular]"` or cause an Error depending on the public `onCircular` option.
 *
 * @param a The array to flatten
 * @param prefix Optional prefix applied to all generated keys (default is '')
 * @param ancestors Internal WeakSet tracking ancestors to detect circular refs
 * @param onCircular Internal option controlling circular behavior ('mark'|'throw')
 * @returns A flat record where keys are dot-separated paths including indices
 */
function _flattenArray(
  a: any[],
  prefix = '',
  ancestors?: WeakSet<object>,
  onCircular: 'mark' | 'throw' = 'throw',
  marker: any = '[Circular]'
): Record<string, any> {
  const acc: Record<string, any> = {};
  ancestors ??= new WeakSet<object>();
  if (ancestors.has(a as object)) {
    if (onCircular === 'throw') throw new Error('Circular reference detected');
    return acc;
  }
  ancestors.add(a as object);

  for (let i = 0; i < a.length; i++) {
    const value = a[i];
    const key = `${prefix}${i}`;

    if (
      (isObject(value) || Array.isArray(value)) &&
      ancestors.has(value as object)
    ) {
      if (onCircular === 'throw')
        throw new Error(`Circular reference detected at key ${key}`);
      acc[key] = marker;
      continue;
    }

    if (isObject(value)) {
      Object.assign(
        acc,
        _flattenRecord(value, `${key}.`, ancestors, onCircular, marker)
      );
      continue;
    }
    if (Array.isArray(value)) {
      Object.assign(
        acc,
        _flattenArray(value, `${key}.`, ancestors, onCircular, marker)
      );
      continue;
    }
    acc[key] = value;
  }

  ancestors.delete(a as object);
  return acc;
}

/* c8 ignore start */
// Test-only exports: expose internal helpers under `flattenRecord.__test` when
// running under the test environment so tests can exercise edge cases without
// leaking implementation details in production.
const _isTestEnv =
  typeof process !== 'undefined' &&
  (process.env?.NODE_ENV === 'test' ||
    process.env?.VITEST === 'true' ||
    process.env?.VITEST === '1' ||
    typeof (globalThis as any).__vitest !== 'undefined');
if (_isTestEnv) {
  (flattenRecord as any).__test = { _flattenRecord, _flattenArray };
}
/* c8 ignore stop */
