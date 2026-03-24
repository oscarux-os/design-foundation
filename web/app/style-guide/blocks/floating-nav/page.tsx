"use client";

import { useState } from "react";
import { StyleGuideSection } from "@/components/style-guide/section";
import { CodeAccordion } from "@/components/style-guide/code-accordion";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/typography/text";
import { Eyebrow } from "@/components/typography/eyebrow";

const demoItems = [
  { label: "Work" },
  { label: "About" },
  { label: "Writing" },
  { label: "Contact" },
];

function DotNavPreview({ active, onSelect, cta }: {
  active?: string;
  onSelect?: (label: string) => void;
  cta?: boolean;
}) {
  return (
    <div className="flex items-center gap-6 px-3 py-3 rounded-full bg-card shadow-lg w-fit">
      {demoItems.map((item) => (
        <button
          key={item.label}
          onClick={() => onSelect?.(item.label)}
          className={[
            "flex items-center gap-1.5 text-sm font-medium transition-colors whitespace-nowrap",
            active === item.label ? "text-primary" : "text-muted-foreground hover:text-primary",
          ].join(" ")}
        >
          {active === item.label && (
            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
          )}
          {item.label}
        </button>
      ))}
      {cta && (
        <>
          <div className="w-px h-4 bg-border mx-3" />
          <Button variant="secondary" size="sm" className="rounded-full">Say hi</Button>
        </>
      )}
    </div>
  );
}

function PillNavPreview({ active, onSelect, cta }: {
  active?: string;
  onSelect?: (label: string) => void;
  cta?: boolean;
}) {
  return (
    <div className="flex items-center gap-1 px-2 h-12 rounded-full bg-card shadow-lg w-fit">
      {demoItems.map((item) => {
        const isActive = active === item.label;
        return (
          <button
            key={item.label}
            onClick={() => onSelect?.(item.label)}
            className={[
              "text-sm font-medium transition-colors whitespace-nowrap px-4 py-2 rounded-full",
              isActive
                ? "bg-muted text-foreground"
                : "text-muted-foreground hover:text-foreground",
            ].join(" ")}
          >
            {item.label}
          </button>
        );
      })}
      {cta && (
        <Button variant="secondary" size="sm" className="rounded-full ml-1">Say hi</Button>
      )}
    </div>
  );
}

export default function FloatingNavBlockPage() {
  const [dotActive, setDotActive] = useState("Work");
  const [pillActive, setPillActive] = useState("Work");

  return (
    <div className="flex flex-col gap-between-sections max-w-4xl">

      {/* Dot variant */}
      <StyleGuideSection
        title="Floating nav — dot"
        description="Compact pill nav. Active state shown with a brand-color dot and text. Default variant."
      >
        <div className="flex flex-col gap-6">
          <div className="relative border border-border rounded-2xl bg-background overflow-hidden" style={{ height: "240px" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <Text variant="small" className="text-muted-foreground">Page content</Text>
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <DotNavPreview active={dotActive} onSelect={setDotActive} cta />
            </div>
          </div>

          <Eyebrow className="mb-1">Variants</Eyebrow>
          <div className="flex flex-col gap-between-cards">
            <div className="border border-border rounded-2xl p-6 flex flex-col gap-3">
              <Text variant="caption" className="text-muted-foreground">No active item</Text>
              <DotNavPreview />
            </div>
            <div className="border border-border rounded-2xl p-6 flex flex-col gap-3">
              <Text variant="caption" className="text-muted-foreground">With active item</Text>
              <DotNavPreview active="Work" />
            </div>
            <div className="border border-border rounded-2xl p-6 flex flex-col gap-3">
              <Text variant="caption" className="text-muted-foreground">With CTA</Text>
              <DotNavPreview active="Work" cta />
            </div>
          </div>

          <CodeAccordion>{`<FloatingNav
  variant="dot"
  items={[
    { label: "Work",    href: "/work", active: true },
    { label: "About",   href: "/about" },
    { label: "Writing", href: "/writing" },
    { label: "Contact", href: "/contact" },
  ]}
  cta={{ label: "Say hi", href: "/contact" }}
/>`}</CodeAccordion>
        </div>
      </StyleGuideSection>

      {/* Pill variant */}
      <StyleGuideSection
        title="Floating nav — pill"
        description="Active item gets a filled pill background. CTA sits to the right as an outlined pill, visually separated."
      >
        <div className="flex flex-col gap-6">
          <div className="relative border border-border rounded-2xl bg-background overflow-hidden" style={{ height: "240px" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <Text variant="small" className="text-muted-foreground">Page content</Text>
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <PillNavPreview active={pillActive} onSelect={setPillActive} cta />
            </div>
          </div>

          <Eyebrow className="mb-1">Variants</Eyebrow>
          <div className="flex flex-col gap-between-cards">
            <div className="border border-border rounded-2xl p-6 flex flex-col gap-3">
              <Text variant="caption" className="text-muted-foreground">No active item</Text>
              <PillNavPreview />
            </div>
            <div className="border border-border rounded-2xl p-6 flex flex-col gap-3">
              <Text variant="caption" className="text-muted-foreground">With active item</Text>
              <PillNavPreview active="Work" />
            </div>
            <div className="border border-border rounded-2xl p-6 flex flex-col gap-3">
              <Text variant="caption" className="text-muted-foreground">With CTA</Text>
              <PillNavPreview active="Work" cta />
            </div>
          </div>

          <CodeAccordion>{`<FloatingNav
  variant="pill"
  items={[
    { label: "Work",    href: "/work", active: true },
    { label: "About",   href: "/about" },
    { label: "Writing", href: "/writing" },
    { label: "Contact", href: "/contact" },
  ]}
  cta={{ label: "Say hi", href: "/contact" }}
/>`}</CodeAccordion>
        </div>
      </StyleGuideSection>

    </div>
  );
}
