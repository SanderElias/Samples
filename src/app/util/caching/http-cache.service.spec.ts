import { beforeEach, describe, expect, it } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { HttpCache } from './http-cache.service';

describe('HttpCache (Angular DI)', () => {
  let cache: HttpCache;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpCache]
    });
    cache = TestBed.inject(HttpCache);
  });

  it('should be created via Angular DI', () => {
    expect(cache).toBeInstanceOf(HttpCache);
  });

  it('should store and retrieve values by key', () => {
    cache.put('test-key', 'test-value');
    expect(cache.get('test-key')).toBe('test-value');
  });

  it('should return undefined for missing keys', () => {
    expect(cache.get('missing-key')).toBeUndefined();
  });

  it('should remove values by key', () => {
    cache.put('remove-key', 'value');
    cache.remove('remove-key');
    expect(cache.get('remove-key')).toBeUndefined();
  });

  it('should clear all cached values', () => {
    cache.put('key1', 'value1');
    cache.put('key2', 'value2');
    cache.clear();
    expect(cache.get('key1')).toBeUndefined();
    expect(cache.get('key2')).toBeUndefined();
  });

  it('should overwrite values for the same key', () => {
    cache.put('dup-key', 'first');
    cache.put('dup-key', 'second');
    expect(cache.get('dup-key')).toBe('second');
  });
});
