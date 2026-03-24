import { type ReactNode } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface PreviewTab {
  label: string;
  content: ReactNode;
}

interface PreviewTabsProps {
  tabs: PreviewTab[];
}

export function PreviewTabs({ tabs }: PreviewTabsProps) {
  return (
    <Tabs defaultValue={tabs[0]?.label}>
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.label} value={tab.label}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.label} value={tab.label}>
          <div className="rounded-lg border border-border p-8 flex flex-wrap gap-3 items-center">
            {tab.content}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
