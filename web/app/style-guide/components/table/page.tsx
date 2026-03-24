import { StyleGuideSection } from "@/components/style-guide/section";
import { CodeAccordion } from "@/components/style-guide/code-accordion";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { CardTable } from "@/components/ui/card-table";

const rows: [string, string, string, string][] = [
  ["Tabs",        "shadcn / Radix", "Built",       "Used in sidebar and style guide"],
  ["Table",       "shadcn",         "Built",       "This table"],
  ["Sidebar",     "shadcn",         "Built",       "Style guide navigation"],
  ["Accordion",   "shadcn",         "Built",       "Code examples, FAQ pattern"],
  ["Card",        "shadcn",         "Built",       "Content surfaces"],
  ["Scroll Area", "shadcn",         "Built",       "Sidebar, main content, tables"],
  ["Button",      "shadcn",         "Coming soon", "—"],
  ["Badge",       "shadcn",         "Coming soon", "—"],
];

function StatusBadge({ status }: { status: string }) {
  return (
    <span className={`text-xs font-mono px-1.5 py-0.5 rounded-sm ${
      status === "Built"
        ? "bg-primary/10 text-primary"
        : "bg-muted text-muted-foreground"
    }`}>
      {status}
    </span>
  );
}

export default function ComponentTablePage() {
  return (
    <div className="flex flex-col gap-between-sections">

      {/* Default table */}
      <StyleGuideSection
        title="Table"
        description="shadcn Table — for structured data. Wrapped in ScrollArea for horizontal overflow."
      >
        <div className="flex flex-col gap-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Component</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map(([comp, source, status, notes]) => (
                <TableRow key={comp}>
                  <TableCell className="font-medium">{comp}</TableCell>
                  <TableCell className="text-muted-foreground">{source}</TableCell>
                  <TableCell><StatusBadge status={status} /></TableCell>
                  <TableCell className="text-muted-foreground">{notes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <CodeAccordion>{`import {
  Table, TableHeader, TableBody,
  TableRow, TableHead, TableCell,
} from "@/components/ui/table"

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Value</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Item</TableCell>
      <TableCell className="text-muted-foreground">Value</TableCell>
    </TableRow>
  </TableBody>
</Table>`}</CodeAccordion>
        </div>
      </StyleGuideSection>

      {/* Responsive scroll */}
      <StyleGuideSection
        title="Responsive scroll"
        description="When the table is wider than its container it scrolls horizontally — columns never wrap or break. Narrow the browser window to test."
      >
        <CardTable>
          <TableHeader>
            <TableRow>
              <TableHead>Component</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Version</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Used in</TableHead>
              <TableHead>Last updated</TableHead>
              <TableHead>Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Button",     "Input",     "shadcn / Radix", "2.0", "Done",   "Floating nav, CTAs",        "21 Mar 2026", "Six variants, three sizes"],
              ["Badge",      "Display",   "shadcn / Radix", "2.0", "Done",   "Style guide overview",      "21 Mar 2026", "Four variants"],
              ["Table",      "Data",      "shadcn",         "2.0", "Done",   "All foundation pages",      "21 Mar 2026", "With CardTable variant"],
              ["Accordion",  "Disclosure","shadcn / Radix", "2.0", "Done",   "Code examples, FAQ",        "21 Mar 2026", "With CardAccordion variant"],
              ["Card",       "Surface",   "shadcn",         "2.0", "Done",   "Tables, accordions",        "21 Mar 2026", "Base surface component"],
            ].map(([comp, cat, source, version, status, usedIn, updated, notes]) => (
              <TableRow key={comp}>
                <TableCell className="font-medium">{comp}</TableCell>
                <TableCell className="text-muted-foreground">{cat}</TableCell>
                <TableCell className="text-muted-foreground">{source}</TableCell>
                <TableCell className="text-muted-foreground">{version}</TableCell>
                <TableCell><StatusBadge status={status} /></TableCell>
                <TableCell className="text-muted-foreground">{usedIn}</TableCell>
                <TableCell className="text-muted-foreground">{updated}</TableCell>
                <TableCell className="text-muted-foreground">{notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </CardTable>
      </StyleGuideSection>

      {/* Card Table */}
      <StyleGuideSection
        title="Card Table"
        description="Table wrapped in a Card surface. Use when the table needs a header or belongs to a named section."
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-between-cards">

            <CardTable
              title="Component inventory"
              description="All components used in this style guide."
            >
              <TableHeader>
                <TableRow>
                  <TableHead>Component</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map(([comp, source, status, notes]) => (
                  <TableRow key={comp}>
                    <TableCell className="font-medium">{comp}</TableCell>
                    <TableCell className="text-muted-foreground">{source}</TableCell>
                    <TableCell><StatusBadge status={status} /></TableCell>
                    <TableCell className="text-muted-foreground">{notes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </CardTable>

            <CardTable>
              <TableHeader>
                <TableRow>
                  <TableHead>Without header</TableHead>
                  <TableHead>Just the table in a card surface</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Row one</TableCell>
                  <TableCell className="text-muted-foreground">Value one</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Row two</TableCell>
                  <TableCell className="text-muted-foreground">Value two</TableCell>
                </TableRow>
              </TableBody>
            </CardTable>

          </div>

          <CodeAccordion>{`import { CardTable } from "@/components/ui/card-table"
import { TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"

// With header
<CardTable title="Inventory" description="All items">
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Value</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Item</TableCell>
      <TableCell className="text-muted-foreground">Value</TableCell>
    </TableRow>
  </TableBody>
</CardTable>

// Without header
<CardTable>
  <TableHeader>...</TableHeader>
  <TableBody>...</TableBody>
</CardTable>`}</CodeAccordion>
        </div>
      </StyleGuideSection>

    </div>
  );
}
