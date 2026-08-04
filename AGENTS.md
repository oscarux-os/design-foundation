# oh.design

Next.js portfolio and test platform for personal use. The master is a UX designer — usability and design are top priorities. Everything should exist for a reason, feel effortless and frictionless.

The goal is a strong foundation that lets things get built quickly and correctly from the start, without having to go back and fix things later.

This file is the single instruction source for every AI tool working in this repo. `CLAUDE.md` imports it; Codex and other agents read it directly. Don't duplicate its content elsewhere — link to it.

---

## Stack

**Framework: Next.js (App Router) — default.** Use this unless the master explicitly asks for something else (e.g. TanStack Start). The foundation docs, shadcn setup, and Tailwind v4 guidance all assume Next.js.

Next.js (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui · @phosphor-icons/react

---

## Before building anything

Read `DESIGN.md` first — it has the complete token snapshot (all color, typography, radius, spacing, and component values) in machine-readable YAML. It answers most questions on its own; the reading order below is for when it doesn't.

**When a token value changes:** update `DESIGN.md` (YAML front matter) first, then update `app/globals.css`. The per-concern docs (`tokens.md`, `radius.md`, `typography.md`, `spacing.md`) document structure and rationale — they do not repeat values.

Bootstrapping a brand-new project from this foundation? See `Project Setup.md` → Step 0.

---

## Rules that always apply

- **No hardcoded colors.** Always token classes (`text-foreground`, `bg-card`) or CSS variables (`var(--primary)`).
- **No arbitrary Tailwind values** like `p-[13px]` or `text-[#fff]`.
- **No raw HTML tags** for typography in pages — use `<Heading>`, `<Text>`, `<Eyebrow>`.
- **No `@base-ui/react`** — always `@radix-ui/react-*`.
- **Grid: always `col-span`** — never `grid-cols-2` or `grid-cols-3` inside the 12-col layout.
- **Grid margin and gutter are responsive** — never hardcode `gap-5 px-5`, use the full responsive class string from `grid.md`.
- **Always wrap pages in `max-w-[1440px] mx-auto`** — content must never exceed 1440px.
- **Always step through mobile breakpoints** — never jump from 1 to 3 items per row.
- **Grid adapts to context** — full-bleed, narrow, or asymmetric layouts are valid. See `grid.md` for guidance.
- **Intents mark state, not brand** — `destructive`, `success`, `warning` for errors, confirmations, cautions. `primary` stays the brand accent.
- **No emojis in UI, code, or commits.** If something needs a glyph, it's a Phosphor icon.

---

## Reading order

`DESIGN.md` covers most of what you need. Reach for these when it doesn't:

0. **`DESIGN.md`** — Complete machine-readable token snapshot (YAML front matter). All current values for colors, typography, radius, spacing, and component tokens. Read this first.
1. **`tokens.md`** — CSS structure and Tailwind mapping for colors. Shows which classes are allowed.
2. **`grid.md`** — How columns and breakpoints work. All layouts start here.
3. **`typography.md`** — Which typography components exist and how to use them. No raw `<h1>` tags.
4. **`spacing.md`** — Two-layer spacing system: semantic tokens for layout, padding patterns for inner content.
5. **`radius.md`** — Border radius tokens and per-component values.
6. **`icons.md`** — Which icons are used and at which sizes.
7. **`motion.md`** — Motion principles and patterns.
8. **`transitions.md`** — State changes between UI elements and routes.
9. **`grammar-and-style.md`** — Voice, tone, and copy rules.
10. **`styleguide.md`** — Living style guide page structure. Every new component and block must be added here.

---

## When in doubt

If you are unsure which component to use, which layout pattern fits, or how something should be built — **ask the master before writing any code.** Don't guess and don't improvise. A quick question is always better than building the wrong thing.

---

## Highlighted text

When the master highlights text in a file using `==like this==`, it is a personal note with their take or a change they want applied. Read it, update the file to reflect it, and remove the highlight.

---

## Quick reference

| Category | File | Key info |
|----------|------|----------|
| **All token values** | `DESIGN.md` | YAML front matter — single source of truth for values |
| Colors | `tokens.md` | CSS structure, Tailwind mapping, allowed classes |
| Layout | `grid.md` | 12-col desktop, 6-col mobile, responsive margin/gutter |
| Text | `typography.md` | `<Heading>`, `<Text>`, `<Eyebrow>` via cva |
| Spacing | `spacing.md` | Semantic tokens for layout, padding patterns for content |
| Radius | `radius.md` | Token-based, no arbitrary values |
| Icons | `icons.md` | `@phosphor-icons/react`, sizes 16/24/48/64/96 |
| Motion | `motion.md` | Snappy, fluid, intuitive principles |
| Transitions | `transitions.md` | State changes, route transitions |
| Copy | `grammar-and-style.md` | Voice, tone, UI copy rules |
| Components | `DESIGN.md` → Components | Per-component tokens, control size ladder, states, focus ring |
| Style guide | `styleguide.md` | `/style-guide` route, components + blocks tabs |
| New project setup | `Project Setup.md` | Bootstrap questions, build order, Figma connection |
