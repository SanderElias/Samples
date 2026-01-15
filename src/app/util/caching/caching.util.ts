import { HttpContext, HttpContextToken } from '@angular/common/http';
import { InjectionToken } from '@angular/core';

export const minute = 60 * 1000;

/**
 * InjectionToken to set the default expiry time for cached GET requests in milliseconds.
 * when not set, the default is 5 minutes.
 */
export const HttpCachingDefaultExpiry = new InjectionToken<number>(
  'HttpGetCachingDefaultExpiry',
  {
    providedIn: 'root',
    factory: () => 5 * minute
  }
);

/**
 * InjectionToken, when set, it will monitor the request parameters for this string, and use it to
 * check validity of the cache. If the revision changes, the cache will be invalidated.
 */
export const HttpCachingRevisionName = new InjectionToken<string | undefined>(
  'HttpCachingRevisionName',
  {
    providedIn: 'root',
    factory: () => undefined
  }
);

/**
 * HttpContextToken to enable caching for a request.
 */
export const enableHttpCache = new HttpContextToken<boolean>(() => false);

/**
 * HttpContextToken to set cache expiry time for a request. in milliseconds.
 * when not set it falls back to the `HttpGetCachingDefaultExpiry` injection token.
 */
export const httpCacheExpiryTime = new HttpContextToken<number>(() => 0);

/**
 * HttpContextToken to to purge cache for the current url.
 * when added to the request context, it will force purge the cache
 * any value will do, it is the presence of the token that matters.
 */
export const purgeHttpCache = new HttpContextToken<unknown>(() => undefined);

/**
 * Utility, returns an httpOptions object that has the
 * caching context enabled. This object
 * can be passed as options to any httpClient request.
 * to HTTP methods to enable caching for the request.
 *
 * @param milliSeconds optional number of milliseconds to cache the response
 */
export const enableCache = (milliSeconds?: number) => {
  let context = new HttpContext().set(enableHttpCache, true);
  if (milliSeconds) {
    context = context.set(httpCacheExpiryTime, milliSeconds);
  }
  return {
    context
  };
};

/**
 * Utility that adds caching expiry context to the provided httpOptions object.
 * @param httpOptions
 * @param milliSeconds
 * @returns
 */
export const addCachingExpiryContext = <
  T extends Record<string, unknown> & { context?: HttpContext }
>(
  httpOptions: T,
  milliSeconds?: number
) => {
  if (milliSeconds) {
    httpOptions.context ??= new HttpContext();
    httpOptions.context = httpOptions.context.set(
      httpCacheExpiryTime,
      milliSeconds
    );
  }
  return httpOptions;
};

/**
 * Utility that add the caching context to the provided httpOptions object.
 * optionally also adds the expiry time context.
 * @param httpOptions
 * @param milliSeconds
 * @returns
 */
export const addCachingContext = <
  T extends Record<string, unknown> & { context?: HttpContext }
>(
  httpOptions: T,
  milliSeconds?: number
) => {
  httpOptions.context ??= new HttpContext();
  httpOptions.context = httpOptions.context.set(enableHttpCache, true);
  return addCachingExpiryContext(httpOptions, milliSeconds);
};

/**
 * Utility that adds the purge cache context to the provided httpOptions object.
 * @param httpOptions
 */
export const purgeCache = <
  T extends Record<string, unknown> & { context?: HttpContext }
>(
  httpOptions: T
) => {
  httpOptions.context ??= new HttpContext();
  httpOptions.context = httpOptions.context.set(purgeHttpCache, true);
  return httpOptions;
};
