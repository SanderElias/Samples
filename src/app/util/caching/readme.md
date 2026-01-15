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


