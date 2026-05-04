# Tokens — oh.design

> **Values are defined in `DESIGN.md`** (YAML front matter — `colors` and `colors-dark`). This file documents the CSS structure, Tailwind mapping, and usage rules. When you change a color value, update `DESIGN.md` first, then copy the new value into `app/globals.css`.

Design tokens are defined as CSS custom properties in `app/globals.css`. Tailwind maps these automatically via `@theme inline`. This is the only place colors, fonts, radius, and tracking are defined.

**Contents:** [globals.css](#globalscss) · [Allowed classes](#allowed-tailwind-classes) · [Rules](#rules) · [Figma mapping](#figma-mapping)

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
ring-ring         — focus rings
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
