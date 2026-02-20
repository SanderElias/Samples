# Icons!

I use a few icons in my blog. Right now, this is in my code:

```ts
const icons = {
  TIP: '💡',
  WARNING: '⚠️',
  IMPORTANT: '!',
  NOTE: '🛈',
  UHM: '!?'
};
```

So, yes, I used emojis. Also known as unicode characters. But then I got some feedback that some users didn't see them.
And yes, that makes sense. I didn't think this one trough enough. I fully expected that by now those things would be supported everywhere. But it turns out that some platforms don't support all emojis, and some users have custom fonts that don't include them. So, I decided to switch to using SVG icons instead.

I'm writing this article to document the icons I'm using, and to share the SVG code for them in case anyone else wants to use them.

I found the icons on [iconoir](https://iconoir.com/) and [SVG Repo](https://www.svgrepo.com/) , which let me easily copy-paste the raw svg. I modified them a bit to fit my needs. I also changed the colors to use the colors from OpenProps.

> [!NOTE] how I use a note icon

> [!TIP] how I use a tip icon

> [!WARNING] how I use a warning icon

> [!IMPORTANT] how I use an important icon

> [!UHM] how I use an uhm icon

<style>
  :root {
    --icon-color: var(--yellow-6, #f6d32d);
    --icon-accent-color: var(--blue-6, #2d9bf6);
    --icon-contrast-color: var(--gray-10, #080808);
  }
  svg {
    inline-size: 48px;
    block-size: 48px;
  }
</style>

## the icons

### the tip icon:

<svg role="img" aria-label="Tip"><use href="#icon-tip"></use></svg>

### the warning icon:

<svg role="img" aria-label="Warning"><use href="#icon-warning"></use></svg>

### the important icon:

<svg role="img" aria-label="Important"><use href="#icon-important"></use></svg>

### the note icon:

<svg role="img" aria-label="Note"><use href="#icon-note"></use></svg>

### the uhm icon:

this is my fallback icon, for when I use an non-exisistent icon. I use it in the "uhm" section, which is for things that I'm not sure about, or that I want to highlight as something that might be wrong. I couldn't find a good icon for this one, so I just

<svg role="img" aria-label="Uhm"><use href="#icon-uhm"></use></svg>

## How to use SVG sprites

You can use the generated SVG sprite file at `assets/icons-sprite.svg` in two common ways: inline the sprite into your HTML (recommended when using CSS custom properties), or reference the external file.

- Inline (recommended for CSS variables): copy the contents of `assets/icons-sprite.svg` and paste it near the start of your document (for example inside the `<body>` just after its opening tag). This ensures CSS custom properties such as `--icon-color` and `--icon-accent-color` resolve as expected.

```html
<!-- Inline sprite (paste the full file contents) -->
<!-- place once per page, e.g. <body> start -->
<div aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden">
  <!-- paste contents of assets/icons-sprite.svg here -->
</div>
```

- External file (simpler, may not inherit page CSS variables in all browsers): reference the symbol by its ID. Use an absolute or root-relative path that matches your site layout.

```html
<!-- External sprite file usage -->
<svg width="24" height="24" aria-hidden="true" focusable="false">
  <use href="/assets/icons-sprite.svg#icon-tip"></use>
</svg>
```

Notes:
- Available symbol IDs: `icon-tip`, `icon-warning`, `icon-important`, `icon-note`, `icon-uhm`.
- If you rely on CSS custom properties (for example `--icon-color`) prefer the inline approach or ensure the variables are defined inside the sprite itself; otherwise the external `<use>` may not receive those variables in some browsers.
- For accessibility, add `aria-hidden="true"` for purely decorative icons, or an appropriate `role`/`aria-label` when icons convey meaning.
 - For accessibility, add `aria-hidden="true"` for purely decorative icons, or an appropriate `role`/`aria-label` when icons convey meaning.

## Using SVG sprites as CSS background images

Short answer: it's possible but limited — using symbols from an SVG sprite directly as a `background-image` isn't well supported across all browsers. Prefer inline `<svg><use></use></svg>` or individual SVG files for background images. If you still want background-style usage, here are viable approaches with caveats.

- Method: CSS mask (recommended when you want to tint an icon via CSS)

```css
.icon--tip {
  width: 24px; height: 24px;
  background-color: var(--icon-color);
  -webkit-mask: url('/assets/icons-sprite.svg#icon-tip') no-repeat center / contain;
  mask: url('/assets/icons-sprite.svg#icon-tip') no-repeat center / contain;
}
```

Notes: `mask` (and `-webkit-mask`) lets the SVG shape act as a mask so the element's `background-color` becomes the icon color. Browser support is good in modern Chromium and WebKit builds, but test older browsers. Use vendor prefixes for wider support.

- Method: Data-URI embedding (works when sprite is inline or when you embed the symbol markup directly)

```css
.icon-bg {
  width:24px; height:24px;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='%23f6d32d' d='...'/></svg>");
  background-size: contain;
  background-repeat: no-repeat;
}
```

Notes: Data URIs are very compatible, but embedding `<use href="#icon-id">` inside the data URI won't resolve against an external sprite — either embed the full SVG markup in the data URI or inline the sprite in the page so fragment references resolve.

- Method: Export individual SVG files (most compatible for `background-image`)

Create standalone SVG files for each icon (for example `assets/icon-tip.svg`) and then:

```css
.icon {
  width:24px; height:24px;
  background-image: url('/assets/icon-tip.svg');
  background-size: contain;
  background-repeat: no-repeat;
}
```

Notes: This is the simplest and most compatible approach for using SVGs as CSS background images.

Summary: For programmatic, reusable colored icons prefer inline `<svg><use></use></svg>`; for CSS-background style icons prefer either exported single-SVG files or `mask` with an external sprite (with cross-browser testing). 




