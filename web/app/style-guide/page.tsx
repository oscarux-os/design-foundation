import Link from "next/link";
import { StyleGuideSection } from "@/components/style-guide/section";
import { CardTable } from "@/components/ui/card-table";
import { Badge } from "@/components/ui/badge";
import {
  TableHeader, TableBody, TableRow, TableHead, TableCell,
} from "@/components/ui/table";

type Status = "done" | "stub" | "fix-needed";

interface Entry {
  label: string;
  href: string;
  description: string;
  status: Status;
  updated: string;
}

const foundation: Entry[] = [
  { label: "Typography",  href: "/style-guide/typography",  description: "Type scale, fonts, text variants",              status: "done", updated: "21 Mar 2026" },
  { label: "Colors",      href: "/style-guide/colors",      description: "Tokens, surfaces, brand, state",               status: "done", updated: "21 Mar 2026" },
  { label: "Spacings",    href: "/style-guide/spacings",    description: "Semantic tokens and foundational scale",        status: "done", updated: "21 Mar 2026" },
  { label: "Radius",      href: "/style-guide/radius",      description: "Border radius scale and per-component rules",  status: "done", updated: "21 Mar 2026" },
  { label: "Icons",       href: "/style-guide/icons",       description: "Phosphor icons, sizes and weights",            status: "done", updated: "21 Mar 2026" },
  { label: "Motion",      href: "/style-guide/motion",      description: "Principles, timing and easing",                status: "done", updated: "21 Mar 2026" },
  { label: "Transitions", href: "/style-guide/transitions", description: "Page, overlay and micro-transitions",          status: "done", updated: "21 Mar 2026" },
  { label: "Grammar",     href: "/style-guide/grammar",     description: "Voice, tone, UI copy and A–Z reference",       status: "done", updated: "21 Mar 2026" },
];

const components: Entry[] = [
  { label: "Typography",  href: "/style-guide/components/typography",  description: "Heading, Text, Eyebrow",          status: "done", updated: "21 Mar 2026" },
  { label: "Tabs",        href: "/style-guide/components/tabs",        description: "Radix Tabs via shadcn",           status: "done", updated: "21 Mar 2026" },
  { label: "Table",       href: "/style-guide/components/table",       description: "Table and Card Table",            status: "fix-needed", updated: "21 Mar 2026" },
  { label: "Accordion",   href: "/style-guide/components/accordion",   description: "Accordion and Card Accordion",    status: "done", updated: "21 Mar 2026" },
  { label: "Card",        href: "/style-guide/components/card",        description: "Card surface and variants",       status: "done", updated: "21 Mar 2026" },
  { label: "Scroll Area", href: "/style-guide/components/scroll-area", description: "Scrollable containers",           status: "done", updated: "21 Mar 2026" },
  { label: "Button",      href: "/style-guide/components/button",      description: "Six variants, three sizes",       status: "done", updated: "21 Mar 2026" },
  { label: "Badge",       href: "/style-guide/components/badge",       description: "Status and label badges",         status: "done", updated: "21 Mar 2026" },
];

const blocks: Entry[] = [
  { label: "Floating nav",  href: "/style-guide/blocks/floating-nav",  description: "Fixed bottom navigation with optional CTA",            status: "done", updated: "21 Mar 2026" },
  { label: "Hero",          href: "/style-guide/blocks/hero",          description: "Full-width hero with column grid overlay and CTAs",       status: "done", updated: "21 Mar 2026" },
  { label: "Project card",  href: "/style-guide/blocks/project-card",  description: "Grid-placed card with image, tags, title and hover state", status: "done", updated: "21 Mar 2026" },
  { label: "Work card",     href: "/style-guide/blocks/work-card",     description: "Portrait card for work areas, used in horizontal carousel", status: "stub", updated: "22 Mar 2026" },
];

function StatusBadge({ status }: { status: Status }) {
  if (status === "done") return <Badge variant="default">Done</Badge>;
  if (status === "fix-needed") return <Badge variant="destructive">Responsive fix needed</Badge>;
  return <Badge variant="secondary">Stub</Badge>;
}

function IndexTable({ rows }: { rows: Entry[] }) {
  return (
    <CardTable>
      <TableHeader>
        <TableRow>
          <TableHead className="w-36">Page</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="w-28">Status</TableHead>
          <TableHead className="w-32 text-right">Updated</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map(({ label, href, description, status, updated }) => (
          <TableRow key={href} className="group">
            <TableCell>
              <Link href={href} className="font-medium text-foreground group-hover:text-primary transition-colors">
                {label}
              </Link>
            </TableCell>
            <TableCell className="text-muted-foreground">
              <Link href={href} className="block w-full">{description}</Link>
            </TableCell>
            <TableCell>
              <StatusBadge status={status} />
            </TableCell>
            <TableCell className="text-right text-muted-foreground text-xs">
              {updated}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </CardTable>
  );
}

export default function StyleGuidePage() {
  return (
    <div className="flex flex-col gap-between-sections max-w-4xl">
      <StyleGuideSection
        title="Foundation"
        description="Design decisions that apply across the entire system."
      >
        <IndexTable rows={foundation} />
      </StyleGuideSection>

      <StyleGuideSection
        title="Components"
        description="Reusable UI components built on shadcn and Radix UI."
      >
        <IndexTable rows={components} />
      </StyleGuideSection>

      <StyleGuideSection
        title="Blocks"
        description="Composed patterns built from components."
      >
        <IndexTable rows={blocks} />
      </StyleGuideSection>
    </div>
  );
}
