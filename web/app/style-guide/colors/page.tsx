import { StyleGuideSection } from "@/components/style-guide/section";
import { Eyebrow } from "@/components/typography/eyebrow";
import { Text } from "@/components/typography/text";

function Rule({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 items-start">
      <span className="text-muted-foreground mt-1 shrink-0">—</span>
      <Text variant="small">{children}</Text>
    </li>
  );
}

interface ColorToken {
  name: string;
  cssVar: string;
  twClass: string;
  description: string;
  textOnTop?: string; // for showing text on top of a colored bg
}

function Swatch({ token }: { token: ColorToken }) {
  return (
    <div className="col-span-6 sm:col-span-3 md:col-span-3 flex flex-col gap-2">
      <div
        className="h-20 w-full rounded-md border border-border/40 flex items-end p-3"
        style={{ backgroundColor: `var(${token.cssVar})` }}
      >
        {token.textOnTop && (
          <span
            className="text-xs font-mono"
            style={{ color: `var(${token.textOnTop})` }}
          >
            Aa
          </span>
        )}
      </div>
      <div className="flex flex-col gap-0.5">
        <Eyebrow>{token.name}</Eyebrow>
        <Text variant="caption" className="text-muted-foreground">{token.description}</Text>
        <Text variant="caption" className="text-muted-foreground font-mono">{token.cssVar}</Text>
        <Text variant="caption" className="text-muted-foreground font-mono">{token.twClass}</Text>
      </div>
    </div>
  );
}

const groups: { title: string; description: string; tokens: ColorToken[] }[] = [
  {
    title: "Surfaces",
    description: "Page and component backgrounds. Never use hex — always token classes.",
    tokens: [
      { name: "background", cssVar: "--background", twClass: "bg-background", description: "Page background", textOnTop: "--foreground" },
      { name: "card",       cssVar: "--card",       twClass: "bg-card",       description: "Cards and surfaces", textOnTop: "--card-foreground" },
      { name: "muted",      cssVar: "--muted",      twClass: "bg-muted",      description: "Subtle backgrounds, icon containers", textOnTop: "--muted-foreground" },
      { name: "popover",    cssVar: "--popover",    twClass: "bg-popover",    description: "Popover and dropdown backgrounds", textOnTop: "--popover-foreground" },
    ],
  },
  {
    title: "Brand",
    description: "Primary, secondary, and accent. Each has a paired foreground token for text on top.",
    tokens: [
      { name: "primary",   cssVar: "--primary",   twClass: "bg-primary",   description: "Main brand color", textOnTop: "--primary-foreground" },
      { name: "secondary", cssVar: "--secondary", twClass: "bg-secondary", description: "Secondary brand", textOnTop: "--secondary-foreground" },
      { name: "accent",    cssVar: "--accent",    twClass: "bg-accent",    description: "Accent highlight", textOnTop: "--accent-foreground" },
    ],
  },
  {
    title: "Text",
    description: "Foreground text colors. Never hardcode — always use these token classes.",
    tokens: [
      { name: "foreground",          cssVar: "--foreground",          twClass: "text-foreground",          description: "Primary text" },
      { name: "muted-foreground",    cssVar: "--muted-foreground",    twClass: "text-muted-foreground",    description: "Secondary / supporting text" },
      { name: "primary-foreground",  cssVar: "--primary-foreground",  twClass: "text-primary-foreground",  description: "Text on primary background" },
      { name: "card-foreground",     cssVar: "--card-foreground",     twClass: "text-card-foreground",     description: "Text inside cards" },
    ],
  },
  {
    title: "State & utility",
    description: "Destructive for errors, border for edges, input for form fields, ring for focus.",
    tokens: [
      { name: "destructive", cssVar: "--destructive", twClass: "bg-destructive", description: "Error / danger" },
      { name: "border",      cssVar: "--border",      twClass: "border-border",  description: "All borders" },
      { name: "input",       cssVar: "--input",       twClass: "border-input",   description: "Input field borders" },
      { name: "ring",        cssVar: "--ring",        twClass: "ring-ring",      description: "Focus rings" },
    ],
  },
];

export default function ColorsPage() {
  return (
    <div className="flex flex-col gap-between-sections max-w-4xl">

      {/* Intro */}
      <StyleGuideSection
        title="Color tokens"
        description="All colors are OKLCH and defined in app/globals.css. Light and dark mode values switch automatically via the .dark class on the html element."
      >
        <div className="flex flex-col gap-component-default">
          <div className="border border-border rounded-lg p-4 bg-muted">
            <Text variant="small" className="text-muted-foreground">
              Colors are defined as CSS custom properties and mapped to Tailwind via <code className="font-mono">@theme inline</code>. Light mode is in <code className="font-mono">:root</code>, dark mode in <code className="font-mono">.dark</code>. The site starts in dark mode by default.
            </Text>
          </div>

          {/* Dark mode toggle demo */}
          <div className="grid grid-cols-2 gap-5">
            <div className="border border-border rounded-lg p-5 flex flex-col gap-2 bg-background">
              <Eyebrow>Dark mode (default)</Eyebrow>
              <div className="flex gap-2 mt-2">
                <div className="h-8 w-8 rounded-sm bg-background border border-border" />
                <div className="h-8 w-8 rounded-sm bg-card" />
                <div className="h-8 w-8 rounded-sm bg-primary" />
                <div className="h-8 w-8 rounded-sm bg-muted" />
              </div>
            </div>
            <div className="border border-border rounded-lg p-5 flex flex-col gap-2 bg-card">
              <Eyebrow>Values switch via .dark class on html</Eyebrow>
              <Text variant="caption" className="text-muted-foreground mt-2 font-mono">
                oklch(0.14 0.02 138) → oklch(0.94 0.022 138)
              </Text>
            </div>
          </div>
        </div>
      </StyleGuideSection>

      {/* Color groups */}
      {groups.map((group) => (
        <StyleGuideSection key={group.title} title={group.title} description={group.description}>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-5">
            {group.tokens.map((token) => (
              <Swatch key={token.name} token={token} />
            ))}
          </div>
        </StyleGuideSection>
      ))}

      {/* Rules */}
      <StyleGuideSection title="Rules">
        <ul className="flex flex-col gap-between-text">
          <Rule>Only define tokens in <code className="font-mono text-xs">globals.css</code>. Never in component files.</Rule>
          <Rule>Never use <code className="font-mono text-xs">text-[#hex]</code>, <code className="font-mono text-xs">bg-[oklch()]</code>, or any hardcoded color value.</Rule>
          <Rule>Inline styles are only OK for direct CSS variables: <code className="font-mono text-xs">{"style={{ color: 'var(--primary)' }}"}</code></Rule>
          <Rule>Dark mode is handled via the <code className="font-mono text-xs">.dark</code> class on <code className="font-mono text-xs">{"<html>"}</code> — tokens switch values automatically.</Rule>
          <Rule>Colors may change — that's fine. Update <code className="font-mono text-xs">globals.css</code> and everything updates everywhere.</Rule>
        </ul>
      </StyleGuideSection>

    </div>
  );
}
