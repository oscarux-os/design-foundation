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

export default function TransitionsPage() {
  return (
    <div className="flex flex-col gap-between-sections max-w-4xl">

      <div className="border border-border rounded-md p-4 bg-muted">
        <Text variant="small" className="text-muted-foreground">
          Transitions occur when users move between screens or trigger overlays. They create a sense of continuation and help users understand where they are in a flow. Always unobtrusive and natural — never decorative.
        </Text>
      </div>

      {/* Philosophy */}
      <StyleGuideSection title="Philosophy">
        <ul className="flex flex-col gap-between-text">
          {[
            ["Continuity over flash.", "Transitions should make a change feel connected, not abrupt."],
            ["Match the weight of the action.", "A tooltip appearing needs less transition than a modal opening."],
            ["Never block the user.", "A transition should never make the interface feel slower to use."],
            ["Be intentional.", "Don't use different transition patterns for similar needs — consistency builds trust."],
          ].map(([bold, rest]) => (
            <li key={bold} className="flex gap-2 items-start">
              <span className="text-muted-foreground mt-1 shrink-0">—</span>
              <Text variant="small"><strong>{bold}</strong> {rest}</Text>
            </li>
          ))}
        </ul>
      </StyleGuideSection>

      {/* Page transitions */}
      <StyleGuideSection
        title="Page transitions"
        description="Two patterns for navigating between routes. Choose based on the relationship between the pages."
      >
        <div className="grid grid-cols-6 md:grid-cols-12 gap-5">
          <div className="col-span-6 border border-border rounded-lg p-6 flex flex-col gap-3">
            <Heading size="h3">Upwards</Heading>
            <Eyebrow className="text-primary">Start of a new flow</Eyebrow>
            <Text variant="small" className="text-muted-foreground">
              Indicates the start of a new flow or action. New screen slides in from the bottom, fully covering the previous screen. Always include a dismiss/close button in the top left corner.
            </Text>
            <div className="mt-2 border border-border rounded-md bg-muted p-3">
              <Text variant="caption" className="text-muted-foreground">
                Use for: opening a new section, starting a new task, first step in a multi-step flow
              </Text>
            </div>
          </div>
          <div className="col-span-6 border border-border rounded-lg p-6 flex flex-col gap-3">
            <Heading size="h3">Sideways</Heading>
            <Eyebrow className="text-primary">Continuation of a flow</Eyebrow>
            <Text variant="small" className="text-muted-foreground">
              Indicates the continuation of a flow. Content slides in from the right (forward) or left (backward). On web: content moves with a quick fade as it transitions.
            </Text>
            <div className="mt-2 border border-border rounded-md bg-muted p-3">
              <Text variant="caption" className="text-muted-foreground">
                Use for: step 2 → step 3 in a flow, sub-pages within the same section, back navigation
              </Text>
            </div>
          </div>
        </div>
      </StyleGuideSection>

      {/* Overlay transitions */}
      <StyleGuideSection
        title="Overlay transitions"
        description="Two patterns for supplementary content that appears above the current screen."
      >
        <div className="grid grid-cols-6 md:grid-cols-12 gap-5">
          <div className="col-span-6 border border-border rounded-lg p-6 flex flex-col gap-3">
            <Heading size="h3">Modal / Dialog</Heading>
            <Text variant="small" className="text-muted-foreground">
              Comes in from the bottom on mobile, fades in centered on desktop. Disappears with a fade when dismissed. Always dismissible. Never use consecutive modals to replace page-to-page navigation.
            </Text>
            <div className="mt-2 border border-border rounded-md bg-muted p-3">
              <Text variant="caption" className="text-muted-foreground">
                Use for: confirmations, filters, selectors, short forms
              </Text>
            </div>
          </div>
          <div className="col-span-6 border border-border rounded-lg p-6 flex flex-col gap-3">
            <Heading size="h3">Bottom Sheet</Heading>
            <Text variant="small" className="text-muted-foreground">
              Slides in from the bottom. Disappears with a downward slide when dismissed. Sits at the bottom of the screen.
            </Text>
            <div className="mt-2 border border-border rounded-md bg-muted p-3">
              <Text variant="caption" className="text-muted-foreground">
                Use for: option pickers, action menus, supplementary info during a flow
              </Text>
            </div>
          </div>
        </div>
      </StyleGuideSection>

      {/* Micro-transitions */}
      <StyleGuideSection
        title="Micro-transitions"
        description="Small state changes on interactive elements."
      >
        <CardTable>
          <TableHeader>
            <TableRow>
              <TableHead>Element</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Duration</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Button hover",      "background-color, opacity", "—"],
              ["Link hover",        "color, opacity",            "—"],
              ["Input focus",       "border-color, ring",        "—"],
              ["Icon state change", "color, transform",          "—"],
            ].map(([el, prop, dur]) => (
              <TableRow key={el}>
                <TableCell>{el}</TableCell>
                <TableCell className="text-muted-foreground font-mono">{prop}</TableCell>
                <TableCell className="text-muted-foreground">{dur}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </CardTable>
      </StyleGuideSection>

      {/* Radix UI pattern */}
      <StyleGuideSection
        title="Radix UI pattern"
        description="Radix components expose data-state on their elements. Use Tailwind's data-* variants to drive transitions without JavaScript."
      >
        <CodeAccordion>{`// Modal/Dialog fading in from bottom
<DialogContent className="
  data-[state=open]:animate-in
  data-[state=closed]:animate-out
  data-[state=closed]:fade-out-0
  data-[state=open]:fade-in-0
  data-[state=open]:slide-in-from-bottom-4
  data-[state=closed]:slide-out-to-bottom-4
">

// Sheet sliding in from bottom
<SheetContent className="
  data-[state=open]:animate-in
  data-[state=closed]:animate-out
  data-[state=closed]:slide-out-to-bottom
  data-[state=open]:slide-in-from-bottom
">`}</CodeAccordion>
        <div className="mt-4 border border-border rounded-md bg-muted p-3">
          <Text variant="small" className="text-muted-foreground">
            shadcn components already include these — don't override unless intentional.
          </Text>
        </div>
      </StyleGuideSection>

      {/* Reduced motion */}
      <StyleGuideSection
        title="Reduced motion"
        description="Always respect the user's prefers-reduced-motion setting."
      >
        <CodeAccordion>{`@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}`}</CodeAccordion>
      </StyleGuideSection>

      {/* Rules */}
      <StyleGuideSection title="Rules">
        <ul className="flex flex-col gap-between-text">
          <Rule>Upwards = new flow. Sideways = continuation. Never mix these up — it disorients users.</Rule>
          <Rule>Never use consecutive modals to replace page-to-page navigation.</Rule>
          <Rule>Never remove transitions from shadcn components without a clear reason.</Rule>
          <Rule>Don't animate layout properties (<code className="font-mono text-xs">width</code>, <code className="font-mono text-xs">height</code>) — use <code className="font-mono text-xs">transform</code> instead.</Rule>
          <Rule>Respect <code className="font-mono text-xs">prefers-reduced-motion</code> — transitions should be suppressed or minimised.</Rule>
        </ul>
      </StyleGuideSection>

    </div>
  );
}
