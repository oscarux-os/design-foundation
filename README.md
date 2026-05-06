# design-foundation

A design foundation for building consistent, well-documented Next.js projects. Clone this as a starting point — update the tokens, adjust what differs, and start building.

Built and maintained as a reusable design foundation.

---

## What's included

| File | Purpose |
|------|---------|
| `CLAUDE.md` | AI context — loaded automatically by Claude Code |
| `DESIGN.md` | Machine-readable token snapshot — single source of truth for all values |
| `AGENTS.md` | Reading order for AI before building anything |
| `The idea.md` | Vision, stack, and key rules |
| `Project Setup.md` | Full build order and Figma connection guide |
| `tokens.md` | Color token structure, Tailwind mapping, and allowed classes |
| `grid.md` | Responsive 12-column grid system |
| `typography.md` | Heading, Text, Eyebrow components + font setup |
| `spacing.md` | Two-layer spacing — semantic tokens + padding patterns |
| `radius.md` | Responsive border radius scale |
| `icons.md` | Phosphor icons — sizes, weights, rules |
| `motion.md` | Motion principles — snappy, fluid, intuitive |
| `transitions.md` | Page and overlay transition patterns |
| `grammar-and-style.md` | Voice, tone, and A–Z copy rules |
| `styleguide.md` | Living style guide page structure |

---

## Stack

- **Next.js** (App Router) + TypeScript
- **Tailwind CSS v4**
- **shadcn/ui** + Radix UI
- **class-variance-authority (cva)**
- **@phosphor-icons/react**

---

## How to use

1. Clone the repo into your new project's docs folder
2. Update token values in `DESIGN.md` (YAML front matter) for your project's colors, radius, and spacing
3. Copy the updated values into `app/globals.css` in your Next.js project
4. Adjust any rationale docs that differ from your project's needs
5. Read `DESIGN.md` and then `AGENTS.md` before starting to build

---

## Token update workflow

All token values live in `DESIGN.md` — it is the single source of truth. The per-concern docs (`tokens.md`, `radius.md`, `typography.md`, `spacing.md`) document structure and rationale but do not repeat values.

```
Change a token value  →  edit DESIGN.md YAML  →  copy to globals.css
Change a rule/rationale  →  edit the specific .md doc
```

---

## AI guidance

This foundation is built to work with [Claude Code](https://claude.ai/claude-code). `CLAUDE.md` is picked up automatically — it points to `DESIGN.md` first (complete token snapshot) and then `AGENTS.md` for the full reading order.
