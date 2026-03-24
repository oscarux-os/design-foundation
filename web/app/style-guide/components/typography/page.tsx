import { StyleGuideSection } from "@/components/style-guide/section";
import { CodeAccordion } from "@/components/style-guide/code-accordion";
import { PreviewTabs } from "@/components/style-guide/preview-tabs";
import { Heading } from "@/components/typography/heading";
import { Text } from "@/components/typography/text";
import { Eyebrow } from "@/components/typography/eyebrow";

export default function ComponentTypographyPage() {
  return (
    <StyleGuideSection
      title="Typography"
      description="Heading, Text, and Eyebrow — the three text components. Never use raw HTML tags."
    >
      <div className="flex flex-col gap-between-cards">

        <PreviewTabs
          tabs={[
            {
              label: "Headings",
              content: (
                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-5">
                  {(["display-hero", "display-lg", "display-md", "display-sm", "h1", "h2", "h3", "h4"] as const).map((size) => (
                    <div key={size} className="border border-border rounded-md p-4 flex flex-col gap-1 min-h-20">
                      <Eyebrow>{size}</Eyebrow>
                      <Heading size={size} as="span" className="block">Oh</Heading>
                    </div>
                  ))}
                </div>
              ),
            },
            {
              label: "Text",
              content: (
                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-5">
                  {(["lead", "body", "small", "caption"] as const).map((variant) => (
                    <div key={variant} className="border border-border rounded-md p-4 flex flex-col gap-1">
                      <Eyebrow>{variant}</Eyebrow>
                      <Text variant={variant}>Sample text</Text>
                    </div>
                  ))}
                  <div className="border border-border rounded-md p-4 flex flex-col gap-1">
                    <Eyebrow>eyebrow</Eyebrow>
                    <Eyebrow>Eyebrow label</Eyebrow>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <CodeAccordion>{`<Heading size="display-hero">Title</Heading>
<Heading size="h2" as="h3">Section</Heading>
<Text variant="body">Paragraph</Text>
<Text variant="small" className="text-muted-foreground">Secondary</Text>
<Eyebrow>Label</Eyebrow>`}</CodeAccordion>
      </div>
    </StyleGuideSection>
  );
}
