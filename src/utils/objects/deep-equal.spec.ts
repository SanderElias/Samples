import { deepEqual } from './deep-equal';

describe('deepEqual', () => {
  const assertionsMap = [
    { first: { a: 1 }, second: { a: 1 }, isEqual: true },
    { first: { a: { b: 1 } }, second: { a: { b: 1 } }, isEqual: true },
    { first: { a: [1] }, second: { a: [1] }, isEqual: true },
    { first: { a: null }, second: { a: null }, isEqual: true },
    { first: { a: new Date('2024-01-01') }, second: { a: new Date('2024-01-01') }, isEqual: true },
    {
      first: { a: 'abc' },
      second: { a: 'abc' },
      isEqual: true,
    },
    //
    { first: { a: 1 }, second: { a: 2 }, isEqual: false },
    { first: { a: 1 }, second: { b: 1 }, isEqual: false },
    { first: { a: { b: 1 } }, second: { a: { b: 2 } }, isEqual: false },
    { first: { a: [1] }, second: { a: [1, 2] }, isEqual: false },
    { first: { a: null }, second: { a: undefined }, isEqual: false },
    { first: { a: new Date('2024-01-01') }, second: { a: new Date('2024-01-02') }, isEqual: false },
    {
      first: { a: 'abc' },
      second: { a: 'abcd' },
      isEqual: false,
    },
  ];

  assertionsMap.forEach((assertion) => {
    it('determines Object equality correctly', () => {
      expect(deepEqual(assertion.first, assertion.second)).toBe(assertion.isEqual);
    });
  });
});
