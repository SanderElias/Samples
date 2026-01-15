import {
  HTTP_INTERCEPTORS,
  HttpContext,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injector, runInInjectionContext } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom, of, Subject } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { HttpGetCachingInterceptor } from './caching.interceptor';
import {
  enableHttpCache,
  httpCacheExpiryTime,
  HttpCachingRevisionName,
  purgeHttpCache
} from './caching.util';
import { HttpCache } from './http-cache.service';

describe('HttpGetCachingInterceptor', () => {
  let httpCache: HttpCache;
  let interceptor: typeof HttpGetCachingInterceptor;
  let injector: Injector;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpCache,
        {
          provide: HTTP_INTERCEPTORS,
          useValue: HttpGetCachingInterceptor,
          multi: true
        },
        { provide: HttpCachingRevisionName, useValue: 'rev' }
      ]
    });
    httpCache = TestBed.inject(HttpCache);
    injector = TestBed.inject(Injector);
    interceptor = HttpGetCachingInterceptor;
  });

  it('should cache successful GET requests when enableHttpCache is set', async () => {
    const req = new HttpRequest('GET', '/api/data', {
      context: new HttpContext().set(enableHttpCache, true)
    });
    const response = new HttpResponse({ status: 200, body: { foo: 'bar' } });
    vi.spyOn(httpCache, 'get').mockReturnValue(undefined);
    vi.spyOn(httpCache, 'set');
    const next = () => of(response);
    const res = await firstValueFrom(
      runInInjectionContext(injector, () => interceptor(req, next))
    );
    expect(httpCache.set).toHaveBeenCalledWith(
      '/api/data',
      response,
      undefined,
      undefined
    );
    expect(res).toEqual(response);
  });

  it('should not cache if enableHttpCache is not set', async () => {
    const req = new HttpRequest('GET', '/api/data');
    const response = new HttpResponse({ status: 200, body: { foo: 'bar' } });
    const next = () => of(response);
    const res = await firstValueFrom(
      runInInjectionContext(injector, () => interceptor(req, next))
    );
    expect(res).toEqual(response);
  });

  it('should purge cache on mutating requests', async () => {
    const req = new HttpRequest('POST', '/api/data', null, {
      context: new HttpContext().set(enableHttpCache, true)
    });
    vi.spyOn(httpCache, 'purge');
    const next = () => of(new HttpResponse({ status: 201 }));
    await firstValueFrom(
      runInInjectionContext(injector, () => interceptor(req, next))
    );
    expect(httpCache.purge).toHaveBeenCalledWith('/api/data');
  });

  it('should return cached entry if present', async () => {
    const req = new HttpRequest('GET', '/api/data', {
      context: new HttpContext().set(enableHttpCache, true)
    });
    const cachedResponse = new HttpResponse({
      status: 200,
      body: { foo: 'cached' }
    });
    vi.spyOn(httpCache, 'get').mockReturnValue(cachedResponse);
    const next = () =>
      of(new HttpResponse({ status: 200, body: { foo: 'bar' } }));
    const res = await firstValueFrom(
      runInInjectionContext(injector, () => interceptor(req, next))
    );
    expect(res).toEqual(cachedResponse);
  });

  it('should purge cache when purgeHttpCache context is set', async () => {
    const req = new HttpRequest('GET', '/api/data', {
      context: new HttpContext()
        .set(enableHttpCache, true)
        .set(purgeHttpCache, true)
    });
    vi.spyOn(httpCache, 'purge');
    const next = () =>
      of(new HttpResponse({ status: 200, body: { foo: 'bar' } }));
    await firstValueFrom(
      runInInjectionContext(injector, () => interceptor(req, next))
    );
    expect(httpCache.purge).toHaveBeenCalledWith('/api/data');
  });

  it('should use revision from query param when revision monitoring enabled', async () => {
    const reqUrl = 'http://localhost/api/data?rev=abc';
    const req = new HttpRequest('GET', reqUrl, {
      context: new HttpContext().set(enableHttpCache, true)
    });
    const response = new HttpResponse({ status: 200, body: { foo: 'bar' } });
    vi.spyOn(httpCache, 'get').mockReturnValue(undefined as any);
    vi.spyOn(httpCache, 'set');
    const next = () => of(response);
    const res = await firstValueFrom(
      runInInjectionContext(injector, () => interceptor(req, next))
    );
    // first param is the full url, second param should be the extracted revision
    expect(httpCache.get).toHaveBeenCalledWith(reqUrl, 'abc');
    expect(httpCache.set).toHaveBeenCalledWith(
      reqUrl,
      response,
      'abc',
      undefined
    );
    expect(res).toEqual(response);
  });

  it('should not cache non-HttpResponse events', async () => {
    const req = new HttpRequest('GET', '/api/data', {
      context: new HttpContext().set(enableHttpCache, true)
    });
    vi.spyOn(httpCache, 'set');
    const next = () => of({ some: 'event' } as any);
    const res = await firstValueFrom(
      runInInjectionContext(injector, () => interceptor(req, next))
    );
    expect(httpCache.set).not.toHaveBeenCalled();
    expect(res).toEqual({ some: 'event' });
  });

  it('should not cache unsuccessful responses', async () => {
    const req = new HttpRequest('GET', '/api/data', {
      context: new HttpContext().set(enableHttpCache, true)
    });
    const response = new HttpResponse({ status: 404, body: {} });
    vi.spyOn(httpCache, 'set');
    vi.spyOn(httpCache, 'get').mockReturnValue(undefined);
    const next = () => of(response);
    const res = await firstValueFrom(
      runInInjectionContext(injector, () => interceptor(req, next))
    );
    expect(httpCache.set).not.toHaveBeenCalled();
    expect(res).toEqual(response);
  });

  it('should not cache responses with status < 200', async () => {
    const req = new HttpRequest('GET', '/api/data', {
      context: new HttpContext().set(enableHttpCache, true)
    });
    const response = new HttpResponse({ status: 199, body: {} });
    vi.spyOn(httpCache, 'set');
    vi.spyOn(httpCache, 'get').mockReturnValue(undefined);
    const next = () => of(response);
    const res = await firstValueFrom(
      runInInjectionContext(injector, () => interceptor(req, next))
    );
    expect(httpCache.set).not.toHaveBeenCalled();
    expect(res).toEqual(response);
  });

  it('should forward explicit expiry from context', async () => {
    const req = new HttpRequest('GET', '/api/data', {
      context: new HttpContext()
        .set(enableHttpCache, true)
        .set(httpCacheExpiryTime, 500)
    });
    const response = new HttpResponse({ status: 200, body: { foo: 'bar' } });
    vi.spyOn(httpCache, 'get').mockReturnValue(undefined as any);
    vi.spyOn(httpCache, 'set');
    const next = () => of(response);
    const res = await firstValueFrom(
      runInInjectionContext(injector, () => interceptor(req, next))
    );
    expect(httpCache.set).toHaveBeenCalledWith(
      '/api/data',
      response,
      undefined,
      500
    );
    expect(res).toEqual(response);
  });

  it('should extract revision from relative url', async () => {
    const req = new HttpRequest('GET', '/api/data?rev=xyz', {
      context: new HttpContext().set(enableHttpCache, true)
    });
    const response = new HttpResponse({ status: 200, body: { foo: 'bar' } });
    vi.spyOn(httpCache, 'get').mockReturnValue(undefined as any);
    vi.spyOn(httpCache, 'set');
    const next = () => of(response);
    const res = await firstValueFrom(
      runInInjectionContext(injector, () => interceptor(req, next))
    );
    expect(httpCache.get).toHaveBeenCalledWith('/api/data?rev=xyz', 'xyz');
    expect(httpCache.set).toHaveBeenCalledWith(
      '/api/data?rev=xyz',
      response,
      'xyz',
      undefined
    );
    expect(res).toEqual(response);
  });

  it('should consider empty revision param as undefined', async () => {
    const reqUrl = 'http://localhost/api/data?rev=';
    const req = new HttpRequest('GET', reqUrl, {
      context: new HttpContext().set(enableHttpCache, true)
    });
    vi.spyOn(httpCache, 'get').mockReturnValue(undefined as any);
    const next = () =>
      of(new HttpResponse({ status: 200, body: { foo: 'bar' } }));
    await firstValueFrom(
      runInInjectionContext(injector, () => interceptor(req, next))
    );
    expect(httpCache.get).toHaveBeenCalledWith(reqUrl, undefined);
  });

  it('should not purge on non-mutating non-GET methods', async () => {
    const req = new HttpRequest('HEAD', '/api/data', null, {
      context: new HttpContext().set(enableHttpCache, true)
    });
    vi.spyOn(httpCache, 'purge');
    const next = () => of(new HttpResponse({ status: 200 }));
    await firstValueFrom(
      runInInjectionContext(injector, () => interceptor(req, next))
    );
    expect(httpCache.purge).not.toHaveBeenCalled();
  });

  it('should coalesce concurrent GET requests into a single network request', async () => {
    const req = new HttpRequest('GET', '/api/data', {
      context: new HttpContext().set(enableHttpCache, true)
    });

    const subj = new Subject<HttpResponse<unknown>>();
    let nextCalls = 0;
    const next = () => {
      nextCalls++;
      return subj.asObservable();
    };

    vi.spyOn(httpCache, 'get').mockReturnValue(undefined as any);
    vi.spyOn(httpCache, 'set');

    const p1 = firstValueFrom(
      runInInjectionContext(injector, () => interceptor(req, next))
    );
    const p2 = firstValueFrom(
      runInInjectionContext(injector, () => interceptor(req, next))
    );

    // next should only have been called once because requests are coalesced
    expect(nextCalls).toBe(1);

    const response = new HttpResponse({ status: 200, body: { foo: 'bar' } });
    subj.next(response);
    subj.complete();

    const r1 = await p1;
    const r2 = await p2;

    expect(r1).toEqual(response);
    expect(r2).toEqual(response);
    expect(httpCache.set).toHaveBeenCalledTimes(1);
  });

  it('should remove in-flight entry on error so subsequent request triggers new network call', async () => {
    const req = new HttpRequest('GET', '/api/data', {
      context: new HttpContext().set(enableHttpCache, true)
    });

    let nextCalls = 0;
    const subj1 = new Subject<HttpResponse<unknown>>();
    let subj2: Subject<HttpResponse<unknown>> | undefined;
    const next = () => {
      nextCalls++;
      if (nextCalls === 1) {
        return subj1.asObservable();
      }
      subj2 = new Subject<HttpResponse<unknown>>();
      return subj2.asObservable();
    };

    vi.spyOn(httpCache, 'get').mockReturnValue(undefined as any);

    // subscribe using callbacks so we can capture error without Promise rejection
    const p1 = new Promise(resolve => {
      runInInjectionContext(injector, () => interceptor(req, next)).subscribe({
        next: () => resolve({ ok: true }),
        error: e => resolve({ error: true })
      });
    });

    // ensure subscription happened before emitting the error
    await Promise.resolve();
    // cause the first request to error
    subj1.error(new Error('network'));

    const result1 = await p1;
    expect(result1).toEqual({ error: true });
    expect(nextCalls).toBe(1);

    // Start a new request after the error — this should call next again
    const p2 = new Promise(resolve => {
      runInInjectionContext(injector, () => interceptor(req, next)).subscribe({
        next: v => resolve(v),
        error: e => resolve({ error: true })
      });
    });

    expect(nextCalls).toBe(2);

    const response = new HttpResponse({ status: 200, body: { foo: 'ok' } });
    subj2!.next(response);
    subj2!.complete();

    const r2 = await p2;
    expect(r2).toEqual(response);
  });
});
