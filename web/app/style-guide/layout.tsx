import { StyleGuideSidebar } from "@/components/style-guide/sidebar";
import { StyleGuideBreadcrumb } from "@/components/style-guide/breadcrumb";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { type ReactNode } from "react";

export default function StyleGuideLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[1440px] mx-auto h-screen flex flex-col overflow-hidden">
      <SidebarProvider className="flex-1 min-h-0 overflow-hidden">
        <StyleGuideSidebar />
        <SidebarInset className="flex-1 min-h-0">
          <ThemeToggle />
          <ScrollArea className="h-full">
            <main className="px-8 md:px-12 py-10">
              <StyleGuideBreadcrumb />
              {children}
            </main>
          </ScrollArea>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
