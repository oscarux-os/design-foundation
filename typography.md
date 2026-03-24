# Typography — oh.design

All text in pages and components is built with `<Heading>`, `<Text>`, and `<Eyebrow>`. No raw HTML tags with manual class names.

**Contents:** [Fonts](#fonts) · [Display scale](#display-scale) · [Heading](#heading) · [Text](#text) · [Eyebrow](#eyebrow) · [Rules](#rules) · [Figma mapping](#figma-mapping)

---

## Fonts

**Inter** (sans-serif) and **IBM Plex Mono** (monospace). Set up via `next/font` in `app/layout.tsx`.

```tsx
// app/layout.tsx
import { Inter, IBM_Plex_Mono } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

The `--font-sans` and `--font-mono` CSS variables are picked up automatically by `globals.css` and mapped via `@theme inline`. No further configuration needed.

_May change — update this section and `tokens.md` if fonts are swapped._

---

## Display scale

Bold, uppercase, tight leading — for heroes and large marketing moments. All sizes are fluid via `clamp()`.

```tsx
<Heading size="display-hero">Hero Title</Heading>
<Heading size="display-lg">Display Large</Heading>
<Heading size="display-md">Display Medium</Heading>
<Heading size="display-sm">Display Small</Heading>
```

| Size | Font-size | Weight | Line height | Letter spacing | Case |
|------|-----------|--------|-------------|----------------|------|
| `display-hero` | `clamp(3rem, 9vw, 6rem)` | Bold | 0.85 | +2% | Uppercase |
| `display-lg` | `clamp(2rem, 6vw, 4rem)` | Bold | 0.85 | +1.5% | Uppercase |
| `display-md` | `clamp(1.5rem, 4vw, 2.5rem)` | Bold | 0.85 | +1.5% | Uppercase |
| `display-sm` | `clamp(1.25rem, 3vw, 2rem)` | Bold | 0.85 | +1.5% | Uppercase |

All display: `font-bold leading-[0.85] tracking-[0.02em / 0.015em] uppercase` — never override these per-instance.

---

## Heading

Editorial headings for page structure. Normal weight, tight tracking.

```tsx
<Heading size="h1">Page Title</Heading>
<Heading size="h2">Section Title</Heading>
<Heading size="h3">Subsection</Heading>
<Heading size="h4">Card Title</Heading>
```

| Size | Font-size | Rendering |
|------|-----------|-----------|
| `h1` | `clamp(2rem, 5vw, 3.5rem)` | Fluid, inline style |
| `h2` | `text-3xl` (1.875rem) | Tailwind class |
| `h3` | `text-2xl` (1.5rem) | Tailwind class |
| `h4` | `text-xl` (1.25rem) | Tailwind class |

All heading: `font-normal text-foreground tracking-tight`

---

## Text

Body text in different variants.

```tsx
<Text variant="lead">Intro or ingress paragraph</Text>
<Text variant="body">Standard body copy</Text>
<Text variant="small">Card description or secondary text</Text>
<Text variant="caption">Category · 2024</Text>
```

| Variant | Size | Usage |
|---------|------|-------|
| `lead` | `text-xl` | Ingress, hero intro |
| `body` | `text-base` | Standard body copy |
| `small` | `text-sm` | Card descriptions |
| `caption` | `text-xs` | Metadata, timestamps |

Default text color: `text-foreground`. Secondary text: add `className="text-muted-foreground"`.

---

## Eyebrow

Small label above headings.

```tsx
<Eyebrow>Featured Work</Eyebrow>
<Eyebrow>Case Study</Eyebrow>
```

Always: `text-xs uppercase tracking-widest text-muted-foreground`

---

## Rules

- **Never** use raw `<h1>`, `<p>` with manual `className="text-3xl font-bold"` in pages.
- **Never** hardcode colors on text — use `text-foreground` or `text-muted-foreground`.
- The `as` prop lets you swap the HTML element without losing styling: `<Heading size="h2" as="h3">`.
- Fluid sizing (`display-*`, `h1`) is always set via inline `style` — not via Tailwind classes.
- Display scale properties (bold, uppercase, leading-[0.85]) are fixed — never override per instance.

---

## Figma mapping

| Component | Figma |
|-----------|-------|
| `<Heading size="display-hero">` | Text Style "Display / Hero" |
| `<Heading size="display-lg">` | Text Style "Display / Large" |
| `<Heading size="display-md">` | Text Style "Display / Medium" |
| `<Heading size="display-sm">` | Text Style "Display / Small" |
| `<Heading size="h1">` | Text Style "H1" |
| `<Heading size="h2">` | Text Style "H2" |
| `<Heading size="h3">` | Text Style "H3" |
| `<Heading size="h4">` | Text Style "H4" |
| `<Text variant="lead">` | Text Style "Lead" |
| `<Text variant="body">` | Text Style "Body" |
| `<Text variant="small">` | Text Style "Small" |
| `<Text variant="caption">` | Text Style "Caption" |
| `<Eyebrow>` | Text Style "Eyebrow" |
