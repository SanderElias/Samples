---
name: add-icons
description: "Use when adding or refining SVG icons in this repo: updating the inline sprite in src/index.html, syncing assets/icons-sprite.svg, registering new [!ICON] blog markers in src/app/blogs/parser.ts, showcasing icons in articles/icons.md, and tuning icon colors for light and dark mode. Keywords: add icon, icon sprite, svg symbol, menu icon, close icon, blockquote icon, icon showcase, icon preview, icon colors, light mode contrast."
---

# Add SVG Icons

Use this skill when working on the workspace-wide SVG icon system in this repository.

## Scope

This repo uses an inline SVG sprite for runtime rendering and a mirrored external sprite for documentation and reuse. The system serves multiple consumers: blog callout markers such as `[!TIP]` are currently the primary use case, but the sprite is available for any workspace-wide icon needs.

Primary files:
- `src/index.html` — authoritative inline SVG sprite and icon CSS variables.
- `assets/icons-sprite.svg` — external sprite mirror; keep it synchronized.
- `src/app/blogs/parser.ts` — icon registry for `[!ICON]` blog callout markers.
- `articles/icons.md` — workspace icon showcase and demo surface.
- `src/app/blogs/blogs.component.css` — blog callout icon size/layout constraints (44px × 44px).

## Conventions

### Naming

- Sprite symbol IDs use lowercase kebab style: `icon-tip`, `icon-menu`, `icon-close`.
- Markdown marker names in `parser.ts` use uppercase keys: `TIP`, `MENU`, `CLOSE`.
- Runtime resolution depends on `iconName.toLowerCase()` in the parser, so marker names and symbol IDs must stay aligned.

### Geometry and style

- Use `viewBox="0 0 24 24"` for all symbols.
- Prefer the established two-tone style:
  - `--icon-color` for the primary stroke/fill
  - `--icon-accent-color` for the secondary stroke/fill
  - `--icon-contrast-color` for internal details on filled icons
- Existing icons read relatively large inside the 24x24 box. New icons should avoid large internal margins or they will look visually smaller than the rest of the set.
- For outline icons, use rounded line caps and joins unless there is a strong reason not to.
- Match the existing stroke weight neighborhood, usually around `1.5` to `1.7`.

### Color behavior

Default palette is tuned for dark mode. Light mode should override token values for stronger contrast.

Current pattern:

```html
<style>
  :root {
    --icon-color: var(--yellow-6, #f6d32d);
    --icon-accent-color: var(--blue-6, #2d9bf6);
    --icon-contrast-color: var(--gray-10, #080808);
  }

  @media (prefers-color-scheme: light) {
    :root {
      --icon-color: var(--yellow-8, #b67400);
      --icon-accent-color: var(--blue-9, #0b5aa2);
      --icon-contrast-color: var(--gray-12, #000000);
    }
  }
</style>
```

Mirror these overrides in `articles/icons.md` so the preview matches the app.

## Workflow

### 1. Register the marker (if using blog callouts)

If this icon is for blog callout markers (`[!ICON]`), add the uppercase icon key in `src/app/blogs/parser.ts`.

Example:

```ts
const icons = {
  TIP: '💡',
  MENU: '≡',
  CLOSE: '✕'
};
```

The emoji is only a fallback hint; actual rendering uses the SVG symbol.

If this icon is not for blog markers, skip this step.

### 2. Add the symbol to the runtime sprite

Add a `<symbol>` in `src/index.html`.

Checklist:
- `id="icon-..."`
- `viewBox="0 0 24 24"`
- use repo color variables
- keep the icon visually full enough to match existing symbols

### 3. Sync the external sprite mirror

Copy the same symbol into `assets/icons-sprite.svg`.

Do not leave `src/index.html` and `assets/icons-sprite.svg` out of sync.

### 4. Add to the showcase (if needed)

Update `articles/icons.md` with previews to showcase the icon:
- if this icon is for blog markers, add a blockquote such as `> [!MENU] ...`
- add a direct SVG preview using `<use href="#icon-menu">`

If the icon is for a different use case, document it in the relevant source file or README instead.

### 5. Preserve separate blockquotes in the showcase

When adding blockquotes to `articles/icons.md`, keep adjacent callouts visually separate. Do not rely on blank lines if markdownlint rejects them. Use HTML comments between blockquotes:

```md
> [!NOTE] a note
<!-- -->
> [!TIP] a tip
```

### 6. Validate

Minimum checks:
- confirm parser key matches the symbol ID
- confirm the article preview renders the new icon
- confirm the icon does not look undersized beside `tip`, `warning`, and `note`
- run diagnostics on changed files

Broader checks when needed:
- `pnpm build.lib`
- `ng test samples --watch=false`
- `ng lint`

### 7. Preview live

Once changes are in place, start the dev server:

```bash
pnpm start
```

Then visit the live blog/icon showcase to preview your work:

```
http://localhost:4204/blog/wbc1c3mJqnuDlymf
```

This page displays all workspace icons in their actual rendering context, including blockquote markers and direct previews. Use this to verify light/dark mode contrast, visual scale relative to other icons, and any interactive behavior.

## Visual review guidance

When a new icon feels too small, do not increase the outer SVG size. Increase the visual footprint inside the 24x24 box instead:
- expand outer circles/frames closer to the edges
- reduce empty padding
- lengthen strokes where appropriate
- keep stroke weights consistent before making them heavier

Example from this repo:
- `icon-menu` was improved by expanding the outer panel and stretching internal lines outward.
- `icon-close` was improved by increasing the ring radius and enlarging the cross.

## Pitfalls

- Lowercase symbol IDs and uppercase parser keys are easy to mismatch.
- Symbols without `viewBox` or with excessive padding render inconsistently.
- External sprite usage may not inherit CSS variables in all browsers; inline sprite is more reliable for themed colors.
- Documentation preview can drift from runtime if `articles/icons.md` does not mirror color token overrides.
- Markdown blockquotes can accidentally merge into one large quote if separators are removed.

## Done Criteria

A new icon is complete when:
- both sprite files contain the same symbol
- light and dark mode colors remain legible
- the icon reads at the same visual scale as the rest of the set
- it is documented or previewed in the relevant location (e.g., `articles/icons.md` for blog markers, or inline comments if for a different consumer)
- if it is a blog marker, it renders via `[!ICON]` in parsed blog markdown
