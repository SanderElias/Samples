import { describe, expect, it } from 'vitest';

import { assertObject } from './assert-object';

describe('assertObject', () => {
  it('returns the value when it is a plain object', () => {
    const obj = { a: 1 };
    expect(assertObject(obj)).toBe(obj);
  });

  it('returns a nested object unchanged', () => {
    const obj = { nested: { x: 2 } };
    expect(assertObject(obj)).toBe(obj);
  });

  it('throws with the default message for null', () => {
    expect(() => assertObject(null)).toThrow('Expected an object value');
  });

  it('throws with the default message for a number', () => {
    expect(() => assertObject(123)).toThrow('Expected an object value');
  });

  it('throws with the default message for a string', () => {
    expect(() => assertObject('hello')).toThrow('Expected an object value');
  });

  it('throws with the default message for undefined', () => {
    expect(() => assertObject(undefined)).toThrow('Expected an object value');
  });

  it('throws with the default message for an array', () => {
    expect(() => assertObject([1, 2, 3])).toThrow('Expected an object value');
  });

  it('throws with the default message for a Date', () => {
    expect(() => assertObject(new Date())).toThrow('Expected an object value');
  });

  it('throws with a custom message', () => {
    expect(() => assertObject(42, 'my custom error')).toThrow('my custom error');
  });

  it('returns the value typed as the provided generic', () => {
    const raw: unknown = { name: 'test' };
    const result = assertObject<{ name: string }>(raw);
    expect(result.name).toBe('test');
  });
});
