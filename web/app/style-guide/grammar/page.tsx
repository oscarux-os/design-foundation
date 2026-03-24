import { StyleGuideSection } from "@/components/style-guide/section";
import { Text } from "@/components/typography/text";
import { Eyebrow } from "@/components/typography/eyebrow";
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

function DosDonts({ rows }: { rows: [string, string, string, string][] }) {
  return (
    <CardTable>
      <TableHeader>
        <TableRow>
          <TableHead>Term</TableHead>
          <TableHead>Rule</TableHead>
          <TableHead>✓ Do</TableHead>
          <TableHead>✗ Don&apos;t</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map(([term, rule, doEx, dontEx]) => (
          <TableRow key={term}>
            <TableCell className="font-medium">{term}</TableCell>
            <TableCell className="text-muted-foreground">{rule}</TableCell>
            <TableCell className="text-primary">{doEx}</TableCell>
            <TableCell className="text-destructive">{dontEx}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </CardTable>
  );
}

export default function GrammarPage() {
  return (
    <div className="flex flex-col gap-between-sections max-w-4xl">

      <div className="border border-border rounded-md p-4 bg-muted">
        <Text variant="small" className="text-muted-foreground">
          English is the default language. Swedish is a supported translation. The tone is professional but personal — like a confident designer talking to another designer.
        </Text>
      </div>

      {/* Voice & Tone */}
      <StyleGuideSection title="Voice & tone">
        <ul className="flex flex-col gap-between-text">
          <Rule><strong>Direct.</strong> No filler words, no fluff. Say what needs to be said.</Rule>
          <Rule><strong>Confident, not arrogant.</strong> State things clearly without over-explaining.</Rule>
          <Rule><strong>Human, not corporate.</strong> Write like a person, not a press release.</Rule>
          <Rule><strong>Show, don't tell.</strong> "Built with performance in mind" tells. A fast site shows.</Rule>
        </ul>
      </StyleGuideSection>

      {/* UI Copy */}
      <StyleGuideSection title="UI copy" description="Short, scannable, action-oriented.">
        <div className="flex flex-col gap-between-cards">
          {[
            {
              label: "Buttons & CTAs",
              rows: [
                ["View project",                                   "Click here"],
                ["Read more",                                      "Learn more (without context)"],
                ["Get in touch",                                   "Submit"],
              ],
            },
            {
              label: "Labels & navigation",
              rows: [
                ["Sentence case, no punctuation at end", "Title Case Labels"],
                ["1–3 words where possible",             "Trailing punctuation."],
              ],
            },
            {
              label: "Empty states",
              rows: [["No projects yet", "There are currently no projects to display"]],
            },
            {
              label: "Error messages",
              rows: [["Couldn't send message — try again or email me directly", "An error occurred. Please try again later."]],
            },
          ].map(({ label, rows }) => (
            <CardTable key={label} title={label}>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-primary">✓ Do</TableHead>
                  <TableHead className="text-destructive">✗ Don&apos;t</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map(([doEx, dontEx]) => (
                  <TableRow key={doEx}>
                    <TableCell>{doEx}</TableCell>
                    <TableCell className="text-muted-foreground">{dontEx}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </CardTable>
          ))}
        </div>
      </StyleGuideSection>

      {/* A-Z Reference */}
      <StyleGuideSection title="A–Z reference" description="Rules for specific words and situations.">
        <div className="flex flex-col gap-6">
          {[
            {
              letter: "A",
              rows: [
                ["Acronyms",     "Only use if commonly understood", "PDF",          "Portable document format"],
                ["Active voice", "Subject does the action",         "Oscar designed it", "It was designed by Oscar"],
                ["Ampersands",   "Write 'and' — not &",            "Design and code", "Design & code"],
              ] as [string,string,string,string][],
            },
            {
              letter: "B",
              rows: [
                ["Brackets",      "Only for abbreviations/data. Punctuation outside.",  "(like this)",      "(like this.)"],
                ["Bullet points", "One point per bullet. No full stops.",               "— A design system", "— a design system."],
              ] as [string,string,string,string][],
            },
            {
              letter: "C",
              rows: [
                ["Cases",           "Sentence case everywhere",                    "Featured work",   "Featured Work"],
                ["Change vs Edit",  "Change = switch. Edit = modify existing.",    "Edit profile",    "Change profile"],
                ["Choose vs Select","Choose = any option. Select = one option.",   "Choose a layout", "Select a layout"],
                ["Contractions",    "Use them — they feel human.",                 "You're, can't",   "You are, cannot"],
              ] as [string,string,string,string][],
            },
            {
              letter: "D",
              rows: [
                ["Dashes",    "Em dash (—) with spaces. En dash (–) for ranges.",  "Great work — like this", "Great work - like this"],
                ["Dates",     "Day first, no ordinals.",                           "1 March 2024",           "1st March 2024"],
                ["Dropdown",  "One word, no hyphen.",                              "Dropdown",               "Drop-down"],
              ] as [string,string,string,string][],
            },
            {
              letter: "E",
              rows: [
                ["E.g.",            "Write 'for example' or 'like'.",       "For example",      "E.g."],
                ["Email",           "No hyphen.",                           "Email",            "E-mail"],
                ["Emoji",           "Don't use them.",                      "Words only",       "🚀"],
                ["Etc.",            "Don't use it. Give examples instead.", "—",                "Etc."],
                ["Exclamation marks","Rarely needed. One maximum.",         "Hey!",             "Hey there!!!"],
              ] as [string,string,string,string][],
            },
            {
              letter: "L",
              rows: [
                ["Login", "Login (adjective). Log in (verb).", "Login page · Log in to continue", "Log in page · Login to continue"],
              ] as [string,string,string,string][],
            },
            {
              letter: "N",
              rows: [
                ["Numbers", "Use numerals — easier to scan.", "There are 9 projects.", "There are nine projects."],
              ] as [string,string,string,string][],
            },
            {
              letter: "P",
              rows: [
                ["Percentages", "Use % not 'percent'.",                            "75%",         "75 percent"],
                ["Perspective", "Second person — 'you', 'your'. Don't mix first.", "Your profile","My profile"],
              ] as [string,string,string,string][],
            },
            {
              letter: "S",
              rows: [
                ["Select", "Only one option can be true, or telling user to tap.", "Select a file", "Click a file"],
                ["Slashes","No spaces either side.",                               "and/or",        "and / or"],
              ] as [string,string,string,string][],
            },
            {
              letter: "T",
              rows: [
                ["Time", "Numerals with am/pm. Space between. En dash for ranges.", "8:00 am · 7:00–11:30 pm", "8am · 7am-11:30pm"],
              ] as [string,string,string,string][],
            },
            {
              letter: "V",
              rows: [
                ["View", "Use 'View' not 'See' when directing users.", "View project", "See project"],
              ] as [string,string,string,string][],
            },
            {
              letter: "W",
              rows: [
                ["Wifi", "Lowercase, no hyphen.", "wifi", "Wi-Fi, WIFI"],
              ] as [string,string,string,string][],
            },
          ].map(({ letter, rows }) => (
            <div key={letter}>
              <Eyebrow className="mb-2">{letter}</Eyebrow>
              <DosDonts rows={rows} />
            </div>
          ))}
        </div>
      </StyleGuideSection>

      {/* Swedish */}
      <StyleGuideSection title="Swedish translation" description="When translating to Swedish:">
        <ul className="flex flex-col gap-between-text">
          <Rule>Match the same direct, confident tone — avoid formal Swedish ("man bör") in favour of direct address ("du kan").</Rule>
          <Rule>Use sentence case for headlines, same as English.</Rule>
          <Rule>Keep UI copy short — Swedish words are often longer, so tighten the copy.</Rule>
          <Rule>"du" not "Du" (lowercase unless at sentence start).</Rule>
          <Rule>Dates: "1 mars 2024" (month lowercase in Swedish, no ordinals).</Rule>
        </ul>
      </StyleGuideSection>

      {/* Words to avoid */}
      <StyleGuideSection title="Words to avoid">
        <CardTable>
          <TableHeader>
            <TableRow>
              <TableHead>Avoid</TableHead>
              <TableHead>Use instead</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["leverage",    "use"],
              ["utilize",     "use"],
              ["seamless",    "(just describe what it does)"],
              ["intuitive",   "(show it, don't claim it)"],
              ["world-class", "(earned, never stated)"],
              ["passionate",  "(same)"],
              ["click here",  "descriptive CTA"],
              ["etc.",        "give examples"],
              ["e.g.",        "for example, like"],
            ].map(([avoid, use]) => (
              <TableRow key={avoid}>
                <TableCell className="text-destructive">{avoid}</TableCell>
                <TableCell className="text-muted-foreground">{use}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </CardTable>
      </StyleGuideSection>

    </div>
  );
}
