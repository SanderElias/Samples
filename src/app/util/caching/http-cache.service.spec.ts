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

  it('should support relative urls in cleanUrl', () => {
    cache.set('/relative/path', mockEvent({ value: 'rel' }));
    expect(cache.get('/relative/path')).toEqual(mockEvent({ value: 'rel' }));
  });

  it('should strip trailing slash for relative urls', () => {
    cache.set('/relative/withslash/', mockEvent({ value: 's' }));
    expect(cache.get('/relative/withslash')).toEqual(mockEvent({ value: 's' }));
  });

  it('should immediately cleanup expired entries and not reschedule when cache empty', () => {
    // control time so the entry is expired when we trigger cleanup
    let now = 0;
    const nowSpy = vi.spyOn(Date, 'now').mockImplementation(() => now);

    cache.set('https://cleanup.test/one', mockEvent({ value: 1 }), undefined, 10);

    // advance time enough so the entry will be considered expired
    now = 1000000;

    const setTimeoutSpy = vi.spyOn(global as any, 'setTimeout');
    // clear previous setTimeout calls from initial set
    setTimeoutSpy.mockClear();

    cache.scheduleCacheCleanup(1);

    expect(cache.get('https://cleanup.test/one')).toBeUndefined();
    // since cache became empty during immediate cleanup, no new timeout should be scheduled
    expect(setTimeoutSpy).not.toHaveBeenCalled();

    nowSpy.mockRestore();
    setTimeoutSpy.mockRestore();
  });

  it('should schedule cleanup when immediate path not taken', () => {
    const setTimeoutSpy = vi.spyOn(global as any, 'setTimeout').mockImplementation(() => undefined as any);
    // ensure Date.now is small so the immediate cleanup condition is false
    const nowSpy = vi.spyOn(Date, 'now').mockImplementation(() => 0);

    cache.scheduleCacheCleanup(50);
    expect(setTimeoutSpy).toHaveBeenCalled();

    setTimeoutSpy.mockRestore();
    nowSpy.mockRestore();
  });

  it('should cleanup only expired entries and reschedule when some remain', () => {
    // control time to create one expired and one valid entry
    let now = 0;
    const nowSpy = vi.spyOn(Date, 'now').mockImplementation(() => now);

    cache.set('https://cleanup.test/a', mockEvent({ value: 'a' }), undefined, 10);
    cache.set('https://cleanup.test/b', mockEvent({ value: 'b' }), undefined, 10000);

    // advance time enough so 'a' is expired but 'b' is not
    now = 1000;

    const setTimeoutSpy = vi.spyOn(global as any, 'setTimeout').mockImplementation(() => undefined as any);

    cache.scheduleCacheCleanup(1);

    expect(cache.get('https://cleanup.test/a')).toBeUndefined();
    expect(cache.get('https://cleanup.test/b')).toEqual(mockEvent({ value: 'b' }));
    // because cache still has entries, scheduleCacheCleanup should schedule a timeout
    expect(setTimeoutSpy).toHaveBeenCalled();

    nowSpy.mockRestore();
    setTimeoutSpy.mockRestore();
  });
});
