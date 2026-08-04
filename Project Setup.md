# Project Setup — oh.design

Master plan for the entire project: build order, AI guidance, Figma connection, and Code Connect.

---

## Build Order (step-by-step)

### 0. Ask before writing any code

This repo is a design foundation — the tokens, grid, typography rules and style guide are intentionally generic and ready to be adapted. When bootstrapping a new project from it, ask the master about the project-specific choices below **before writing any code**, then write the answers into the matching docs.

- **Project name & purpose** — update the intro at the top of `AGENTS.md`.
- **Fonts** — heading / body / mono families → `typography.md`.
- **Base colors** — brand/primary, background, foreground, accent → `DESIGN.md` (colors + colors-dark), then `tokens.md` for CSS structure.
- **Radius scale** — tight / default / rounded preferences → `DESIGN.md` (rounded + rounded-desktop), then `radius.md` for per-component usage.
- **Spacing preferences** — any deviations from the 4px grid defaults → `DESIGN.md` (spacing), then `spacing.md` for semantic token usage.
- **Icon library** — default is `@phosphor-icons/react` (see `icons.md`); confirm before swapping.
- **Breakpoint targets** — any non-standard device targets → `grid.md`.

Don't guess values. If the master hasn't answered yet, pause and ask. Once a value is decided, write it into the matching doc so the foundation becomes project-specific in one place.

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

`AGENTS.md` is the single instruction source — it holds the project brief, the stack, the always-apply rules, and the reading order. `CLAUDE.md` imports it, so Claude Code and Codex both work from the same content. **Don't restate its contents here.**

**Rule:** Before building a new page or component — read `DESIGN.md` for values, then `AGENTS.md` for the rules and the reading order into the per-concern docs.

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
