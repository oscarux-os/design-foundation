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

Five allowed sizes. The stroke should look visually the same across all sizes — just scaled up. Since Phosphor's stroke weight is fixed per weight variant, compensate by using a lighter weight at smaller sizes and heavier at larger sizes. A `regular` icon at 16px and a `bold` icon at 96px should feel like the same stroke proportionally.

| Size | px | Weight | Usage |
|------|----|--------|-------|
| `size={16}` | 16px | `light` | Inline with text, buttons, badges |
| `size={24}` | 24px | `regular` | Standard standalone icon |
| `size={48}` | 48px | `regular` | Feature icons, empty states |
| `size={64}` | 64px | `bold` | Large illustrative icons |
| `size={96}` | 96px | `bold` | Hero / display icons |

```tsx
// ✅ Right
<ArrowRight size={16} weight="regular" />
<ArrowSquareOut size={24} weight="regular" />
<Star size={48} weight="bold" />

// ❌ Wrong
<ArrowRight size={18} />
<ArrowRight className="w-5 h-5" />  // Avoid — use size prop
```

---

## Weights

Phosphor icons come in six weights. Decide on a default and stick to it.

| Weight | Usage |
|--------|-------|
| `regular` | Default — most UI contexts |
| `bold` | Emphasis, strong actions |
| `light` | Subtle, decorative |
| `fill` | Active/selected states |
| `duotone` | — |
| `thin` | — |

```tsx
<ArrowRight size={20} weight="regular" />
<ArrowRight size={20} weight="bold" />
<ArrowRight size={20} weight="fill" />  // e.g. active nav item
```

**Default weight: `light`.** Override with `bold` at larger sizes (48px+) to maintain proportional stroke.

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
