import { describe, it, expect } from 'vitest';
import { deepEqual } from './deep-equal';

describe('deepEqual', () => {
  it('should return true for equal primitives', () => {
    expect(deepEqual(1, 1)).toBe(true);
    expect(deepEqual('a', 'a')).toBe(true);
    expect(deepEqual(true, true)).toBe(true);
    expect(deepEqual(null, null)).toBe(true);
    expect(deepEqual(undefined, undefined)).toBe(true);
    expect(deepEqual(NaN, NaN)).toBe(true);
  });

  it('should return false for different primitives', () => {
    expect(deepEqual(1, 2)).toBe(false);
    expect(deepEqual('a', 'b')).toBe(false);
    expect(deepEqual(true, false)).toBe(false);
    expect(deepEqual(null, undefined)).toBe(false);
  });

  it('should return true for equal arrays', () => {
    expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(deepEqual([], [])).toBe(true);
  });

  it('should return false for different arrays', () => {
    expect(deepEqual([1, 2], [1, 2, 3])).toBe(false);
    expect(deepEqual([1, 2, 3], [3, 2, 1])).toBe(false);
  });

  it('should return true for equal objects', () => {
    expect(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
    expect(deepEqual({}, {})).toBe(true);
  });

  it('should return false for different objects', () => {
    expect(deepEqual({ a: 1 }, { a: 2 })).toBe(false);
    expect(deepEqual({ a: 1 }, { b: 1 })).toBe(false);
  });

  it('should return true for equal nested objects', () => {
    expect(deepEqual({ a: { b: 2 } }, { a: { b: 2 } })).toBe(true);
  });

  it('should return false for different nested objects', () => {
    expect(deepEqual({ a: { b: 2 } }, { a: { b: 3 } })).toBe(false);
  });

  it('should return true for equal dates', () => {
    expect(deepEqual(new Date('2020-01-01'), new Date('2020-01-01'))).toBe(true);
  });

  it('should return false for different dates', () => {
    expect(deepEqual(new Date('2020-01-01'), new Date('2021-01-01'))).toBe(false);
  });

  it('should return true for equal maps', () => {
    const a = new Map([
      [1, 'a'],
      [2, 'b']
    ]);
    const b = new Map([
      [1, 'a'],
      [2, 'b']
    ]);
    expect(deepEqual(a, b)).toBe(true);
  });

  it('should return false for different maps', () => {
    const a = new Map([[1, 'a']]);
    const b = new Map([[2, 'b']]);
    expect(deepEqual(a, b)).toBe(false);
  });

  it('should return false for maps with object keys that are deep-equal but different references', () => {
    const keyA = { id: 1 };
    const keyB = { id: 1 };
    const a = new Map([[keyA, 'a']]);
    const b = new Map([[keyB, 'a']]);
    expect(deepEqual(a, b)).toBe(false);
  });

  it('should return false for maps with nested object values that differ', () => {
    const a = new Map([
      ['k1', { x: 1 }],
      ['k2', { y: 2 }]
    ]);
    const b = new Map([
      ['k1', { x: 1 }],
      ['k2', { y: 3 }]
    ]);
    expect(deepEqual(a, b)).toBe(false);
  });

  it('should return false for maps with different sizes', () => {
    const a = new Map([
      [1, 'a'],
      [2, 'b']
    ]);
    const b = new Map([[1, 'a']]);
    expect(deepEqual(a, b)).toBe(false);
  });

  it('should return true for equal sets', () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([1, 2, 3]);
    expect(deepEqual(a, b)).toBe(true);
  });

  it('should return false for different sets', () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([1, 2]);
    expect(deepEqual(a, b)).toBe(false);
  });

  it('should return false for sets with object values that are deep-equal but different references', () => {
    const valA = { id: 1 };
    const valB = { id: 1 };
    const a = new Set([valA]);
    const b = new Set([valB]);
    expect(deepEqual(a, b)).toBe(false);
  });

  it('should return true for equal typed arrays', () => {
    expect(deepEqual(new Uint8Array([1, 2]), new Uint8Array([1, 2]))).toBe(true);
  });

  it('should return false for different typed arrays', () => {
    expect(deepEqual(new Uint8Array([1, 2]), new Uint8Array([2, 1]))).toBe(false);
  });

  it('should return true for equal regexps', () => {
    expect(deepEqual(/abc/gi, /abc/gi)).toBe(true);
  });

  it('should return false for different regexps', () => {
    expect(deepEqual(/abc/g, /abc/i)).toBe(false);
    expect(deepEqual(/abc/g, /def/g)).toBe(false);
  });

  it('should return false for objects with different constructors', () => {
    class A { x = 1; }
    class B { x = 1; }
    expect(deepEqual(new A(), new B())).toBe(false);
  });

  it('should return false for array vs object', () => {
    expect(deepEqual([], {})).toBe(false);
  });

  it('should return false for null vs object', () => {
    expect(deepEqual(null, {})).toBe(false);
    expect(deepEqual({}, null)).toBe(false);
  });

  it('should return false for objects with extra keys', () => {
    expect(deepEqual({ a: 1, b: 2 }, { a: 1 })).toBe(false);
    expect(deepEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false);
  });

  it('should return false for objects with missing keys', () => {
    expect(deepEqual({ a: 1 }, {})).toBe(false);
    expect(deepEqual({}, { a: 1 })).toBe(false);
  });

  it('should compare objects with custom valueOf', () => {
    const a = { value: 1, valueOf() { return 42; } };
    const b = { value: 2, valueOf() { return 42; } };
    expect(deepEqual(a, b)).toBe(true);
    const c = { value: 1, valueOf() { return 43; } };
    expect(deepEqual(a, c)).toBe(false);
  });

  it('should compare objects with custom toString', () => {
    const a = { value: 1, toString() { return 'foo'; } };
    const b = { value: 2, toString() { return 'foo'; } };
    expect(deepEqual(a, b)).toBe(true);
    const c = { value: 1, toString() { return 'bar'; } };
    expect(deepEqual(a, c)).toBe(false);
  });

  it('should return false for ArrayBuffer views with different lengths', () => {
    expect(deepEqual(new Uint8Array([1, 2]), new Uint8Array([1, 2, 3]))).toBe(false);
  });

  it('should return false for RegExp with different sources', () => {
    expect(deepEqual(/abc/g, /def/g)).toBe(false);
  });

  it('should return false for RegExp with different flags', () => {
    expect(deepEqual(/abc/g, /abc/i)).toBe(false);
  });
});
