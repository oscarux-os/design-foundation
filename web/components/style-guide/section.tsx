import { Heading } from "@/components/typography/heading";
import { Text } from "@/components/typography/text";
import { type ReactNode } from "react";

interface StyleGuideSectionProps {
  title: string;
  description?: string;
  id?: string;
  children: ReactNode;
}

export function StyleGuideSection({ title, description, id, children }: StyleGuideSectionProps) {
  const sectionId = id ?? title.toLowerCase().replace(/\s+/g, "-");
  return (
    <section id={sectionId} className="pb-between-sections border-b border-border last:border-0 last:pb-0">
      <div className="mb-text-to-component">
        <Heading size="h3">{title}</Heading>
        {description && (
          <Text variant="small" className="text-muted-foreground mt-2">
            {description}
          </Text>
        )}
      </div>
      {children}
    </section>
  );
}
