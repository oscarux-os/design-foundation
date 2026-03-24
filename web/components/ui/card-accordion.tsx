import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export interface CardAccordionItemDef {
  value: string;
  trigger: string;
  content: React.ReactNode;
}

interface CardAccordionBaseProps {
  title?: string;
  description?: string;
  items: CardAccordionItemDef[];
  className?: string;
}

type CardAccordionProps =
  | (CardAccordionBaseProps & { type?: "single"; collapsible?: boolean })
  | (CardAccordionBaseProps & { type: "multiple"; collapsible?: never });

export function CardAccordion({ title, description, items, type = "single", collapsible = true, className }: CardAccordionProps) {
  const accordionProps =
    type === "multiple"
      ? ({ type: "multiple" } as const)
      : ({ type: "single", collapsible } as const);

  return (
    <Card className={cn(className)}>
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className={cn("pt-6", (title || description) && "pt-0")}>
        <Accordion {...accordionProps}>
          {items.map(({ value, trigger, content }) => (
            <AccordionItem key={value} value={value} className="last:border-0">
              <AccordionTrigger>{trigger}</AccordionTrigger>
              <AccordionContent>{content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
