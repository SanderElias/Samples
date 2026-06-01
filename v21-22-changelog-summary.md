# Angular v21–v22 Changelog Summary

**Scope:** 49 releases from `21.0.0` (2025-11-19) through `22.0.0-rc.2` (2026-05-28).
Two parallel release lines: stable `21.x` patches and the `22.0.0-next/rc` prerelease track.

---

## Notable Features (v22 prerelease track)

### Core / DI
- `@Service` decorator introduced (stabilized in next.7)
- `provideWebMcpTools` / `declareWebMcpTool` — in-page AI/MCP debugging tools
- Angular DI graph in-page AI tool
- `injectAsync` helper
- Signal debouncing support
- Resource caching for SSR
- Incremental hydration made the **default** behavior
- Bootstrap Angular apps under Shadow DOM roots

### Change Detection
- `OnPush` set as the **default** `changeDetectionStrategy` for new components (next.5)

### Forms (Signal Forms)
- Signal Forms APIs graduated to public API
- `FieldState.getError()`, `reloadValidation`, async validator debounce
- `ngNoCva` opt-out for `ControlValueAccessors`
- Custom CVA mode with legacy `NG_VALIDATORS` shim

### Router
- `paramsInheritanceStrategy` now defaults to `'always'` (was `'emptyOnly'`)
- `TitleStrategy.getResolvedTitleForRoute` return type tightened to `string | undefined`

### Templates / Compiler
- Optional chaining returns `undefined` (not `null`)
- Safe navigation correctly narrows nullables
- Comments supported in HTML elements
- Template inlay hints in language service

### Testing
- `TestBed.getFixture` renamed to `TestBed.getLastFixture`

### HTTP
- `reportProgress` deprecated; replaced by `reportUploadProgress` / `reportDownloadProgress`
- `withCredentials` and cookie-bearing requests excluded from transfer cache by default

### Tooling
- Node.js 26 support
- TypeScript 5.9 support dropped
- `strictTemplates` added to `tsconfig` on `ng update`

---

## Breaking Changes (v22)

| Area | Change |
|---|---|
| **Router** | `paramsInheritanceStrategy` default → `'always'` |
| **Router** | `TitleStrategy.getResolvedTitleForRoute` typed as `string \| undefined` |
| **Forms** | `min`/`max` validators no longer accept string values |
| **Core** | `script` elements rejected as dynamic component hosts |
| **Animations** | Nested leave animations scoped to component boundaries |
| **Compiler** | Namespaced SVG `<script>` elements stripped at compile time |

---

## Patch focus (v21.x)

The 21.x line (up to 21.2.15) is exclusively security and bug fixes — notably a cluster of **SSRF / XSS hardening** patches backported from the v22 RC:

- Backslash URL bypass fixed in `HttpClient` (SSRF)
- Namespaced SVG element sanitization (`<script>`, `<style>`, `href`/`xlink:href`)
- Meta selector sanitization
- i18n attribute security context hardening
- `withCredentials` and cookie-bearing requests excluded from SSR transfer cache
