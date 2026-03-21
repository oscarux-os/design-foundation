# Transitions — oh.design

Transitions occur when users move between screens or trigger overlays. They create a sense of continuation and help users understand where they are in a flow. Always unobtrusive and natural — never decorative.

**Contents:** [Philosophy](#philosophy) · [Page transitions](#page-transitions) · [Overlay transitions](#overlay-transitions) · [Micro-transitions](#micro-transitions) · [Timing](#timing) · [Tools](#tools) · [Radix pattern](#radix-ui-pattern) · [Rules](#rules)

---

## Philosophy

- **Continuity over flash.** Transitions should make a change feel connected, not abrupt.
- **Match the weight of the action.** A tooltip appearing needs less transition than a modal opening.
- **Never block the user.** A transition should never make the interface feel slower to use.
- **Be intentional.** Don't use different transition patterns for similar needs — consistency builds trust.

---

## Page transitions

Two patterns for navigating between routes. Choose based on the relationship between the pages.

### Upwards
Indicates the **start of a new flow or action**. Use when the user initiates something new — a fresh context that has no back-step within the same flow.

- New screen slides in from the bottom, fully covering the previous screen
- Always include a dismiss/close button in the top left corner

```
Use for: opening a new section, starting a new task, first step in a multi-step flow
```

### Sideways
Indicates the **continuation of a flow**. Use for consecutive steps within the same journey — the user is moving forward or backward within an already-started action.

- Content slides in from the right (forward) or left (backward)
- On web: content moves with a quick fade as it transitions

```
Use for: step 2 → step 3 in a flow, sub-pages within the same section, back navigation
```

---

## Overlay transitions

Two patterns for supplementary content that appears above the current screen.

### Modal / Dialog
A container for supporting content or a short supplementary task. Always dismissible.

- Comes in from the bottom on mobile
- Fades in centered on desktop
- Disappears with a fade when dismissed
- **Never use consecutive modals** to replace page-to-page navigation

```
Use for: confirmations, filters, selectors, short forms
```

### Bottom Sheet
A container for supporting content or a single-page action. Sits at the bottom of the screen.

- Slides in from the bottom
- Disappears with a downward slide when dismissed

```
Use for: option pickers, action menus, supplementary info during a flow
```

---

## Micro-transitions

Small state changes on interactive elements.

| Element | Property | Duration |
|---------|----------|----------|
| Button hover | `background-color`, `opacity` | — |
| Link hover | `color`, `opacity` | — |
| Input focus | `border-color`, `ring` | — |
| Icon state change | `color`, `transform` | — |

---

## Timing

_Values defined here once established. Should align with `animations.md` timing tokens._

| Token | Value | Usage |
|-------|-------|-------|
| `duration-fast` | — | Micro-transitions |
| `duration-base` | — | Overlay in/out |
| `duration-slow` | — | Page transitions |

---

## Tools

- **Tailwind `transition-*` utilities** — for micro-transitions on interactive elements
- **Radix UI built-in states** (`data-state="open"` / `data-state="closed"`) — for overlay transitions via Tailwind `data-*` variants
- **Framer Motion** — for page transitions and complex orchestration

---

## Radix UI pattern

Radix components expose `data-state` on their elements. Use Tailwind's `data-*` variants to drive transitions without JavaScript.

```tsx
// Modal/Dialog fading in from bottom
<DialogContent className="
  data-[state=open]:animate-in
  data-[state=closed]:animate-out
  data-[state=closed]:fade-out-0
  data-[state=open]:fade-in-0
  data-[state=open]:slide-in-from-bottom-4
  data-[state=closed]:slide-out-to-bottom-4
">

// Sheet sliding in from bottom
<SheetContent className="
  data-[state=open]:animate-in
  data-[state=closed]:animate-out
  data-[state=closed]:slide-out-to-bottom
  data-[state=open]:slide-in-from-bottom
">
```

shadcn components already include these — don't override unless intentional.

---

## Rules

- **Upwards = new flow. Sideways = continuation.** Never mix these up — it disorients users.
- **Never use consecutive modals** to replace page-to-page navigation.
- **Never remove transitions from shadcn components** without a clear reason.
- **Don't animate layout properties** (`width`, `height`) — use `transform` instead.
- **Respect `prefers-reduced-motion`** — transitions should be suppressed or minimised.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
```
