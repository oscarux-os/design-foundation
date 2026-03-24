"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

const foundation = [
  { label: "Typography",   href: "/style-guide/typography" },
  { label: "Colors",       href: "/style-guide/colors" },
  { label: "Spacings",     href: "/style-guide/spacings" },
  { label: "Radius",       href: "/style-guide/radius" },
  { label: "Icons",        href: "/style-guide/icons" },
  { label: "Motion",       href: "/style-guide/motion" },
  { label: "Transitions",  href: "/style-guide/transitions" },
  { label: "Grammar",      href: "/style-guide/grammar" },
];

const components = [
  { label: "Typography",   href: "/style-guide/components/typography" },
  { label: "Tabs",         href: "/style-guide/components/tabs" },
  { label: "Table",        href: "/style-guide/components/table" },
  { label: "Accordion",    href: "/style-guide/components/accordion" },
  { label: "Card",         href: "/style-guide/components/card" },
  { label: "Scroll Area",  href: "/style-guide/components/scroll-area" },
  { label: "Button",       href: "/style-guide/components/button" },
  { label: "Badge",        href: "/style-guide/components/badge" },
];

const blocks = [
  { label: "Floating nav", href: "/style-guide/blocks/floating-nav" },
];

export function StyleGuideSearch() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  function navigate(href: string) {
    setOpen(false);
    router.push(href);
  }

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        aria-label="Search"
        onClick={() => setOpen(true)}
      >
        <MagnifyingGlass weight="light" size={16} />
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search style guide…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Foundation">
            {foundation.map((item) => (
              <CommandItem key={item.href} onSelect={() => navigate(item.href)}>
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Components">
            {components.map((item) => (
              <CommandItem key={item.href} onSelect={() => navigate(item.href)}>
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Blocks">
            {blocks.map((item) => (
              <CommandItem key={item.href} onSelect={() => navigate(item.href)}>
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
