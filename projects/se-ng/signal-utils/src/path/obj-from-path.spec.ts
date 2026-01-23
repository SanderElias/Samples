/* eslint-disable no-sparse-arrays */
import { objFromPath } from './obj-from-path';
import { describe, it, expect } from 'vitest';

describe('Objects from path', () => {
  it('should create an object from a path', () => {
    expect(objFromPath('a.b.c', 1)).toEqual({ a: { b: { c: 1 } } });
  });
  it('should create an object from a path with an array', () => {
    expect(objFromPath('a.0.b', 1)).toEqual({ a: [{ b: 1 }] });
  });
  it('should create an object from a path with an array and a number', () => {
    expect(objFromPath('a.0.b.1', 1)).toEqual({ a: [{ b: [undefined, 1] }] });
  });
  it('should create an object from a path with an array and a number', () => {
    expect(objFromPath('a[0].b[1]', 1)).toEqual({ a: [{ b: [undefined, 1] }] });
  });
  it('should create an array from a path with an array number', () => {
    expect(objFromPath('[0]', 1)).toEqual([1]);
  });
  it('should create an array from a path with only a number', () => {
    expect(objFromPath('0', 2)).toEqual([2]);
  });
  it('should create an sparse array from a path with only a number', () => {
    expect(objFromPath('2', 3)).toEqual([, , 3]);
  });
  it('should create an sparse array with object from a path that starts with a number', () => {
    expect(objFromPath('[1].a.b', 'c')).toEqual([, { a: { b: 'c' } }]);
  });

  // Keep a single, minimal invalid-path test here to exercise the error branch in `objFromPath`.
  // Detailed invalid-path scenarios are tested by the path parsing tests (see `path-to-array.spec.ts`).
  // This avoids duplicating parsing tests while ensuring `objFromPath`'s error handling is covered.
  it('throws on empty path (coverage)', () => {
    expect(() => objFromPath('', 1)).toThrowError(`[objFromPath] Invalid path: "", can't be parsed.`);
  });

});
