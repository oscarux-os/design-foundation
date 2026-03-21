# design-foundation

A design foundation for building consistent, well-documented Next.js projects. Clone this as a starting point — update the tokens, adjust what differs, and start building.

Built and maintained by Oscar, UX designer.

---

## What's included

| File | Purpose |
|------|---------|
| `CLAUDE.md` | AI context — loaded automatically by Claude Code |
| `_ai-guide.md` | Reading order for AI before building anything |
| `The idea.md` | Vision, stack, and key rules |
| `Project Setup.md` | Full build order and Figma connection guide |
| `tokens.md` | Design tokens — colors, fonts, radius, tracking |
| `grid.md` | Responsive 12-column grid system |
| `typography.md` | Heading, Text, Eyebrow components + font setup |
| `spacing.md` | Two-layer spacing — semantic tokens + padding patterns |
| `radius.md` | Responsive border radius scale |
| `icons.md` | Phosphor icons — sizes, weights, rules |
| `motion.md` | Motion principles — snappy, fluid, intuitive |
| `transitions.md` | Page and overlay transition patterns |
| `grammar-and-style.md` | Voice, tone, and A–Z copy rules |
| `styleguide.md` | Living style guide page structure |
| `TODO.md` | What to fill in before building starts |

---

## Stack

- **Next.js** (App Router) + TypeScript
- **Tailwind CSS v4**
- **shadcn/ui** + Radix UI
- **class-variance-authority (cva)**
- **@phosphor-icons/react**

---

## How to use

1. Clone the repo into your new project's Obsidian vault or docs folder
2. Open `TODO.md` — work through what needs updating for your project
3. Update `tokens.md` with your colors, fonts, and radius
4. Read `_ai-guide.md` before starting to build

---

## AI guidance

This foundation is built to work with [Claude Code](https://claude.ai/claude-code). `CLAUDE.md` is picked up automatically and points to `_ai-guide.md`, which tells the AI what to read and in what order before building anything.
