import { StyleGuideSection } from "@/components/style-guide/section";
import { CodeAccordion } from "@/components/style-guide/code-accordion";
import { ProjectCard, ProjectGrid } from "@/components/ui/project-card";

// ─── Card section ─────────────────────────────────────────────────────────────

const cardDemo = {
  title: "Redesign",
  description: "Rebuilt the checkout flow from the ground up.",
  tags: ["UX", "UI", "Concept"],
  image: "/placeholder.jpg",
};

// ─── Grid section ─────────────────────────────────────────────────────────────

const gridCards = [
  { colSpan: 6,  rowSpan: 4,  rowStart: 1,  title: "Redesign",         description: "Rebuilt the checkout flow from the ground up.",              tags: ["UX", "UI", "Concept"],         image: "/placeholder.jpg" },
  { colSpan: 6,  rowSpan: 6,  rowStart: 1,  title: "Accessibility",    description: "End-to-end A11Y review across the product.",                 tags: ["A11Y", "Research", "Test"],     image: "/placeholder.jpg" },
  { colSpan: 6,  rowSpan: 6,  rowStart: 5,  title: "Design system",    description: "Foundation tokens, components and documentation.",           tags: ["UI", "Concept", "Test"],        image: "/placeholder.jpg" },
  { colSpan: 6,  rowSpan: 4,  rowStart: 7,  title: "User research",    description: "Qualitative sessions with 12 participants.",                 tags: ["UX", "Research"],               image: "/placeholder.jpg" },
  { colSpan: 12, rowSpan: 8,  rowStart: 11, title: "Brand identity",   description: "Visual identity and motion language for a fintech startup.", tags: ["Concept", "UI", "Motion"],      image: "/placeholder.jpg" },
  { colSpan: 12, rowSpan: 12, rowStart: 19, title: "Mobile app",       description: "Zero-to-one product design for iOS and Android.",            tags: ["UX", "UI", "A11Y", "Test"],     image: "/placeholder.jpg" },
];

export default function ProjectCardBlockPage() {
  return (
    <div className="flex flex-col gap-between-sections max-w-4xl">

      {/* ── Card ── */}
      <StyleGuideSection
        title="Project card"
        description="Hover to see the full interaction — overlay, tags, title, and arrow sweep."
      >
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-12 gap-5 items-start">
            <div className="col-span-6" style={{ aspectRatio: "2 / 1" }}>
              <ProjectCard colSpan={6} rowSpan={4} {...cardDemo} className="h-full" />
            </div>
            <div className="col-span-6" style={{ aspectRatio: "4 / 3" }}>
              <ProjectCard colSpan={6} rowSpan={6} {...cardDemo} className="h-full" />
            </div>
          </div>

          <CodeAccordion>{`import { ProjectCard } from "@/components/ui/project-card"

<ProjectCard
  colSpan={6}
  rowSpan={4}
  title="Redesign"
  description="Rebuilt the checkout flow from the ground up."
  tags={["UX", "UI", "Concept"]}
  image="/projects/redesign.jpg"
  href="/work/redesign"
/>`}</CodeAccordion>
        </div>
      </StyleGuideSection>

      {/* ── Mobile variants ── */}
      <StyleGuideSection
        title="Mobile variants"
        description="Controls the aspect ratio on mobile. Desktop grid always takes over. default uses Figma-computed proportions."
      >
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-12 gap-5 items-start">
            <div className="col-span-4 flex flex-col gap-2">
              <p className="text-xs text-muted-foreground">default</p>
              <div style={{ aspectRatio: "2 / 1" }}>
                <ProjectCard colSpan={6} rowSpan={4} {...cardDemo} className="h-full" />
              </div>
            </div>
            <div className="col-span-4 flex flex-col gap-2">
              <p className="text-xs text-muted-foreground">square (1:1)</p>
              <div style={{ aspectRatio: "1 / 1" }}>
                <ProjectCard colSpan={6} rowSpan={4} variant="square" {...cardDemo} className="h-full" />
              </div>
            </div>
            <div className="col-span-4 flex flex-col gap-2">
              <p className="text-xs text-muted-foreground">portrait (4:5)</p>
              <div style={{ aspectRatio: "4 / 5" }}>
                <ProjectCard colSpan={6} rowSpan={4} variant="portrait" {...cardDemo} className="h-full" />
              </div>
            </div>
          </div>

          <CodeAccordion>{`// default — Figma-computed ratio on mobile
<ProjectCard colSpan={6} rowSpan={4} ... />

// square — 1:1 on mobile
<ProjectCard variant="square" colSpan={6} rowSpan={4} ... />

// portrait — 4:5 on mobile
<ProjectCard variant="portrait" colSpan={6} rowSpan={6} ... />`}</CodeAccordion>
        </div>
      </StyleGuideSection>

      {/* ── Grid ── */}
      <StyleGuideSection
        title="Project grid"
        description="Staggered 12-col grid. Row height = column width so aspect ratios stay clean at any viewport. Mobile: cards stack full width."
      >
        <div className="flex flex-col gap-6">
          <ProjectGrid>
            {gridCards.map((card, i) => (
              <ProjectCard key={i} {...card} />
            ))}
          </ProjectGrid>

          <CodeAccordion>{`import { ProjectGrid, ProjectCard } from "@/components/ui/project-card"

<ProjectGrid>
  {/* Left col: landscape then square */}
  <ProjectCard colSpan={6} rowSpan={4} rowStart={1}  ... />
  <ProjectCard colSpan={6} rowSpan={6} rowStart={5}  ... />

  {/* Right col: square then landscape — staggered */}
  <ProjectCard colSpan={6} rowSpan={6} rowStart={1}  ... />
  <ProjectCard colSpan={6} rowSpan={4} rowStart={7}  ... />

  {/* Full width */}
  <ProjectCard colSpan={12} rowSpan={8}  rowStart={11} ... />
  <ProjectCard colSpan={12} rowSpan={12} rowStart={19} ... />
</ProjectGrid>`}</CodeAccordion>
        </div>
      </StyleGuideSection>

    </div>
  );
}
