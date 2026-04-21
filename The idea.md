# oh.design — Project Idea

## Vision

A Next.js project for personal use — a portfolio site but also a place to build and test views.

The master is a UX designer and usability is a top priority. Design should feel light and frictionless. Everything should exist for a reason — no unnecessary content or noise that distracts the user.

## Design Philosophy

- **Friction is the enemy.** Everything should be easy to understand and use on the first try.
- **Purpose before decoration.** Every element is justified by a functional need.
- **Consistency is trust.** Same patterns, same spacing, same behaviour — always.

---

## Technical Foundation

### Stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** — component library with theme tokens
- **Radix UI** primitives under the hood (never use `@base-ui/react`)
- **class-variance-authority (cva)** — for component variants
- **@phosphor-icons/react** — icons

### shadcn Setup

```bash
npx create-next-app@latest oh-design --typescript --tailwind --app
cd oh-design
npx shadcn@latest init
```

Add components one by one:

```bash
npx shadcn@latest add button card badge separator accordion
npx shadcn@latest add aspect-ratio avatar tabs input textarea
npx shadcn@latest add select dialog sheet navigation-menu tooltip
```

All components live in `components/ui/`. Always import from there.

### Theme Tokens

All colors, fonts, radius, and tracking are defined in `app/globals.css` as CSS custom properties. **This is the only place they are defined.** Never touch component files to change them.

Current theme: green-tinted (oklch hue 138), full light and dark mode. See `tokens.md` for the complete setup.

Always use Tailwind token classes in components:

```
text-foreground          — primary text
text-muted-foreground    — secondary/supporting text
text-primary             — accent/brand color
bg-background            — page background
bg-card                  — card/surface background
bg-muted                 — subtle backgrounds, icon containers
border-border            — all borders
ring-ring                — focus rings
text-destructive         — error states
```

Never hardcode colors. See `tokens.md` for the full reference.

### Fonts

- **Inter** — sans-serif, all UI text
- **IBM Plex Mono** — monospace, code and technical content

Set up via `next/font/google` in `app/layout.tsx`. See `typography.md` for implementation.

### Grid System

Responsive 12-column grid with margins and gutters that scale with the viewport. Max width 1440px — content centres beyond that.

```tsx
<div className="max-w-[1440px] mx-auto">
  <div className="
    grid grid-cols-6 md:grid-cols-12
    gap-3 md:gap-4 lg:gap-7 xl:gap-8
    px-5 sm:px-8 md:px-10 lg:px-20 xl:px-24
  ">
    {/* content */}
  </div>
</div>
```

The grid adapts to what's being built — full-bleed, narrow text, asymmetric layouts are all valid. See `grid.md` for the full scale and guidance.

### Spacing

Two-layer system — semantic tokens for layout, Tailwind classes for component internals. See `spacing.md` for the complete setup including padding patterns per content type.

### Radius

Responsive — tighter on mobile, more generous on desktop. Defined as CSS custom properties that switch at `768px` automatically. See `radius.md` for the full scale.

### Typography

Custom `typography.tsx` in `components/ui/` with `Heading`, `Text`, and `Eyebrow` components via cva. Never use raw `<h1>`, `<p>` tags with manual classes in pages.

```tsx
<Heading size="display">Hero Title</Heading>
<Heading size="h2">Section Title</Heading>
<Eyebrow>Featured Work</Eyebrow>
<Text variant="lead">Intro paragraph</Text>
<Text variant="body">Standard copy</Text>
<Text variant="small">Card description</Text>
<Text variant="caption">Category · 2024</Text>
```

### Motion

Three principles guide all motion: **Snappy** (60%), **Fluid** (30%), **Intuitive** (10%). Motion should feel like a natural extension of the interface — purposeful, never decorative. See `motion.md` and `transitions.md`.

### Style Guide

A living style guide at `/style-guide` documents every component and block as it's built — split into two tabs: Components and Blocks. Nothing is considered done until it's documented there. See `styleguide.md`.

### Key Rules

| ❌ Don't | ✅ Do |
| -------- | ----- |
| Hardcode `#hex` or `oklch()` in components | Token classes: `text-primary`, `bg-card` |
| Fixed `gap-5 px-5` on the grid | Responsive margin and gutter from `grid.md` |
| `grid-cols-2` / `grid-cols-3` in 12-col grid | Explicit `col-span` per item |
| Jump 1-per-row → 3-per-row on mobile | Step through breakpoints |
| Arbitrary spacing `p-[13px]` | Nearest 4px step |
| `@base-ui/react` primitives | `@radix-ui/react-*` always |
| Raw `<h1>` with manual classes | `<Heading size="h1">` component |
| Guess which component to use | Ask the master |
