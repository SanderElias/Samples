import { isObject } from './is-object';

// Minimal ambient declarations so TypeScript consumers don't need the
// Node.js type definitions just to compile this utility. These are
// intentionally small and only cover the properties used by the runtime
// detection logic in tests (`process.env` and `globalThis.__vitest`).
// This avoids pulling in `@types/node` in browser or library builds.
declare const process: { env?: { NODE_ENV?: string; VITEST?: string } } | undefined;
declare global {
  var __vitest: unknown;
}

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
