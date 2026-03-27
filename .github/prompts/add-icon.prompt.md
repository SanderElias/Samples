---
description: "Add or refine an SVG icon in this repo. Use for requests like add icon, refine icon, update icon sprite, add [!ICON] marker, preview icon, tune icon colors, or improve light mode contrast for icons."
mode: ask
---

Use the repo skill `add-icons` for this task.

Goal:
- add a new workspace-wide SVG icon, or refine an existing one, using the repository's icon workflow

Required workflow:
1. Add or refine the runtime symbol in `src/index.html`.
2. Keep `assets/icons-sprite.svg` synchronized with the same symbol.
3. If the icon is for blog callout markers, update the icon registry in `src/app/blogs/parser.ts`.
4. Optionally showcase the icon in the workspace icon showcase at `articles/icons.md`.
5. If adding to `articles/icons.md`, preserve separate blockquotes using `<!-- -->` separators when needed.
6. Keep light and dark mode icon tokens legible.
7. Validate changed files for diagnostics before finishing.

Implementation rules:
- Keep symbol IDs lowercase as `icon-name`.
- Keep parser keys uppercase as `NAME`.
- Use a `viewBox="0 0 24 24"`.
- Match the visual scale of the existing icon set; reduce internal padding if the icon feels too small.
- Prefer the existing two-tone style with `--icon-color`, `--icon-accent-color`, and `--icon-contrast-color`.

Response expectations:
- Make the edits directly.
- Summarize what changed.
- Mention any color or geometry tradeoffs briefly.
