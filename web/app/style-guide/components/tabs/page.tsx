"use client";

import { StyleGuideSection } from "@/components/style-guide/section";
import { CodeAccordion } from "@/components/style-guide/code-accordion";
import { PreviewTabs } from "@/components/style-guide/preview-tabs";
import { Text } from "@/components/typography/text";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function ComponentTabsPage() {
  return (
    <StyleGuideSection
      title="Tabs"
      description="shadcn Tabs wrapping @radix-ui/react-tabs. Used for switching between views."
    >
      <div className="flex flex-col gap-6">

        <PreviewTabs
          tabs={[
            {
              label: "Default",
              content: (
                <Tabs defaultValue="first" className="w-full">
                  <TabsList>
                    <TabsTrigger value="first">First</TabsTrigger>
                    <TabsTrigger value="second">Second</TabsTrigger>
                    <TabsTrigger value="third">Third</TabsTrigger>
                  </TabsList>
                  <TabsContent value="first">
                    <div className="border border-border rounded-md p-4 mt-2">
                      <Text variant="small" className="text-muted-foreground">Content for First tab</Text>
                    </div>
                  </TabsContent>
                  <TabsContent value="second">
                    <div className="border border-border rounded-md p-4 mt-2">
                      <Text variant="small" className="text-muted-foreground">Content for Second tab</Text>
                    </div>
                  </TabsContent>
                  <TabsContent value="third">
                    <div className="border border-border rounded-md p-4 mt-2">
                      <Text variant="small" className="text-muted-foreground">Content for Third tab</Text>
                    </div>
                  </TabsContent>
                </Tabs>
              ),
            },
            {
              label: "Full width",
              content: (
                <Tabs defaultValue="a" className="w-full">
                  <TabsList className="w-full">
                    <TabsTrigger value="a" className="flex-1">Components</TabsTrigger>
                    <TabsTrigger value="b" className="flex-1">Blocks</TabsTrigger>
                  </TabsList>
                </Tabs>
              ),
            },
            {
              label: "Disabled",
              content: (
                <Tabs defaultValue="enabled">
                  <TabsList>
                    <TabsTrigger value="enabled">Enabled</TabsTrigger>
                    <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
                  </TabsList>
                </Tabs>
              ),
            },
          ]}
        />

        <CodeAccordion>{`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>

// Full width
<TabsList className="w-full">
  <TabsTrigger value="a" className="flex-1">A</TabsTrigger>
  <TabsTrigger value="b" className="flex-1">B</TabsTrigger>
</TabsList>`}</CodeAccordion>
      </div>
    </StyleGuideSection>
  );
}
