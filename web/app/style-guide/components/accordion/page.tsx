"use client";

import { StyleGuideSection } from "@/components/style-guide/section";
import { CodeAccordion } from "@/components/style-guide/code-accordion";
import { PreviewTabs } from "@/components/style-guide/preview-tabs";
import { Text } from "@/components/typography/text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CardAccordion } from "@/components/ui/card-accordion";

export default function ComponentAccordionPage() {
  return (
    <div className="flex flex-col gap-between-sections">

      <StyleGuideSection
        title="Accordion"
        description="shadcn Accordion wrapping @radix-ui/react-accordion. Used for collapsible content — code examples throughout this style guide."
      >
        <div className="flex flex-col gap-6">

          <PreviewTabs
            tabs={[
              {
                label: "Single",
                content: (
                  <div className="w-full">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>What is this component?</AccordionTrigger>
                        <AccordionContent>
                          <Text variant="small" className="text-muted-foreground">
                            An accordion lets you show and hide sections of content. One item open at a time.
                          </Text>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>When should I use it?</AccordionTrigger>
                        <AccordionContent>
                          <Text variant="small" className="text-muted-foreground">
                            For collapsible code examples, FAQs, or any content group where showing everything at once adds noise.
                          </Text>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                ),
              },
              {
                label: "Multiple",
                content: (
                  <div className="w-full">
                    <Accordion type="multiple">
                      <AccordionItem value="a">
                        <AccordionTrigger>First item</AccordionTrigger>
                        <AccordionContent>
                          <Text variant="small" className="text-muted-foreground">Content for first item.</Text>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="b">
                        <AccordionTrigger>Second item</AccordionTrigger>
                        <AccordionContent>
                          <Text variant="small" className="text-muted-foreground">Content for second item.</Text>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                ),
              },
            ]}
          />

          <CodeAccordion>{`import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion"

// Single — only one item open at a time
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Question</AccordionTrigger>
    <AccordionContent>Answer text here.</AccordionContent>
  </AccordionItem>
</Accordion>

// Multiple — several items can be open simultaneously
<Accordion type="multiple">
  <AccordionItem value="a">...</AccordionItem>
  <AccordionItem value="b">...</AccordionItem>
</Accordion>`}</CodeAccordion>
        </div>
      </StyleGuideSection>

      <StyleGuideSection
        title="Card Accordion"
        description="Accordion wrapped in a Card surface. Use when accordion items belong to a named section or need visual containment."
      >
        <div className="flex flex-col gap-6">

          <PreviewTabs
            tabs={[
              {
                label: "With header",
                content: (
                  <div className="w-full max-w-sm">
                    <CardAccordion
                      title="FAQ"
                      description="Frequently asked questions"
                      items={[
                        {
                          value: "q1",
                          trigger: "What is this pattern for?",
                          content: <Text variant="small" className="text-muted-foreground">When accordion items belong to a named section and need a card surface around them.</Text>,
                        },
                        {
                          value: "q2",
                          trigger: "When should I use it?",
                          content: <Text variant="small" className="text-muted-foreground">Use it for FAQs, settings panels, or grouped collapsible content that needs visual containment.</Text>,
                        },
                      ]}
                    />
                  </div>
                ),
              },
              {
                label: "Without header",
                content: (
                  <div className="w-full max-w-sm">
                    <CardAccordion
                      items={[
                        {
                          value: "a",
                          trigger: "Plain card accordion",
                          content: <Text variant="small" className="text-muted-foreground">No title or description — just the accordion inside a card surface.</Text>,
                        },
                        {
                          value: "b",
                          trigger: "Second item",
                          content: <Text variant="small" className="text-muted-foreground">Last item removes the bottom border automatically.</Text>,
                        },
                      ]}
                    />
                  </div>
                ),
              },
            ]}
          />

          <CodeAccordion>{`import { CardAccordion } from "@/components/ui/card-accordion"

// With header
<CardAccordion
  title="FAQ"
  description="Frequently asked questions"
  items={[
    { value: "q1", trigger: "Question one?", content: <p>Answer one.</p> },
    { value: "q2", trigger: "Question two?", content: <p>Answer two.</p> },
  ]}
/>

// Without header
<CardAccordion
  items={[{ value: "a", trigger: "Item A", content: <p>Content A</p> }]}
/>

// Multiple open at once
<CardAccordion type="multiple" items={[...]} />`}</CodeAccordion>
        </div>
      </StyleGuideSection>

    </div>
  );
}
