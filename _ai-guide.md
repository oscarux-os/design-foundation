# AI Guide — oh.design

Read this document FIRST before building anything. It points you in the right order.

---

## Reading order

Before building a new page, component, or section — read the relevant files in this order:

1. **`tokens.md`** — Which colors and CSS variables exist. Without this you don't know which classes are allowed.
2. **`grid.md`** — How columns and breakpoints work. All layouts start here.
3. **`typography.md`** — Which typography components exist and how to use them. No raw `<h1>` tags.
4. **`spacing.md`** — Two-layer spacing system: semantic tokens for layout, padding patterns for inner content.
5. **`radius.md`** — Border radius tokens and per-component values.
6. **`icons.md`** — Which icons are used and at which sizes.
7. **`motion.md`** — Motion principles and patterns.
8. **`transitions.md`** — State changes between UI elements and routes.
9. **`grammar-and-style.md`** — Voice, tone, and copy rules.
10. **`components.md`** — shadcn patterns and CVA structure for more complex cases.
11. **`styleguide.md`** — Living style guide page structure. Every new component and block must be added here.

---

## When in doubt

If you are unsure which component to use, which layout pattern fits, or how something should be built — **ask the master before writing any code.** Don't guess and don't improvise. A quick question is always better than building the wrong thing.

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

---

## Quick reference

| Category | File | Key info |
|----------|------|----------|
| Colors | `tokens.md` | CSS custom properties in `globals.css` |
| Layout | `grid.md` | 12-col desktop, 6-col mobile, gap-5 |
| Text | `typography.md` | `<Heading>`, `<Text>`, `<Eyebrow>` via cva |
| Spacing | `spacing.md` | Semantic tokens for layout, padding patterns for content |
| Radius | `radius.md` | Token-based, no arbitrary values |
| Icons | `icons.md` | `@phosphor-icons/react`, sizes 16/24/48/64/96 |
| Motion | `motion.md` | Snappy, fluid, intuitive principles |
| Transitions | `transitions.md` | State changes, route transitions |
| Copy | `grammar-and-style.md` | Voice, tone, UI copy rules |
| Components | `components.md` | shadcn + CVA patterns |
| Style guide | `styleguide.md` | `/style-guide` route, components + blocks tabs |
