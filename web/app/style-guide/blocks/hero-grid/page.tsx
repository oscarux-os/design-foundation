import { StyleGuideSection } from "@/components/style-guide/section";
import { CodeAccordion } from "@/components/style-guide/code-accordion";
import { HeroGrid } from "@/components/ui/hero-grid";

export default function HeroGridBlockPage() {
  return (
    <div className="flex flex-col gap-between-sections max-w-4xl">
      <StyleGuideSection
        title="Hero grid"
        description="Card-style hero with a 2-column layout. Left: content. Right: breathing dot grid that pulses radially from the centre."
      >
        <div className="flex flex-col gap-6">
          <HeroGrid
            title="Ideator of Exalted Design and Projects"
            accentWord="Exalted"
            description="UX designer and developer based in Stockholm."
            primaryCta={{ label: "View work", href: "#" }}
            secondaryCta={{ label: "Say hi", href: "#" }}
          />

          <CodeAccordion>{`import { HeroGrid } from "@/components/ui/hero-grid"

<HeroGrid
  title="Ideator of Exalted Design and Projects"
  accentWord="Exalted"
  description="UX designer and developer based in Stockholm."
  primaryCta={{ label: "View work", href: "/work" }}
  secondaryCta={{ label: "Say hi", href: "/contact" }}
/>`}</CodeAccordion>
        </div>
      </StyleGuideSection>
    </div>
  );
}
