import { isAsyncIterable } from './is-async-iterable';

describe('isAsyncIterable', () => {
  it('should return true for an async iterable object', () => {
    const asyncIterable = {
      async *[Symbol.asyncIterator]() {
        yield 1;
      }
    };
    expect(isAsyncIterable(asyncIterable)).toBe(true);
  });

  it('should return false for a sync iterable object', () => {
    const iterable = {
      *[Symbol.iterator]() {
        yield 1;
      }
    };
    expect(isAsyncIterable(iterable)).toBe(false);
  });

  it('should return true for an async generator function', () => {
    async function* asyncGenerator() {
      yield 1;
    }
    expect(isAsyncIterable(asyncGenerator())).toBe(true);
  });

  it('should return false for a regular function', () => {
    const func = () => {};
    expect(isAsyncIterable(func)).toBe(false);
  });

  it('should return false for an object without Symbol.asyncIterator', () => {
    const obj = { a: 1 };
    expect(isAsyncIterable(obj)).toBe(false);
  });

  it('should return false for non-iterable values', () => {
    expect(isAsyncIterable(null)).toBe(false);
    expect(isAsyncIterable(undefined)).toBe(false);
    expect(isAsyncIterable(123)).toBe(false);
    expect(isAsyncIterable('string')).toBe(false);
    expect(isAsyncIterable({})).toBe(false);
    expect(isAsyncIterable([])).toBe(false);
    expect(isAsyncIterable(() => {})).toBe(false);
  });
});
