import { StyleGuideSection } from "@/components/style-guide/section";
import { CodeAccordion } from "@/components/style-guide/code-accordion";
import { PreviewTabs } from "@/components/style-guide/preview-tabs";
import { Button } from "@/components/ui/button";
import { CardTable } from "@/components/ui/card-table";
import {
  TableHeader, TableBody, TableRow, TableHead, TableCell,
} from "@/components/ui/table";

export default function ComponentButtonPage() {
  return (
    <div className="flex flex-col gap-between-sections max-w-4xl">

      <StyleGuideSection
        title="Button"
        description="shadcn Button wrapping @radix-ui/react-slot. Supports six variants and four sizes. Use asChild to render as a link without losing button styles."
      >
        <div className="flex flex-col gap-6">

          <PreviewTabs
            tabs={[
              {
                label: "Variants",
                content: (
                  <>
                    <Button variant="default">Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="link">Link</Button>
                  </>
                ),
              },
              {
                label: "Sizes",
                content: (
                  <>
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="xl">XL</Button>
                    <Button size="icon" aria-label="Icon button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </Button>
                  </>
                ),
              },
              {
                label: "States",
                content: (
                  <>
                    <Button variant="default" disabled>Default</Button>
                    <Button variant="outline" disabled>Outline</Button>
                    <Button variant="ghost" disabled>Ghost</Button>
                    <Button variant="destructive" disabled>Destructive</Button>
                  </>
                ),
              },
            ]}
          />

          <CodeAccordion>{`import { Button } from "@/components/ui/button"

// Variants
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">XL</Button>
<Button size="icon" aria-label="Add"><PlusIcon /></Button>

// Disabled
<Button disabled>Can't click this</Button>

// As link (asChild + next/link)
import Link from "next/link"
<Button asChild>
  <Link href="/work">View work</Link>
</Button>`}</CodeAccordion>
        </div>
      </StyleGuideSection>

      <StyleGuideSection title="Variants reference">
        <CardTable>
          <TableHeader>
            <TableRow>
              <TableHead>Variant</TableHead>
              <TableHead>Use for</TableHead>
              <TableHead>Background</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["default",     "Primary action — one per view",          "bg-primary"],
              ["secondary",   "Secondary action alongside default",     "bg-secondary"],
              ["outline",     "Tertiary or nav items",                  "border only"],
              ["ghost",       "In-context actions, toolbars",           "transparent"],
              ["destructive", "Irreversible or dangerous actions",      "bg-destructive"],
              ["link",        "Inline text actions, breadcrumbs",       "none"],
            ].map(([variant, use, bg]) => (
              <TableRow key={variant}>
                <TableCell className="font-medium font-mono text-xs">{variant}</TableCell>
                <TableCell className="text-muted-foreground">{use}</TableCell>
                <TableCell className="text-muted-foreground">{bg}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </CardTable>
      </StyleGuideSection>

    </div>
  );
}
