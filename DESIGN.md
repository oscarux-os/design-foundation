---
version: alpha
name: oh.design

colors:
  background: "oklch(0.94 0.022 138)"
  foreground: "oklch(0.13 0.05 138)"
  card: "oklch(0.99 0.004 138)"
  card-foreground: "oklch(0.15 0.05 138)"
  popover: "oklch(0.99 0.004 138)"
  popover-foreground: "oklch(0.15 0.05 138)"
  primary: "oklch(0.38 0.22 138)"
  primary-foreground: "oklch(0.99 0 0)"
  secondary: "oklch(0.89 0.06 138)"
  secondary-foreground: "oklch(0.22 0.08 138)"
  muted: "oklch(0.91 0.018 138)"
  muted-foreground: "oklch(0.44 0.08 138)"
  accent: "oklch(0.87 0.07 138)"
  accent-foreground: "oklch(0.20 0.08 138)"
  destructive: "oklch(0.52 0.20 30.74)"
  border: "oklch(0.74 0.07 138)"
  input: "oklch(0.74 0.07 138)"
  ring: "oklch(0.46 0.20 138)"

"colors-dark":
  background: "oklch(0.14 0.02 138)"
  foreground: "oklch(0.97 0.02 138)"
  card: "oklch(0.18 0.02 138)"
  card-foreground: "oklch(0.96 0.02 138)"
  popover: "oklch(0.18 0.02 138)"
  popover-foreground: "oklch(0.97 0.02 138)"
  primary: "oklch(0.75 0.20 138)"
  primary-foreground: "oklch(0.12 0.04 138)"
  secondary: "oklch(0.22 0.06 138)"
  secondary-foreground: "oklch(0.75 0.18 138)"
  muted: "oklch(0.24 0.03 138)"
  muted-foreground: "oklch(0.65 0.06 138)"
  accent: "oklch(0.28 0.08 138)"
  accent-foreground: "oklch(0.95 0.04 138)"
  destructive: "oklch(0.51 0.21 27.50)"
  border: "oklch(0.28 0.05 138)"
  input: "oklch(0.32 0.05 138)"
  ring: "oklch(0.60 0.18 138)"

typography:
  display-hero:
    fontFamily: Inter
    fontSize: "clamp(3rem, 9vw, 6rem)"
    fontWeight: "700"
    lineHeight: "0.85"
    letterSpacing: "0.02em"
    textTransform: uppercase
  display-lg:
    fontFamily: Inter
    fontSize: "clamp(2rem, 6vw, 4rem)"
    fontWeight: "700"
    lineHeight: "0.85"
    letterSpacing: "0.015em"
    textTransform: uppercase
  display-md:
    fontFamily: Inter
    fontSize: "clamp(1.5rem, 4vw, 2.5rem)"
    fontWeight: "700"
    lineHeight: "0.85"
    letterSpacing: "0.015em"
    textTransform: uppercase
  display-sm:
    fontFamily: Inter
    fontSize: "clamp(1.25rem, 3vw, 2rem)"
    fontWeight: "700"
    lineHeight: "0.85"
    letterSpacing: "0.015em"
    textTransform: uppercase
  h1:
    fontFamily: Inter
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: "400"
    letterSpacing: "-0.025em"
  h2:
    fontFamily: Inter
    fontSize: "1.875rem"
    fontWeight: "400"
    letterSpacing: "-0.025em"
  h3:
    fontFamily: Inter
    fontSize: "1.5rem"
    fontWeight: "400"
    letterSpacing: "-0.025em"
  h4:
    fontFamily: Inter
    fontSize: "1.25rem"
    fontWeight: "400"
    letterSpacing: "-0.025em"
  lead:
    fontFamily: Inter
    fontSize: "1.25rem"
    fontWeight: "400"
  body:
    fontFamily: Inter
    fontSize: "1rem"
    fontWeight: "400"
  small:
    fontFamily: Inter
    fontSize: "0.875rem"
    fontWeight: "400"
  caption:
    fontFamily: Inter
    fontSize: "0.75rem"
    fontWeight: "400"
  eyebrow:
    fontFamily: Inter
    fontSize: "0.75rem"
    fontWeight: "400"
    letterSpacing: "0.1em"
    textTransform: uppercase

# Radius is responsive — mobile values are default, desktop overrides at 768px.
# rounded.input is fixed across all breakpoints.
rounded:
  sm: "0.625rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  "2xl": "3rem"
  input: "0.75rem"

"rounded-desktop":
  sm: "1rem"
  md: "1.25rem"
  lg: "1.875rem"
  xl: "2.5rem"
  "2xl": "3.75rem"

spacing:
  unit: "0.25rem"
  between-cards: "0.75rem"
  between-chips: "0.25rem"
  screen-edge: "1.5rem"
  component-default: "1rem"
  between-text: "0.5rem"
  text-to-component: "1rem"
  content-to-button: "1.5rem"
  between-sections: "3rem"
  hero: "6rem"

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.secondary-foreground}"
    rounded: "{rounded.md}"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.card-foreground}"
    rounded: "{rounded.lg}"
    padding: "1.5rem"
  badge:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.secondary-foreground}"
    rounded: "{rounded.sm}"
    padding: "0.25rem 0.5rem"
  input:
    backgroundColor: "{colors.background}"
    borderColor: "{colors.border}"
    rounded: "{rounded.input}"
    focusRing: "{colors.ring}"
---

# oh.design — Design System

## Overview

Personal portfolio and test platform. Next.js (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui · @phosphor-icons/react · Inter + IBM Plex Mono.

All token values live in this file (YAML above). The implementation lives in `app/globals.css` — populate it from this file. Per-concern docs (`tokens.md`, `radius.md`, `typography.md`, `spacing.md`) document the rationale and rules; they do not repeat values.

**When you change a token value: update the YAML above, then update `app/globals.css`.**

---

## Colors

Green-tinted palette built in oklch, hue 138 throughout. Full light/dark mode — the same token names switch values automatically via the `.dark` class on `<html>`. Primary is a deep forest green in light mode, a bright sage in dark mode.

Semantic naming follows shadcn/ui conventions: `background`, `foreground`, `card`, `primary`, `muted`, `accent`, `destructive`, `border`, `ring` — plus `-foreground` variants for text on colored surfaces.

See `tokens.md` for the CSS structure, Tailwind mapping, and allowed classes.

---

## Typography

Two font families: Inter (sans-serif) for all UI text, IBM Plex Mono for code. Set up via `next/font/google` with CSS variable injection — no hardcoded font stacks in components.

The scale has three tiers: Display (bold, uppercase, fluid clamp — heroes and marketing moments), Heading (normal weight, tight tracking, editorial), and Text variants (lead, body, small, caption, eyebrow).

Always use `<Heading>`, `<Text>`, `<Eyebrow>` — never raw HTML tags with manual classes. See `typography.md` for the component API, scale rationale, and rules.

---

## Layout

12-column grid on desktop, 6-column on mobile. Max content width 1440px. Margins and gutters are responsive — see `grid.md` for the full breakpoint table and column math.

Spacing has two layers: semantic tokens (between sections, blocks, layout-level gaps) and component padding (shadcn manages internally). Never use semantic tokens inside components. See `spacing.md` for the full two-layer system.

---

## Elevation & Depth

No shadow scale is currently defined. Depth is communicated through oklch lightness contrast between `background`, `card`, and `muted` surfaces — surfaces become lighter (light mode) or darker (dark mode) relative to the page background.

When elevation is needed beyond surface contrast, use `backdrop-filter: blur()` rather than `box-shadow`.

---

## Shapes

Rounded corners scale responsively — tighter on mobile, more expressive on desktop. The scale switches at 768px via a media query on the CSS custom properties. `rounded-input` stays fixed across all breakpoints for consistent form elements.

See `radius.md` for per-component values and the nesting rule.

---

## Components

All components are built on shadcn/ui with Radix UI primitives. Variants use class-variance-authority (cva). Each component has a matching `.figma.tsx` Code Connect file to keep design and code in sync.

Typography components (`<Heading>`, `<Text>`, `<Eyebrow>`) are custom — not from shadcn. See `styleguide.md` for the full component inventory and style guide structure.

---

## Do's and Don'ts

| Do | Don't |
|----|-------|
| Token classes: `text-foreground`, `bg-card` | Hardcode: `#hex`, `oklch()`, `rgb()` |
| `<Heading>`, `<Text>`, `<Eyebrow>` components | Raw `<h1>`, `<p>` with manual classes |
| `col-span-*` with explicit column math | `grid-cols-2` or `grid-cols-3` in 12-col layout |
| Step through breakpoints (1→2→3) | Jump from 1 to 3 items per row |
| `rounded-*` Tailwind classes | Arbitrary `rounded-[7px]` |
| `@phosphor-icons/react` with `size` prop | `className="w-5 h-5"` for icon sizing |
| `@radix-ui/react-*` | `@base-ui/react` |
| Nearest 4px spacing step | Arbitrary `p-[13px]` |
| Ask before building if unsure | Guess and improvise |
