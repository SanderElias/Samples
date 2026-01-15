import { HttpContext } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import {
  HttpCachingDefaultExpiry,
  HttpCachingRevisionName,
  addCachingContext,
  addCachingExpiryContext,
  enableCache,
  enableHttpCache,
  httpCacheExpiryTime,
  minute,
  purgeCache,
  purgeHttpCache
} from './caching.util';

describe('caching.util helpers', () => {
  it('minute constant is 60s', () => {
    expect(minute).toBe(60 * 1000);
  });

  it('default injection tokens provide expected values', () => {
    // The tokens are providedIn root via factories, we can inject them
    TestBed.configureTestingModule({});
    const expiry = TestBed.inject(HttpCachingDefaultExpiry);
    const rev = TestBed.inject(HttpCachingRevisionName);
    expect(expiry).toBe(5 * minute);
    expect(rev).toBeUndefined();
  });

  it('enableCache creates context with enable flag and optional expiry', () => {
    const opts1 = enableCache();
    expect(opts1.context.get(enableHttpCache)).toBe(true);
    expect(opts1.context.get(httpCacheExpiryTime)).toBe(0);

    const opts2 = enableCache(12345);
    expect(opts2.context.get(enableHttpCache)).toBe(true);
    expect(opts2.context.get(httpCacheExpiryTime)).toBe(12345);
  });

  it('addCachingExpiryContext adds expiry when provided', () => {
    const opts: any = {};
    addCachingExpiryContext(opts, 500);
    expect(opts.context.get(httpCacheExpiryTime)).toBe(500);

    const opts2: any = {};
    addCachingExpiryContext(opts2);
    expect(opts2.context).toBeUndefined();
  });

  it('addCachingContext sets enable flag and optional expiry', () => {
    const opts: any = {};
    addCachingContext(opts, 600);
    expect(opts.context.get(enableHttpCache)).toBe(true);
    expect(opts.context.get(httpCacheExpiryTime)).toBe(600);

    const opts2: any = {};
    addCachingContext(opts2);
    expect(opts2.context.get(enableHttpCache)).toBe(true);
    expect(opts2.context.get(httpCacheExpiryTime)).toBe(0);
  });

  it('purgeCache sets purge token in context', () => {
    const opts: any = {};
    purgeCache(opts);
    expect(opts.context.has(purgeHttpCache)).toBe(true);
  });

  it('addCachingExpiryContext uses existing context when present', () => {
    const opts: any = { context: new HttpContext() };
    addCachingExpiryContext(opts, 777);
    expect(opts.context.get(httpCacheExpiryTime)).toBe(777);
  });

  it('addCachingContext preserves existing context and sets values', () => {
    const opts: any = { context: new HttpContext() };
    addCachingContext(opts, 888);
    expect(opts.context.get(enableHttpCache)).toBe(true);
    expect(opts.context.get(httpCacheExpiryTime)).toBe(888);
  });

  it('enableCache treats 0 as falsy and does not set expiry', () => {
    const opts = enableCache(0 as any);
    expect(opts.context.get(enableHttpCache)).toBe(true);
    // passing 0 should not set the expiry (0 is falsy)
    expect(opts.context.get(httpCacheExpiryTime)).toBe(0);
  });

  it('context tokens default values behave as expected', () => {
    const ctx = new HttpContext();
    expect(ctx.get(enableHttpCache)).toBe(false);
    expect(ctx.get(httpCacheExpiryTime)).toBe(0);
    expect(ctx.get(purgeHttpCache)).toBeUndefined();
  });
});
