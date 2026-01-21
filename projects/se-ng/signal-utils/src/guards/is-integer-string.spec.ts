import { describe, it, expect } from 'vitest';
import { isIntegerString } from './is-integer-string';

describe('isIntegerString', () => {
  it('returns true for plain integer strings including leading zeros', () => {
    expect(isIntegerString('0')).toBe(true);
    expect(isIntegerString('1')).toBe(true);
    expect(isIntegerString('00')).toBe(true);
    expect(isIntegerString('01')).toBe(true);
    expect(isIntegerString('000000000000001')).toBe(true);
    expect(isIntegerString('123456')).toBe(true);
  });

  it('returns false for non-integer strings', () => {
    expect(isIntegerString('')).toBe(false);
    expect(isIntegerString('-1')).toBe(false); // negative numbers not allowed
    expect(isIntegerString('abc')).toBe(false);
    expect(isIntegerString('1.0')).toBe(false);
    expect(isIntegerString('-0')).toBe(false);
    expect(isIntegerString('+1')).toBe(false);
    expect(isIntegerString(' 1')).toBe(false);
    expect(isIntegerString('1 ')).toBe(false);
    expect(isIntegerString('1e3')).toBe(false);
  });

  it('handles large integer strings', () => {
    expect(isIntegerString('9007199254740992')).toBe(true);
  });

  it('does not accept numeric strings with extra characters', () => {
    expect(isIntegerString('1px')).toBe(false);
    expect(isIntegerString('2,000')).toBe(false);
  });
});
