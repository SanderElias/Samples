import { describe, it, expect } from 'vitest';
import { pathToArray } from './path-to-array';

describe('pathToArray', () => {
  it('parses dot and bracket notation', () => {
    expect(pathToArray('a.b[0].c')).toEqual(['a', 'b', '0', 'c']);
    expect(pathToArray('a[0].b')).toEqual(['a', '0', 'b']);
    expect(pathToArray('a[0][1].b')).toEqual(['a', '0', '1', 'b']);
    expect(pathToArray('a[01].b')).toEqual(['a', '01', 'b']);
  });

  it('hanlde a single key', () => {
    expect(pathToArray('a')).toEqual(['a']);
    expect(pathToArray('  a  ')).toEqual(['a']);
    expect(pathToArray('[0]')).toEqual(['0']);
    expect(pathToArray('  [0]  ')).toEqual(['0']);
  });

  it('is tolerant of whitespace inside brackets and around dots', () => {
    expect(pathToArray('a[ 0 ]')).toEqual(['a', '0']);
    expect(pathToArray('a[ 0 ]. b')).toEqual(['a', '0', 'b']);
    expect(pathToArray('x. 0.0')).toEqual(['x', '0', '0']);
    expect(pathToArray('a . b')).toEqual(['a', 'b']);
    expect(pathToArray('  a.b  ')).toEqual(['a', 'b']);
  });

  it('returns undefined for invalid/ambiguous paths', () => {
    const invalid = ['', '.', '.a', 'a.', 'a..b', 'a. .b', 'a[]', 'a[ ]', ' ', '   ', 'a,,b', 'a, ,b', ',a', 'a,'];
    for (const p of invalid) {
      expect(pathToArray(p)).toBeUndefined();
    }
  });

  it('treats commas as separators (compat with dots)', () => {
    expect(pathToArray('a,b.c')).toEqual(['a', 'b', 'c']);
    expect(pathToArray('a[ 0 ], b')).toEqual(['a', '0', 'b']);
    expect(pathToArray('a, b[0],c')).toEqual(['a', 'b', '0', 'c']);
  });

  it('handles quoted keys by stripping quotes and treating inner separators as splitting', () => {
    expect(pathToArray(`a["b"]`)).toEqual(['a', 'b']);
    expect(pathToArray("a['b']")).toEqual(['a', 'b']);
    expect(pathToArray("a['b.c']")).toEqual(['a', 'b', 'c']); // inner dot split
    expect(pathToArray('a["b,c.d"]')).toEqual(['a', 'b', 'c', 'd']); // inner comma & dot split
  });

  it('tolerates unbalanced quotes (quotes are stripped, not tokenized)', () => {
    expect(pathToArray('a["b]')).toEqual(['a', 'b']);
    expect(pathToArray("a['b]")).toEqual(['a', 'b']);
    expect(pathToArray('a[`b]')).toEqual(['a', 'b']);
    expect(pathToArray('a["b].c')).toEqual(['a', 'b', 'c']);
    expect(pathToArray("a['b.c")).toBeUndefined();
    expect(pathToArray("'a.b")).toEqual(['a', 'b']);
    expect(pathToArray('a.b"')).toEqual(['a', 'b']);
  });

  it('preserves backslashes (no unescaping) and treats escapes as literal chars', () => {
    expect(pathToArray('a["b\\x"]')).toEqual(['a', 'b\\x']);
    expect(pathToArray('a["b\\"c"]')).toEqual(['a', 'b\\c']);
    expect(pathToArray("a['b\\'c']")).toEqual(['a', 'b\\c']);
    expect(pathToArray('a[`b\\`c`]')).toEqual(['a', 'b\\c']);
    // malformed escaped sequences are tolerated and treated literally
    expect(pathToArray('a["b\\"c]')).toEqual(['a', 'b\\c']);
    expect(pathToArray("a['b\\'c]")).toEqual(['a', 'b\\c']);
  });

  it('strips all quote characters so unescaped inner quotes disappear', () => {
    expect(pathToArray(`a["b'c"]`)).toEqual(['a', 'bc']);
    expect(pathToArray(`a['b"c']`)).toEqual(['a', 'bc']);
    expect(pathToArray(`a[\`b'"c\`]`)).toEqual(['a', 'bc']);
  });

  it('edge cases reflecting current behaviour', () => {
    expect(pathToArray('a["b\\x"]')).toEqual(['a', 'b\\x']);
    expect(pathToArray('a]b')).toBeUndefined();
    expect(pathToArray(']a')).toBeUndefined();
    expect(pathToArray('a[0')).toBeUndefined();
    expect(pathToArray('a[0]  . b')).toEqual(['a', '0', 'b']);
    expect(pathToArray('a\\b.c')).toEqual(['a\\b', 'c']);
    expect(pathToArray('a[0], b')).toEqual(['a', '0', 'b']);
    expect(pathToArray('a["b\\"]')).toEqual(['a', 'b\\']);
    expect(pathToArray('a[0]x[1]')).toEqual(['a', '0x', '1']);
    expect(pathToArray('a["b"1]')).toEqual(['a', 'b1']);
    expect(pathToArray('a[1,]')).toBeUndefined();
  });


  it('handles unicode and dots-inside-brackets by splitting', () => {
    expect(pathToArray('a.☃.b')).toEqual(['a', '☃', 'b']);
    expect(pathToArray('a[b.c]')).toEqual(['a', 'b', 'c']);
  });

  it('accepts numeric keys with leading zeros and deep nesting', () => {
    expect(pathToArray(' arr[0001][02].x ')).toEqual(['arr', '0001', '02', 'x']);
  });
});
