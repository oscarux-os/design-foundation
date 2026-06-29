# Icons — oh.design

All icons come from `@phosphor-icons/react`. No other icon libraries.

**Contents:** [Install](#install) · [Sizes](#sizes) · [Weights](#weights) · [Color](#color) · [Containers](#icon-containers) · [In buttons](#icons-in-buttons) · [Rules](#rules)

---

## Install

```bash
npm install @phosphor-icons/react
```

## Import

```tsx
import { ArrowRight, ChevronDown, X, Check, ArrowSquareOut } from "@phosphor-icons/react"
```

---

## Sizes

Five allowed sizes. Every icon uses the same `thin` (~1px hairline) weight — set once globally (see [Weights](#weights)), not per icon. Size changes the box; the weight stays thin.

| Size | px | Usage |
|------|----|-------|
| `size={16}` | 16px | Inline with text, buttons, badges |
| `size={24}` | 24px | Standard standalone icon |
| `size={48}` | 48px | Feature icons, empty states |
| `size={64}` | 64px | Large illustrative icons |
| `size={96}` | 96px | Hero / display icons |

```tsx
// ✅ Right — weight inherited from IconContext (thin)
<ArrowRight size={16} />
<ArrowSquareOut size={24} />
<Star size={48} />

// ❌ Wrong
<ArrowRight size={18} />              // off-scale size
<ArrowRight className="w-5 h-5" />    // use the size prop
```

> Phosphor's stroke scales with the icon, so a fixed weight isn't a literally constant pixel width — `thin` keeps the lightest, most consistent hairline. At 16px on a non-retina display it can read faint; bump that one instance to `light` if needed.

---

## Weights

Phosphor icons come in six weights. **Default: `thin`** — the ~1px hairline look. Set it once globally so every icon inherits it; don't pass `weight` per icon except for the rare deliberate exception below.

| Weight | Usage |
|--------|-------|
| `thin` | **Default** — the 1px hairline, everywhere |
| `fill` | Active/selected states (e.g. current nav item) |
| `light` | Fallback if `thin` reads too faint at 16px on non-retina |
| `regular`, `bold`, `duotone` | Not used |

Set the default once via `IconContext` so you never repeat `weight` on every icon:

```tsx
// app/layout.tsx (or a providers file)
import { IconContext } from "@phosphor-icons/react"

<IconContext.Provider value={{ weight: "thin" }}>
  {children}
</IconContext.Provider>
```

```tsx
<ArrowRight size={24} />                 // inherits thin
<House size={24} weight="fill" />        // exception: active nav item
```

---

## Color

Icons inherit text color via `currentColor`. Always control icon color via the parent's text color or an explicit `className`.

```tsx
// Inherits parent color
<span className="text-muted-foreground">
  <ChevronDown size={16} />
</span>

// Explicit color
<Check size={16} className="text-primary" />
<X size={16} className="text-destructive" />
```

Never hardcode the `color` prop on icons.

---

## Icon containers

For icons that need a background:

```tsx
<div className="flex items-center justify-center w-10 h-10 rounded-md bg-muted">
  <GearSix size={20} className="text-muted-foreground" />
</div>
```

---

## Icons in buttons

```tsx
// Icon after text
<Button>
  Read more <ArrowRight size={16} className="ml-2" />
</Button>

// Icon-only button
<Button variant="ghost" size="icon">
  <X size={16} />
</Button>
```

---

## Rules

- **Only `@phosphor-icons/react`.** No other icon packages.
- **Default weight is `thin` (~1px hairline)**, set globally via `IconContext` — don't pass `weight` per icon except `fill` for active/selected states.
- **Only `size={16}`, `size={24}`, `size={48}`, `size={64}`, or `size={96}`.**
- **Never `className="w-5 h-5"`** to set size — use the `size` prop.
- **Never hardcode color** — use `currentColor` via text classes.
- **Always `aria-hidden="true"`** on decorative icons inside buttons with text.

```tsx
// Accessibility: decorative icon
<Button>
  Save <Check size={16} aria-hidden="true" className="ml-2" />
</Button>

// Accessibility: icon-only — add sr-only label
<Button variant="ghost" size="icon" aria-label="Close">
  <X size={16} aria-hidden="true" />
</Button>
```
