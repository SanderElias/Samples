import { HttpResponse, type HttpEvent, type HttpHandlerFn, type HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { of, tap, type Observable } from 'rxjs';
import { enableHttpCache, httpCacheExpiryTime, HttpCachingRevisionName, purgeHttpCache } from './caching.util';
import { HttpCache } from './http-cache.service';

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
  if (!req.context.get(enableHttpCache)) {
    return next(req);
  }
  const httpCache = inject(HttpCache);
  if (req.method !== 'GET') {
    if (req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE' || req.method === 'PATCH') {
      // invalidate cache on mutating requests
      httpCache.purge(req.url);
    }
    return next(req);
  }

  // purge the cache when the user added the contextToken
  if (req.context.has(purgeHttpCache)) {
    httpCache.purge(req.url);
  }

  // set a revision if the monitoring is enable. it stays undefined otherwise
  const revisionName = inject(HttpCachingRevisionName);
  let currentRevision: string | undefined = undefined;
  if (revisionName && req.url.includes(revisionName)) {
    // only when the string is present in the url it makes sense to look for it
    const urlObj = new URL(req.url);
    // the presence of the string doesn't mean its in the search params.
    // also we don't care about falsy values, so we default to undefined when not present
    currentRevision = urlObj.searchParams.get(revisionName) || undefined;
  }

  const entry = httpCache.get(req.url, currentRevision);

  if (entry) {
    return of(entry);
  }
  return next(req).pipe(
    tap(response => {
      if (!(response instanceof HttpResponse) || response.status < 200 || response.status >= 300) {
        return; // only cache successful HttpResponses
      }
      httpCache.set(req.url, response, currentRevision, req.context.get(httpCacheExpiryTime));
    })
  );
}
