# Copilot Instructions

## Build, test, and lint

**Package manager:** `pnpm` (required — do not use npm or yarn).

**Build libraries first** (required before serving/building the app — tsconfig paths resolve to `dist/`):
```bash
pnpm build.lib
```

**Dev server** (port 4204):
```bash
pnpm start
```

**Tests** (Vitest via `ng test`):
```bash
# Run all samples tests once (no watch)
ng test samples --watch=false

# Single-project run with coverage
ng test samples --watch=false --coverage

# Run a specific library's tests
ng test "@se-ng/signalUtils"

# Node-native test runner for signal utils (wireit-managed)
pnpm ntest
```

**Lint:**
```bash
ng lint
```

**Prettier:**
```bash
pnpm prettier --write <file>
```

Coverage output: `coverage/<project>/index.html`

See `TESTING.md` for troubleshooting `ng test` non-zero exit codes and c8 coverage ignore syntax.

---

## Architecture

Angular **v22 (next)** monorepo orchestrated by **Wireit** (see `wireit` section in `package.json`).

- **`src/`** — main `samples` application. All routes use lazy-loaded standalone components via `loadComponent`. No NgModules.
- **`projects/se-ng/`** — local publishable libraries (`@se-ng/observable-hooks`, `@se-ng/observable-utils`, `@se-ng/swapi`, `@se-ng/let`, `@se-ng/signal-utils`, `@se-ng/headless-ui`). Built to `dist/se-ng/`. TypeScript path mappings resolve `@se-ng/*` → `dist/se-ng/*`, so **`pnpm build.lib` must run before the app compiles or starts**.
- **`projects/`** (other) — additional apps/experiments: `slido`, `extreme-lazy-test`, `simple-injector`, `folderCrud`, etc.
- **`db.json`** — mock REST API via `pnpm dlx json-server` on port 3003.
- **`articles/`** — Markdown blog posts scanned by `scripts/blogScan.ts` at build time.
- Zone.js is effectively disabled (`// import "zone.js"` in `app.config.ts`); the app relies on signal-based reactivity and manual change detection.

---

## Key conventions

### Change detection
- **`ChangeDetectionStrategy.Eager`** is the default for most new components (Angular v22).
- **`ChangeDetectionStrategy.OnPush`** used for performance-sensitive components (e.g., `big-data`).

### Dependency injection
- Always use `inject()` function, not constructor parameter injection.

### Signals
- `$`-prefixed properties are derived/computed signals (e.g., `$user = computed(...)`).
- Private class state uses ES2022 private fields (`#field`), not TypeScript `private`.

### Standalone components & routing
- All components are standalone (no `NgModule` declarations).
- Lazy-loaded via `loadComponent` in `routes.ts`. Route-level components are often `export default class`.

### TypeScript & imports
- `import type { ... }` enforced by ESLint for type-only imports (`@typescript-eslint/consistent-type-imports`).
- Import order enforced by `eslint-plugin-simple-import-sort`: external packages → parent-relative (`../`) → sibling-relative (`./`).
- Unused imports are an ESLint **error** (`unused-imports/no-unused-imports`).

### Formatting (Prettier)
- Single quotes, no trailing commas, 2-space indent, 80-char print width, `arrowParens: "avoid"`.

### Libraries (`@se-ng/*`)
- Each library exposes its public surface through `src/public-api.ts`. Update this file when adding new exports.
- A `public-api.spec.ts` test verifies that `public-api.ts` stays in sync with `API.json`.
- Publish with `pnpm publish.libs` (runs `scripts/bump-and-publish.mjs`).

### Angular style guide
`lmm-angular.txt` (repo root) is the authoritative Angular style reference for this project. Consult it for naming, structure, and patterns beyond what is listed here.
