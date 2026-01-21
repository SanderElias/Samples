/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-sparse-arrays */
import { describe, expect, it } from 'vitest';
import type { DeepPartial } from './deep-partial.type';

import { mergeDeep } from './merge-deep';
interface ToiletFacts {
  toiletHistory: string[];
  toiletPaper: {
    numberOfSheetsLeft: number;
    numberOfBackupRolls: number;
    orientation?: 'correct' | 'wrong';
  };
}

describe('mergeDeep function', () => {
  const sourceA: ToiletFacts = {
    toiletHistory: ['pee', 'poo', 'pee', 'pee'],
    toiletPaper: {
      numberOfSheetsLeft: 1_000,
      numberOfBackupRolls: 5
    }
  };

  const sourceB: DeepPartial<ToiletFacts> = {
    toiletPaper: {
      orientation: 'correct',
      numberOfBackupRolls: 3
    }
  };

  const sourceC: DeepPartial<ToiletFacts> = {
    toiletHistory: ['poo']
  };
  it('correctly merges two empty objects', () => {
    expect(mergeDeep({}, {})).toEqual({});
  });

  it('recursively merges the objects', () => {
    expect(mergeDeep({ a: { b: 123 } }, { a: { c: 456 } })).toEqual({ a: { b: 123, c: 456 } });
  });

  it('does not clone property values which are not affected by the merge', () => {
    const original = { a: { b: 123 }, d: { e: 789 } };
    const merged = mergeDeep(original, { a: { c: 456 } });
    expect(merged).toEqual({ a: { b: 123, c: 456 }, d: { e: 789 } });
  });

  it('uses the property value from the second object if two properties cannot be merged', () => {
    expect(mergeDeep({ a: 1 }, { a: 2 })).toEqual({ a: 2 });
    const date = new Date();
    expect(mergeDeep({ a: date }, { a: 2 })).toEqual({ a: 2 } as any);
    expect(mergeDeep({ a: [1] }, { a: { b: [2] } })).toEqual({
      a: { b: [2] } as any
    });
    expect(mergeDeep({ a: { b: 'c' } }, { a: true })).toEqual({ a: true });
  });

  it('merges two objects recursively', () => {
    expect(mergeDeep(sourceA, sourceB)).toEqual({
      toiletHistory: ['pee', 'poo', 'pee', 'pee'],
      toiletPaper: {
        orientation: 'correct',
        numberOfSheetsLeft: 1_000,
        numberOfBackupRolls: 3
      }
    });
  });

  it('concatenates arrays that appear in both objects', () => {
    // this uses the default strategy, which is 'concat'
    expect(mergeDeep(sourceA, sourceC)).toEqual({
      toiletHistory: ['pee', 'poo', 'pee', 'pee', 'poo'],
      toiletPaper: {
        numberOfSheetsLeft: 1_000,
        numberOfBackupRolls: 5
      }
    });
  });

  it('replaces arrays that appear in both objects', () => {
    // this uses the default strategy, which is 'concat'
    expect(mergeDeep(sourceA, sourceC, { iterableMergeStrategy: 'replace' })).toEqual({
      toiletHistory: ['poo'],
      toiletPaper: {
        numberOfSheetsLeft: 1_000,
        numberOfBackupRolls: 5
      }
    });
  });

  it('merges arrays that appear in both objects', () => {
    expect(mergeDeep({ a: [1, , 3, , 5] }, { a: [, 2, , 4] }, { iterableMergeStrategy: 'merge' })).toEqual({
      a: [1, 2, 3, 4, 5]
    });
  });
  it('throws when trying to merge a set with a non-set', () => {
    expect(() => mergeDeep({ a: [1, 2, 3] }, { a: new Set([4, 5]) }, { iterableMergeStrategy: 'merge' })).toThrow();
  });
  it('merges sets that appear in both objects', () => {
    expect(mergeDeep({ a: new Set([1, 2, 3]) }, { a: new Set([4, 5]) }, { iterableMergeStrategy: 'merge' })).toEqual({
      a: new Set([1, 2, 3, 4, 5])
    });
  });
  it('replaces sets that appear in both objects', () => {
    expect(mergeDeep({ a: new Set([1, 2, 3]) }, { a: new Set([4, 5]) }, { iterableMergeStrategy: 'replace' })).toEqual({
      a: new Set([4, 5])
    });
  });
  it('merges maps that appear in both objects', () => {
    expect(
      mergeDeep(
        {
          a: new Map([
            [1, 1],
            [2, 2],
            [3, 3]
          ])
        },
        {
          a: new Map([
            [4, 4],
            [5, 5]
          ])
        },
        { iterableMergeStrategy: 'merge' }
      )
    ).toEqual({
      a: new Map([
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
        [5, 5]
      ])
    });
  });
  it('replaces maps that appear in both objects', () => {
    expect(
      mergeDeep(
        {
          a: new Map([
            [1, 1],
            [2, 2],
            [3, 3]
          ])
        },
        {
          a: new Map([
            [4, 4],
            [5, 5]
          ])
        },
        { iterableMergeStrategy: 'replace' }
      )
    ).toEqual({
      a: new Map([
        [4, 4],
        [5, 5]
      ])
    });
  });

  it('should merge `source` into `object`', () => {
    const names = {
      characters: [{ name: 'barney' }, { name: 'fred' }]
    };

    const ages = {
      characters: [{ age: 36 }, { age: 40 }]
    };

    const heights = {
      characters: [{ height: '5\'4"' }, { height: '5\'5"' }]
    };

    const expected = {
      characters: [
        { name: 'barney', age: 36, height: '5\'4"' },
        { name: 'fred', age: 40, height: '5\'5"' }
      ]
    };

    const step1 = mergeDeep(names, ages, { iterableMergeStrategy: 'merge' });

    expect(
      mergeDeep(step1, heights, {
        iterableMergeStrategy: 'merge'
      })
    ).toEqual(expected);
  });

  it('supports conditional iterable merge strategies', () => {
    const firstObject = {
      a: [1, 2, 3],
      b: [4, 5, 6]
    };

    const secondObject = {
      a: [0],
      b: [7, 8, 9]
    };

    const mergedObject = mergeDeep(firstObject, secondObject, {
      iterableMergeStrategy: path => (path.at(-1) === 'a' ? 'replace' : 'concat')
    });

    expect(mergedObject).toEqual({
      a: [0],
      b: [4, 5, 6, 7, 8, 9]
    });
  });

  it('skips undefined values in source when skipAssignUndefined is true', () => {
    expect(mergeDeep({ a: 1 }, { a: undefined, b: 2 }, { skipAssignUndefined: true })).toEqual({ a: 1, b: 2 });
  });

  it('assigns undefined values in source when skipAssignUndefined is false', () => {
    expect(mergeDeep({ a: 1 }, { a: undefined, b: 2 }, { skipAssignUndefined: false })).toEqual({ a: undefined, b: 2 });
  });

  it('clones Date values from source', () => {
    const date = new Date();
    const merged = mergeDeep({}, { d: date });
    expect(merged.d).not.toBe(date);
    expect(merged.d.getTime()).toBe(date.getTime());
  });

  it('merges Map when target is undefined', () => {
    const map = new Map([[1, 'a']]);
    expect(mergeDeep({}, { m: map })).toEqual({ m: new Map([[1, 'a']]) });
  });
  it('merges maps', () => {
    const map = new Map([[1, 'a']]);
    const map1 = new Map([[2, 'b']]);
    expect(mergeDeep({m:map}, { m: map1 })).toEqual({ m: new Map([[1, 'a'], [2, 'b']]) });
  });

  it('throws when trying to merge a Map with a non-Map', () => {
    expect(() => mergeDeep( { m: 'not a map' }, { m: new Map([[2, 'b']]) })).toThrow();
  });

  it('merges Set when target is undefined', () => {
    const set = new Set([1, 2]);
    expect(mergeDeep({}, { s: set })).toEqual({ s: new Set([1, 2]) });
  });

  it('merges sets', () => {
    const set = new Set([1, 2, 3]);
    const set1 = new Set([4, 5]);
    expect(mergeDeep({s:set}, { s: set1 })).toEqual({ s: new Set([1, 2, 3, 4, 5]) });
  });

  it('throws when trying to merge a Set with a non-Set', () => {
    expect(() => mergeDeep( { s: [1, 2] }, { s: new Set([3, 4]) }, { iterableMergeStrategy: 'merge' })).toThrow();
  });

  it('replaces Map when strategy is replace and target is defined', () => {
    const map1 = new Map([[1, 'a']]);
    const map2 = new Map([[2, 'b']]);
    expect(mergeDeep({ m: map1 }, { m: map2 }, { iterableMergeStrategy: 'replace' })).toEqual({ m: map2 });
  });

  it('replaces Map when strategy is replace and target is defined', () => {
    const map1 = new Map([[1, 'a']]);
    const map2 = new Map([[2, 'b']]);
    expect(mergeDeep({ m: map1 }, { m: map2 }, { iterableMergeStrategy: 'replace' })).toEqual({ m: map2 });
  });

  it('replaces Set when strategy is replace and target is defined', () => {
    const set1 = new Set([1]);
    const set2 = new Set([2]);
    expect(mergeDeep({ s: set1 }, { s: set2 }, { iterableMergeStrategy: 'replace' })).toEqual({ s: set2 });
  });

  it('merges with a custom iterableMergeStrategy function', () => {
    const obj1 = { a: [1], b: [2] };
    const obj2 = { a: [3], b: [4] };
    const merged = mergeDeep(obj1, obj2, {
      iterableMergeStrategy: path => (path[0] === 'a' ? 'replace' : 'concat')
    });
    expect(merged).toEqual({ a: [3], b: [2, 4] });
  });

  it('throws on primitives and non-objects', () => {
    expect(() => mergeDeep(1 as any, 2 as any)).toThrow();
    expect(() => mergeDeep('a' as any, 'b' as any)).toThrow();
    expect(() => mergeDeep(true as any, false as any)).toThrow();
  });

  it('merges arrays with sparse values', () => {
    const arr1 = [1, , 3];
    const arr2 = [, 2, , 4];
    expect(mergeDeep({ a: arr1 }, { a: arr2 }, { iterableMergeStrategy: 'merge' })).toEqual({ a: [1, 2, 3, 4] });
  });

  it('merges nested nested arrays', () => {
    const arr1 = [[1, 2, [3, 4, [5, 6]]]];
    const arr2 = [[, , [, , [, , 7, 8]]]];
    expect(mergeDeep(arr1, arr2, { iterableMergeStrategy: 'merge' })).toEqual([[1, 2, [3, 4, [5, 6, 7, 8]]]]);
  });

  it('merges nested arrays and objects', () => {
    const obj1 = { a: [{ b: 1 }] };
    const obj2 = { a: [{ c: 2 }] };
    expect(mergeDeep(obj1, obj2, { iterableMergeStrategy: 'merge' })).toEqual({ a: [{ b: 1, c: 2 }] } as any);
  });

  it('invokes deep merge strategy for arrays (covers merge case)', () => {
    const target = { items: [[1], [3]] } as any;
    const source = { items: [[, 2], [4]] } as any;
    expect(mergeDeep(target, source, { iterableMergeStrategy: 'merge' })).toEqual({ items: [[1, 2], [4]] });
  });

  it('uses empty array when merging into undefined target (covers currentValue ?? [] branch)', () => {
    const target = {} as any;
    const source = { items: [[2], [4]] } as any;
    expect(mergeDeep(target, source, { iterableMergeStrategy: 'merge' })).toEqual({ items: [[2], [4]] });
  });

  it('overwrites primitive array elements when using merge strategy', () => {
    expect(
      mergeDeep({ a: [1] }, { a: [2] }, { iterableMergeStrategy: 'merge' })
    ).toEqual({ a: [2] });
  });

  it('merges object elements into arrays when target element missing', () => {
    expect(
      mergeDeep({ a: [] }, { a: [{ b: 2 }] }, { iterableMergeStrategy: 'merge' })
    ).toEqual({ a: [{ b: 2 }] });
  });

  it('deep merges nested arrays when using merge strategy', () => {
    expect(
      mergeDeep({ a: [[1]] }, { a: [[,2]] }, { iterableMergeStrategy: 'merge' })
    ).toEqual({ a: [[1,2]] });
  });

  it('merges top-level arrays when using merge strategy', () => {
    expect(mergeDeep([1, , 3], [, 2, , 4], { iterableMergeStrategy: 'merge' } as any)).toEqual([1, 2, 3, 4]);
  });

  it('merges object elements at same index in arrays', () => {
    const target = [{ a: 1 }];
    const source = [{ b: 2 }];
    expect(mergeDeep(target, source, { iterableMergeStrategy: 'merge' } as any)).toEqual([{ a: 1, b: 2 }]);
  });
});
