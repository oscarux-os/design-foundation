import { Heading } from "@/components/typography/heading";
import { Text } from "@/components/typography/text";
import { Eyebrow } from "@/components/typography/eyebrow";
import { StyleGuideSection } from "@/components/style-guide/section";
import { CodeAccordion } from "@/components/style-guide/code-accordion";
import { CardTable } from "@/components/ui/card-table";
import {
  TableHeader, TableBody, TableRow, TableHead, TableCell,
} from "@/components/ui/table";

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded-sm text-foreground">
      {children}
    </code>
  );
}

function Rule({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 items-start">
      <span className="text-muted-foreground mt-1 shrink-0">—</span>
      <Text variant="small">{children}</Text>
    </li>
  );
}

export default function TypographyPage() {
  return (
    <div className="flex flex-col gap-between-sections max-w-4xl">

      {/* Fonts */}
      <StyleGuideSection
        title="Fonts"
        description="Inter (sans-serif) and IBM Plex Mono (monospace). Loaded via next/font in app/layout.tsx."
      >
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-6 md:grid-cols-12 gap-5">
            <div className="col-span-6 border border-border rounded-lg p-6 flex flex-col gap-4">
              <Eyebrow>Sans — Inter</Eyebrow>
              <p className="font-sans text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                Aa Bb Cc Dd Ee Ff
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-loose">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                abcdefghijklmnopqrstuvwxyz<br />
                0123456789 !@#$%&amp;
              </p>
              <Text variant="caption" className="text-muted-foreground font-mono">
                --font-sans · next/font/google Inter
              </Text>
            </div>
            <div className="col-span-6 border border-border rounded-lg p-6 flex flex-col gap-4">
              <Eyebrow>Mono — IBM Plex Mono</Eyebrow>
              <p className="font-mono text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                Aa Bb Cc Dd Ee Ff
              </p>
              <p className="font-mono text-sm text-muted-foreground leading-loose">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                abcdefghijklmnopqrstuvwxyz<br />
                0123456789 !@#$%&amp;
              </p>
              <Text variant="caption" className="text-muted-foreground font-mono">
                --font-mono · next/font/google IBM_Plex_Mono
              </Text>
            </div>
          </div>

          <CodeAccordion>{`// app/layout.tsx
import { Inter, IBM_Plex_Mono } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
})

<html className={\`dark \${inter.variable} \${ibmPlexMono.variable}\`}>`}</CodeAccordion>
        </div>
      </StyleGuideSection>

      {/* Display scale */}
      <StyleGuideSection
        title="Display scale"
        description="Bold, uppercase, tight leading. For hero headings and large marketing moments. All display sizes are fluid via clamp()."
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col divide-y divide-border">
            {[
              { size: "display-hero" as const, label: "display-hero", meta: "clamp(3rem, 9vw, 6rem)",      spec: "Bold · lh 0.85 · ls +2%"  },
              { size: "display-lg"   as const, label: "display-lg",   meta: "clamp(2rem, 6vw, 4rem)",      spec: "Bold · lh 0.85 · ls +1.5%" },
              { size: "display-md"   as const, label: "display-md",   meta: "clamp(1.5rem, 4vw, 2.5rem)",  spec: "Bold · lh 0.85 · ls +1.5%" },
              { size: "display-sm"   as const, label: "display-sm",   meta: "clamp(1.25rem, 3vw, 2rem)",   spec: "Bold · lh 0.85 · ls +1.5%" },
            ].map(({ size, label, meta, spec }) => (
              <div key={label} className="py-5 grid grid-cols-12 gap-5 items-baseline">
                <div className="col-span-2">
                  <Eyebrow>{label}</Eyebrow>
                </div>
                <div className="col-span-6 overflow-hidden">
                  <Heading size={size} as="span" className="block">Oh</Heading>
                </div>
                <div className="col-span-4 flex flex-col gap-1">
                  <Text variant="caption" className="text-muted-foreground font-mono">{meta}</Text>
                  <Text variant="caption" className="text-muted-foreground">{spec}</Text>
                  <Text variant="caption" className="text-muted-foreground font-mono">{`<Heading size="${label}">`}</Text>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-muted rounded-md px-4 py-3">
            <Text variant="small" className="text-muted-foreground font-mono">
              All display: font-bold · leading-[0.85] · uppercase · fluid clamp()
            </Text>
          </div>

          <CodeAccordion>{`<Heading size="display-hero">Hero Title</Heading>
<Heading size="display-lg">Display Large</Heading>
<Heading size="display-md">Display Medium</Heading>
<Heading size="display-sm">Display Small</Heading>`}</CodeAccordion>
        </div>
      </StyleGuideSection>

      {/* Heading */}
      <StyleGuideSection
        title="Heading"
        description="Editorial headings for page structure. Normal weight, tight tracking. display-hero and h1 use fluid clamp() sizing."
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col divide-y divide-border">
            {[
              { size: "h1" as const, label: "h1", meta: "clamp(2rem, 5vw, 3.5rem)", usage: '<Heading size="h1">' },
              { size: "h2" as const, label: "h2", meta: "text-3xl / 1.875rem",       usage: '<Heading size="h2">' },
              { size: "h3" as const, label: "h3", meta: "text-2xl / 1.5rem",          usage: '<Heading size="h3">' },
              { size: "h4" as const, label: "h4", meta: "text-xl / 1.25rem",          usage: '<Heading size="h4">' },
            ].map(({ size, label, meta, usage }) => (
              <div key={label} className="py-5 grid grid-cols-12 gap-5 items-baseline">
                <div className="col-span-2">
                  <Eyebrow>{label}</Eyebrow>
                </div>
                <div className="col-span-6">
                  <Heading size={size} as="span">The quick brown fox</Heading>
                </div>
                <div className="col-span-4 flex flex-col gap-1">
                  <Text variant="caption" className="text-muted-foreground font-mono">{meta}</Text>
                  <Text variant="caption" className="text-muted-foreground font-mono">{usage}</Text>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-muted rounded-md px-4 py-3">
            <Text variant="small" className="text-muted-foreground font-mono">
              All heading: font-normal · text-foreground · tracking-tight
            </Text>
          </div>

          <CodeAccordion>{`<Heading size="h1">Page Title</Heading>
<Heading size="h2">Section Title</Heading>
<Heading size="h3">Subsection</Heading>
<Heading size="h4">Card Title</Heading>`}</CodeAccordion>
        </div>
      </StyleGuideSection>

      {/* Text */}
      <StyleGuideSection
        title="Text"
        description="Body text in four variants. Default color is text-foreground — add className for secondary text."
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col divide-y divide-border">
            {[
              { variant: "lead"    as const, meta: "text-xl",   usage: '<Text variant="lead">',    note: "Ingress, hero intro" },
              { variant: "body"    as const, meta: "text-base",  usage: '<Text variant="body">',    note: "Standard body copy" },
              { variant: "small"   as const, meta: "text-sm",   usage: '<Text variant="small">',   note: "Card descriptions" },
              { variant: "caption" as const, meta: "text-xs",   usage: '<Text variant="caption">', note: "Metadata, timestamps" },
            ].map(({ variant, meta, usage, note }) => (
              <div key={variant} className="py-5 grid grid-cols-12 gap-5 items-baseline">
                <div className="col-span-2">
                  <Eyebrow>{variant}</Eyebrow>
                </div>
                <div className="col-span-6">
                  <Text variant={variant}>The quick brown fox jumps over the lazy dog</Text>
                </div>
                <div className="col-span-4 flex flex-col gap-1">
                  <Text variant="caption" className="text-muted-foreground font-mono">{meta}</Text>
                  <Text variant="caption" className="text-muted-foreground font-mono">{usage}</Text>
                  <Text variant="caption" className="text-muted-foreground">{note}</Text>
                </div>
              </div>
            ))}
          </div>

          <CodeAccordion>{`<Text variant="lead">Intro or ingress paragraph</Text>
<Text variant="body">Standard body copy</Text>
<Text variant="small">Card description or secondary text</Text>
<Text variant="caption">Category · 2024</Text>

// Secondary color
<Text variant="small" className="text-muted-foreground">Supporting text</Text>`}</CodeAccordion>
        </div>
      </StyleGuideSection>

      {/* Eyebrow */}
      <StyleGuideSection
        title="Eyebrow"
        description="Small label above headings. Always: text-xs uppercase tracking-widest text-muted-foreground."
      >
        <div className="flex flex-col gap-6">
          <div className="border border-border rounded-lg p-6 flex flex-col gap-3">
            <Eyebrow>Featured Work</Eyebrow>
            <Heading size="h2">Case Studies</Heading>
          </div>
          <CodeAccordion>{`<Eyebrow>Featured Work</Eyebrow>
<Eyebrow>Case Study</Eyebrow>`}</CodeAccordion>
        </div>
      </StyleGuideSection>

      {/* as prop */}
      <StyleGuideSection
        title="The as prop"
        description="Swap the HTML element without changing the visual style. Useful for semantic HTML."
      >
        <div className="flex flex-col gap-6">
          <div className="border border-border rounded-lg p-6 flex flex-col gap-2">
            <Text variant="caption" className="text-muted-foreground font-mono mb-2">
              Renders as &lt;h3&gt; in the DOM — styled as h2
            </Text>
            <Heading size="h2" as="h3">This looks like h2 but is h3</Heading>
          </div>
          <CodeAccordion>{`// Visual style and HTML element are independent
<Heading size="h2" as="h3">Section Title</Heading>
<Text variant="small" as="span">Inline small text</Text>`}</CodeAccordion>
        </div>
      </StyleGuideSection>

      {/* Rules */}
      <StyleGuideSection title="Rules">
        <ul className="flex flex-col gap-between-text">
          <Rule>Never use raw <Code>{"<h1>"}</Code>, <Code>{"<p>"}</Code> with manual classNames in pages — always <Code>{"<Heading>"}</Code>, <Code>{"<Text>"}</Code>, <Code>{"<Eyebrow>"}</Code>.</Rule>
          <Rule>Never hardcode colors on text — use <Code>text-foreground</Code> or <Code>text-muted-foreground</Code>.</Rule>
          <Rule>Fluid sizing (display-hero, display-lg, display-md, display-sm, h1) is always via inline <Code>style</Code> — not Tailwind classes.</Rule>
          <Rule>Display scale is always bold, uppercase, and tight leading — never adjust these per-instance.</Rule>
          <Rule>The <Code>as</Code> prop swaps the HTML element without losing styling.</Rule>
        </ul>
      </StyleGuideSection>

      {/* Figma mapping */}
      <StyleGuideSection title="Figma mapping" description="Each component maps to a text style in the Figma library.">
        <CardTable>
          <TableHeader>
            <TableRow>
              <TableHead>Component</TableHead>
              <TableHead>Figma text style</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ['<Heading size="display-hero">', "Display / Hero"],
              ['<Heading size="display-lg">',   "Display / Large"],
              ['<Heading size="display-md">',   "Display / Medium"],
              ['<Heading size="display-sm">',   "Display / Small"],
              ['<Heading size="h1">',           "H1"],
              ['<Heading size="h2">',           "H2"],
              ['<Heading size="h3">',           "H3"],
              ['<Heading size="h4">',           "H4"],
              ['<Text variant="lead">',         "Lead"],
              ['<Text variant="body">',         "Body"],
              ['<Text variant="small">',        "Small"],
              ['<Text variant="caption">',      "Caption"],
              ['<Eyebrow>',                     "Eyebrow"],
            ].map(([comp, figma]) => (
              <TableRow key={comp}>
                <TableCell className="font-mono">{comp}</TableCell>
                <TableCell className="text-muted-foreground">{figma}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </CardTable>
      </StyleGuideSection>

    </div>
  );
}
