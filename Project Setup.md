# Project Setup — oh.design

Master plan for the entire project: build order, AI guidance, Figma connection, and Code Connect.

---

## Build Order (step-by-step)

### 1. Initialise the project

```bash
npx create-next-app@latest oh-design --typescript --tailwind --app
cd oh-design
npx shadcn@latest init
```

### 2. Define design tokens

Write all CSS custom properties in `app/globals.css`. This is the foundation for everything — Tailwind, Figma, and Code Connect all start here.

Get all token values from `DESIGN.md` (YAML front matter). See `tokens.md` for the CSS structure to paste them into.

### 3. Configure grid and spacing

Tailwind v4 requires no extra configuration file for basic spacing — just follow the 4px grid and gap-5/px-5 rules.

See `grid.md` and `spacing.md`.

### 4. Build the typography component

```bash
# Create manually — no shadcn component for typography
touch components/ui/typography.tsx
```

See `typography.md` for full implementation.

### 5. Add shadcn components

```bash
npx shadcn@latest add button card badge separator accordion
npx shadcn@latest add aspect-ratio avatar tabs input textarea
npx shadcn@latest add select dialog sheet navigation-menu tooltip
```

### 6. Set up Figma Design System

- Export CSS custom properties from `globals.css` to Figma Variables (via Tokens Studio or manual import)
- Create a component library in Figma that mirrors `components/ui/`
- Match props: shadcn Button `size`/`variant` → Figma Button component with identical prop names

See the **Figma ↔ Code Connection** section below.

### 7. Connect Code Connect

```bash
npm install --save-dev @figma/code-connect
```

Create `[component].figma.tsx` next to each component in `components/ui/`.

```bash
npx @figma/code-connect publish
```

See the **Code Connect Integration** section below.

---

## AI Guidance System (the MD files)

The project uses a collection of MD files that guide AI in the right direction when building pages and components.

### Reading order

0. `DESIGN.md` — complete token snapshot (all values in YAML). Read this first.
1. `tokens.md` — CSS structure, Tailwind mapping, allowed classes
2. `grid.md` — column system, breakpoints, rules
3. `typography.md` — Heading/Text/Eyebrow components
4. `spacing.md` — 4px grid, semantic tokens, padding patterns
5. `radius.md` — responsive radius scale, per-component values
6. `icons.md` — `@phosphor-icons/react`, sizes, usage
7. `motion.md` — motion principles (snappy, fluid, intuitive)
8. `transitions.md` — page and overlay transition patterns
9. `grammar-and-style.md` — voice, tone, copy rules
10. `styleguide.md` — `/style-guide` route, components + blocks tabs

**Rule:** Before building a new page or component — read `DESIGN.md` and `AGENTS.md`, then the relevant sub-files.

---

## Figma ↔ Code Connection

Three layers of synchronisation keep Figma and the codebase in perfect mirror:

```
globals.css (CSS custom properties)
    ↓  exported as
Figma Variables (via Tokens Studio / manual import)
    ↓  mirrored in
Figma Component Library
    ↓  connected with
Code Connect (figma.tsx files next to components)
```

### Concrete mappings

| Code | Figma |
|------|-------|
| `--primary`, `--background`, `--foreground` etc. | Variable Collection "Primitives" |
| shadcn Button (size/variant via CVA) | Button component with identical props |
| `<Heading>`, `<Text>`, `<Eyebrow>` | Text Styles |
| Spacing scale (4, 8, 12, 16, 20, 24…) | Spacing Tokens |

### Tokens Studio flow

1. Define tokens in `globals.css`
2. Export to `tokens.json` (Tokens Studio format)
3. Import in Figma via the Tokens Studio plugin
4. Sync on every token update

---

## Code Connect Integration

Each shadcn component in `components/ui/` gets a `[component].figma.tsx` file next to it.

### File structure

```
components/ui/
  button.tsx
  button.figma.tsx        ← Code Connect mapping
  typography.tsx
  typography.figma.tsx
  card.tsx
  card.figma.tsx
  badge.tsx
  badge.figma.tsx
  ...
```

### Example: button.figma.tsx

```tsx
import figma from "@figma/code-connect"
import { Button } from "./button"

figma.connect(Button, "https://figma.com/...", {
  props: {
    variant: figma.enum("Variant", {
      default: "default",
      destructive: "destructive",
      outline: "outline",
      ghost: "ghost",
    }),
    size: figma.enum("Size", {
      default: "default",
      sm: "sm",
      lg: "lg",
      icon: "icon",
    }),
    children: figma.children("*"),
  },
  example: ({ variant, size, children }) => (
    <Button variant={variant} size={size}>{children}</Button>
  ),
})
```

### Publish to Figma

```bash
npx @figma/code-connect publish
```

Run this after every new component or prop change.

---
