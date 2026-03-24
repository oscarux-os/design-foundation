import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface CodeAccordionProps {
  children: string;
  label?: string;
}

export function CodeAccordion({ children, label = "View code" }: CodeAccordionProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="code" className="border border-border rounded-md">
        <AccordionTrigger className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:no-underline">
          {label}
        </AccordionTrigger>
        <AccordionContent className="pb-0">
          <ScrollArea className="w-full rounded-b-md border-t border-border">
            <pre className="font-mono text-sm bg-muted p-4 text-foreground leading-relaxed">
              <code>{children}</code>
            </pre>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
