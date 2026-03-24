import { StyleGuideSection } from "@/components/style-guide/section";
import { Eyebrow } from "@/components/typography/eyebrow";
import { Text } from "@/components/typography/text";
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

const semanticTokens = [
  { name: "between-cards",     cssVar: "--spacing-between-cards",     px: 12,  twClass: "gap-between-cards",     description: "Gap between card components" },
  { name: "between-chips",     cssVar: "--spacing-between-chips",     px: 8,   twClass: "gap-between-chips",     description: "Gap between chips and tags" },
  { name: "screen-edge",       cssVar: "--spacing-screen-edge",       px: 24,  twClass: "px-screen-edge",        description: "Page edge padding on mobile" },
  { name: "component-default", cssVar: "--spacing-component-default", px: 16,  twClass: "gap-component-default", description: "Fallback between components" },
  { name: "between-text",      cssVar: "--spacing-between-text",      px: 8,   twClass: "gap-between-text",      description: "Paragraph to paragraph" },
  { name: "text-to-component", cssVar: "--spacing-text-to-component", px: 16,  twClass: "mb-text-to-component",  description: "Text block to any component below" },
  { name: "content-to-button", cssVar: "--spacing-content-to-button", px: 24,  twClass: "mt-content-to-button",  description: "Content or form to CTA button" },
  { name: "between-sections",  cssVar: "--spacing-between-sections",  px: 48,  twClass: "py-between-sections",   description: "Between major page sections" },
  { name: "hero",              cssVar: "--spacing-hero",              px: 96,  twClass: "pt-hero",               description: "Hero / top-of-page breathing room" },
];

const foundationalScale = [
  { name: "size-4",   px: 4   },
  { name: "size-8",   px: 8   },
  { name: "size-12",  px: 12  },
  { name: "size-16",  px: 16  },
  { name: "size-24",  px: 24  },
  { name: "size-32",  px: 32  },
  { name: "size-40",  px: 40  },
  { name: "size-48",  px: 48  },
  { name: "size-64",  px: 64  },
  { name: "size-80",  px: 80  },
  { name: "size-96",  px: 96  },
  { name: "size-128", px: 128 },
];

const paddingPatterns = [
  { label: "Variable height content", padding: "p-6",        px: "24px", usage: "Components with varying content — needs room to breathe" },
  { label: "Compact data",            padding: "p-4",        px: "16px", usage: "Dense components, small distinct info areas" },
  { label: "Card-based content",      padding: "p-4",        px: "16px", usage: "Content inside a card when space is limited" },
  { label: "Footer",                  padding: "p-4 md:p-6", px: "16→24px", usage: "Tighter on mobile, more generous on desktop" },
];

const MAX_BAR = 128;

export default function SpacingsPage() {
  return (
    <div className="flex flex-col gap-between-sections max-w-4xl">

      {/* Two layers */}
      <StyleGuideSection
        title="Two layers"
        description="Spacing is split into two separate layers that don't interfere with each other."
      >
        <CardTable>
          <TableHeader>
            <TableRow>
              <TableHead>Layer</TableHead>
              <TableHead>Used for</TableHead>
              <TableHead>How</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Semantic tokens",   "Sections, blocks, layout gaps", "CSS custom properties → Tailwind utilities"],
              ["Component spacing", "Inside shadcn components",       "Tailwind classes directly, defined by shadcn"],
            ].map(([layer, used, how]) => (
              <TableRow key={layer}>
                <TableCell className="font-medium">{layer}</TableCell>
                <TableCell className="text-muted-foreground">{used}</TableCell>
                <TableCell className="text-muted-foreground">{how}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </CardTable>
        <div className="mt-4 border border-border rounded-md p-3 bg-muted">
          <Text variant="small" className="text-muted-foreground">
            Never use semantic tokens inside components. Never use component-level spacing for layout.
          </Text>
        </div>
      </StyleGuideSection>

      {/* Semantic tokens */}
      <StyleGuideSection
        title="Semantic tokens"
        description="Named tokens that map to foundational values. Use these at layout level — between sections, blocks, and larger elements."
      >
        <div className="flex flex-col divide-y divide-border">
          {semanticTokens.map(({ name, cssVar, px, twClass, description }) => (
            <div key={name} className="py-4 flex flex-col gap-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <Eyebrow>{name}</Eyebrow>
                <Text variant="caption" className="text-muted-foreground">{description}</Text>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-5 bg-muted rounded-sm overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-sm"
                    style={{ width: `${Math.min((px / MAX_BAR) * 100, 100)}%` }}
                  />
                </div>
                <div className="flex gap-4 shrink-0">
                  <Text variant="caption" className="text-muted-foreground font-mono w-12 text-right">{px}px</Text>
                  <Text variant="caption" className="text-muted-foreground font-mono">{twClass}</Text>
                  <Text variant="caption" className="text-muted-foreground font-mono hidden md:block">{cssVar}</Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      </StyleGuideSection>

      {/* Foundational scale */}
      <StyleGuideSection
        title="Foundational scale"
        description="Raw size tokens. The number in the name is the px value. Semantic tokens map to these — use semantic tokens in practice."
      >
        <div className="flex flex-col divide-y divide-border">
          {foundationalScale.map(({ name, px }) => (
            <div key={name} className="py-3 flex items-center gap-4">
              <div className="w-24 shrink-0">
                <Eyebrow>{name}</Eyebrow>
              </div>
              <div className="flex-1 h-3 bg-muted rounded-sm overflow-hidden">
                <div
                  className="h-full bg-accent rounded-sm"
                  style={{ width: `${(px / MAX_BAR) * 100}%` }}
                />
              </div>
              <Text variant="caption" className="text-muted-foreground font-mono w-16 text-right shrink-0">{px}px</Text>
            </div>
          ))}
        </div>
      </StyleGuideSection>

      {/* Padding patterns */}
      <StyleGuideSection
        title="Padding patterns"
        description="Inner padding based on content type. These govern how much breathing room content gets inside a container."
      >
        <div className="flex flex-col gap-between-cards">
          {paddingPatterns.map(({ label, padding, px, usage }) => (
            <div key={label} className="border border-border rounded-lg overflow-hidden">
              {/* Visual preview */}
              <div className={`bg-muted flex items-center justify-center ${padding}`}>
                <div className="w-full border border-dashed border-border rounded-sm bg-card">
                  <div className="p-2 text-center">
                    <Text variant="caption" className="text-muted-foreground">content</Text>
                  </div>
                </div>
              </div>
              {/* Label */}
              <div className="border-t border-border px-4 py-3 flex items-center justify-between gap-4">
                <div>
                  <Text variant="small" className="font-medium">{label}</Text>
                  <Text variant="caption" className="text-muted-foreground mt-0.5">{usage}</Text>
                </div>
                <div className="flex flex-col items-end gap-0.5 shrink-0">
                  <Text variant="caption" className="text-muted-foreground font-mono">{padding}</Text>
                  <Text variant="caption" className="text-muted-foreground">{px}</Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      </StyleGuideSection>

      {/* Component spacing ref */}
      <StyleGuideSection
        title="Component spacing reference"
        description="shadcn components manage their own internal spacing via Tailwind. Don't override it."
      >
        <CardTable>
          <TableHeader>
            <TableRow>
              <TableHead>Component</TableHead>
              <TableHead>Padding</TableHead>
              <TableHead>Source</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Button (default)", "px-4 py-2",   "shadcn"],
              ["Button (large)",   "px-6 py-3",   "shadcn"],
              ["Input",            "px-3 py-2",   "shadcn"],
              ["Card",             "p-6",         "shadcn"],
              ["Badge",            "px-2 py-0.5", "shadcn"],
            ].map(([comp, padding, source]) => (
              <TableRow key={comp}>
                <TableCell>{comp}</TableCell>
                <TableCell className="font-mono">{padding}</TableCell>
                <TableCell className="text-muted-foreground">{source}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </CardTable>
      </StyleGuideSection>

      {/* Rules */}
      <StyleGuideSection title="Rules">
        <ul className="flex flex-col gap-between-text">
          <Rule>Never use semantic tokens inside components — that's shadcn's territory.</Rule>
          <Rule>Never use component-level spacing for layout — use semantic tokens instead.</Rule>
          <Rule>Never hardcode values at either layer — no <code className="font-mono text-xs">p-[13px]</code>, no <code className="font-mono text-xs">{"style={{ gap: '20px' }}"}</code>.</Rule>
          <Rule>Grid gap is defined by the grid scale (gap-3 → gap-8) — separate from semantic tokens.</Rule>
          <Rule>All values are rem-based so they respond to the user's font-size settings.</Rule>
        </ul>
      </StyleGuideSection>

    </div>
  );
}
