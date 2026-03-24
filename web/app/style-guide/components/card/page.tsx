import { StyleGuideSection } from "@/components/style-guide/section";
import { CodeAccordion } from "@/components/style-guide/code-accordion";
import { PreviewTabs } from "@/components/style-guide/preview-tabs";
import { Text } from "@/components/typography/text";
import { Eyebrow } from "@/components/typography/eyebrow";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function ComponentCardPage() {
  return (
    <StyleGuideSection
      title="Card"
      description="shadcn Card — a surface for grouping related content. Composed of Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter."
    >
      <div className="flex flex-col gap-6">

        <PreviewTabs
          tabs={[
            {
              label: "Full card",
              content: (
                <div className="w-full max-w-sm">
                  <Card>
                    <CardHeader>
                      <CardTitle>Card title</CardTitle>
                      <CardDescription>Supporting description or subtitle goes here.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Text variant="small" className="text-muted-foreground">
                        Card body content. Any component can go inside CardContent.
                      </Text>
                    </CardContent>
                    <CardFooter>
                      <Text variant="caption" className="text-muted-foreground">Footer action or metadata</Text>
                    </CardFooter>
                  </Card>
                </div>
              ),
            },
            {
              label: "With eyebrow",
              content: (
                <div className="w-full max-w-sm">
                  <Card>
                    <CardHeader>
                      <Eyebrow>eyebrow label</Eyebrow>
                      <CardTitle>With eyebrow</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Text variant="small" className="text-muted-foreground">
                        Eyebrow can sit above the title inside CardHeader.
                      </Text>
                    </CardContent>
                  </Card>
                </div>
              ),
            },
          ]}
        />

        <CodeAccordion>{`import {
  Card, CardHeader, CardTitle, CardDescription,
  CardContent, CardFooter,
} from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content here.</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>`}</CodeAccordion>
      </div>
    </StyleGuideSection>
  );
}
