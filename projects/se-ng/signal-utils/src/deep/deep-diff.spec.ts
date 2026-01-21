import { describe, it, expect } from 'vitest';
import { deepDiff } from './deep-diff';

describe('deepDiff (signal-utils)', () => {
  it('returns only changed nested properties', () => {
    const a = { user: { name: 'Alice', age: 30 }, tags: ['x'] } as any;
    const b = { user: { name: 'Alice', age: 31 }, tags: ['x', 'y'] } as any;
    // current behavior: sparse arrays for changes
    expect(deepDiff(a, b)).toEqual({ user: { age: 31 }, tags: [undefined, 'y'] });
  });

  it('includes keys added in b', () => {
    const a = { a: 1 };
    const b = { a: 1, b: 2 };
    expect(deepDiff(a, b)).toEqual({ b: 2 });
  });

  it('returns original value for removed keys (current behavior)', () => {
    const a = { a: 1, b: 2 };
    const b = { a: 1 };
    expect(deepDiff(a, b)).toEqual({ b: 2 });
  });

  it('treats explicit undefined in b for existing key like removal (fallback)', () => {
    const a = { a: 1 };
    const b = { a: undefined } as any;
    expect(deepDiff(a, b)).toEqual({ a: 1 });
  });

  it('preserves explicit undefined in b for new keys', () => {
    const a = {};
    const b = { a: undefined } as any;
    expect(deepDiff(a, b)).toEqual({ a: undefined });
  });

  it('works with nested arrays and objects', () => {
    const a = { arr: [{ x: 1 }] };
    const b = { arr: [{ x: 2 }] };
    expect(deepDiff(a, b)).toEqual({ arr: [{ x: 2 }] });
  });
});
