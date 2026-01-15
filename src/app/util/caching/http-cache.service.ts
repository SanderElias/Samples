import type { HttpEvent } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { HttpCachingDefaultExpiry, minute } from './caching.util';

/**
 * HttpCache is a service for caching HTTP responses in-memory, with support for cache expiry and revisioning.
 * it is created as a accompany service for the httpCacheInterceptor, but can be used standalone as well.
 * In the rare cases you want to do manual intervention of the cache. (e.g. purge on user logout)
 *
 * - Caches HTTP responses by URL (normalized to hostname + pathname).
 * - Supports cache expiry per entry, with automatic cleanup.
 * - Optionally supports revision tokens to invalidate cache on data changes.
 * - Used to reduce redundant HTTP requests and improve performance in Angular apps.
 *
 * ## Usage
 * Inject this service where you want to cache HTTP responses. Use `get` to retrieve, `set` to store, and `purge` to remove cache entries.
 *
 * @example
 *   cache.set(url, response, revision, 60000); // cache for 60s
 *   const cached = cache.get(url, revision);
 *
 * @see https://angular.io/guide/http
 */
@Injectable({
  providedIn: 'root'
})
export class HttpCache {
  /**
   * Internal cache map. Keys are normalized URLs, values include expiry, revision, and response.
   */
  #cache = new Map<string, { expiresOn: number; revision?: string; expiryTime: number; response: HttpEvent<unknown> }>();
  #lastCleanup = 0;
  #cleanup: undefined | NodeJS.Timeout = undefined;
  /**
   * Default expiry delay (ms) for cache entries, injected from configuration.
   */
  readonly #expiryDelay: number = inject(HttpCachingDefaultExpiry);

  /**
   * Normalize a URL to a cache key (hostname + pathname, no trailing slash).
   * @param url The raw URL string.
   * @returns The normalized cache key.
   */
  cleanUrl = (url: string): string => {
    const u = new URL(url);
    const clean = `${u.hostname}${u.pathname}`;
    const cleanUrl = clean.endsWith('/') && clean.length > 1 ? clean.slice(0, -1) : clean;
    return cleanUrl;
  };

  /**
   * Retrieve a cached HTTP response if present, valid, and (optionally) matching the revision.
   * If found, extends the expiry time and schedules cleanup.
   * @param rawUrl The original request URL.
   * @param revision Optional revision string to match cache entry.
   * @returns The cached HttpEvent, or undefined if not found/expired.
   */
  get(rawUrl: string, revision?: string): HttpEvent<unknown> | undefined {
    const url = this.cleanUrl(rawUrl);
    const entry = this.#cache.get(url);
    if (entry) {
      // when no revision is provided, always consider it a match
      const revisionMatches = !revision ? true : revision === entry.revision;
      if (revisionMatches && Date.now() < entry.expiresOn) {
        entry.expiresOn = Date.now() + entry.expiryTime; // extend expiry
        this.scheduleCacheCleanup(entry.expiryTime + 50); // make sure there is a cleanup scheduled
        return entry.response;
      }
      // its expired or revision doesn't match, so purge it
      this.#cache.delete(url);
    }
  }

  /**
   * Store a HTTP response in the cache, with optional revision and expiry time.
   * @param rawUrl The original request URL.
   * @param response The HttpEvent to cache.
   * @param revision Optional revision string for cache invalidation.
   * @param expiryTime Optional expiry time in ms (default: injected expiry delay).
   */
  set(rawUrl: string, response: HttpEvent<unknown>, revision?: string, expiryTime?: number): void {
    const url = this.cleanUrl(rawUrl);
    expiryTime ??= this.#expiryDelay;
    this.scheduleCacheCleanup(expiryTime + 50); // schedule cleanup after expiry
    this.#cache.set(url, { expiresOn: Date.now() + expiryTime, expiryTime, revision, response });
  }

  /**
   * Remove a cached entry for a given URL.
   * @param rawUrl The original request URL.
   */
  purge(rawUrl: string): void {
    const url = this.cleanUrl(rawUrl);
    this.#cache.delete(url);
  }

  /**
   * Remove all expired cache entries immediately.
   * Called internally and by scheduled cleanup.
   */
  #cleanupExpiredEntries = (): void => {
    const now = Date.now();
    for (const [key, entry] of this.#cache.entries()) {
      if (now > entry.expiresOn) {
        this.#cache.delete(key);
      }
    }
  };

  /**
   * Schedule a cache cleanup after a delay. If enough time has passed since the last cleanup, runs immediately.
   * Avoids cache bloat by cleaning up after bursts of requests.
   * @param delay Delay in ms before cleanup.
   */
  scheduleCacheCleanup(delay: number): void {
    clearTimeout(this.#cleanup);
    if (this.#lastCleanup + Math.min(15 * minute, 4 * delay) < Date.now()) {
      // perform cleanup immediately when it was a while since last cleanup
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
