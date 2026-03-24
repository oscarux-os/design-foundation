"use client";

import { StyleGuideSection } from "@/components/style-guide/section";
import { CodeAccordion } from "@/components/style-guide/code-accordion";
import { PreviewTabs } from "@/components/style-guide/preview-tabs";
import { Text } from "@/components/typography/text";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function ComponentScrollAreaPage() {
  return (
    <StyleGuideSection
      title="Scroll Area"
      description="shadcn ScrollArea — replaces native browser scrollbars with a consistent styled scrollbar. Used in the sidebar, main content, tables, and code blocks."
    >
      <div className="flex flex-col gap-6">

        <PreviewTabs
          tabs={[
            {
              label: "Vertical",
              content: (
                <ScrollArea className="h-48 w-full border border-border rounded-lg p-4">
                  <div className="flex flex-col gap-3">
                    {Array.from({ length: 12 }, (_, i) => (
                      <div key={i} className="border border-border rounded-md px-3 py-2">
                        <Text variant="small" className="text-muted-foreground">Item {i + 1}</Text>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              ),
            },
            {
              label: "Horizontal",
              content: (
                <ScrollArea className="w-full border border-border rounded-lg p-4">
                  <div className="flex gap-3 w-max">
                    {Array.from({ length: 12 }, (_, i) => (
                      <div key={i} className="border border-border rounded-md px-4 py-2 shrink-0">
                        <Text variant="small" className="text-muted-foreground font-mono">Item {i + 1}</Text>
                      </div>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              ),
            },
          ]}
        />

        <CodeAccordion>{`import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

// Vertical (default)
<ScrollArea className="h-48">
  {items.map(...)}
</ScrollArea>

// Horizontal — add ScrollBar explicitly
<ScrollArea>
  <div className="flex gap-3 w-max">
    {items.map(...)}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`}</CodeAccordion>
      </div>
    </StyleGuideSection>
  );
}
