import { isPromise } from './is-promise';

describe('isPromise', () => {
  it('should return true for a real Promise', () => {
    expect(isPromise(Promise.resolve(42))).toBe(true);
    expect(isPromise(new Promise(() => {}))).toBe(true);
  });

  it('should return true for thenable objects', () => {
    const thenable = { then: () => {} };
    expect(isPromise(thenable)).toBe(true);
  });

  it('should return false for non-promises', () => {
    expect(isPromise(null)).toBe(false);
    expect(isPromise(undefined)).toBe(false);
    expect(isPromise(123)).toBe(false);
    expect(isPromise('promise')).toBe(false);
    expect(isPromise({})).toBe(false);
    expect(isPromise([])).toBe(false);
    expect(isPromise(() => {})).toBe(false);
  });
});
