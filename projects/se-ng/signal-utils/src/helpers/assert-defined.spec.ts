import { describe, it, expect } from 'vitest';
import { assertDefined } from './assert-defined';

describe('assertDefined', () => {
  it('returns the value when it is defined', () => {
    expect(assertDefined(1, 'nope')).toBe(1);
    expect(assertDefined(0, 'nope')).toBe(0);
    expect(assertDefined('', 'nope')).toBe('');
    expect(assertDefined(false, 'nope')).toBe(false);
    const obj = { a: 1 };
    expect(assertDefined(obj, 'nope')).toBe(obj);
  });

  it('throws when value is undefined with provided message', () => {
    expect(() => assertDefined(undefined, 'my error')).toThrow(/my error/);
  });
});
