import { describe, it, expect } from 'vitest';
import { unFlattenRecord } from './un-flattenRecord';

describe('unFlattenRecord', () => {
  it('returns empty for empty input', () => {
    expect(unFlattenRecord({})).toEqual({});
  });

  it('creates nested objects for dotted paths', () => {
    const out = unFlattenRecord({ 'a.b': 1, 'a.c': 2 });
    expect(out).toEqual({ a: { b: 1, c: 2 } });
  });

  it('creates arrays when numeric keys found', () => {
    const out = unFlattenRecord({ 'a.0': 1, 'a.1': 2 });
    expect(out).toEqual({ a: [1, 2] });
  });

  it('handles mixed structures', () => {
    const out = unFlattenRecord({ 'a.0.b': 1, 'a.1.c': 2 });
    expect(out).toEqual({ a: [{ b: 1 }, { c: 2 }] });
  });

  it('handles deeper nests', () => {
    const out = unFlattenRecord({ 'a.b.0.c': 3 });
    expect(out).toEqual({ a: { b: [{ c: 3 }] } });
  });

  it('handles odd keys too', () => {
    const out = unFlattenRecord({ 'a..b': 1 });
    expect(out).toEqual({ a: { '': { b: 1 } } });
  });

  it('works for various inputs', () => {
    const out = unFlattenRecord({ 'x.0.0': 1, 'y.z': 2 });
    expect(out).toEqual({ x: [[1]], y: { z: 2 } });
  });
});
