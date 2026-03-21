# Motion — oh.design

Motion should feel like a natural extension of the interface — not something you notice, but something you feel. Every movement has a reason.

**Contents:** [Principles](#principles) · [Applying principles](#applying-principles) · [Tools](#tools) · [Timing & Easing](#timing--easing) · [Patterns](#patterns) · [Rules](#rules)

---

## Principles

Three principles guide every motion decision. When in doubt, come back to these.

### Snappy

Fast, satisfying, and direct. Motion should communicate immediacy — like flipping a switch or dealing a card. It breaks away from slow, sluggish interactions that make interfaces feel heavy.

Not hyperactive or rushed. Snappy is confident, not frantic.

- Short durations
- Strong, clear easing curves
- Match cuts — align animated properties between states to create smooth but quick transitions

### Fluid

Organic and flowing. Elements don't just appear — they move in a way that feels physically connected to where they came from and where they're going.

Not directionless or wobbly. Fluid has intention and structure behind it.

- Layered transitions between states
- Morphing elements from one form to the next
- Elements entering and exiting with a natural arc

### Intuitive

Natural pace with a sense of physical weight. Motion responds to what the user did — scrolling, tapping, dragging — and mirrors the gesture back to them.

Not polished to the point of feeling mechanical. Intuitive is human.

- Feedback that matches the scale of the action
- Movement that feels like a direct response to input
- No surprises — motion does what you expect it to

---

## Applying principles

Use the three principles in proportion. Not every interaction needs all three — lean on what the moment calls for.

| Principle | Weight | When |
|-----------|--------|------|
| Snappy | ~60% | Micro-interactions, hover states, button feedback |
| Fluid | ~30% | Page transitions, reveals, layout shifts |
| Intuitive | ~10% | Scroll-driven motion, gesture responses |

---

## Tools

_Decided when the need arises. Candidates:_

- **Tailwind transitions** — for simple hover/focus states
- **Framer Motion** — for complex animations, page transitions, scroll-driven motion
- **CSS animations** — for looped or performance-critical animations

---

## Timing & Easing

_Values defined here once established._

| Token | Value | Usage |
|-------|-------|-------|
| `duration-fast` | — | Hover, focus, snappy interactions |
| `duration-base` | — | Standard enter/exit |
| `duration-slow` | — | Page transitions, large reveals |
| `ease-default` | — | Standard easing |
| `ease-spring` | — | Interactive, gesture-driven elements |

---

## Patterns

_Filled in as patterns are established._

### Hover states
_Defined here._

### Enter/Exit (modals, drawers, tooltips)
_Defined here._

### Page transitions
_See `transitions.md` for page and overlay transition patterns._

### Scroll-based motion
_Defined here._

---

## Rules

- Never animate layout properties (`width`, `height`, `top`, `left`) — use `transform` and `opacity`.
- Keep animations under 400ms as a rule — longer feels sluggish.
- Motion should feel snappy first. Add fluidity only where it earns its place.
- All animations wrapped in `@media (prefers-reduced-motion: no-preference)` or handled via Framer Motion's `useReducedMotion`.

```tsx
// Respect reduced motion with Framer Motion
import { useReducedMotion } from "framer-motion"

const shouldReduce = useReducedMotion()
const variants = shouldReduce ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 } }
```
