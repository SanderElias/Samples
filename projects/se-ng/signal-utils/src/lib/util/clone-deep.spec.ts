/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, expect, it } from 'vitest';
import { cloneDeep } from './clone-deep';

describe('cloneDeep function', () => {
  it('clones primitive values correctly', () => {
    expect(cloneDeep(undefined)).toBe(undefined);
    expect(cloneDeep(null)).toBe(null);
    expect(cloneDeep(true)).toBe(true);
    expect(cloneDeep(false)).toBe(false);
    expect(cloneDeep(0)).toBe(0);
    expect(cloneDeep(123)).toBe(123);
    expect(cloneDeep(-Math.PI)).toBe(-Math.PI);
    expect(cloneDeep('')).toBe('');
    expect(cloneDeep('test')).toBe('test');
  });

  it('clones array values correctly', () => {
    const testCases = [
      {
        input: [],
        expected: []
      },
      {
        input: [false, true, -1, 0, 1, 'test', [], ['foo', ['bar', [[], []]]]],
        expected: [false, true, -1, 0, 1, 'test', [], ['foo', ['bar', [[], []]]]]
      }
    ];

    for (const { input, expected } of testCases) {
      const actualOutput = cloneDeep(input);
      expect(actualOutput).toEqual(expected);
      expect(actualOutput).not.toBe(expected);
      expect(actualOutput).not.toBe(input);
    }
  });

  it('clones array values recursively', () => {
    const input = [[1, 2, [3]], [4], [[5, 6], 7]];
    const expected = [[1, 2, [3]], [4], [[5, 6], 7]];
    const actualOutput = cloneDeep(input);
    expect(actualOutput).toEqual(expected);
    expect(actualOutput).not.toBe(expected);
    expect(actualOutput).not.toBe(input);
    expect(actualOutput[0]).not.toBe(input[0]);
    expect(actualOutput[1]).not.toBe(input[1]);
    expect(actualOutput[2]).not.toBe(input[2]);
    expect(actualOutput[0]?.[2]).not.toBe(input[0]?.[2]);
    expect(actualOutput[2]?.[0]).not.toBe(input[2]?.[0]);
  });

  it('clones set values correctly', () => {
    const testCases = [
      {
        input: new Set(),
        expected: new Set()
      },
      {
        input: new Set([1, 2, 3]),
        expected: new Set([1, 2, 3])
      },
      {
        input: { set1: new Set([1, 2, 3]), set2: new Set([4, 5, 6]) },
        expected: { set1: new Set([1, 2, 3]), set2: new Set([4, 5, 6]) }
      }
    ];

    for (const { input, expected } of testCases) {
      const actualOutput = cloneDeep(input);
      expect(actualOutput).toEqual(expected);
      expect(actualOutput).not.toBe(expected);
      expect(actualOutput).not.toBe(input);
    }
  });

  it('clones object values correctly', () => {
    const testCases = [
      {
        input: {},
        expected: {}
      },
      {
        input: { a: false, b: true, c: 0, d: 'test', e: {}, f: { g: 'foo', h: { i: 'bar', j: { k: {}, l: {} } } } },
        expected: { a: false, b: true, c: 0, d: 'test', e: {}, f: { g: 'foo', h: { i: 'bar', j: { k: {}, l: {} } } } }
      }
    ];

    for (const { input, expected } of testCases) {
      const actualOutput = cloneDeep(input);
      expect(actualOutput).toEqual(expected);
      expect(actualOutput).not.toBe(expected);
      expect(actualOutput).not.toBe(input);
    }
  });

  it('clones object values recursively', () => {
    const input = { a: { b: { c: {}, d: true } }, f: 'test', g: {}, h: [1, false] };
    const expected = { a: { b: { c: {}, d: true } }, f: 'test', g: {}, h: [1, false] };
    const actualOutput = cloneDeep(input);
    expect(actualOutput).toEqual(expected);
    expect(actualOutput).not.toBe(expected);
    expect(actualOutput).not.toBe(input);
    expect(actualOutput.a).not.toBe(expected.a);
    expect(actualOutput.a.b).not.toBe(expected.a.b);
    expect(actualOutput.a.b.c).not.toBe(expected.a.b.c);
    expect(actualOutput.g).not.toBe(expected.g);
    expect(actualOutput.h).not.toBe(expected.h);
  });

  it('can handle cyclical data structures', () => {
    {
      interface X {
        x?: X;
      }

      const x: X = {};
      x.x = x;
      const cloned = cloneDeep(x);

      expect(cloned.x).toBe(cloned);
      expect(cloned).not.toBe(x);
    }
    {
      const x: unknown[] = [];
      x.push(x);

      const cloned = cloneDeep(x);
      expect(cloned[0]).toBe(cloned);
      expect(cloned).not.toBe(x);
    }
    {
      interface X {
        x?: { y: X[] };
      }

      const x: X = {};
      x.x = { y: [x] };

      const cloned = cloneDeep(x);
      expect(cloned.x?.y[0]).toBe(cloned);
      expect(cloned).not.toBe(x);
    }
  });

  it('preserves relations', () => {
    const a = { foo: 'bar' };
    const b = a;
    const c = [1, 2, 3];
    const d = c;
    const x = { a, b, c, d };

    const cloned = cloneDeep(x);
    expect(cloned).toEqual(x);
    expect(cloned).not.toBe(x);
    expect(cloned.a).toBe(cloned.b);
    expect(cloned.c).toBe(cloned.d);
  });

  it('has no prototype pollution vulnerability', () => {
    cloneDeep(JSON.parse('{"constructor": {"prototype": {"__isVulnerable__": true}}}'));
    expect(({} as unknown as { __isVulnerable__?: boolean }).__isVulnerable__).toBe(undefined);
  });

  it('clones complex objects', () => {
    const input = {
      a: 1,
      b: 'test',
      c: [1, 2, 3],
      d: { e: 'foo', f: 'bar' },
      g: new Set([1, 2, 3]),
      h: new Map([
        ['a', 1],
        ['b', 2]
      ]),
      i: new Date(),
      j: /test/,
      k: undefined,
      l: null,
      m: NaN,
      n: Infinity,
      o: -Infinity,
      p: undefined as any
    };
    input.p = input;

    const cloned = cloneDeep(input);
    expect(cloned).toEqual(input);
    expect(cloned).not.toBe(input);
    expect(cloned.c).toEqual(input.c);
    expect(cloned.c).not.toBe(input.c);
    expect(cloned.d).toEqual(input.d);
    expect(cloned.d).not.toBe(input.d);
    expect(cloned.g).toEqual(input.g);
    expect(cloned.g).not.toBe(input.g);
    expect(cloned.h).toEqual(input.h);
    expect(cloned.h).not.toBe(input.h);
    expect(cloned.i).toEqual(input.i);
    expect(cloned.i).not.toBe(input.i);
    expect(cloned.j).toEqual(input.j);
    expect(cloned.j).not.toBe(input.j);
    expect(cloned.k).toEqual(input.k);
    expect(cloned.l).toEqual(input.l);
    expect(cloned.m).toEqual(input.m);
    expect(cloned.n).toEqual(input.n);
    expect(cloned.o).toEqual(input.o);
    expect(cloned.p).toEqual(input.p);
    expect(cloned.p).not.toBe(input.p);
  });
});
