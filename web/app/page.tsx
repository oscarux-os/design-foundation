"use client";

import { useState } from "react";
import { HeroMedia } from "@/components/ui/hero-media";
import { FloatingNav } from "@/components/ui/floating-nav";
import { ProjectGrid, ProjectCard } from "@/components/ui/project-card";
import { WorkCard } from "@/components/ui/work-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Heading } from "@/components/typography/heading";

const navItems = [
  { label: "Work",    href: "#work" },
  { label: "About",   href: "#about" },
  { label: "Writing", href: "#writing" },
];

const projects = [
  {
    colSpan: 6,  rowSpan: 4,  colStart: 1,  rowStart: 1,
    title: "Booking at scale",
    description: "Booking platform across several markets.",
    tags: ["UX", "UI", "Systems"],
    video: "/cary-group.mov",
    variant: "square" as const,
  },
  {
    colSpan: 6,  rowSpan: 6,  colStart: 7,  rowStart: 1,
    title: "Automotive platforms",
    description: "Admin tools for car dealers and the consumer marketplace — both at Wayke.",
    tags: ["UX", "UI", "Systems"],
    video: "/wayke.webm",
    variant: "portrait" as const,
  },
  {
    colSpan: 6,  rowSpan: 6,  colStart: 1,  rowStart: 5,
    title: "Lifestyle and sport",
    description: "Focused interventions across a range of e-commerce brands.",
    tags: ["UX"],
    video: "/test-video.mp4",
    variant: "square" as const,
  },
  {
    colSpan: 6,  rowSpan: 4,  colStart: 7,  rowStart: 7,
    title: "Furniture e-commerce",
    description: "Complex modular configurators and purchase flows — reaching millions of users.",
    tags: ["A11Y", "Strategy", "Concept", "UI", "UX", "Testing"],
    video: "/modular-ecommerce.mov",
    variant: "portrait" as const,
  },
];

const workCards = [
  { eyebrow: "AI & Design",   title: "Human intent, machine speed.",      description: "Designer and developer in the same place, looking at the same thing. No handoff, no translation loss — just two people building together with a shared understanding of what they're making." },
  { eyebrow: "UX Design",      title: "Turning complexity into clarity.",  description: "Research, flows, prototypes — finding the path of least resistance for the people using the product." },
  { eyebrow: "UI Design",      title: "Interfaces that feel inevitable.",  description: "Visual design that earns its decisions. Every detail is there for a reason." },
  { eyebrow: "Design Systems", title: "Scale without losing soul.",        description: "Component libraries, token systems and documentation that lets teams move fast without breaking things." },
  { eyebrow: "Strategy",       title: "Direction before pixels.",          description: "Helping teams understand what to build and why, before the first frame is drawn." },
];

export default function Home() {
  const [active, setActive] = useState("Work");

  return (
    <>
      {/* Hero */}
      <HeroMedia
        variant="editorial"
        title="Ideator of Exalted Design and Projects"
        accentWord="Design"
        description="Designing and building products, systems and interfaces — based in Gothenburg."
        primaryCta={{ label: "Meet me", href: "#work" }}
        secondaryCta={{ label: "Say hi", href: "#contact" }}
      />

      {/* Project grid */}
      <section
        id="work"
        className="px-5 sm:px-8 md:px-10 lg:px-20 xl:px-24 pt-40 pb-32"
      >
        <div className="grid grid-cols-6 md:grid-cols-12 gap-3 md:gap-4 lg:gap-7 xl:gap-8 mb-between-sections items-start">
          <div className="col-span-6">
            <Heading size="display-md" uppercase={false}>Things I've designed</Heading>
          </div>
          <div className="col-span-6 flex items-end h-full">
            <Heading size="h4" className="md:text-3xl text-muted-foreground">Recognisable brands and growing companies — a selection of work across UX, systems and interfaces.</Heading>
          </div>
        </div>

        <ProjectGrid>
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} href="#" />
          ))}
        </ProjectGrid>
      </section>

      {/* Work areas */}
      <section className="pb-32">
        <Heading size="display-md" uppercase={false} className="mb-8 px-5 sm:px-8 md:px-10 lg:px-20 xl:px-24">What I bring.</Heading>

        {/* Desktop: 4 cards filling the full width */}
        <div className="hidden 2xl:grid grid-cols-5 2xl:gap-8 px-5 sm:px-8 md:px-10 lg:px-20 xl:px-24">
          {workCards.map((card) => (
            <WorkCard key={card.eyebrow} {...card} />
          ))}
        </div>

        {/* Mobile / tight: horizontal scroll area */}
        <div className="2xl:hidden px-5 sm:px-8 md:px-10 lg:px-20">
          <ScrollArea>
            <div className="flex gap-3 md:gap-4 pb-4">
              {workCards.map((card) => (
                <div key={card.eyebrow} className="shrink-0 w-72 md:w-80">
                  <WorkCard {...card} />
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>

      <ThemeToggle />

      {/* Floating nav */}
      <FloatingNav
        variant="pill"
        position="top"
        items={navItems.map((item) => ({
          ...item,
          active: item.label === active,
          onClick: () => setActive(item.label),
        }))}
        cta={{ label: "Say hi", href: "#contact" }}
      />
    </>
  );
}
