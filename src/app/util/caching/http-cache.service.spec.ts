import { describe, it, expect, beforeEach, vi } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { HttpCache } from './http-cache.service';
import { HttpCachingDefaultExpiry } from './caching.util';
import type { HttpEvent } from '@angular/common/http';

function mockEvent(data: any): HttpEvent<unknown> {
  return { type: 0, ...data } as HttpEvent<unknown>;
}

describe('HttpCache (Angular DI)', () => {
  let cache: HttpCache;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpCache, { provide: HttpCachingDefaultExpiry, useValue: 100 }]
    });
    cache = TestBed.inject(HttpCache);
  });

  it('should be created via Angular DI', () => {
    expect(cache).toBeInstanceOf(HttpCache);
  });

  it('should store and retrieve values by key', () => {
    cache.set('https://test.com/api', mockEvent({ value: 42 }));
    expect(cache.get('https://test.com/api')).toEqual(mockEvent({ value: 42 }));
  });

  it('should return undefined for missing keys', () => {
    expect(cache.get('https://missing.com')).toBeUndefined();
  });

  it('should remove values by key using purge', () => {
    cache.set('https://remove.com', mockEvent({ value: 'x' }));
    cache.purge('https://remove.com');
    expect(cache.get('https://remove.com')).toBeUndefined();
  });

  it('should respect expiry time', () => {
    cache.set('https://expire.com', mockEvent({ value: 'exp' }), undefined, 10);
    expect(cache.get('https://expire.com')).toEqual(mockEvent({ value: 'exp' }));
    // Simulate expiry
    const spy = vi.spyOn(Date, 'now').mockReturnValue(Date.now() + 20);
    expect(cache.get('https://expire.com')).toBeUndefined();
    spy.mockRestore();
  });

  it('should match revision if provided', () => {
    cache.set('https://rev.com', mockEvent({ value: 'r1' }), 'rev1');
    expect(cache.get('https://rev.com', 'rev1')).toEqual(mockEvent({ value: 'r1' }));
    expect(cache.get('https://rev.com', 'rev2')).toBeUndefined();
  });

  it('should extend expiry on access', () => {
    cache.set('https://extend.com', mockEvent({ value: 'e' }), undefined, 10);
    const first = cache.get('https://extend.com');
    expect(first).toEqual(mockEvent({ value: 'e' }));
    // Access again should extend expiry
    const second = cache.get('https://extend.com');
    expect(second).toEqual(mockEvent({ value: 'e' }));
  });

  it('should clean url for cache key', () => {
    cache.set('https://test.com/api/', mockEvent({ value: 'clean' }));
    expect(cache.get('https://test.com/api')).toEqual(mockEvent({ value: 'clean' }));
  });
});
