import {
  HTTP_INTERCEPTORS,
  HttpContext,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injector, runInInjectionContext } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom, of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { HttpGetCachingInterceptor } from './caching.interceptor';
import { enableHttpCache, purgeHttpCache, HttpCachingRevisionName } from './caching.util';
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
      0
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
      context: new HttpContext().set(enableHttpCache, true).set(purgeHttpCache, true)
    });
    vi.spyOn(httpCache, 'purge');
    const next = () => of(new HttpResponse({ status: 200, body: { foo: 'bar' } }));
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
    expect(httpCache.set).toHaveBeenCalledWith(reqUrl, response, 'abc', 0);
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

  it('should consider empty revision param as undefined', async () => {
    const reqUrl = 'http://localhost/api/data?rev=';
    const req = new HttpRequest('GET', reqUrl, {
      context: new HttpContext().set(enableHttpCache, true)
    });
    vi.spyOn(httpCache, 'get').mockReturnValue(undefined as any);
    const next = () => of(new HttpResponse({ status: 200, body: { foo: 'bar' } }));
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
});
