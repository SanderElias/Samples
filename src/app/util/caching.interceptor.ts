import {
  HttpContext,
  HttpContextToken,
  HttpResponse,
  type HttpEvent,
  type HttpHandlerFn,
  type HttpRequest
} from '@angular/common/http';
import { Injectable, InjectionToken, inject } from '@angular/core';
import { of, tap, type Observable } from 'rxjs';

const minute = 60 * 1000;
const defaultExpiry = 5 * minute;

/**
 * Set the default expiry time for cached GET requests in milliseconds.
 * when not set, the default is 5 minutes.
 */
export const HttpGetCachingDefaultExpiry = new InjectionToken<number>('HttpGetCachingDefaultExpiry', {
  providedIn: 'root',
  factory: () => defaultExpiry
});

/**
 * HttpContextToken to enable caching for a request.
 */
export const enableCaching = new HttpContextToken<boolean>(() => false);

/**
 * HttpContextToken to set cache expiry time for a request. in milliseconds.
 * when not set it falls back to the `HttpGetCachingDefaultExpiry` injection token.
 */
export const cacheExpiryTime = new HttpContextToken<number>(() => 0);

/**
 * returns an object that can be passed as options
 * to HTTP methods to enable caching for the request.
 *
 * @param milliSeconds optional number of milliseconds to cache the response
 */
export const enableCache = (milliSeconds?: number) => {
  let context = new HttpContext().set(enableCaching, true);
  if (milliSeconds) {
    context = context.set(cacheExpiryTime, milliSeconds);
  }
  return {
    context
  };
};

/**
 * adds caching context to the provided httpOptions object.
 */
export const addCachingContext = <T extends Record<string, unknown> & { context?: HttpContext }>(
  options: T,
  milliSeconds?: number
) => {
  if (!options.context) {
    options.context = new HttpContext();
  }
  options.context = options.context.set(enableCaching, true);
  if (milliSeconds) {
    options.context = options.context.set(cacheExpiryTime, milliSeconds);
  }
  return options;
};

// Cache is now managed by the injectable `HttpCache` service

/**
 * HTTP interceptor that caches GET requests.
 * it is an opt-in interceptor, so it only caches requests
 * that have the `enableCaching` context token set to true.
 * To enable caching for a specific request,
 * use the `enableCache` function when creating the request.
 *
 * Example:
 * ```typescript
 * this.http.get('/api/data', enableCache(30000)) // cache for 30 seconds
 * ```
 *
 * Note: This interceptor only caches successful GET requests (status code 2xx).
 */
export function HttpGetCachingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  if (!req.context.get(enableCaching)) {
    return next(req);
  }
  const httpCache = inject(HttpCache);
  if (req.method !== 'GET') {
    if (req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE' || req.method === 'PATCH') {
      // invalidate cache on mutating requests
      httpCache.purge(req.url);
      // console.log(`Cache invalidated for ${req.url} due to ${req.method} request.`);
    }
    return next(req);
  }

  const entry = httpCache.get(req.url);

  if (entry) {
    return of(entry);
  }
  return next(req).pipe(
    tap(response => {
      if (!(response instanceof HttpResponse) || response.status < 200 || response.status >= 300) {
        return; // only cache successful HttpResponses
      }
      httpCache.set(req.url, response);
    })
  );
}

@Injectable({
  providedIn: 'root'
})
export class HttpCache {
  #cache = new Map<string, { expiresOn: number; response: HttpEvent<unknown> }>();
  #lastCleanup = 0;
  #cleanup: undefined | NodeJS.Timeout = undefined;
  readonly #expiryDelay = inject(HttpGetCachingDefaultExpiry);

  cleanUrl = (url: string) => {
    const u = new URL(url);
    const clean = `${u.hostname}${u.pathname}`;
    const cleanUrl = clean.endsWith('/') && clean.length > 1 ? clean.slice(0, -1) : clean;
    return cleanUrl;
  };

  get(rawUrl: string): HttpEvent<unknown> | undefined {
    const url = this.cleanUrl(rawUrl);
    const entry = this.#cache.get(url);
    if (entry) {
      if (Date.now() < entry.expiresOn) {
        entry.expiresOn = Date.now() + this.#expiryDelay; // extend expiry
        this.scheduleCacheCleanup(this.#expiryDelay + 50); // make sure there is a cleanup scheduled
        return entry.response;
      }
      this.#cache.delete(url);
    }
  }

  set(rawUrl: string, response: HttpEvent<unknown>) {
    const url = this.cleanUrl(rawUrl);
    this.scheduleCacheCleanup(this.#expiryDelay + 50); // schedule cleanup after expiry
    this.#cache.set(url, { expiresOn: Date.now() + this.#expiryDelay, response });
  }

  purge(rawUrl: string) {
    const url = this.cleanUrl(rawUrl);
    this.#cache.delete(url);
  }

  #cleanupExpiredEntries = () => {
    const now = Date.now();
    for (const [key, entry] of this.#cache.entries()) {
      if (now > entry.expiresOn) {
        this.#cache.delete(key);
      }
    }
  };

  scheduleCacheCleanup(delay: number) {
    clearTimeout(this.#cleanup);
    if (this.#lastCleanup + Math.min(15 * minute, 4 * delay) < Date.now()) {
      // perform cleanup immediately when it a while since last cleanup
      // to avoid cache bloating in case of many requests
      this.#lastCleanup = Date.now();
      this.#cleanupExpiredEntries();
      if (this.#cache.size === 0) {
        return; // don't reschedule if cache is empty
      }
    }
    this.#cleanup = setTimeout(this.#cleanupExpiredEntries, delay);
  }
}
