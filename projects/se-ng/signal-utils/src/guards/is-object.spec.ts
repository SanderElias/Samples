import * as TP from 'temporal-polyfill';
import { describe, it, expect } from 'vitest';
import { isObject } from './is-object';

// The polyfill may export a named `Temporal` or attach it to globalThis depending on bundler; prefer the named export with a fallback
const T = ((TP as any)?.Temporal ?? (globalThis as any).Temporal) as any;

describe('isObject', () => {
  it('should return true for plain objects', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ a: 1 })).toBe(true);
    expect(isObject(Object.create(null))).toBe(true);
  });

  it('should return false for arrays', () => {
    expect(isObject([])).toBe(false);
    expect(isObject([1, 2, 3])).toBe(false);
  });

  it('should return false for null', () => {
    expect(isObject(null)).toBe(false);
  });

  it('should return false for primitives', () => {
    expect(isObject(1)).toBe(false);
    expect(isObject('string')).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(Symbol('s'))).toBe(false);
  });

  it('should return false for functions', () => {
    expect(isObject(() => {})).toBe(false);
    expect(isObject(function () {})).toBe(false);
  });

  it('should return false for Date objects', () => {
    expect(isObject(new Date())).toBe(false);
  });

  it('should return false for Temporal objects', () => {
    expect(isObject(T.Duration.from('PT1H'))).toBe(false);
    expect(isObject(T.PlainDate.from('2020-01-01'))).toBe(false);
  });
});
