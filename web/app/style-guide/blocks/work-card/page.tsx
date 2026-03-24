import { StyleGuideSection } from "@/components/style-guide/section";
import { WorkCard } from "@/components/ui/work-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const cards = [
  { eyebrow: "UX Design",       title: "Turning complexity into clarity.",  description: "Research, flows, prototypes — finding the path of least resistance for the people using the product." },
  { eyebrow: "UI Design",       title: "Interfaces that feel inevitable.",  description: "Visual design that earns its decisions. Every detail is there for a reason." },
  { eyebrow: "Design Systems",  title: "Scale without losing soul.",        description: "Component libraries, token systems and documentation that lets teams move fast without breaking things." },
  { eyebrow: "Strategy",        title: "Direction before pixels.",          description: "Helping teams understand what to build and why, before the first frame is drawn." },
];

export default function WorkCardPage() {
  return (
    <div className="flex flex-col gap-between-sections">

      {/* Card */}
      <StyleGuideSection
        title="Card"
        description="The work card in isolation."
      >
        <div className="flex gap-3">
          <WorkCard
            eyebrow={cards[0].eyebrow}
            title={cards[0].title}
            description={cards[0].description}
            className="w-72"
          />
        </div>
      </StyleGuideSection>

      {/* Carousel */}
      <StyleGuideSection
        title="Carousel"
        description="Cards in a horizontal scrolling carousel."
      >
        <Carousel opts={{ align: "start", dragFree: true }}>
          <CarouselContent className="-ml-3 md:-ml-4">
            {cards.map((card) => (
              <CarouselItem key={card.eyebrow} className="pl-3 md:pl-4 basis-72">
                <WorkCard eyebrow={card.eyebrow} title={card.title} description={card.description} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </StyleGuideSection>

    </div>
  );
}
