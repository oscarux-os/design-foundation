# Radius — oh.design

Rounded corners scale responsively — tighter on mobile, more expressive on desktop. Defined as CSS custom properties that switch at the `md` breakpoint automatically.

**Contents:** [Token](#token) · [Scale](#scale) · [Per component](#per-component) · [Rules](#rules)

---

## Token

Defined in `app/globals.css`. Mobile values are default, desktop values override at `768px`.

```css
:root {
  /* Mobile radius scale */
  --radius-sm:  0.625rem; /* 10px */
  --radius-md:  1rem;     /* 16px */
  --radius-lg:  1.5rem;   /* 24px */
  --radius-xl:  2rem;     /* 32px */
  --radius-2xl: 3rem;     /* 48px */

  /* Input stays consistent across breakpoints */
  --radius-input: 0.75rem; /* 12px */
}

@media (min-width: 768px) {
  :root {
    /* Desktop radius scale */
    --radius-sm:  1rem;     /* 16px */
    --radius-md:  1.25rem;  /* 20px */
    --radius-lg:  1.875rem; /* 30px */
    --radius-xl:  2.5rem;   /* 40px */
    --radius-2xl: 3.75rem;  /* 60px */
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

> Note: update `tokens.md` `@theme inline` block to replace the old radius entries with these.

---

## Scale

| Token | Mobile | Desktop | Tailwind class |
|-------|--------|---------|----------------|
| `--radius-sm` | 10px | 16px | `rounded-sm` |
| `--radius-md` | 16px | 20px | `rounded-md` |
| `--radius-lg` | 24px | 30px | `rounded-lg` |
| `--radius-xl` | 32px | 40px | `rounded-xl` |
| `--radius-2xl` | 48px | 60px | `rounded-2xl` |
| `--radius-input` | 12px | 12px | `rounded-input` |
| — | — | — | `rounded-full` |

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
