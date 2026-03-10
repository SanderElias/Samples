# CSS Logical Properties Migration Plan

Generated: March 10, 2026

This document outlines the plan to migrate from physical CSS properties to logical properties for better internationalization and RTL support.

## Background

Physical CSS properties (e.g., `margin-left`, `width`, `height`, `top`) are tied to the physical dimensions of the screen. Logical properties (e.g., `margin-inline-start`, `inline-size`, `block-size`, `inset-block-start`) adapt to the writing mode (LTR/RTL, horizontal/vertical).

---

## Found Issues Summary

| Category                         | Count |
| -------------------------------- | ----- |
| Margin (physical)                | ~25   |
| Padding (physical)               | ~15   |
| Border (physical)                | ~30   |
| Position (top/left/right/bottom) | ~15   |
| Width/Height (physical)          | ~100  |
| Float                            | 1     |
| Text-align (physical)            | ~12   |
| Vertical-align                   | 3     |

---

## Detailed Findings

### 1. Margin Properties (Physical)

**Current:** `margin-top`, `margin-bottom`, `margin-left`, `margin-right`

**Replace with:** `margin-block-start`, `margin-block-end`, `margin-inline-start`, `margin-inline-end`

**Files affected:**

- `src/app/mqtt/power-meter/dialog/power-meter-dialog.component.css:33` → `margin-inline-start`
- `src/styles.css:175` → `margin-block-end`
- `src/app/signal-forms-experiment/signal-forms-experiment.component.css:3,59` → `margin-block-start` / `margin-inline-start`
- `src/app/rvt/template/template.component.css:22` → `margin-inline-start`
- `src/app/rvt/reactive/reactive.component.css:22` → `margin-inline-start`
- `projects/slido/src/styles.css:28,81` → `margin-inline-start` / `margin-block-start`
- `projects/wire-it-editor/src/app/wireits/wireits.component.css:2` → `margin-block-start`
- And ~15 more instances

---

### 2. Padding Properties (Physical)

**Current:** `padding-top`, `padding-bottom`, `padding-left`, `padding-right`

**Replace with:** `padding-block-start`, `padding-block-end`, `padding-inline-start`, `padding-inline-end`

**Files affected:**

- `projects/slido/src/app/slide/slide.component.css:137,141` → `padding-block-end`
- `projects/slido/src/styles.css:85,99` → `padding-inline-start`
- `src/app/rijks/artists/artists.component.css:7,8` → `padding-inline-start/end`
- `src/app/rijks/art-detail/art-detail.component.css:13,14` → `padding-inline-start/end`
- `projects/api-boundries/src/app/b-relation-list/relation/relation.component.css:43` → `padding-inline-start`
- `projects/api-boundries/src/app/relation-list/relation/relation.component.css:40` → `padding-inline-start`
- And ~8 more instances

---

### 3. Border Properties (Physical)

**Current:** `border-top`, `border-bottom`, `border-left`, `border-right`, `border-top-width`, etc.

**Replace with:** `border-block-start`, `border-block-end`, `border-inline-start`, `border-inline-end`

**Files affected:**

- `projects/slido/src/styles.css:43,54,98,99` → `border-inline-start`
- `src/app/grid-calender/day-cell/day-cell.component.css:34-45` → `border-inline-start/end`, `border-block-start/end`
- `src/app/grid-calender/month/month.component.css:35-77` → Multiple border-inline/block usage
- And ~20 more instances

---

### 4. Position Properties (Physical)

**Current:** `top`, `bottom`, `left`, `right`

**Replace with:** `inset-block-start`, `inset-block-end`, `inset-inline-start`, `inset-inline-end`

**Files affected:**

- `src/styles.css:149,150` → `inset-block-start: 0`, `inset-inline-start: 0`
- `src/app/signal-forms-experiment/signal-forms-experiment.component.css:137,138` → `inset-inline-end`, `inset-block-start`
- `projects/slido/src/app/slide/slide.component.css:149` → `inset-block-start`
- `projects/slido/src/app/present/present.component.css:29,30` → `inset-inline-end`, `inset-block-end`
- `src/app/stepper/stepper.component.css:34` → `inset-inline-start`
- `src/app/stepper/step/step.component.css:18,19` → `inset-block-start`, `inset-inline-end`
- `src/app/card/card.component.css:8,9` → `inset-block-start: 0`, `inset-inline-start: 0`
- And ~8 more instances

---

### 5. Width/Height (Physical)

**Current:** `width`, `height`, `min-width`, `min-height`, `max-width`, `max-height`

**Replace with:** `inline-size`, `block-size`, `min-inline-size`, `min-block-size`, `max-inline-size`, `max-block-size`

**Files affected:**

- `src/app/grid-play/grid-play.component.css:13,14` → `inline-size`, `block-size`
- `src/styles.css:151,152` → `inline-size: 100vw`, `block-size: 100vh`
- `src/app/signal-forms-experiment/signal-forms-experiment.component.css:4,10,125,126,147` → `max-inline-size`, `inline-size`, `block-size`
- `projects/slido/src/app/slide/slide.component.css:12,13,88,89,107,116,117,120,121,128,129,135,145,161,184,195` → Multiple
- `projects/slipnslide/src/styles.css:6,27,34-37,100` → `block-size`, `inline-size`
- And ~80 more instances

---

### 6. Float (Physical)

**Current:** `float: left`, `float: right`

**Replace with:** `float: inline-start`, `float: inline-end`

**Files affected:**

- `src/app/cells/cell-raw/cell-raw.component.css:28` → `float: inline-start`

---

### 7. Text-align (Physical)

**Current:** `text-align: left`, `text-align: right`, `text-align: center`

**Replace with:** `text-align: start`, `text-align: end`

**Note:** `center` is valid in both physical and logical, but prefer logical flow-relative when possible.

**Files affected:**

- `src/app/blogs/blogs.component.css:53` → `text-align: start`
- `src/app/crud-stuff/user-row/user-row.component.css:18` → `text-align: start`
- `src/app/indexdb/edit-record/edit-record.component.css:18` → `text-align: end`
- `projects/slido/src/app/slide/slide.component.css:104,152` → `text-align: start/end`
- And ~8 more instances

---

### 8. Vertical-align

**Current:** `vertical-align: baseline`, `vertical-align: top`

**Replace with:** `vertical-align: auto` (for baseline), or use `align-content` with flexbox/grid

**Files affected:**

- `src/styles.css:170,205` → Review flex/grid alternatives
- `projects/slipnslide/src/styles.css:56,77` → Review flex/grid alternatives

---

## Migration Priority

### Phase 1: High Impact (Core Layout)

1. **Width/Height** → `inline-size`/`block-size` (~100 occurrences)
2. **Position** → `inset-*` (~15 occurrences)
3. **Margin** → `margin-block-*`/`margin-inline-*` (~25 occurrences)

### Phase 2: Border & Padding

4. **Padding** → `padding-block-*`/`padding-inline-*` (~15 occurrences)
5. **Border** → `border-block-*`/`border-inline-*` (~30 occurrences)

### Phase 3: Fine-tuning

6. **Text-align** → `start`/`end` (~12 occurrences)
7. **Float** → `inline-start`/`inline-end` (1 occurrence)
8. **Vertical-align** → Review flex/grid alternatives (3 occurrences)

---

## Recommended Approach

1. **Use a linter rule** - Add `property-horizontal-Physical` ESLint rule to catch new violations
2. **Incremental migration** - Focus on one component at a time
3. **Test RTL** - Verify layouts work in both LTR and RTL modes after changes
4. **Use CSS custom properties** - Where appropriate, define logical spacing tokens

---

## Example Transformations

### Before (Physical)

```css
.card {
  margin-left: 1rem;
  margin-top: 0.5rem;
  width: 100%;
  height: 50px;
  border-left: 2px solid red;
  top: 0;
  left: 0;
  float: left;
  text-align: right;
}
```

### After (Logical)

```css
.card {
  margin-inline-start: 1rem;
  margin-block-start: 0.5rem;
  inline-size: 100%;
  block-size: 50px;
  border-inline-start: 2px solid red;
  inset-block-start: 0;
  inset-inline-start: 0;
  float: inline-start;
  text-align: end;
}
```

---

## Estimated Effort

- **Files to modify:** ~50
- **Estimated changes:** ~250 properties
- **Time estimate:** 4-6 hours for full migration

---

## Tools & Resources

- [MDN: CSS Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties)
- [CSS Triggers](https://csstriggers.com/) - Check if property changes trigger layout
- Browser support: All modern browsers support logical properties (IE11 has no support)
