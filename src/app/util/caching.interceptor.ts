import {
  HttpContext,
  HttpContextToken,
  HttpResponse,
  type HttpEvent,
  type HttpHandlerFn,
  type HttpRequest
} from '@angular/common/http';
import { InjectionToken, inject } from '@angular/core';
import { de } from '@faker-js/faker';
import { options } from 'marked';
import { of, tap, type Observable } from 'rxjs';
import { set } from '../bintree/BinNode';

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
    context = context.set(cacheExpiryTime, milliSeconds );
  }
  return {
    context
  };
};

/**
  * adds caching context to the provided httpOptions object.
 */
export const addCachingContext = <T extends { context?: HttpContext }>(options: T, milliSeconds?: number): T => {
  if (!options.context) {
    options.context = new HttpContext();
  }
  options.context = options.context.set(enableCaching, true);
  if (milliSeconds) {
    options.context = options.context.set(cacheExpiryTime, milliSeconds);
  }
  return options;
};

const cache = new Map<string, { expiresOn: number; response: HttpEvent<unknown> }>();

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
  if (!req.context.get(enableCaching) || req.method !== 'GET') {
    return next(req);
  }

  const expiry = req.context.get(cacheExpiryTime) || inject(HttpGetCachingDefaultExpiry);
  const expiresOn = Date.now() + expiry;
  const entry = cache.get(req.urlWithParams);

  if (entry && Date.now() < entry.expiresOn) {
    entry.expiresOn = expiresOn; // extend expiry
    scheduleCacheCleanup(expiry + 50); // make sure there is a cleanup scheduled
    return of(entry.response);
  }

  return next(req).pipe(
    tap(response => {
      if (!(response instanceof HttpResponse) || response.status < 200 || response.status >= 300) {
        return; // only cache successful HttpResponses
      }
      cache.set(req.urlWithParams, { expiresOn, response });
      scheduleCacheCleanup(expiry + 50); // schedule cleanup after expiry
    })
  );
}

/**
 * debounced cache cleanup function.
 * This function will remove expired cache entries
 * after the specified delay. also, it makes sure
 * that cleanup is not scheduled too frequently
 * and performs immediate cleanup if necessary.
 */
let lastCleanup = 0;
let cleanup: undefined | NodeJS.Timeout = undefined;
function scheduleCacheCleanup(delay: number) {
  clearTimeout(cleanup);
  if (lastCleanup + Math.min(15 * minute, 4 * delay) < Date.now()) {
    // perform cleanup immediately when it a while since last cleanup
    // to avoid cache bloating in case of many requests
    lastCleanup = Date.now();
    cleanupExpiredEntries();
    if (cache.size === 0) {
      return; // don't reschedule if cache is empty
    }
  }
  cleanup = setTimeout(cleanupExpiredEntries, delay);
}

const cleanupExpiredEntries = () => {
  const now = Date.now();
  for (const [key, entry] of cache.entries()) {
    if (now > entry.expiresOn) {
      cache.delete(key);
    }
  }
};
