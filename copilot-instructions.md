---
assistant:
  load_on_startup:
    - "TESTING.md"
    - "lmm-angular.txt"
    - "package.json"
  prioritize:
    - "TESTING.md"
    - "lmm-angular.txt"
    - "package.json"
  preferred_test_commands:
    - "pnpm test"
    - "ng test samples --watch=false"
  orchestrator:
    - "wireit"
---

# Assistant instructions for this workspace (Copilot / AI assistants) 🔎

Please load and *prioritize* the files listed in the frontmatter every time this workspace opens.

- `TESTING.md` — canonical testing guide for this repository (test commands, coverage paths, troubleshooting).
- `lmm-angular.txt` — Angular style guide / project conventions (treat as authoritative for naming, structure, and style decisions).

Behavior rules
- When responding about testing, cite `TESTING.md` first and prefer the `package.json`/`wireit` scripts (use `pnpm test` / `ng test <project>` examples).
- When asked about Angular conventions or style, use `lmm-angular.txt` as the primary source.
- Before suggesting code or CI changes, scan `TESTING.md`, `package.json`, and `angular.json` and report which files were consulted.
- If a recommended action requires running tests or changing CI, ask for confirmation before applying changes.

Quick examples
- "To run tests locally: `pnpm test` or `ng test samples --watch=false` (see `TESTING.md`)."
- "Unit test files use the `.spec.ts` suffix (see `lmm-angular.txt`)."

Rationale: keep assistant answers consistent with this repository's conventions and reduce unnecessary or incorrect test/CI recommendations.
