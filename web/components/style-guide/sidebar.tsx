"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Plus, Minus, House } from "@phosphor-icons/react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { StyleGuideSearch } from "@/components/style-guide/search";

const nav = [
  {
    label: "Foundation",
    base: "/style-guide/foundation",
    items: [
      { label: "Typography",   href: "/style-guide/typography" },
      { label: "Colors",       href: "/style-guide/colors" },
      { label: "Spacings",     href: "/style-guide/spacings" },
      { label: "Radius",       href: "/style-guide/radius" },
      { label: "Icons",        href: "/style-guide/icons" },
      { label: "Motion",       href: "/style-guide/motion" },
      { label: "Transitions",  href: "/style-guide/transitions" },
      { label: "Grammar",      href: "/style-guide/grammar" },
    ],
  },
  {
    label: "Components",
    base: "/style-guide/components",
    items: [
      { label: "Typography",   href: "/style-guide/components/typography" },
      { label: "Tabs",         href: "/style-guide/components/tabs" },
      { label: "Table",        href: "/style-guide/components/table" },
      { label: "Accordion",    href: "/style-guide/components/accordion" },
      { label: "Card",         href: "/style-guide/components/card" },
      { label: "Scroll Area",  href: "/style-guide/components/scroll-area" },
      { label: "Button",       href: "/style-guide/components/button" },
      { label: "Badge",        href: "/style-guide/components/badge" },
    ],
  },
  {
    label: "Blocks",
    base: "/style-guide/blocks",
    items: [
      { label: "Floating nav",  href: "/style-guide/blocks/floating-nav" },
      { label: "Hero",          href: "/style-guide/blocks/hero" },
      { label: "Hero grid",     href: "/style-guide/blocks/hero-grid" },
      { label: "Project card",  href: "/style-guide/blocks/project-card" },
      { label: "Hero media",    href: "/style-guide/blocks/hero-media" },
      { label: "Work card",     href: "/style-guide/blocks/work-card" },
    ],
  },
];

export function StyleGuideSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Sidebar variant="inset" collapsible="none">
      <SidebarHeader>
        <ButtonGroup>
          <Button
            variant="outline"
            size="icon"
            aria-label="Overview"
            onClick={() => router.push("/style-guide")}
          >
            <House weight="light" size={16} />
          </Button>
          <StyleGuideSearch />
        </ButtonGroup>
      </SidebarHeader>

      <SidebarContent className="overflow-hidden">
        <ScrollArea className="h-full">
          <SidebarGroup>
            <SidebarMenu>
              {nav.map((section) => {
                const isOpen = section.items.some((i) => i.href === pathname) ||
                  pathname.startsWith(section.base);

                return (
                  <Collapsible
                    key={section.label}
                    defaultOpen={isOpen}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          {section.label}
                          <Plus weight="light" className="ml-auto group-data-[state=open]/collapsible:hidden" />
                          <Minus weight="light" className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {section.items.map(({ label, href }) => (
                            <SidebarMenuSubItem key={href}>
                              <SidebarMenuSubButton asChild isActive={pathname === href}>
                                <Link href={href}>{label}</Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                );
              })}
            </SidebarMenu>
          </SidebarGroup>
        </ScrollArea>
      </SidebarContent>
    </Sidebar>
  );
}
