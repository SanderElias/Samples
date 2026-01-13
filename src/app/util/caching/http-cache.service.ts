import type { HttpEvent } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { HttpCachingDefaultExpiry, minute } from './caching.util';

@Injectable({
  providedIn: 'root'
})
export class HttpCache {
  #cache = new Map<string, { expiresOn: number; revision?: string; expiryTime: number; response: HttpEvent<unknown> }>();
  #lastCleanup = 0;
  #cleanup: undefined | NodeJS.Timeout = undefined;
  readonly #expiryDelay: number = inject(HttpCachingDefaultExpiry);

  cleanUrl = (url: string) => {
    const u = new URL(url);
    const clean = `${u.hostname}${u.pathname}`;
    const cleanUrl = clean.endsWith('/') && clean.length > 1 ? clean.slice(0, -1) : clean;
    return cleanUrl;
  };

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
      this.#cache.delete(url);
    }
  }

  set(rawUrl: string, response: HttpEvent<unknown>, revision?: string, expiryTime?: number) {
    const url = this.cleanUrl(rawUrl);
    expiryTime ??= this.#expiryDelay;
    this.scheduleCacheCleanup(expiryTime + 50); // schedule cleanup after expiry
    this.#cache.set(url, { expiresOn: Date.now() + expiryTime, expiryTime, revision, response });
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
