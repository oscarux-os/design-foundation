# Typography — oh.design

All text in pages and components is built with `<Heading>`, `<Text>`, and `<Eyebrow>`. No raw HTML tags with manual class names.

> **Values are defined in `DESIGN.md`** (YAML — `typography`). When you change a type value (font size, weight, line height), update `DESIGN.md` first, then update the component implementation.

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

Values from `DESIGN.md → typography`. All display sizes are fluid via `clamp()`.

| Size | Weight | Line height | Letter spacing | Case |
|------|--------|-------------|----------------|------|
| `display-hero` | Bold | 0.85 | wider | Uppercase |
| `display-lg` | Bold | 0.85 | wide | Uppercase |
| `display-md` | Bold | 0.85 | wide | Uppercase |
| `display-sm` | Bold | 0.85 | wide | Uppercase |

All display: `font-bold leading-[0.85] uppercase` — never override these per-instance.

---

## Heading

Editorial headings for page structure. Normal weight, tight tracking.

```tsx
<Heading size="h1">Page Title</Heading>
<Heading size="h2">Section Title</Heading>
<Heading size="h3">Subsection</Heading>
<Heading size="h4">Card Title</Heading>
```

Values from `DESIGN.md → typography`. h1 is fluid via `clamp()`, h2–h4 use fixed Tailwind classes.

| Size | Rendering |
|------|-----------|
| `h1` | Fluid, inline style |
| `h2` | `text-3xl` |
| `h3` | `text-2xl` |
| `h4` | `text-xl` |

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
