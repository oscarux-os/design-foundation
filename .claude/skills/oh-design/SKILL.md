---
name: oh-design
description: Refine already-built UI against the oh.design foundation. Use when something looks or feels off and needs a detailed pass — generic or AI-generated-looking, cramped, flat, inconsistent, unfinished, awkward at a breakpoint, muddy color, misaligned controls, janky motion. Strips generated-UI tells, fixes token violations, and diagnoses what actually feels wrong. Aim it at a component, section, or page after a first draft.
---

# oh.design — refinement pass

This runs **after** something is built, usually after a fast AI-assisted first draft. The draft got the structure down; this pass strips what marks it as generated and makes it correct.

Three layers, in order.

## Before you start

1. **Read `DESIGN.md`** — the YAML front matter is the current token snapshot. This skill names *which* token; `DESIGN.md` holds *what it is*. Never refine toward a value you invented.
2. **Read the target and enough around it** to judge it in context. Rhythm and consistency only show up at section level.
3. **Don't redesign.** The intent stays; the execution gets sharper. If a fix would change what the thing *is*, flag it instead of doing it.

---

## Layer 1 — strip the slop

The tells of generated UI. These are the reason this pass exists. Remove them; do not soften them.

### Never, under any circumstance

- **Emojis.** Not in headings, labels, buttons, list items, empty states, comments, or commit messages. Not as icons. Not "just one." If something needs a glyph, it is a Phosphor icon.
- **Pulsing or breathing status dots.** No `animate-pulse` on a circle, no `animate-ping` ring, no glowing "live" indicator. A status is a color and a word.
- **Gradient text.** No `bg-clip-text` on a heading. No purple-to-pink anything.
- **Sparkles, stars, rocket ships, lightbulbs, magic wands** as decoration — especially to signify "AI," "fast," or "smart."
- **Shimmer skeletons** as a default loading state. If loading needs a treatment, it is a still `bg-muted` block.
- **`hover:scale-105`** and friends on cards, buttons, tiles. Interaction feedback in this system is opacity, not scale.
- **Glow, neon borders, animated gradient borders, backdrop-blur used decoratively.** There is no shadow scale here on purpose. `backdrop-filter: blur()` is for genuine layering only.
- **Fabricated social proof** — invented testimonials, fake avatars, "Trusted by" logo rows, "10,000+ users," made-up star ratings. If the content is not real, it does not ship.

### Strip on sight unless it is doing real work

- **Eyebrow labels above every heading.** `<Eyebrow>` is a real component in this system, but a generated draft reaches for it reflexively. Keep it only where the label carries information the heading does not. Default to deleting it.
- **"New" / "Popular" / "Pro" badges** sprinkled for texture.
- **Icon-in-a-circle above each item** in a three-up feature grid. This is the single most recognizable generated layout. If the icons are not load-bearing, remove them and let the type carry it.
- **The hero → three features → CTA skeleton** when the content did not ask for it.
- **Everything centered.** Centered hero, centered section headers, centered cards, centered CTA. Left-aligned is the default for anything with more than a few words.
- **Checkmark-in-a-circle bullet lists** where a plain list would read better.
- **Stat rows** — three big numbers with labels underneath — unless the numbers are real and matter.
- **Pill-shaped everything.** `rounded-full` is for avatars and pill badges. Not cards, not panels, not buttons by default.

### Copy tells

Generated microcopy has a register. Cut it, and check the result against `grammar-and-style.md`.

- Verbs: *seamlessly, effortlessly, unlock, elevate, supercharge, empower, transform, revolutionize, harness, leverage*
- Nouns: *solution, journey, experience, ecosystem, powerhouse, game-changer*
- Shapes: "It's not just X — it's Y." · "Say goodbye to X." · rhetorical question as a heading · triads of adjectives
- Padding: "In today's fast-paced world," "Whether you're a X or a Y"

Say the thing plainly. A button says what happens when you press it.

---

## Layer 2 — mechanical

Deterministic violations. Fix directly; no judgment needed.

| Look for | Replace with |
|---|---|
| `#hex`, `rgb()`, `oklch()` outside `globals.css` | Token class — `text-foreground`, `bg-card`, `border-border` |
| `p-[13px]`, `gap-[20px]`, `text-[15px]` | Nearest 4px step |
| `rounded-[7px]` | `rounded-sm/md/lg/xl/2xl/input/full` |
| `<h2 className="text-3xl font-bold">` | `<Heading size="h2">` |
| `<p className="text-sm text-gray-500">` | `<Text variant="small" className="text-muted-foreground">` |
| `grid-cols-2` / `grid-cols-3` inside the layout | Explicit `col-span-*` |
| `gap-5 px-5` (fixed) | `gap-3 md:gap-4 lg:gap-7 xl:gap-8 px-5 sm:px-8 md:px-10 lg:px-20 xl:px-24` |
| `className="w-5 h-5"` on an icon | `size={16}` / `size={24}` |
| `size={18}`, `size={20}` | Nearest allowed: 16, 24, 48, 64, 96 |
| Invented `-hover` / `-dark` tokens | Opacity step — `hover:bg-primary/90 active:bg-primary/80` |
| Missing outer wrapper | `max-w-[1440px] mx-auto` |
| `outline-none` with no replacement | `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2` |
| `@base-ui/react` | `@radix-ui/react-*` |
| Animating `width` / `height` / `top` / `left` | `transform` / `opacity` |

Also: decorative icons in labelled buttons take `aria-hidden="true"`; icon-only buttons take `aria-label`; disabled is `opacity-50` plus `pointer-events-none`, never a color.

---

## Layer 3 — judgment

Indexed by what you noticed, not by which doc the rule lives in.

### "It feels cramped" / "It feels empty"

Usually the two spacing layers bleeding into each other.

- **Between** sections, blocks, cards, or a text block and what follows → semantic token (`py-between-sections`, `mt-text-to-component`, `gap-between-cards`).
- **Inside** a component → plain Tailwind (`p-6`, `p-4`).

Using `p-6` to push two cards apart, or a semantic token inside a card, produces exactly this feeling. Pick the token by *what the gap means*: `between-text` for paragraph to paragraph, `text-to-component` for a text block to what sits below, `content-to-button` before a CTA, `between-sections` for major sections, `hero` for top-of-page air.

Inner padding by content type: variable-height `p-6` · dense or compact data `p-4` · card content when tight `p-4` · footer `p-4 md:p-6`.

If it is genuinely just tight, step the scale — never split the difference with an arbitrary value.

### "The hierarchy is flat"

- Is secondary text still `text-foreground`? Supporting copy should be `text-muted-foreground`. Highest-leverage fix in this foundation.
- Are two adjacent levels using adjacent sizes (`h3` beside `h4`)? Skip a step rather than nudging a size.
- Is a `display-*` size carrying page structure? Display is for heroes and marketing moments — bold, uppercase, `leading-[0.85]`. Structure is `h1`–`h4`, normal weight, tight tracking. Mixing them flattens both.
- Is emphasis riding on weight? Headings are `font-normal` by design. Hierarchy comes from size, color, and space.

Do not solve flat hierarchy by adding an eyebrow. See Layer 1.

### "It doesn't match the rest of the site"

Check canonical radius first — the most common drift:

Button `rounded-md` · Input/Textarea `rounded-input` · Card `rounded-lg` · Badge/Tag `rounded-sm` · Modal `rounded-lg` · Sheet `rounded-lg` (top only) · Avatar `rounded-full` · Tooltip `rounded-sm` · Icon container `rounded-md` · Hero surface `rounded-xl`.

Then check `styleguide.md`. If a similar component already exists there, this one should match it or be replaced by it. Divergence usually means something got rebuilt instead of reused.

### "The corners look wrong"

- **Nested radius must be smaller than its parent.** A `rounded-lg` button inside a `rounded-lg` card reads broken.
- Radius is already responsive via CSS custom properties — `rounded-lg` is correct at every breakpoint. A responsive radius class is a sign someone worked around the system.
- `rounded-input` is fixed across breakpoints on purpose. Do not "fix" it.

### "The color feels muddy" / "too much green"

The chrome is deliberately neutral; green is the only accent, appearing at `primary`, `ring`, and the `accent` tonal fill. If green is on surfaces, borders, or body text, pull it back.

- `foreground` tokens are for text and icons only. `border` tokens for borders only.
- Tonal fills (`muted`, `secondary`, `accent`) separate — they are not elevation.
- **Elevation is lightness.** `card` sits lighter than `background` in both themes. If something needs to float, step the surface. There is no shadow scale.
- **Check both themes.** A fill that reads in light can go flat in dark.

### "The controls don't line up"

One size ladder for buttons and inputs: `sm` `h-8 px-3` · `default` `h-10 px-4` · `lg` `h-12 px-6`. Misalignment means someone hardcoded a height instead of using the cva `size` variant. Fix it at the variant, not the instance.

### "It breaks on mobile" / "awkward on tablet"

- **Did it step through breakpoints?** 1 to 3 is the classic break. Three items go `col-span-6 sm:col-span-3 md:col-span-4`. Four go `col-span-6 sm:col-span-3 md:col-span-3`.
- **Content cards never go below `col-span-6` on mobile.**
- Columns switch 6 to 12 at `md` (768px). A `md:col-span-*` written against a 6-col mental model is half what it should be.
- Every row fills all 12 columns.
- Full-bleed element escaping via negative margin from inside the grid? Move it to a wrapper outside the grid.

### "The motion feels sluggish" / "janky"

- Everything under 400ms. `duration-fast` for hover and focus, `duration-base` for enter/exit, `duration-slow` for page transitions. If it feels slow it is probably one tier too high — this system is snappy-first.
- `ease-default` for nearly everything. `ease-spring` only for interactive, gesture-driven elements; on a simple fade it reads as a wobble.
- Jank is almost always an animated layout property. `transform` and `opacity` only.
- Is `prefers-reduced-motion` honored?

### "It feels unfinished"

Usually missing states, not wrong styling. Walk the set: hover (`hover:bg-primary/90`), active (`active:bg-primary/80`), focus (visible `:focus-visible` ring on every interactive element), disabled (`opacity-50` plus `pointer-events-none`), and empty / loading / error.

---

## Reporting back

**Apply Layer 1 and Layer 2 directly.** Both are unambiguous.

**In Layer 3, apply what is clearly a defect** — nested radius matching its parent, secondary text not muted, a breakpoint jump — and **surface the rest as a short list** of what you would change and why. Anything that shifts what the UI communicates is the master's call.

Keep the summary plain: what you stripped, what you fixed, what you would still question. Point at `file:line`. No emojis in the summary either.

**If a token value is itself the problem** — the scale is missing a step, a color is not doing its job — do not patch it locally with an arbitrary value. Say so, and change `DESIGN.md` first, then `app/globals.css`.

**When unsure whether something is a defect or a deliberate choice, ask.** The grid explicitly adapts: full-bleed sections, narrow long-form pages, dense dashboards, and asymmetric marketing blocks are all valid. Deviation is not automatically drift.
