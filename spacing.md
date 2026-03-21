# Spacing — oh.design

Two separate layers. They don't interfere with each other.

**Contents:** [Two layers](#two-layers) · [Foundational tokens](#foundational-tokens) · [Semantic tokens](#semantic-tokens) · [Padding patterns](#padding-patterns) · [Tailwind integration](#tailwind-integration) · [Component spacing](#component-spacing) · [Rules](#rules)

---

## Two layers

| Layer | Used for | How |
|-------|----------|-----|
| **Semantic tokens** | Sections, blocks, layout gaps | CSS custom properties → Tailwind utilities |
| **Component spacing** | Inside shadcn components | Tailwind classes directly, defined by shadcn |

Never use semantic tokens inside components. Never use arbitrary values at either level.

---

## Foundational tokens

Defined in `app/globals.css`. The number in the token name is the px value — no translation needed.

```css
:root {
  /* Foundational spacing tokens */
  --size-4:   0.25rem;  /*  4px */
  --size-8:   0.5rem;   /*  8px */
  --size-12:  0.75rem;  /* 12px */
  --size-16:  1rem;     /* 16px */
  --size-24:  1.5rem;   /* 24px */
  --size-32:  2rem;     /* 32px */
  --size-40:  2.5rem;   /* 40px */
  --size-48:  3rem;     /* 48px */
  --size-64:  4rem;     /* 64px */
  --size-80:  5rem;     /* 80px */
  --size-96:  6rem;     /* 96px */
  --size-128: 8rem;     /* 128px */
}
```

---

## Semantic tokens

Named tokens that map to foundational tokens. Use these at layout level — between sections, blocks, and larger elements. Defined in `app/globals.css` below the foundational tokens.

```css
:root {
  /* Horizontal — elements next to each other */
  --spacing-between-cards:     var(--size-12); /* gap between card components */
  --spacing-between-chips:     var(--size-8);  /* gap between chip/tag elements */
  --spacing-screen-edge:       var(--size-24); /* page edge padding on mobile */
  --spacing-component-default: var(--size-16); /* fallback between components */

  /* Vertical — sections and stacked elements */
  --spacing-between-text:      var(--size-8);  /* paragraph to paragraph */
  --spacing-text-to-component: var(--size-16); /* text block to any component */
  --spacing-content-to-button: var(--size-24); /* content/form to CTA button */
  --spacing-between-sections:  var(--size-48); /* major page sections */
  --spacing-hero:              var(--size-96); /* hero/top of page breathing room */
}
```

### Horizontal reference

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-between-cards` | 12px | Gap between card components |
| `--spacing-between-chips` | 8px | Gap between chips, tags |
| `--spacing-screen-edge` | 24px | Page edge padding on mobile |
| `--spacing-component-default` | 16px | Fallback when no specific token fits |

### Vertical reference

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-between-text` | 8px | Paragraph to paragraph |
| `--spacing-text-to-component` | 16px | Text block to any component below |
| `--spacing-content-to-button` | 24px | Content or form to CTA button |
| `--spacing-between-sections` | 48px | Between major page sections |
| `--spacing-hero` | 96px | Hero and top-of-page breathing room |

---

## Padding patterns

Inner padding based on content type. These govern how much breathing room content gets inside a container.

| Pattern | Padding | Tailwind | Usage |
|---------|---------|----------|-------|
| **Variable height content** | 24px | `p-6` | Components with varying amounts of content — needs room to breathe |
| **Compact data** | 16px | `p-4` | Dense components, part of a set, small distinct info areas |
| **Card-based content** | 16px | `p-4` | Content inside a card when space is limited |
| **Footer** | 16px → 24px | `p-4 md:p-6` | Tighter on mobile, more generous on desktop |

```tsx
// Variable height content — e.g. a project description block
<div className="p-6">
  <Text variant="body">...</Text>
</div>

// Compact data — e.g. a stat or metadata item
<div className="p-4">
  <Text variant="caption">...</Text>
</div>

// Footer
<footer className="p-4 md:p-6">...</footer>
```

---

## Tailwind integration

Register semantic tokens in `@theme` in `globals.css` so they become usable as Tailwind utilities:

```css
@theme {
  --spacing-between-cards:     var(--size-12);
  --spacing-between-chips:     var(--size-8);
  --spacing-screen-edge:       var(--size-24);
  --spacing-component-default: var(--size-16);
  --spacing-between-text:      var(--size-8);
  --spacing-text-to-component: var(--size-16);
  --spacing-content-to-button: var(--size-24);
  --spacing-between-sections:  var(--size-48);
  --spacing-hero:              var(--size-96);
}
```

Then use them as Tailwind classes:

```tsx
// Sections
<section className="py-between-sections">...</section>

// Layout gaps
<div className="grid grid-cols-12 gap-between-cards">...</div>

// CTA spacing
<div className="mt-content-to-button">
  <Button>Get in touch</Button>
</div>
```

---

## Component spacing

shadcn components manage their own internal spacing via Tailwind directly. Don't override it.

| Component | Padding | Source |
|-----------|---------|--------|
| Button (default) | `px-4 py-2` | shadcn |
| Button (large) | `px-6 py-3` | shadcn |
| Input | `px-3 py-2` | shadcn |
| Card | `p-6` | shadcn |
| Badge | `px-2 py-0.5` | shadcn |

---

## Rules

- **Never use semantic tokens inside components** — that's shadcn's territory.
- **Never use component-level spacing for layout** — use semantic tokens instead.
- **Never hardcode values** at either layer — no `p-[13px]`, no `style={{ gap: '20px' }}`.
- **Grid gap is always `gap-5` (20px)** — this is separate from semantic tokens and never changes.
- **Rem scales with the browser** — all values are rem-based so they respond to the user's font size settings automatically.
