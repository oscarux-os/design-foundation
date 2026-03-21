# Style Guide Page — oh.design

A living style guide that lives at `/style-guide` in the app. Every new component and block is documented here as it's built. Two tabs — Components and Blocks — give a clear overview of what exists.

---

## Route

```
app/style-guide/page.tsx
```

---

## Structure

Two tabs using shadcn `<Tabs>`:

- **Components** — individual UI components (Button, Badge, Card, Input, Typography etc.)
- **Blocks** — full page sections composed of components (Hero, Feature grid, CTA etc.)

```tsx
<Tabs defaultValue="components">
  <TabsList>
    <TabsTrigger value="components">Components</TabsTrigger>
    <TabsTrigger value="blocks">Blocks</TabsTrigger>
  </TabsList>
  <TabsContent value="components">...</TabsContent>
  <TabsContent value="blocks">...</TabsContent>
</Tabs>
```

---

## Component entries

Each component gets a section with:
1. Name and short description
2. All variants rendered visually
3. The usage code snippet

```tsx
// Example entry
<StyleGuideSection title="Button" description="Primary action element">
  <div className="flex gap-between-chips flex-wrap">
    <Button variant="default">Default</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="destructive">Destructive</Button>
  </div>
</StyleGuideSection>
```

---

## Block entries

Each block gets a section with:
1. Name and short description
2. The block rendered at full width
3. Notes on when to use it

---

## StyleGuideSection component

A simple wrapper component for consistent formatting in the style guide:

```tsx
// components/style-guide/section.tsx
interface StyleGuideSectionProps {
  title: string
  description?: string
  children: React.ReactNode
}

export function StyleGuideSection({ title, description, children }: StyleGuideSectionProps) {
  return (
    <section className="py-between-sections border-b border-border last:border-0">
      <div className="mb-text-to-component">
        <Heading size="h3">{title}</Heading>
        {description && <Text variant="small" className="text-muted-foreground mt-2">{description}</Text>}
      </div>
      {children}
    </section>
  )
}
```

---

## File structure

```
app/
  style-guide/
    page.tsx              ← main style guide page

components/
  style-guide/
    section.tsx           ← StyleGuideSection wrapper
    component-entries.tsx ← all component previews
    block-entries.tsx     ← all block previews
```

---

## Rule

**Every new component or block built for the project must be added to the style guide immediately.** It's not done until it's documented here.
