# Tokens — oh.design

> **Values are defined in `DESIGN.md`** (YAML front matter — `colors` and `colors-dark`). This file documents the CSS structure, Tailwind mapping, and usage rules. When you change a color value, update `DESIGN.md` first, then copy the new value into `app/globals.css`.

Design tokens are defined as CSS custom properties in `app/globals.css`. Tailwind maps these automatically via `@theme inline`. This is the only place colors, fonts, radius, and tracking are defined.

**Contents:** [Lightness model](#lightness-model) · [globals.css](#globalscss) · [Allowed classes](#allowed-tailwind-classes) · [Rules](#rules) · [Figma mapping](#figma-mapping)

---

## Lightness model

The tokens are semantic (`background`, `primary`, `muted`…), not a numbered ramp — but their **values follow a lightness grammar**, so we get the things a big intent-scale ramp gives you (contrast that holds, states for free) without 200 tokens the model would misuse. The whole system is oklch on two hues — cool-neutral grays at 250, a green accent at 138 — both at carefully chosen lightness. That's the load-bearing decision: in oklch a given `L` reads at the same perceived lightness on any hue, so contrast computed once holds across both the neutral and the accent — there's no per-hue sanding like HSL forces.

**Elevation surfaces carry depth through lightness — closer to you is lighter, same direction in both themes.** Cards float above the page.

| Surface | Light `L` | Dark `L` | Role |
|---------|-----------|----------|------|
| card / popover | 0.99 | 0.20 | raised |
| background | 0.97 | 0.16 | page |

In light mode raised = higher `L`; in dark mode raised = higher `L` too (just from a darker floor). Never use shadow alone to signal elevation — step the lightness. (See `DESIGN.md → Elevation & Depth`.)

**Tonal fills step *away* from the page to separate — they're not elevation.** `muted` and `secondary` are neutral; `accent` is the soft green tonal. In light they sit below the page `L`; in dark, above it.

| Fill | Hue | Light `L` (Δ from bg) | Dark `L` (Δ from bg) |
|------|-----|----------------------|----------------------|
| muted | neutral | 0.95 (−0.02) | 0.24 (+0.08) |
| secondary | neutral | 0.94 (−0.03) | 0.25 (+0.09) |
| accent | green | 0.90 (−0.07) | 0.28 (+0.12) |

**Three things you get for free — use these instead of inventing tokens:**

1. **Intent fills clear contrast once, everywhere.** A solid fill (`primary`, `destructive`, any future intent) sits in a fixed lightness band per theme and pairs with a light label in light mode / dark label in dark mode. Because `L` is fixed across hues, a label that clears WCAG AA (4.5:1) on one intent clears it on all of them. Pick the fill `L`, pick the label, verify once.
2. **Hover / press are opacity, not new tokens.** Step the fill's opacity — hover `bg-primary/90`, active `bg-primary/80` — or composite a neutral state layer. It reads at the same intensity on every intent because oklch keeps it perceptually even. Don't add `primary-hover` tokens. (Values in `DESIGN.md → states`.)
3. **Disabled is `opacity-50`.** Not a token, not a separate color. shadcn already does this; keep it.

**The chrome is deliberately neutral — the opinion lives in the accent, not the surfaces.** A tinted gray casts everything it surrounds (per Lovable's writeup: purples cool, reds drift, imagery picks up a wash), so the grays stay cool-neutral at very low chroma (`≤0.006` on surfaces) and green appears only where it's an accent — `primary`, `ring`, `accent`. That keeps whatever you build on top free of a forced tint, while green still carries identity at the interaction points.

**Keep the surface small and hard to misuse:** `foreground` tokens are for text and icons only; `border` tokens for borders only; states come from opacity, not new colors. A token's job is to put the wrong answer out of reach.

---

## globals.css

Paste this into `app/globals.css` in full. Three blocks in order: variables, theme mapping, base styles.

### 1. CSS custom properties

Fill values from `DESIGN.md` → `colors` (light) and `colors-dark` (dark).

```css
:root {
  /* Light mode — values from DESIGN.md → colors */
  --background: ;
  --foreground: ;
  --card: ;
  --card-foreground: ;
  --popover: ;
  --popover-foreground: ;
  --primary: ;
  --primary-foreground: ;
  --secondary: ;
  --secondary-foreground: ;
  --muted: ;
  --muted-foreground: ;
  --accent: ;
  --accent-foreground: ;
  --destructive: ;
  --destructive-foreground: ;
  --border: ;
  --input: ;
  --ring: ;

  --font-sans: Inter, sans-serif;
  --font-mono: IBM Plex Mono, monospace;

  --tracking-normal: -0.025em;

  /* Radius tokens — values from DESIGN.md → rounded / rounded-desktop */
}

.dark {
  /* Dark mode — values from DESIGN.md → colors-dark */
  --background: ;
  --foreground: ;
  --card: ;
  --card-foreground: ;
  --popover: ;
  --popover-foreground: ;
  --primary: ;
  --primary-foreground: ;
  --secondary: ;
  --secondary-foreground: ;
  --muted: ;
  --muted-foreground: ;
  --accent: ;
  --accent-foreground: ;
  --destructive: ;
  --destructive-foreground: ;
  --border: ;
  --input: ;
  --ring: ;
}
```

### 2. Tailwind theme mapping

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);

  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);

  --radius-sm:    var(--radius-sm);
  --radius-md:    var(--radius-md);
  --radius-lg:    var(--radius-lg);
  --radius-xl:    var(--radius-xl);
  --radius-2xl:   var(--radius-2xl);
  --radius-input: var(--radius-input);
  --radius-full:  9999px;

  --tracking-tighter: calc(var(--tracking-normal) - 0.05em);
  --tracking-tight: calc(var(--tracking-normal) - 0.025em);
  --tracking-normal: var(--tracking-normal);
  --tracking-wide: calc(var(--tracking-normal) + 0.025em);
  --tracking-wider: calc(var(--tracking-normal) + 0.05em);
  --tracking-widest: calc(var(--tracking-normal) + 0.1em);
}
```

### 3. Base styles

```css
@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
    letter-spacing: var(--tracking-normal);
    line-height: 1.6;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
}
```

### Starting in dark mode

Add `.dark` to `<html>` in `app/layout.tsx`:

```tsx
<html lang="en" className="dark">
```

---

## Allowed Tailwind classes

These classes map directly to the tokens above. Use ONLY these for color.

### Text

```
text-foreground          — primary text
text-muted-foreground    — secondary/supporting text
text-primary             — brand/accent text
text-primary-foreground  — text on primary background
text-card-foreground     — text inside cards
text-destructive         — error messages
text-destructive-foreground — label on a destructive/danger fill
```

### Background

```
bg-background     — page background
bg-card           — cards and surfaces
bg-muted          — subtle backgrounds, icon containers
bg-primary        — brand background
bg-secondary      — secondary background
bg-accent         — accent background
```

### Borders and focus

```
border-border     — all borders
ring-ring         — focus ring color
```

Focus ring (values in `DESIGN.md → focus-ring`): 2px ring in `ring`, 2px offset, shown on `:focus-visible` for every interactive element.

```tsx
className="focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
```

### Radius

```
rounded-sm        — calc(--radius - 4px) = 12px
rounded-md        — calc(--radius - 2px) = 14px
rounded-lg        — var(--radius) = 16px
rounded-xl        — calc(--radius + 4px) = 20px
rounded-input     — var(--radius-input) = 12px
```

---

## Rules

- **Only define tokens in `globals.css`.** Never in component files.
- **Never use** `text-[#hex]`, `bg-[oklch()]` or similar.
- **Inline styles** are only OK for direct CSS variables: `style={{ color: "var(--primary)" }}`
- **Dark mode** is handled via the `.dark` class on `<html>` — tokens switch values automatically.
- **Colors may change** — that's fine, just update `globals.css` and everything updates everywhere.

---

## Figma mapping

Each token maps to a Figma Variable:

| CSS variable | Figma Variable Collection | Figma Variable |
|-------------|--------------------------|----------------|
| `--background` | Primitives | Background/Default |
| `--foreground` | Primitives | Foreground/Default |
| `--primary` | Primitives | Brand/Primary |
| `--muted` | Primitives | Surface/Muted |
| `--border` | Primitives | Border/Default |
| `--destructive` | Semantics | State/Error |

Export via the Tokens Studio plugin to keep Figma in sync.
