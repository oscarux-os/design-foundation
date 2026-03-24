import { StyleGuideSection } from "@/components/style-guide/section";
import { Heading } from "@/components/typography/heading";
import { Text } from "@/components/typography/text";
import { Eyebrow } from "@/components/typography/eyebrow";
import { CodeAccordion } from "@/components/style-guide/code-accordion";
import { CardTable } from "@/components/ui/card-table";
import {
  TableHeader, TableBody, TableRow, TableHead, TableCell,
} from "@/components/ui/table";

function Rule({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 items-start">
      <span className="text-muted-foreground mt-1 shrink-0">—</span>
      <Text variant="small">{children}</Text>
    </li>
  );
}

const principles = [
  {
    name: "Snappy",
    weight: "~60%",
    when: "Micro-interactions, hover states, button feedback",
    description: "Fast, satisfying, and direct. Motion should communicate immediacy — like flipping a switch or dealing a card. It breaks away from slow, sluggish interactions that make interfaces feel heavy. Not hyperactive or rushed. Snappy is confident, not frantic.",
    bullets: [
      "Short durations",
      "Strong, clear easing curves",
      "Match cuts — align animated properties between states to create smooth but quick transitions",
    ],
  },
  {
    name: "Fluid",
    weight: "~30%",
    when: "Page transitions, reveals, layout shifts",
    description: "Organic and flowing. Elements don't just appear — they move in a way that feels physically connected to where they came from and where they're going. Not directionless or wobbly. Fluid has intention and structure behind it.",
    bullets: [
      "Layered transitions between states",
      "Morphing elements from one form to the next",
      "Elements entering and exiting with a natural arc",
    ],
  },
  {
    name: "Intuitive",
    weight: "~10%",
    when: "Scroll-driven motion, gesture responses",
    description: "Natural pace with a sense of physical weight. Motion responds to what the user did — scrolling, tapping, dragging — and mirrors the gesture back to them. Not polished to the point of feeling mechanical. Intuitive is human.",
    bullets: [
      "Feedback that matches the scale of the action",
      "Movement that feels like a direct response to input",
      "No surprises — motion does what you expect it to",
    ],
  },
];

const timingTokens = [
  { token: "duration-fast", value: "—", usage: "Hover, focus, snappy interactions" },
  { token: "duration-base", value: "—", usage: "Standard enter/exit" },
  { token: "duration-slow", value: "—", usage: "Page transitions, large reveals" },
  { token: "ease-default",  value: "—", usage: "Standard easing" },
  { token: "ease-spring",   value: "—", usage: "Interactive, gesture-driven elements" },
];

export default function MotionPage() {
  return (
    <div className="flex flex-col gap-between-sections max-w-4xl">

      <div className="border border-border rounded-md p-4 bg-muted">
        <Text variant="small" className="text-muted-foreground">
          Motion should feel like a natural extension of the interface — not something you notice, but something you feel. Every movement has a reason.
        </Text>
      </div>

      {/* Principles */}
      <StyleGuideSection
        title="Principles"
        description="Three principles guide every motion decision. When in doubt, come back to these."
      >
        <div className="flex flex-col gap-between-cards">
          {principles.map(({ name, weight, when, description, bullets }) => (
            <div key={name} className="border border-border rounded-lg p-6 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <Heading size="h3">{name}</Heading>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <Eyebrow>{weight}</Eyebrow>
                  <Text variant="caption" className="text-muted-foreground text-right">{when}</Text>
                </div>
              </div>
              <Text variant="small" className="text-muted-foreground">{description}</Text>
              <ul className="flex flex-col gap-1">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-2 items-start">
                    <span className="text-muted-foreground mt-1 shrink-0 text-xs">–</span>
                    <Text variant="small" className="text-muted-foreground">{b}</Text>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </StyleGuideSection>

      {/* Tools */}
      <StyleGuideSection
        title="Tools"
        description="Decided when the need arises. Candidates:"
      >
        <div className="flex flex-col gap-between-cards">
          {[
            { tool: "Tailwind transitions", usage: "Simple hover/focus states" },
            { tool: "Framer Motion",        usage: "Complex animations, page transitions, scroll-driven motion" },
            { tool: "CSS animations",       usage: "Looped or performance-critical animations" },
          ].map(({ tool, usage }) => (
            <div key={tool} className="flex gap-4 items-start border border-border rounded-md p-4">
              <Text variant="small" className="font-medium w-40 shrink-0">{tool}</Text>
              <Text variant="small" className="text-muted-foreground">{usage}</Text>
            </div>
          ))}
        </div>
      </StyleGuideSection>

      {/* Timing & Easing */}
      <StyleGuideSection
        title="Timing & easing"
        description="Values defined here once established. Placeholders until motion system is built."
      >
        <CardTable>
          <TableHeader>
            <TableRow>
              <TableHead>Token</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Usage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {timingTokens.map(({ token, value, usage }) => (
              <TableRow key={token}>
                <TableCell className="font-mono">{token}</TableCell>
                <TableCell className="text-muted-foreground">{value}</TableCell>
                <TableCell className="text-muted-foreground">{usage}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </CardTable>
      </StyleGuideSection>

      {/* Rules */}
      <StyleGuideSection title="Rules">
        <div className="flex flex-col gap-component-default">
          <ul className="flex flex-col gap-between-text">
            <Rule>Never animate layout properties (<code className="font-mono text-xs">width</code>, <code className="font-mono text-xs">height</code>, <code className="font-mono text-xs">top</code>, <code className="font-mono text-xs">left</code>) — use <code className="font-mono text-xs">transform</code> and <code className="font-mono text-xs">opacity</code>.</Rule>
            <Rule>Keep animations under 400ms as a rule — longer feels sluggish.</Rule>
            <Rule>Motion should feel snappy first. Add fluidity only where it earns its place.</Rule>
            <Rule>All animations wrapped in <code className="font-mono text-xs">prefers-reduced-motion</code> or handled via Framer Motion's <code className="font-mono text-xs">useReducedMotion</code>.</Rule>
          </ul>

          <CodeAccordion>{`// Respect reduced motion with Framer Motion
import { useReducedMotion } from "framer-motion"

const shouldReduce = useReducedMotion()
const variants = shouldReduce
  ? {}
  : { initial: { opacity: 0 }, animate: { opacity: 1 } }`}</CodeAccordion>
        </div>
      </StyleGuideSection>

    </div>
  );
}
