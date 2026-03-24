import { StyleGuideSection } from "@/components/style-guide/section";
import { CodeAccordion } from "@/components/style-guide/code-accordion";
import { Hero } from "@/components/ui/hero";
import { HeroMedia } from "@/components/ui/hero-media";

export default function HeroBlockPage() {
  return (
    <div className="flex flex-col gap-between-sections max-w-4xl">
      <StyleGuideSection
        title="HeroMedia — editorial"
        description="Full-viewport editorial hero. Large display title in the left columns, description and CTA anchored to the bottom-right. Used on the homepage."
      >
        <div className="flex flex-col gap-6">
          <HeroMedia
            variant="editorial"
            title="Ideator of Exalted Design and Projects"
            accentWord="Design"
            description="Designing and building products, systems and interfaces — based in Gothenburg."
            primaryCta={{ label: "Meet me", href: "#" }}
            secondaryCta={{ label: "Say hi", href: "#" }}
          />

          <CodeAccordion>{`import { HeroMedia } from "@/components/ui/hero-media"

<HeroMedia
  variant="editorial"
  title="Ideator of Exalted Design and Projects"
  accentWord="Design"
  description="Designing and building products, systems and interfaces — based in Gothenburg."
  primaryCta={{ label: "Meet me", href: "/work" }}
  secondaryCta={{ label: "Say hi", href: "/contact" }}
/>`}</CodeAccordion>
        </div>
      </StyleGuideSection>

      <StyleGuideSection
        title="Hero"
        description="Full-width section with a 12-column grid overlay. Content sits in the right half, anchored to the bottom. Horizontal rule extends from CTAs to the right edge."
      >
        <div className="flex flex-col gap-6">
          <Hero
            eyebrow="Portfolio"
            title="Ideator of Exalted Design and Projects"
            accentWord="Exalted"
            description="Hero body text that fades in after the heading finishes typing."
            primaryCta={{ label: "Meet me", href: "#" }}
            secondaryCta={{ label: "Say hi", href: "#" }}
          />

          <CodeAccordion>{`import { Hero } from "@/components/ui/hero"

<Hero
  title="Oscar Eriksson"
  description="UX designer and developer based in Stockholm."
  primaryCta={{ label: "Meet me", href: "/work" }}
  secondaryCta={{ label: "Say hi", href: "/contact" }}
/>`}</CodeAccordion>
        </div>
      </StyleGuideSection>
    </div>
  );
}
