import {
  HttpContext,
  HttpContextToken,
  HttpResponse
} from "./chunk-LJ2EIP3L.js";
import {
  Injectable,
  InjectionToken,
  finalize,
  inject,
  of,
  setClassMetadata,
  shareReplay,
  tap,
  ɵɵdefineInjectable
} from "./chunk-5EIP4NRL.js";

// src/app/util/caching/caching.util.ts
var minute = 60 * 1e3;
var HttpCachingDefaultExpiry = new InjectionToken("HttpGetCachingDefaultExpiry", {
  providedIn: "root",
  factory: () => 5 * minute
});
var HttpCachingRevisionName = new InjectionToken("HttpCachingRevisionName", {
  providedIn: "root",
  factory: () => void 0
});
var enableHttpCache = new HttpContextToken(() => false);
var httpCacheExpiryTime = new HttpContextToken(() => 0);
var purgeHttpCache = new HttpContextToken(() => void 0);
var addCachingExpiryContext = (httpOptions, milliSeconds) => {
  if (milliSeconds) {
    httpOptions.context ??= new HttpContext();
    httpOptions.context = httpOptions.context.set(httpCacheExpiryTime, milliSeconds);
  }
  return httpOptions;
};
var addCachingContext = (httpOptions, milliSeconds) => {
  httpOptions.context ??= new HttpContext();
  httpOptions.context = httpOptions.context.set(enableHttpCache, true);
  return addCachingExpiryContext(httpOptions, milliSeconds);
};

// src/app/util/caching/http-cache.service.ts
var HttpCache = class _HttpCache {
  constructor() {
    this.#cache = /* @__PURE__ */ new Map();
    this.#lastCleanup = 0;
    this.#cleanup = void 0;
    this.#expiryDelay = inject(HttpCachingDefaultExpiry);
    this.cleanUrl = (url) => {
      try {
        const u = new URL(url);
        const clean = `${u.hostname}${u.pathname}`;
        const cleanUrl = clean.endsWith("/") && clean.length > 1 ? clean.slice(0, -1) : clean;
        return cleanUrl;
      } catch {
        const u = new URL(url, "http://localhost");
        const clean = `${u.hostname}${u.pathname}`;
        return clean.endsWith("/") && clean.length > 1 ? clean.slice(0, -1) : clean;
      }
    };
    this.#cleanupExpiredEntries = () => {
      const now = Date.now();
      for (const [key, entry] of this.#cache.entries()) {
        if (now > entry.expiresOn) {
          this.#cache.delete(key);
        }
      }
    };
  }
  /**
   * Internal cache map. Keys are normalized URLs, values include expiry, revision, and response.
   */
  #cache;
  #lastCleanup;
  #cleanup;
  /**
   * Default expiry delay (ms) for cache entries, injected from configuration.
   */
  #expiryDelay;
  /**
   * Retrieve a cached HTTP response if present, valid, and (optionally) matching the revision.
   * If found, extends the expiry time and schedules cleanup.
   * @param rawUrl The original request URL.
   * @param revision Optional revision string to match cache entry.
   * @returns The cached HttpEvent, or undefined if not found/expired.
   */
  get(rawUrl, revision) {
    const url = this.cleanUrl(rawUrl);
    const entry = this.#cache.get(url);
    if (entry) {
      const revisionMatches = !revision ? true : revision === entry.revision;
      if (revisionMatches && Date.now() < entry.expiresOn) {
        entry.expiresOn = Date.now() + entry.expiryTime;
        this.scheduleCacheCleanup(entry.expiryTime + 50);
        return entry.response;
      }
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
  set(rawUrl, response, revision, expiryTime) {
    const url = this.cleanUrl(rawUrl);
    expiryTime ??= this.#expiryDelay;
    this.scheduleCacheCleanup(expiryTime + 50);
    this.#cache.set(url, {
      expiresOn: Date.now() + expiryTime,
      expiryTime,
      revision,
      response
    });
  }
  /**
   * Remove a cached entry for a given URL.
   * @param rawUrl The original request URL.
   */
  purge(rawUrl) {
    const url = this.cleanUrl(rawUrl);
    this.#cache.delete(url);
  }
  /**
   * Remove all expired cache entries immediately.
   * Called internally and by scheduled cleanup.
   */
  #cleanupExpiredEntries;
  /**
   * Schedule a cache cleanup after a delay. If enough time has passed since the last cleanup, runs immediately.
   * Avoids cache bloat by cleaning up after bursts of requests.
   * @param delay Delay in ms before cleanup.
   */
  scheduleCacheCleanup(delay) {
    clearTimeout(this.#cleanup);
    if (this.#lastCleanup + Math.min(15 * minute, 4 * delay) < Date.now()) {
      this.#lastCleanup = Date.now();
      this.#cleanupExpiredEntries();
      if (this.#cache.size === 0) {
        return;
      }
    }
    this.#cleanup = setTimeout(this.#cleanupExpiredEntries, delay);
  }
  static {
    this.\u0275fac = function HttpCache_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HttpCache)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HttpCache, factory: _HttpCache.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpCache, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/util/caching/caching.interceptor.ts
var inFlightRequests = /* @__PURE__ */ new Map();
function HttpGetCachingInterceptor(req, next) {
  if (!req.context.get(enableHttpCache)) {
    return next(req);
  }
  const httpCache = inject(HttpCache);
  if (req.method !== "GET") {
    if (req.method === "POST" || req.method === "PUT" || req.method === "DELETE" || req.method === "PATCH") {
      httpCache.purge(req.url);
    }
    return next(req);
  }
  if (req.context.has(purgeHttpCache)) {
    httpCache.purge(req.url);
  }
  const revisionName = inject(HttpCachingRevisionName);
  let currentRevision = void 0;
  if (revisionName && req.url.includes(revisionName)) {
    const urlObj = new URL(req.url, "http://localhost");
    currentRevision = urlObj.searchParams.get(revisionName) || void 0;
  }
  const entry = httpCache.get(req.url, currentRevision);
  if (entry) {
    return of(entry);
  }
  const key = `${httpCache.cleanUrl(req.url)}|${currentRevision ?? ""}`;
  const existing = inFlightRequests.get(key);
  if (existing) {
    return existing;
  }
  const request$ = next(req).pipe(
    tap((response) => {
      if (!(response instanceof HttpResponse) || response.status < 200 || response.status >= 300) {
        return;
      }
      const expiry = req.context.get(httpCacheExpiryTime) || void 0;
      httpCache.set(req.url, response, currentRevision, expiry);
    }),
    finalize(() => {
      inFlightRequests.delete(key);
    }),
    // share the single network request among concurrent subscribers
    shareReplay({ bufferSize: 1, refCount: true })
  );
  inFlightRequests.set(key, request$);
  return request$;
}

export {
  addCachingContext,
  HttpCache,
  HttpGetCachingInterceptor
};
