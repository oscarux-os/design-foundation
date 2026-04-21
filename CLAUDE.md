# oh.design

Next.js portfolio and test platform for personal use. The master is a UX designer — usability and design are top priorities. Everything should exist for a reason, feel effortless and frictionless.

The goal is a strong foundation that lets things get built quickly and correctly from the start, without having to go back and fix things later.

## Stack

**Framework: Next.js (App Router) — default.** Use this unless the master explicitly asks for something else (e.g. TanStack Start). The foundation docs, shadcn setup, and Tailwind v4 guidance all assume Next.js.

Next.js (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui · @phosphor-icons/react

## Starting a new project with this foundation

This repo is a design foundation — the tokens, grid, typography rules and style guide are intentionally generic and ready to be adapted. When bootstrapping a new project from this foundation, ask the master about the project-specific choices below **before writing any code**, then update the relevant docs with the answers.

- **Project name & purpose** — update the intro at the top of this file.
- **Fonts** — heading / body / mono families → `typography.md`.
- **Base colors** — brand/primary, background, foreground, accent → `tokens.md`.
- **Radius scale** — tight / default / rounded preferences → `radius.md`.
- **Spacing preferences** — any deviations from the 4px grid defaults → `spacing.md`.
- **Icon library** — default is `@phosphor-icons/react` (see `icons.md`); confirm before swapping.
- **Breakpoint targets** — any non-standard device targets → `grid.md`.

Don't guess values. If the master hasn't answered yet, pause and ask. Once a value is decided, write it into the matching doc so the foundation becomes project-specific in one place.

## When in doubt

If unsure which component to use or how something should be built — ask the master before writing any code.

## Before building anything

Read `_ai-guide.md` — it points you in the right order.

## Highlighted text

When the master highlights text in a file using `==like this==`, it is a personal note with their take or a change they want applied. Read it, update the file to reflect it, and remove the highlight.
