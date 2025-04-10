/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-sparse-arrays */
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
      numberOfBackupRolls: 5,
    },
  };

  const sourceB: DeepPartial<ToiletFacts> = {
    toiletPaper: {
      orientation: 'correct',
      numberOfBackupRolls: 3,
    },
  };

  const sourceC: DeepPartial<ToiletFacts> = {
    toiletHistory: ['poo'],
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
      a: { b: [2] } as any,
    });
    expect(mergeDeep({ a: { b: 'c' } }, { a: true })).toEqual({ a: true });
  });

  it('merges two objects recursively', () => {
    expect(mergeDeep(sourceA, sourceB)).toEqual({
      toiletHistory: ['pee', 'poo', 'pee', 'pee'],
      toiletPaper: {
        orientation: 'correct',
        numberOfSheetsLeft: 1_000,
        numberOfBackupRolls: 3,
      },
    });
  });

  it('concatenates arrays that appear in both objects', () => {
    // this uses the default strategy, which is 'concat'
    expect(mergeDeep(sourceA, sourceC)).toEqual({
      toiletHistory: ['pee', 'poo', 'pee', 'pee', 'poo'],
      toiletPaper: {
        numberOfSheetsLeft: 1_000,
        numberOfBackupRolls: 5,
      },
    });
  });

  it('replaces arrays that appear in both objects', () => {
    // this uses the default strategy, which is 'concat'
    expect(mergeDeep(sourceA, sourceC, { iterableMergeStrategy: 'replace' })).toEqual({
      toiletHistory: ['poo'],
      toiletPaper: {
        numberOfSheetsLeft: 1_000,
        numberOfBackupRolls: 5,
      },
    });
  });

  it('merges arrays that appear in both objects', () => {
    expect(mergeDeep({ a: [1, , 3, , 5] }, { a: [, 2, , 4] }, { iterableMergeStrategy: 'merge' })).toEqual({
      a: [1, 2, 3, 4, 5],
    });
  });
  it('throws when trying to merge a set with a non-set', () => {
    expect(() => mergeDeep({ a: [1, 2, 3] }, { a: new Set([4, 5]) }, { iterableMergeStrategy: 'merge' })).toThrow();
  });
  it('merges sets that appear in both objects', () => {
    expect(mergeDeep({ a: new Set([1, 2, 3]) }, { a: new Set([4, 5]) }, { iterableMergeStrategy: 'merge' })).toEqual({
      a: new Set([1, 2, 3, 4, 5]),
    });
  });
  it('replaces sets that appear in both objects', () => {
    expect(mergeDeep({ a: new Set([1, 2, 3]) }, { a: new Set([4, 5]) }, { iterableMergeStrategy: 'replace' })).toEqual({
      a: new Set([4, 5]),
    });
  });
  it('merges maps that appear in both objects', () => {
    expect(
      mergeDeep(
        {
          a: new Map([
            [1, 1],
            [2, 2],
            [3, 3],
          ]),
        },
        {
          a: new Map([
            [4, 4],
            [5, 5],
          ]),
        },
        { iterableMergeStrategy: 'merge' },
      ),
    ).toEqual({
      a: new Map([
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
        [5, 5],
      ]),
    });
  });
  it('replaces maps that appear in both objects', () => {
    expect(
      mergeDeep(
        {
          a: new Map([
            [1, 1],
            [2, 2],
            [3, 3],
          ]),
        },
        {
          a: new Map([
            [4, 4],
            [5, 5],
          ]),
        },
        { iterableMergeStrategy: 'replace' },
      ),
    ).toEqual({
      a: new Map([
        [4, 4],
        [5, 5],
      ]),
    });
  });

  it('should merge `source` into `object`', () => {
    const names = {
      characters: [{ name: 'barney' }, { name: 'fred' }],
    };

    const ages = {
      characters: [{ age: 36 }, { age: 40 }],
    };

    const heights = {
      characters: [{ height: '5\'4"' }, { height: '5\'5"' }],
    };

    const expected = {
      characters: [
        { name: 'barney', age: 36, height: '5\'4"' },
        { name: 'fred', age: 40, height: '5\'5"' },
      ],
    };

    const step1 = mergeDeep(names, ages, { iterableMergeStrategy: 'merge' });

    expect(
      mergeDeep(step1, heights, {
        iterableMergeStrategy: 'merge',
      }),
    ).toEqual(expected);
  });

  it('supports conditional iterable merge strategies', () => {
    const firstObject = {
      a: [1, 2, 3],
      b: [4, 5, 6],
    };

    const secondObject = {
      a: [0],
      b: [7, 8, 9],
    };

    const mergedObject = mergeDeep(firstObject, secondObject, {
      iterableMergeStrategy: (path) => (path.at(-1) === 'a' ? 'replace' : 'concat'),
    });

    expect(mergedObject).toEqual({
      a: [0],
      b: [4, 5, 6, 7, 8, 9],
    });
  });
});
