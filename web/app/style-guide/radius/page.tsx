import { StyleGuideSection } from "@/components/style-guide/section";
import { Eyebrow } from "@/components/typography/eyebrow";
import { Text } from "@/components/typography/text";
import { CodeAccordion } from "@/components/style-guide/code-accordion";
import { CardTable } from "@/components/ui/card-table";
import {
  TableHeader, TableBody, TableRow, TableHead, TableCell,
} from "@/components/ui/table";

function Rule({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 items-start">
      <span className="text-muted-foreground mt-1 shrink-0">—</span>
      <Text variant="small">{children}</Text>
    </li>
  );
}

const radiusTokens = [
  { name: "sm",    cssVar: "--radius-sm",    twClass: "rounded-sm",    mobile: "10px", desktop: "16px", usedBy: "Badge, Tag, Tooltip" },
  { name: "md",    cssVar: "--radius-md",    twClass: "rounded-md",    mobile: "16px", desktop: "20px", usedBy: "Button, Icon container" },
  { name: "lg",    cssVar: "--radius-lg",    twClass: "rounded-lg",    mobile: "24px", desktop: "30px", usedBy: "Card, Modal, Sheet" },
  { name: "xl",    cssVar: "--radius-xl",    twClass: "rounded-xl",    mobile: "32px", desktop: "40px", usedBy: "Large hero surfaces" },
  { name: "2xl",   cssVar: "--radius-2xl",   twClass: "rounded-2xl",   mobile: "48px", desktop: "60px", usedBy: "Large decorative elements" },
  { name: "input", cssVar: "--radius-input", twClass: "rounded-input", mobile: "12px", desktop: "12px", usedBy: "Input, Textarea — fixed" },
];

const perComponent = [
  ["Button",          "rounded-md",    "Grows with viewport"],
  ["Input / Textarea","rounded-input", "Fixed — consistent across breakpoints"],
  ["Card",            "rounded-lg",    "Grows with viewport"],
  ["Badge / Tag",     "rounded-sm",    ""],
  ["Modal / Dialog",  "rounded-lg",    ""],
  ["Sheet / Drawer",  "rounded-lg",    "Top corners only"],
  ["Avatar",          "rounded-full",  ""],
  ["Tooltip",         "rounded-sm",    ""],
  ["Icon container",  "rounded-md",    ""],
  ["Large hero",      "rounded-xl",    ""],
];

export default function RadiusPage() {
  return (
    <div className="flex flex-col gap-between-sections max-w-4xl">

      {/* Token */}
      <StyleGuideSection
        title="Radius tokens"
        description="Defined in app/globals.css. Mobile values are default — desktop values override at 768px via @media."
      >
        <div className="flex flex-col gap-8">
          {/* Visual grid */}
          <div className="grid grid-cols-6 md:grid-cols-12 gap-5">
            {radiusTokens.map((token) => (
              <div key={token.name} className="col-span-6 sm:col-span-3 md:col-span-4 flex flex-col gap-3">
                <div
                  className={`w-full aspect-square bg-muted border border-border ${token.twClass}`}
                  style={{ maxWidth: "9rem" }}
                />
                <div className="flex flex-col gap-1">
                  <Eyebrow>{token.name}</Eyebrow>
                  <Text variant="caption" className="text-muted-foreground font-mono">{token.twClass}</Text>
                  <Text variant="caption" className="text-muted-foreground font-mono">{token.cssVar}</Text>
                  <Text variant="caption" className="text-muted-foreground">
                    {token.mobile === token.desktop
                      ? `${token.mobile} (fixed)`
                      : `${token.mobile} → ${token.desktop}`}
                  </Text>
                  <Text variant="caption" className="text-primary">{token.usedBy}</Text>
                </div>
              </div>
            ))}
          </div>

          {/* CSS snippet */}
          <CodeAccordion>{`:root {
  /* Mobile defaults */
  --radius-sm:    0.625rem; /* 10px */
  --radius-md:    1rem;     /* 16px */
  --radius-lg:    1.5rem;   /* 24px */
  --radius-xl:    2rem;     /* 32px */
  --radius-2xl:   3rem;     /* 48px */
  --radius-input: 0.75rem;  /* 12px — fixed */
}

@media (min-width: 768px) {
  :root {
    --radius-sm:  1rem;     /* 16px */
    --radius-md:  1.25rem;  /* 20px */
    --radius-lg:  1.875rem; /* 30px */
    --radius-xl:  2.5rem;   /* 40px */
    --radius-2xl: 3.75rem;  /* 60px */
  }
}`}</CodeAccordion>
        </div>
      </StyleGuideSection>

      {/* Per component */}
      <StyleGuideSection
        title="Per component"
        description="Which radius token each component uses."
      >
        <CardTable>
          <TableHeader>
            <TableRow>
              <TableHead>Component</TableHead>
              <TableHead>Radius</TableHead>
              <TableHead>Note</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {perComponent.map(([comp, radius, note]) => (
              <TableRow key={comp}>
                <TableCell>{comp}</TableCell>
                <TableCell className="font-mono">{radius}</TableCell>
                <TableCell className="text-muted-foreground">{note}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </CardTable>
      </StyleGuideSection>

      {/* Nested radius demo */}
      <StyleGuideSection
        title="Nesting"
        description="Nested elements always use a smaller radius than their parent."
      >
        <div className="flex flex-col gap-component-default">
          <div className="border border-border rounded-lg p-6 flex gap-4 items-center bg-card">
            <Eyebrow className="shrink-0">Parent: rounded-lg</Eyebrow>
            <div className="flex gap-3">
              <div className="rounded-md bg-muted px-4 py-2">
                <Text variant="caption" className="text-muted-foreground">Button: rounded-md</Text>
              </div>
              <div className="rounded-sm bg-muted px-3 py-1">
                <Text variant="caption" className="text-muted-foreground">Badge: rounded-sm</Text>
              </div>
            </div>
          </div>
          <Text variant="small" className="text-muted-foreground">
            A button inside a card shouldn't match or exceed the card's radius.
          </Text>
        </div>
      </StyleGuideSection>

      {/* Rules */}
      <StyleGuideSection title="Rules">
        <ul className="flex flex-col gap-between-text">
          <Rule>Never hardcode pixel values — always use <code className="font-mono text-xs">rounded-*</code> classes.</Rule>
          <Rule>Never use arbitrary values like <code className="font-mono text-xs">rounded-[7px]</code>.</Rule>
          <Rule>Nested elements use a smaller radius than their parent.</Rule>
          <Rule><code className="font-mono text-xs">rounded-full</code> is for circular elements only — avatars, pill badges. Not for cards or panels.</Rule>
          <Rule>Input radius is fixed — it doesn't scale with viewport, keeping form elements consistent.</Rule>
        </ul>
      </StyleGuideSection>

    </div>
  );
}
