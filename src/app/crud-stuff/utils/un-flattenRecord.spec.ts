import { describe, it, expect } from 'vitest';
import { unFlattenRecord } from './un-flattenRecord';

describe('unFlattenRecord', () => {
  it('returns empty object for empty input', () => {
    expect(unFlattenRecord({})).toEqual({});
  });

  it('handles simple flat keys and nested objects', () => {
    const input = { a: 1, 'b.c': 2 };
    const out = unFlattenRecord(input);
    expect(out).toEqual({ a: 1, b: { c: 2 } });
  });

  it('creates arrays when numeric path segments are present', () => {
    const input = { 'a.0.b': 1, 'a.1.b': 2 };
    const out = unFlattenRecord(input) as { a: Array<any> };
    expect(Array.isArray(out.a)).toBe(true);
    expect(out.a.length).toBeGreaterThanOrEqual(2);
    expect(out.a[0]).toEqual({ b: 1 });
    expect(out.a[1]).toEqual({ b: 2 });
  });

  it('merges properties on the same array slot', () => {
    const input = { 'a.0.b': 1, 'a.0.c': 2 };
    const out = unFlattenRecord(input);
    expect(out).toEqual({ a: [{ b: 1, c: 2 }] });
  });

  it('handles nested arrays', () => {
    const input = { 'x.0.0': 5 };
    const out = unFlattenRecord(input);
    expect(out).toEqual({ x: [[5]] });
  });

  it('sets numeric slot as array element when last segment is numeric', () => {
    const input = { 'arr.0': 'x', 'arr.2': 'z' };
    const out = unFlattenRecord(input);
    expect(Array.isArray(out.arr)).toBe(true);
    expect(out.arr[0]).toBe('x');
    expect(out.arr[1]).toBeUndefined();
    expect(out.arr[2]).toBe('z');
  });

  it('preserves existing object/array if present (does not overwrite)', () => {
    const input: Record<string, any> = { 'a.0.b': 1, 'a.b': 2 };
    const out = unFlattenRecord(input) as any;
    // 'a' was created as array by first key; second key sets property 'b' on that array
    expect(Array.isArray(out.a)).toBe(true);
    expect(out.a[0]).toEqual({ b: 1 });
    // 'b' as property on the array should be set to 2
    expect(out.a.b).toBe(2);
  });

  it('handles complex mixed structures', () => {
    const input = {
      'user.name.first': 'A',
      'user.name.last': 'B',
      'user.emails.0': 'a@example.com',
      'user.emails.1': 'b@example.com',
      'settings.theme': 'dark',
    };
    const out = unFlattenRecord(input);
    expect(out).toEqual({
      user: { name: { first: 'A', last: 'B' }, emails: ['a@example.com', 'b@example.com'] },
      settings: { theme: 'dark' },
    });
  });
});
