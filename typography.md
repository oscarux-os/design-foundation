# Typography — oh.design

All text in pages and components is built with `<Heading>`, `<Text>`, and `<Eyebrow>`. No raw HTML tags with manual class names.

**Contents:** [Fonts](#fonts) · [Components](#components) · [Implementation](#implementation-typographytsx) · [Rules](#rules) · [Figma mapping](#figma-mapping)

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

## Components

### Heading

Heading levels with fluid sizing for display and h1.

```tsx
<Heading size="display">Hero Title</Heading>
<Heading size="h1">Page Title</Heading>
<Heading size="h2">Section Title</Heading>
<Heading size="h3">Subsection</Heading>
<Heading size="h4">Card Title</Heading>
```

| Size | Font-size | Rendering |
|------|-----------|-----------|
| `display` | `clamp(2.5rem, 6vw, 4rem)` | Fluid, inline style |
| `h1` | `clamp(2rem, 5vw, 3.5rem)` | Fluid, inline style |
| `h2` | `text-2xl` (1.5rem) | Tailwind class |
| `h3` | `text-lg` (1.125rem) | Tailwind class |
| `h4` | `text-base` (1rem) | Tailwind class |

All Heading: `font-normal text-foreground tracking-tight`

### Text

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

### Eyebrow

Small label above headings.

```tsx
<Eyebrow>Featured Work</Eyebrow>
<Eyebrow>Case Study</Eyebrow>
```

Always: `text-xs uppercase tracking-widest text-muted-foreground`

---

## Implementation: typography.tsx

```tsx
// components/ui/typography.tsx
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const headingVariants = cva("font-normal text-foreground tracking-tight", {
  variants: {
    size: {
      display: "leading-tight",
      h1: "leading-tight",
      h2: "text-2xl leading-snug",
      h3: "text-lg leading-snug",
      h4: "text-base leading-normal",
    },
  },
  defaultVariants: { size: "h2" },
})

const FLUID: Record<string, string> = {
  display: "clamp(2.5rem, 6vw, 4rem)",
  h1: "clamp(2rem, 5vw, 3.5rem)",
}

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export function Heading({ size = "h2", as, className, style, ...props }: HeadingProps) {
  const Tag = as ?? (size === "display" || size === "h1" ? "h1" : size ?? "h2")
  const fluidSize = size && FLUID[size] ? { fontSize: FLUID[size], ...style } : style
  return <Tag className={cn(headingVariants({ size }), className)} style={fluidSize} {...props} />
}

const textVariants = cva("text-foreground", {
  variants: {
    variant: {
      lead: "text-xl leading-relaxed",
      body: "text-base leading-relaxed",
      small: "text-sm leading-normal",
      caption: "text-xs leading-normal",
    },
  },
  defaultVariants: { variant: "body" },
})

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div"
}

export function Text({ variant, as: Tag = "p", className, ...props }: TextProps) {
  return <Tag className={cn(textVariants({ variant }), className)} {...props} />
}

export function Eyebrow({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-xs uppercase tracking-widest text-muted-foreground", className)}
      {...props}
    />
  )
}
```

---

## Rules

- **Never** use raw `<h1>`, `<p>` with manual `className="text-3xl font-bold"` in pages.
- **Never** hardcode colors on text — use `text-foreground` or `text-muted-foreground`.
- The `as` prop lets you swap the HTML element without losing styling: `<Heading size="h2" as="h3">`.
- Fluid sizing (`display`, `h1`) is always set via inline `style` — not via Tailwind classes.

---

## Figma mapping

| Component | Figma |
|-----------|-------|
| `<Heading size="display">` | Text Style "Display" |
| `<Heading size="h1">` | Text Style "H1" |
| `<Heading size="h2">` | Text Style "H2" |
| `<Heading size="h3">` | Text Style "H3" |
| `<Text variant="lead">` | Text Style "Lead" |
| `<Text variant="body">` | Text Style "Body" |
| `<Text variant="small">` | Text Style "Small" |
| `<Text variant="caption">` | Text Style "Caption" |
| `<Eyebrow>` | Text Style "Eyebrow" |
