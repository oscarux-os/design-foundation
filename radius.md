# Radius — oh.design

Rounded corners scale responsively — tighter on mobile, more expressive on desktop. Defined as CSS custom properties that switch at the `md` breakpoint automatically.

> **Values are defined in `DESIGN.md`** (YAML — `rounded` for mobile, `rounded-desktop` for 768px+). When you change a radius value, update `DESIGN.md` first, then copy the new value into `app/globals.css`.

**Contents:** [Token](#token) · [Scale](#scale) · [Per component](#per-component) · [Rules](#rules)

---

## Token

Defined in `app/globals.css`. Mobile values are default, desktop values override at `768px`. Fill values from `DESIGN.md`.

```css
:root {
  /* Mobile — values from DESIGN.md → rounded */
  --radius-sm:    ;
  --radius-md:    ;
  --radius-lg:    ;
  --radius-xl:    ;
  --radius-2xl:   ;
  --radius-input: ; /* fixed — does not change at desktop */
}

@media (min-width: 768px) {
  :root {
    /* Desktop — values from DESIGN.md → rounded-desktop */
    --radius-sm:  ;
    --radius-md:  ;
    --radius-lg:  ;
    --radius-xl:  ;
    --radius-2xl: ;
  }
}
```

Map to Tailwind in `@theme inline`:

```css
@theme inline {
  --radius-sm:    var(--radius-sm);
  --radius-md:    var(--radius-md);
  --radius-lg:    var(--radius-lg);
  --radius-xl:    var(--radius-xl);
  --radius-2xl:   var(--radius-2xl);
  --radius-input: var(--radius-input);
  --radius-full:  9999px;
}
```

---

## Scale

Values from `DESIGN.md → rounded` (mobile) and `rounded-desktop` (768px+).

| Token | Tailwind class |
|-------|----------------|
| `--radius-sm` | `rounded-sm` |
| `--radius-md` | `rounded-md` |
| `--radius-lg` | `rounded-lg` |
| `--radius-xl` | `rounded-xl` |
| `--radius-2xl` | `rounded-2xl` |
| `--radius-input` | `rounded-input` |
| — | `rounded-full` |

---

## Per component

| Component | Radius | Note |
|-----------|--------|------|
| Button | `rounded-md` | Grows with viewport |
| Input / Textarea | `rounded-input` | Fixed — consistent across breakpoints |
| Card | `rounded-lg` | Grows with viewport |
| Badge / Tag | `rounded-sm` | |
| Modal / Dialog | `rounded-lg` | |
| Sheet / Drawer | `rounded-lg` | Top corners only |
| Avatar | `rounded-full` | |
| Tooltip | `rounded-sm` | |
| Icon container | `rounded-md` | |
| Large hero surfaces | `rounded-xl` | |

---

## Rules

- **Never hardcode pixel values** — always use `rounded-*` classes.
- **Never use arbitrary values** like `rounded-[7px]`.
- **Nested elements use smaller radius than parent** — a button inside a card shouldn't match or exceed the card's radius.
- **`rounded-full` is for circular elements only** — avatars, pill badges. Not for cards or panels.
- **Input radius is fixed** — it doesn't scale with viewport, keeping form elements consistent.
