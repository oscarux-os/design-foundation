# design-foundation

A design foundation for building consistent, well-documented Next.js projects. Clone this as a starting point — update the tokens, adjust what differs, and start building.

Built and maintained as a reusable design foundation.

---

## What's included

| File | Purpose |
|------|---------|
| `AGENTS.md` | Single instruction source for AI — brief, rules, reading order |
| `CLAUDE.md` | Thin shim that imports `AGENTS.md`, plus Claude Code specifics |
| `DESIGN.md` | Machine-readable token snapshot — single source of truth for all values |
| `Project Setup.md` | Bootstrap questions, build order, and Figma connection guide |
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

`AGENTS.md` is the single instruction source — the project brief, stack, always-apply rules, and the reading order into the per-concern docs. Every fact lives there once.

- **Codex** and other agents read `AGENTS.md` directly.
- **[Claude Code](https://claude.ai/claude-code)** picks up `CLAUDE.md`, which imports `AGENTS.md` wholesale and adds Claude-specific notes on top.

Editing instructions? Edit `AGENTS.md`. `CLAUDE.md` only holds what is genuinely Claude Code-specific.

### Skills

`.claude/skills/oh-design/` is a refinement pass for Claude Code — invoke it with `/oh-design` and aim it at UI that already exists. It strips generated-UI tells, fixes token violations, and diagnoses what feels off. It travels with the repo when you clone the foundation.
