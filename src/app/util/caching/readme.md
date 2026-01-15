# HTTP Caching utilities (README) 🔧

## TL;DR ✅
This module provides an opt-in, in-memory HTTP caching layer for Angular.

- Interceptor: `HttpGetCachingInterceptor` — caches successful GET
  responses when `enableHttpCache` is set.
- Service: `HttpCache` — stores responses with expiry and optional revision
  tokens.
- Helpers: `enableCache`, `addCachingContext`, `addCachingExpiryContext`,
  `purgeCache`.

This README is written for both humans and LLMs. It contains a machine-
readable metadata block and structured sections for easy parsing.

---

📋 Metadata (machine-parsable)

```json
{
  "name": "angular-http-cache",
  "version": "1.0",
  "entrypoints": [
    "HttpGetCachingInterceptor",
    "HttpCache"
  ],
  "tokens": {
    "enableHttpCache": "HttpContextToken<boolean>",
    "httpCacheExpiryTime": "HttpContextToken<number>",
    "purgeHttpCache": "HttpContextToken<unknown>",
    "HttpCachingRevisionName": "InjectionToken<string|undefined>",
    "HttpCachingDefaultExpiry": "InjectionToken<number>"
  },
  "behaviors": [
    "time-based-expiry",
    "revisioning",
    "mutation-purge",
    "request-coalescing"
  ],
  "test-command": "ng test samples --watch=false --coverage"
}
```

---

## Design & API (for humans and LLMs) 💬

### Primary API surface

- `HttpGetCachingInterceptor(req, next)` — checks
  `req.context.get(enableHttpCache)` and:
  - returns cached entry if present (no network request)
  - purges or invalidates cache on mutating methods (POST/PUT/DELETE/
    PATCH) or when `purgeHttpCache` is present
  - coalesces concurrent identical GETs (same normalized URL + revision)
  - writes successful `HttpResponse` (2xx) to `HttpCache`

- `HttpCache` methods:
  - `get(rawUrl: string, revision?: string): HttpEvent | undefined`
  - `set(rawUrl: string, response: HttpEvent, revision?: string,
    expiryTime?: number): void`
  - `purge(rawUrl: string): void`
  - `cleanUrl(url: string): string` — normalizes to host + pathname (no
    trailing slash)

- Utilities:
  - `enableCache(ms?: number)` — returns `{ context }` with
    `enableHttpCache` and optional `httpCacheExpiryTime`
  - `addCachingContext(opts, ms?)`, `addCachingExpiryContext(opts, ms?)`,
    `purgeCache(opts)`

---

## Configuring tokens (DI examples)

You can configure cache tokens using Angular's dependency injection. The
examples below show two common places to provide values: AppModule and
TestBed.

### AppModule (application-wide)

```ts
import { NgModule } from '@angular/core';
import {
  HttpCachingDefaultExpiry,
  HttpCachingRevisionName
} from './caching.util';

@NgModule({
  providers: [
    { provide: HttpCachingDefaultExpiry, useValue: 5 * 60 * 1000 },
    { provide: HttpCachingRevisionName, useValue: 'rev' }
  ]
})
export class AppModule {}
```

### TestBed (unit tests)

```ts
TestBed.configureTestingModule({
  providers: [
    HttpCache,
    { provide: HttpCachingDefaultExpiry, useValue: 100 },
    { provide: HttpCachingRevisionName, useValue: 'rev' }
  ]
});
```

### Optional toggles

You can add optional toggles (for example, to enable coalescing) by
introducing an `InjectionToken<boolean>` such as
`ENABLE_HTTP_COALESCING` and providing it via DI.

---

## Caching fundamentals & invariants 🧠

These rules help humans and LLMs reason about the cache.

- Key normalization: cache keys use `cleanUrl` (hostname + pathname) and
  optionally a `revision` string. Query params only matter for revision
  extraction when `HttpCachingRevisionName` is configured.

- Expiry precedence: per-request `httpCacheExpiryTime` overrides the
  injected default (`HttpCachingDefaultExpiry`). A request-level value of
  `0` is treated as "not set" and defers to the default expiry (the
  interceptor forwards `undefined` in that case).

- Only successful `HttpResponse` values (status >= 200 and < 300) are
  cached. Non-`HttpResponse` events are ignored.

- Mutation safety: mutating requests (POST/PUT/PATCH/DELETE) call
  `HttpCache.purge(url)` for the request URL.

- Coalescing semantics: while a GET is in-flight, identical GETs (same
  normalized key + revision) receive the same shared Observable. The
  in-flight entry is removed on completion or error, so subsequent
  requests receive fresh network behavior.

- Thread-safety/scoped behavior: the cache is in-memory and process-
  scoped (no persistence). For distributed cases you must adopt a server-
  side strategy or persistent client-side store.

---

## Cache invalidation strategies & trade-offs 🔁

Here are common invalidation approaches and recommended trade-offs.

1. Time-based expiry (TTL)

- Mechanism: each cached entry stores an expiry timestamp (expiresOn).
  When `Date.now() >= expiresOn`, the entry is invalid and removed.
- Pros: simple, predictable memory lifetime, low complexity.
- Cons: can serve stale data until TTL expires.
- Use when: data tolerates short staleness (e.g., public content, read-
  mostly resources).

2. Revision tokens (revisioning)

- Mechanism: a `HttpCachingRevisionName` token is configured (e.g., `rev`
  or `etag`). The interceptor extracts the value from URL query params
  (e.g., `?rev=abc`) and stores it with the cache entry. On subsequent
  requests the revision must match for a cache hit.
- Pros: deterministic invalidation when backend updates revision tokens;
  near-zero staleness if backend updates revision.
- Cons: requires backend support and consistent revision propagation.
- Use when: you control server and can add a revision or version param
  (e.g., asset hashes, data revision numbers).

3. Purge on mutation

- Mechanism: mutating requests to a resource trigger `purge(url)` for
  the affected URL.
- Pros: simple and effective for point updates.
- Cons: coarse — may not invalidate related resources unless additional
  logic is added.
- Use when: updates are localized and you want immediate consistency for
  that resource.

4. Hybrid pattern (recommended)

- Combine TTL + revision tokens: short TTLs for general freshness plus
  revision-based invalidation for precise correctness. Purge on
  mutation for immediate effects when applicable.
- This provides a pragmatic balance between staleness, performance, and
  complexity.

---

## Implementation notes for LLMs (how to modify safely) 🤖

Safe mutation points and invariants to preserve:

- LRU eviction: extend `HttpCache` to maintain an ordered structure (Map
  insertion order or a linked list) and enforce `maxEntries`. Ensure
  `get()` updates the recency position so hot items are kept.
- Toggle coalescing: expose an `InjectionToken<boolean>` (e.g.,
  `ENABLE_HTTP_COALESCING`) and check it from the interceptor before
  deduping.
- Tests: ensure new tests cover both success and error paths for
  coalescing, expiry, and revision extraction — these are key edges.

---

## Examples & quick prompts for LLMs 🧾

- "What will be returned for GET /api/data if `rev=abc` and the cache
  contains a different revision?" → Answer: a fresh network request will
  be performed; the cache entry with a different revision is not a hit.

