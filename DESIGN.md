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
  destructive: "oklch(0.46 0.20 30.74)"
  destructive-foreground: "oklch(0.99 0 0)"
  border: "oklch(0.74 0.07 138)"
  input: "oklch(0.74 0.07 138)"
  ring: "oklch(0.46 0.20 138)"

"colors-dark":
  background: "oklch(0.14 0.005 138)"
  foreground: "oklch(0.97 0.02 138)"
  card: "oklch(0.18 0.02 138)"
  card-foreground: "oklch(0.96 0.02 138)"
  popover: "oklch(0.18 0.02 138)"
  popover-foreground: "oklch(0.97 0.02 138)"
  primary: "oklch(0.75 0.20 138)"
  primary-foreground: "oklch(0.12 0.04 138)"
  secondary: "oklch(0.22 0.06 138)"
  secondary-foreground: "oklch(0.75 0.18 138)"
  muted: "oklch(0.20 0.03 138)"
  muted-foreground: "oklch(0.65 0.06 138)"
  accent: "oklch(0.28 0.08 138)"
  accent-foreground: "oklch(0.95 0.04 138)"
  destructive: "oklch(0.46 0.21 27.50)"
  destructive-foreground: "oklch(0.99 0 0)"
  border: "oklch(0.28 0.05 138)"
  input: "oklch(0.32 0.05 138)"
  ring: "oklch(0.60 0.18 138)"

# Inter sets all UI text; IBM Plex Mono sets code and tabular data (weights 400/500).
# Injected via next/font as --font-sans / --font-mono.
fonts:
  sans: "Inter"
  mono: "IBM Plex Mono"

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
    lineHeight: "1.1"
    letterSpacing: "-0.025em"
  h2:
    fontFamily: Inter
    fontSize: "1.875rem"
    fontWeight: "400"
    lineHeight: "2.25rem"
    letterSpacing: "-0.025em"
  h3:
    fontFamily: Inter
    fontSize: "1.5rem"
    fontWeight: "400"
    lineHeight: "2rem"
    letterSpacing: "-0.025em"
  h4:
    fontFamily: Inter
    fontSize: "1.25rem"
    fontWeight: "400"
    lineHeight: "1.75rem"
    letterSpacing: "-0.025em"
  lead:
    fontFamily: Inter
    fontSize: "1.25rem"
    fontWeight: "400"
    lineHeight: "1.75rem"
  body:
    fontFamily: Inter
    fontSize: "1rem"
    fontWeight: "400"
    lineHeight: "1.5rem"
  small:
    fontFamily: Inter
    fontSize: "0.875rem"
    fontWeight: "400"
    lineHeight: "1.25rem"
  caption:
    fontFamily: Inter
    fontSize: "0.75rem"
    fontWeight: "400"
    lineHeight: "1rem"
  eyebrow:
    fontFamily: Inter
    fontSize: "0.75rem"
    fontWeight: "400"
    lineHeight: "1rem"
    letterSpacing: "0.1em"
    textTransform: uppercase
  code:
    fontFamily: IBM Plex Mono
    fontSize: "0.875rem"
    fontWeight: "400"
    lineHeight: "1.25rem"

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
  unit: "0.25rem"   # 4px base grid — every value is a multiple of this
  # Foundational scale — 4px steps. Use the nearest step; never arbitrary values.
  scale:
    "4": "0.25rem"
    "8": "0.5rem"
    "12": "0.75rem"
    "16": "1rem"
    "24": "1.5rem"
    "32": "2rem"
    "40": "2.5rem"
    "48": "3rem"
    "64": "4rem"
    "80": "5rem"
    "96": "6rem"
    "128": "8rem"
  # Semantic tokens — layout-level gaps, each maps onto a step in the scale above.
  between-cards: "0.75rem"
  between-chips: "0.25rem"
  screen-edge: "1.5rem"
  component-default: "1rem"
  between-text: "0.5rem"
  text-to-component: "1rem"
  content-to-button: "1.5rem"
  between-sections: "3rem"
  hero: "6rem"

# Custom Tailwind breakpoints (min-width). Base (no prefix) covers 320–479px.
# Columns and the radius scale both switch at md (768px).
breakpoints:
  sm: "480px"
  md: "768px"
  lg: "992px"
  xl: "1200px"
  "2xl": "1440px"

# 12-col desktop / 6-col mobile, centred at max 1440px. Margin (page edge padding)
# and gutter (column gap) scale per breakpoint. See grid.md for the col-span math.
grid:
  max-width: "1440px"
  columns-mobile: 6
  columns-desktop: 12
  margin:           # horizontal page padding
    base: "20px"    # px-5   (320–479)
    sm: "32px"      # px-8   (480–767)
    md: "40px"      # px-10  (768–991)
    lg: "80px"      # px-20  (992–1199)
    xl: "100px"     # px-24  (1200–1440)
  gutter:           # column gap
    base: "12px"    # gap-3
    md: "16px"      # gap-4
    lg: "28px"      # gap-7
    xl: "32px"      # gap-8

# Snappy-first motion. All durations stay under 400ms. ease-spring adds a
# slight overshoot for interactive, gesture-driven elements.
motion:
  duration-fast: "150ms"
  duration-base: "250ms"
  duration-slow: "350ms"
  ease-default: "cubic-bezier(0.4, 0, 0.2, 1)"
  ease-spring: "cubic-bezier(0.175, 0.885, 0.32, 1.1)"

# One size ladder for all controls (buttons + inputs). A default button and a
# default input share the 2.5rem height so they align in a row. Heights are the
# contract; implement via shadcn cva `size` variants — don't duplicate per pixel.
control-sizes:
  sm:
    height: "2rem"      # 32px — h-8
    paddingX: "0.75rem" # px-3
  default:
    height: "2.5rem"    # 40px — h-10
    paddingX: "1rem"    # px-4
  lg:
    height: "3rem"      # 48px — h-12
    paddingX: "1.5rem"  # px-6

# Focus ring shown on :focus-visible for every interactive element. A 2px ring in
# the ring color, offset 2px from the element so it reads on any surface.
focus-ring:
  width: "2px"
  offset: "2px"
  color: "{colors.ring}"

# Interaction states come from opacity, not extra color tokens — one rule holds on
# every fill and every intent. (See tokens.md → Lightness model.)
states:
  hover: "90%"      # fill opacity on hover — e.g. bg-primary/90
  active: "80%"     # fill opacity on press
  disabled: "50%"   # opacity-50, plus not-allowed cursor

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

Two font families (`fonts` above): Inter (sans-serif) for all UI text, IBM Plex Mono for code and tabular data. Set up via `next/font/google` with CSS variable injection — no hardcoded font stacks in components.

The scale has three tiers: Display (bold, uppercase, fluid clamp — heroes and marketing moments), Heading (normal weight, tight tracking, editorial), and Text variants (lead, body, small, caption, eyebrow). The `code` token is the one mono role — inline code and tabular figures.

Always use `<Heading>`, `<Text>`, `<Eyebrow>` — never raw HTML tags with manual classes. See `typography.md` for the component API, scale rationale, and rules.

---

## Layout

12-column grid on desktop, 6-column on mobile, centred at max 1440px. Breakpoints, max-width, and the responsive margin/gutter values are in the YAML above (`breakpoints`, `grid`). Breakpoints are custom (sm 480 / md 768 / lg 992 / xl 1200 / 2xl 1440); columns switch from 6 to 12 at md. See `grid.md` for the `col-span` math and per-row patterns.

Spacing has two layers: a foundational 4px scale (`spacing.scale`) and semantic tokens (`spacing.between-*` etc.) for section, block, and layout-level gaps. Component padding is shadcn's territory — never use semantic tokens inside components. See `spacing.md` for the full two-layer system.

---

## Elevation & Depth

No shadow scale is currently defined. Depth is communicated through oklch lightness contrast between `background`, `card`, and `muted` surfaces — surfaces become lighter (light mode) or darker (dark mode) relative to the page background.

When elevation is needed beyond surface contrast, use `backdrop-filter: blur()` rather than `box-shadow`.

---

## Motion

Snappy first — most interactions should feel immediate. Three duration tokens (`duration-fast` 150ms, `duration-base` 250ms, `duration-slow` 350ms) and two easing tokens (`ease-default` for standard transitions, `ease-spring` for interactive, gesture-driven elements with a slight overshoot). All durations stay under 400ms.

Animate only `transform` and `opacity`, never layout properties. Always honor `prefers-reduced-motion`. See `motion.md` for principles and `transitions.md` for page and overlay patterns.

---

## Shapes

Rounded corners scale responsively — tighter on mobile, more expressive on desktop. The scale switches at 768px via a media query on the CSS custom properties. `rounded-input` stays fixed across all breakpoints for consistent form elements.

See `radius.md` for per-component values and the nesting rule.

---

## Components

All components are built on shadcn/ui with Radix UI primitives. Variants use class-variance-authority (cva). Each component has a matching `.figma.tsx` Code Connect file to keep design and code in sync.

Controls (buttons, inputs) follow one size ladder — `sm` 32px / `default` 40px / `lg` 48px (see `control-sizes` above). A default button and a default input share the 40px height so they line up in a form row. The heights here are the contract; the implementation lives in each component's cva `size` variant — keep the two in sync via the standard "update DESIGN.md first" workflow rather than duplicating padding values per component.

Typography components (`<Heading>`, `<Text>`, `<Eyebrow>`) are custom — not from shadcn. See `styleguide.md` for the full component inventory and style guide structure.

Interaction is driven by tokens, not per-component colors: states come from opacity (`states` — hover 90%, active 80%, disabled 50%), and every interactive element shows the `focus-ring` on `:focus-visible`. Never remove a focus outline without a visible replacement.

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
