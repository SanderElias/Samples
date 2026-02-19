# Running tests and collecting coverage (Notes)

This project uses Angular's `ng test` runner configured to use Vitest.

Quick commands (recommended):

- Run the `samples` application tests once (no watch):

  ng test samples --watch=false

- Run the `samples` tests and generate coverage (V8):

  ng test samples --watch=false --coverage

- Run the `@se-ng/signalUtils` library tests:

  ng test "@se-ng/signalUtils"

Notes and troubleshooting

- If `ng test` exits with a non-zero code even though some tests passed, it may be because the workspace test runner tried to run other projects that either have no tests or are misconfigured. Running tests per-project (e.g., `ng test samples`) avoids this.

- The `--watch=false` flag is useful for CI / single-run executions. Some `ng test` invocations for libraries may behave slightly differently; if `--watch` causes an "Unknown argument" error for a specific project, omit it and just run `ng test "<project>"`.

- Coverage output is placed under `coverage/<project>` and a `coverage-final.json` is generated. Use the HTML report in `coverage/<project>/index.html` for a browsable report.

- To exclude test-only helpers from coverage (for example test-only exports), use c8 ignore comments when running Vitest with the V8 coverage provider (Vitest v8). The older `istanbul`-style comments are not always respected by V8-based coverage.

Single-line ignore (for one statement):

```ts
/* c8 ignore next */
if (testOnly) { /* ... */ }
```

Block ignore (wrap multiple lines):

```ts
/* c8 ignore start */
// code you want to exclude from coverage
/* c8 ignore stop */
```
- If you prefer convenience scripts, see `package.json` for `test:samples` and `test:samples:ci` and `test:signal-utils`.

Note: this repo uses **Wireit** to orchestrate many tasks (see `package.json -> wireit`). Run Wireit-managed tasks with `npm run <task>` or `pnpm run <task>` (examples: `npm run start`, `npm run ntest`, `npm run compileTest`). Wireit provides incremental builds, watch mode (`--watch`), local caching in `.wireit/`, and GitHub Actions caching (`google/wireit@setup-github-actions-caching/v2`).

If you want, I can add CI job snippets showing how to run these commands in GitHub Actions or another CI provider.
