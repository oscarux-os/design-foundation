import { StyleGuideSection } from "@/components/style-guide/section";
import { CodeAccordion } from "@/components/style-guide/code-accordion";
import { HeroMedia } from "@/components/ui/hero-media";
import { ProjectGrid } from "@/components/ui/project-card";

const sharedProps = {
  available: true,
  title: "Ideator of Exalted Design and Projects",
  description: "Designing and building products, systems and interfaces — based in Gothenburg.",
  primaryCta: { label: "Meet me", href: "#" },
  secondaryCta: { label: "Say hi", href: "#" },
  image: "/placeholder.jpg",
};

export default function HeroMediaBlockPage() {
  return (
    <div className="flex flex-col gap-between-sections max-w-4xl">

      {/* Fullscreen */}
      <StyleGuideSection
        title="Hero media — fullscreen"
        description="Fills the viewport height. Used as a standalone hero at the top of a page."
      >
        <div className="flex flex-col gap-6">
          <HeroMedia {...sharedProps} />

          <CodeAccordion>{`<HeroMedia
  available
  title="Ideator of Exalted Design and Projects"
  description="Designing and building products, systems and interfaces — based in Gothenburg."
  primaryCta={{ label: "Meet me", href: "/about" }}
  secondaryCta={{ label: "Say hi", href: "/contact" }}
  video="/hero.mp4"
/>`}</CodeAccordion>
        </div>
      </StyleGuideSection>

      {/* Grid */}
      <StyleGuideSection
        title="Hero media — grid"
        description="Fits into the project grid using the same colSpan/rowSpan system as ProjectCard. display-sm title, body text."
      >
        <div className="flex flex-col gap-6">
          <ProjectGrid>
            <HeroMedia
              {...sharedProps}
              variant="grid"
              colSpan={12}
              rowSpan={12}
              rowStart={1}
            />
          </ProjectGrid>

          <CodeAccordion>{`import { ProjectGrid } from "@/components/ui/project-card"
import { HeroMedia } from "@/components/ui/hero-media"

<ProjectGrid>
  <HeroMedia
    variant="grid"
    colSpan={12}
    rowSpan={12}
    rowStart={1}
    available
    title="Ideator of Exalted Design and Projects"
    description="..."
    primaryCta={{ label: "Meet me", href: "/about" }}
    secondaryCta={{ label: "Say hi", href: "/contact" }}
    video="/hero.mp4"
  />
</ProjectGrid>`}</CodeAccordion>
        </div>
      </StyleGuideSection>

    </div>
  );
}
