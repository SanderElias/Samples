# Workspace report

## Overview

This repository is a large Angular sample and experimentation workspace. The
indexed tree contains 576 files and 1,414 symbols, with TypeScript making up
the vast majority of the codebase. The workspace is organized as a mix of a
primary sample app, a set of reusable local libraries, and several smaller
experiments and side projects.

## Tooling and structure

- Package manager: `pnpm`
- Task orchestration: `Wireit`
- Main framework: Angular v22 next
- Test runner: Angular `ng test` wired to Vitest
- Build prerequisite: `pnpm build.lib` must run before serving or building the
  main sample app, because the app resolves local libraries from `dist/`

The repo also includes a mock JSON API (`db.json`), Playwright-based end-to-end
tests, and blog/article content that is scanned during builds.

## Major workspace groups

### Primary sample application

- `src/` is the main samples app.
- It is the workspace entry point for most day-to-day UI experimentation.

### Local publishable libraries

- `projects/se-ng/` contains the shared `@se-ng/*` packages.
- The libraries include `observable-hooks`, `observable-utils`, `swapi`,
  `let`, `signal-utils`, and `headless-ui`.
- These packages are built independently and published into `dist/se-ng/`.

### Application experiments and demos

These project folders appear to be focused experiments or standalone demo apps:

- `projects/api-boundries/`
- `projects/extreme-lazy-test/`
- `projects/language-routing/`
- `projects/multi-core/`
- `projects/slipnslide/`
- `projects/wire-it-editor/`
- `projects/slido/`

`projects/slido/` is the most production-like of the group, with a dedicated
server entry and an SSR build path.

### Utility and support projects

- `projects/folderCrud/` contains a local server/tooling-style project.
- `projects/simple-injector/` is built like a reusable Angular library target.
- `e2e/` contains browser-level test coverage.
- `articles/` holds markdown content that is scanned into the workspace build.

## Architectural notes

- The workspace favors modern Angular patterns: standalone components, lazy
  loading, and signal-based reactivity.
- Zone.js is effectively disabled, so manual change detection and signal-first
  patterns matter.
- The repo intentionally stays close to the latest package versions and is used
  for experimentation, so some projects are not equally active or important.

## Assistant guidance

- Use the existing jcodemunch index first when exploring this workspace.
- Re-index only when the repo has changed materially or when a fresh scan is
  explicitly requested.
- Prefer the existing workspace docs (`TESTING.md`, `lmm-angular.txt`,
  `package.json`, `angular.json`) before making code or CI suggestions.

