import { describe, it, expect } from 'vitest';
import { flattenRecord } from './flatten-record';
import { unFlattenRecord } from './un-flattenRecord';

describe('flattenRecord', () => {
  it('flattens a flat object', () => {
    expect(flattenRecord({ a: 1, b: 2 })).toEqual({ a: 1, b: 2 });
  });

  it('flattens nested objects', () => {
    expect(flattenRecord({ a: { b: 1 } })).toEqual({ 'a.b': 1 });
  });

  it('flattens arrays of primitives', () => {
    expect(flattenRecord({ a: [1, 2] })).toEqual({ 'a.0': 1, 'a.1': 2 });
  });

  it('flattens arrays of objects', () => {
    expect(flattenRecord({ a: [{ b: 1 }, { c: 2 }] })).toEqual({ 'a.0.b': 1, 'a.1.c': 2 });
  });

  it('flattens mixed nested structures and preserves nulls', () => {
    const obj = { a: { b: [{ c: 3 }] }, d: [[1], [2]], e: null };
    expect(flattenRecord(obj)).toEqual({ 'a.b.0.c': 3, 'd.0.0': 1, 'd.1.0': 2, e: null });
  });

  it('roundtrips with unFlattenRecord', () => {
    const obj = { a: { b: 1, c: [{ d: 2 }] }, x: 'y', arr: [{ z: null }, 3] };
    const round = unFlattenRecord(flattenRecord(obj));
    expect(round).toEqual(obj);
  });

  it('handles empty object', () => {
    expect(flattenRecord({})).toEqual({});
  });

  it('throws on circular root by default', () => {
    const a: any = { x: 1 };
    a.self = a;
    expect(() => flattenRecord(a)).toThrow(/Circular/);
  });

  it('throws on nested circulars by default', () => {
    const b: any = { nested: { c: 2 } };
    b.nested.self = b.nested;
    expect(() => flattenRecord(b)).toThrow(/Circular/);
  });

  it('throws on circular arrays by default', () => {
    const arr: any[] = [1];
    arr.push(arr);
    expect(() => flattenRecord({ a: arr })).toThrow(/Circular/);
  });

  it('handles shared non-circular references by fully expanding them', () => {
    const shared = { v: 5 };
    const obj = { a: shared, b: shared };
    expect(flattenRecord(obj)).toEqual({ 'a.v': 5, 'b.v': 5 });
  });

  it('marks circular when onCircular=mark and default marker used', () => {
    const a: any = { x: 1 };
    a.self = a;
    expect(flattenRecord(a, { onCircular: 'mark' })).toEqual({ x: 1, self: '[Circular]' });
  });

  it('marks circular with custom marker when onCircular=mark and marker set', () => {
    const a: any = { x: 1 };
    a.self = a;
    expect(flattenRecord(a, { onCircular: 'mark', marker: 'CIRCLED' })).toEqual({ x: 1, self: 'CIRCLED' });
  });

  it('marks circular arrays when onCircular=mark (self ref)', () => {
    const arr: any[] = [1];
    arr.push(arr);
    expect(flattenRecord({ a: arr }, { onCircular: 'mark' })).toEqual({ 'a.0': 1, 'a.1': '[Circular]' });
  });

  it('marks complex array->object->array cycle using custom marker', () => {
    const obj: any = {};
    const arr: any[] = [obj];
    obj.selfArr = arr;
    const out = flattenRecord({ root: arr }, { onCircular: 'mark', marker: 'CIRCLED' });
    expect(out).toEqual({ 'root.0.selfArr': 'CIRCLED' });
  });

  it('works when called with an array root (marking self-ref)', () => {
    const arr: any[] = [1];
    arr.push(arr);
    expect(flattenRecord(arr as any, { onCircular: 'mark' })).toEqual({ '0': 1, '1': '[Circular]' });
  });

  it('returns empty when ancestors already contains the root (mark)', () => {
    const obj: any = { a: 1 };
    const anc = new WeakSet<object>();
    anc.add(obj);
    const internals = (flattenRecord as any).__test;
    expect(internals._flattenRecord(obj, '', anc, 'mark', 'X')).toEqual({});
  });

  it('throws when ancestors already contains the root (throw)', () => {
    const obj: any = { a: 1 };
    const anc = new WeakSet<object>();
    anc.add(obj);
    const internals = (flattenRecord as any).__test;
    expect(() => internals._flattenRecord(obj, '', anc, 'throw', 'X')).toThrow(/Circular/);
  });

  it('returns empty for array root when ancestors contains array and onCircular=mark', () => {
    const arr: any[] = [1];
    const anc = new WeakSet<object>();
    anc.add(arr);
    const internals = (flattenRecord as any).__test;
    expect(internals._flattenArray(arr, '', anc, 'mark', 'X')).toEqual({});
  });

  it('internal array early-return honored via internals (mark)', () => {
    const arr: any[] = [1];
    const anc = new WeakSet<object>();
    anc.add(arr);
    const internals = (flattenRecord as any).__test;
    expect(internals._flattenArray(arr, '', anc, 'mark', 'X')).toEqual({});
  });

  it('internal array early-throw honored via internals (throw)', () => {
    const arr: any[] = [1];
    const anc = new WeakSet<object>();
    anc.add(arr);
    const internals = (flattenRecord as any).__test;
    expect(() => internals._flattenArray(arr, '', anc, 'throw', 'X')).toThrow(/Circular/);
  });

  it('internal record early-return honored via internals (mark)', () => {
    const obj: any = { a: 1 };
    const anc = new WeakSet<object>();
    anc.add(obj);
    const internals = (flattenRecord as any).__test;
    expect(internals._flattenRecord(obj, '', anc, 'mark', 'X')).toEqual({});
  });

  it('throws when onCircular=throw (root circle)', () => {
    const a: any = { x: 1 };
    a.self = a;
    expect(() => flattenRecord(a, { onCircular: 'throw' })).toThrow(/Circular/);
  });

  it('throws with path info when onCircular=throw (nested)', () => {
    const b: any = { nested: { c: 2 } };
    b.nested.self = b.nested;
    expect(() => flattenRecord(b, { onCircular: 'throw' })).toThrow(/nested.self/);
  });

  it('throws on circular arrays when onCircular=throw', () => {
    const arr: any[] = [1];
    arr.push(arr);
    expect(() => flattenRecord({ a: arr }, { onCircular: 'throw' })).toThrow(/a.1/);
  });
});
