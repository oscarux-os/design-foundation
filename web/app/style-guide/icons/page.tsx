import { StyleGuideSection } from "@/components/style-guide/section";
import { Eyebrow } from "@/components/typography/eyebrow";
import { Text } from "@/components/typography/text";
import { CodeAccordion } from "@/components/style-guide/code-accordion";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import {
  ArrowRight,
  Check,
  X,
  GearSix,
  Star,
} from "@phosphor-icons/react/dist/ssr";

function Rule({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 items-start">
      <span className="text-muted-foreground mt-1 shrink-0">—</span>
      <Text variant="small">{children}</Text>
    </li>
  );
}

const sizes: { px: number; weight: "light" | "regular" | "bold"; usage: string }[] = [
  { px: 16, weight: "light",   usage: "Inline with text, buttons, badges" },
  { px: 24, weight: "regular", usage: "Standard standalone icon" },
  { px: 48, weight: "regular", usage: "Feature icons, empty states" },
  { px: 64, weight: "bold",    usage: "Large illustrative icons" },
  { px: 96, weight: "bold",    usage: "Hero / display icons" },
];

const weights: {
  weight: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  usage: string;
}[] = [
  { weight: "thin",     usage: "—" },
  { weight: "light",    usage: "Default — small sizes (16px), subtle contexts" },
  { weight: "regular",  usage: "Standard standalone icon (24px)" },
  { weight: "bold",     usage: "Emphasis, large sizes (64px+)" },
  { weight: "fill",     usage: "Active / selected states" },
  { weight: "duotone",  usage: "—" },
];

export default function IconsPage() {
  return (
    <div className="flex flex-col gap-between-sections max-w-4xl">

      {/* Install */}
      <StyleGuideSection
        title="Install & import"
        description="All icons come from @phosphor-icons/react. No other icon libraries."
      >
        <div className="flex flex-col gap-component-default">
          <CodeAccordion>{`npm install @phosphor-icons/react`}</CodeAccordion>
          <CodeAccordion>{`import { ArrowRight, ChevronDown, X, Check } from "@phosphor-icons/react"
// In server components (pages/layouts):
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"`}</CodeAccordion>
        </div>
      </StyleGuideSection>

      {/* Sizes */}
      <StyleGuideSection
        title="Sizes"
        description="Five allowed sizes. Use the size prop — never className w-5 h-5. Default weight is light."
      >
        <div className="flex flex-col gap-6">
          {/* Visual previews */}
          <div className="flex items-end gap-8 flex-wrap">
            {sizes.map(({ px, weight }) => (
              <div key={px} className="flex flex-col items-center gap-3">
                <div
                  className="border border-border rounded-md bg-muted flex items-center justify-center"
                  style={{ width: px + 32, height: px + 32 }}
                >
                  <ArrowRight size={px} weight={weight} />
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <Text variant="caption" className="font-mono">{px}px</Text>
                  <Text variant="caption" className="text-muted-foreground font-mono">{weight}</Text>
                </div>
              </div>
            ))}
          </div>

          {/* Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Size</TableHead>
                <TableHead>px</TableHead>
                <TableHead>Weight</TableHead>
                <TableHead>Usage</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sizes.map(({ px, weight, usage }) => (
                <TableRow key={px}>
                  <TableCell className="font-mono">size={"{" + px + "}"}</TableCell>
                  <TableCell className="text-muted-foreground">{px}px</TableCell>
                  <TableCell className="font-mono">{weight}</TableCell>
                  <TableCell className="text-muted-foreground">{usage}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </StyleGuideSection>

      {/* Weights */}
      <StyleGuideSection
        title="Weights"
        description="Six weights available. Default is light — override with bold at 48px+ to maintain proportional stroke."
      >
        <div className="flex flex-col gap-6">
          {/* Visual previews */}
          <div className="flex items-center gap-6 flex-wrap">
            {weights.map(({ weight }) => (
              <div key={weight} className="flex flex-col items-center gap-2">
                <div className="border border-border rounded-md bg-muted w-14 h-14 flex items-center justify-center">
                  <ArrowRight size={24} weight={weight} />
                </div>
                <Text variant="caption" className="font-mono">{weight}</Text>
              </div>
            ))}
          </div>

          {/* Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Weight</TableHead>
                <TableHead>Usage</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {weights.map(({ weight, usage }) => (
                <TableRow key={weight}>
                  <TableCell className="font-mono">{weight}</TableCell>
                  <TableCell className="text-muted-foreground">{usage}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <CodeAccordion>{`<ArrowRight size={16} weight="light" />   // default
<ArrowRight size={24} weight="regular" />
<ArrowRight size={64} weight="bold" />
<ArrowRight size={20} weight="fill" />   // active/selected state`}</CodeAccordion>
        </div>
      </StyleGuideSection>

      {/* Color */}
      <StyleGuideSection
        title="Color"
        description="Icons inherit text color via currentColor. Control color via the parent's text class or an explicit className."
      >
        <div className="flex flex-col gap-component-default">
          <div className="flex gap-8 flex-wrap items-center border border-border rounded-lg p-6">
            {[
              { label: "text-foreground (inherited)", cls: "text-foreground" },
              { label: "text-muted-foreground",       cls: "text-muted-foreground" },
              { label: "text-primary",                cls: "text-primary" },
              { label: "text-destructive",            cls: "text-destructive" },
            ].map(({ label, cls }) => (
              <div key={label} className="flex items-center gap-2">
                <span className={cls}><ArrowRight size={20} weight="light" /></span>
                <Text variant="caption" className="text-muted-foreground font-mono">{label}</Text>
              </div>
            ))}
          </div>
          <CodeAccordion>{`// Inherits parent color
<span className="text-muted-foreground">
  <ChevronDown size={16} weight="light" />
</span>

// Explicit color
<Check size={16} weight="light" className="text-primary" />
<X size={16} weight="light" className="text-destructive" />`}</CodeAccordion>
        </div>
      </StyleGuideSection>

      {/* Icon containers */}
      <StyleGuideSection
        title="Icon containers"
        description="For icons that need a background surface."
      >
        <div className="flex flex-col gap-component-default">
          <div className="flex gap-4 flex-wrap items-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-muted">
              <GearSix size={20} weight="light" className="text-muted-foreground" />
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-muted">
              <Star size={24} weight="light" className="text-muted-foreground" />
            </div>
            <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10">
              <Star size={32} weight="light" className="text-primary" />
            </div>
          </div>
          <CodeAccordion>{`<div className="flex items-center justify-center w-10 h-10 rounded-md bg-muted">
  <GearSix size={20} weight="light" className="text-muted-foreground" />
</div>`}</CodeAccordion>
        </div>
      </StyleGuideSection>

      {/* Accessibility */}
      <StyleGuideSection
        title="Accessibility"
        description="Decorative icons in buttons with text: aria-hidden. Icon-only buttons: aria-label on the button."
      >
        <CodeAccordion>{`// Decorative icon — hide from screen readers
<button>
  Save <Check size={16} weight="light" aria-hidden="true" className="ml-2" />
</button>

// Icon-only button — label the button itself
<button aria-label="Close">
  <X size={16} weight="light" aria-hidden="true" />
</button>`}</CodeAccordion>
      </StyleGuideSection>

      {/* Rules */}
      <StyleGuideSection title="Rules">
        <ul className="flex flex-col gap-between-text">
          <Rule>Only <code className="font-mono text-xs">@phosphor-icons/react</code>. No other icon packages.</Rule>
          <Rule>Only <code className="font-mono text-xs">size={"{16}"}</code>, <code className="font-mono text-xs">size={"{24}"}</code>, <code className="font-mono text-xs">size={"{48}"}</code>, <code className="font-mono text-xs">size={"{64}"}</code>, or <code className="font-mono text-xs">size={"{96}"}</code>.</Rule>
          <Rule>Never <code className="font-mono text-xs">className="w-5 h-5"</code> for sizing — always the <code className="font-mono text-xs">size</code> prop.</Rule>
          <Rule>Never hardcode color — use <code className="font-mono text-xs">currentColor</code> via text classes.</Rule>
          <Rule>Default weight is <code className="font-mono text-xs">light</code>. Use <code className="font-mono text-xs">bold</code> at 48px+ to maintain proportional stroke.</Rule>
          <Rule>Use <code className="font-mono text-xs">/dist/ssr</code> import path in server components and layouts.</Rule>
        </ul>
      </StyleGuideSection>

    </div>
  );
}
