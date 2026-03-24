import { StyleGuideSection } from "@/components/style-guide/section";
import { CodeAccordion } from "@/components/style-guide/code-accordion";
import { PreviewTabs } from "@/components/style-guide/preview-tabs";
import { Badge } from "@/components/ui/badge";
import { CardTable } from "@/components/ui/card-table";
import {
  TableHeader, TableBody, TableRow, TableHead, TableCell,
} from "@/components/ui/table";

export default function ComponentBadgePage() {
  return (
    <div className="flex flex-col gap-between-sections max-w-4xl">

      <StyleGuideSection
        title="Badge"
        description="Small inline label for status, categories, or counts. Four variants."
      >
        <div className="flex flex-col gap-6">

          <PreviewTabs
            tabs={[
              {
                label: "Variants",
                content: (
                  <>
                    <Badge variant="default">Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                  </>
                ),
              },
              {
                label: "In context",
                content: (
                  <>
                    <Badge variant="default">Done</Badge>
                    <Badge variant="secondary">Stub</Badge>
                    <Badge variant="outline">Draft</Badge>
                    <Badge variant="destructive">Deprecated</Badge>
                  </>
                ),
              },
            ]}
          />

          <CodeAccordion>{`import { Badge } from "@/components/ui/badge"

<Badge variant="default">Done</Badge>
<Badge variant="secondary">Stub</Badge>
<Badge variant="outline">Draft</Badge>
<Badge variant="destructive">Deprecated</Badge>`}</CodeAccordion>
        </div>
      </StyleGuideSection>

      <StyleGuideSection title="Variants reference">
        <CardTable>
          <TableHeader>
            <TableRow>
              <TableHead>Variant</TableHead>
              <TableHead>Use for</TableHead>
              <TableHead>Example</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["default",     "Positive or complete state",       <Badge variant="default">Done</Badge>],
              ["secondary",   "Neutral or in-progress state",     <Badge variant="secondary">Stub</Badge>],
              ["outline",     "Subtle labels, categories, tags",  <Badge variant="outline">Draft</Badge>],
              ["destructive", "Errors, warnings, deprecated",     <Badge variant="destructive">Deprecated</Badge>],
            ].map(([variant, use, example]) => (
              <TableRow key={variant as string}>
                <TableCell className="font-mono text-xs font-medium">{variant}</TableCell>
                <TableCell className="text-muted-foreground">{use}</TableCell>
                <TableCell>{example}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </CardTable>
      </StyleGuideSection>

    </div>
  );
}
