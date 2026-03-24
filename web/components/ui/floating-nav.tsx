"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface FloatingNavItem {
  label: string;
  href?: string;
  onClick?: () => void;
  active?: boolean;
}

export interface FloatingNavCta {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface FloatingNavProps {
  items: FloatingNavItem[];
  cta?: FloatingNavCta;
  variant?: "dot" | "pill";
  position?: "top" | "bottom";
  className?: string;
}

export function FloatingNav({ items, cta, variant = "dot", position = "bottom", className }: FloatingNavProps) {
  const positionClass = position === "top" ? "top-6" : "bottom-6";

  if (variant === "pill") {
    return (
      <div
        className={cn(
          "fixed left-1/2 -translate-x-1/2 z-50",
          positionClass,
          "flex items-center gap-1 px-2 h-12 rounded-full bg-card shadow-lg",
          className
        )}
      >
        {items.map((item) => {
          const isActive = item.active;
          const baseClass = cn(
            "text-sm font-medium transition-colors whitespace-nowrap px-4 py-2 rounded-full",
            isActive
              ? "bg-muted text-foreground"
              : "text-muted-foreground hover:text-foreground"
          );

          if (item.href) {
            return (
              <Link key={item.label} href={item.href} className={baseClass}>
                {item.label}
              </Link>
            );
          }

          return (
            <button key={item.label} onClick={item.onClick} className={baseClass}>
              {item.label}
            </button>
          );
        })}

        {/* CTA — inside pill */}
        {cta && (
          <Button
            size="sm"
            variant="secondary"
            className="rounded-full ml-1"
            asChild={!!cta.href}
            onClick={cta.onClick}
          >
            {cta.href ? <Link href={cta.href}>{cta.label}</Link> : cta.label}
          </Button>
        )}
      </div>
    );
  }

  // variant="dot" (default)
  return (
    <div
      className={cn(
        "fixed left-1/2 -translate-x-1/2 z-50",
        positionClass,
        "flex items-center gap-6 px-3 py-3",
        "rounded-full bg-card shadow-lg",
        className
      )}
    >
      {items.map((item) => {
        const inner = (
          <span className="flex items-center gap-1.5">
            {item.active && (
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            )}
            {item.label}
          </span>
        );

        const itemClass = cn(
          "text-sm font-medium transition-colors whitespace-nowrap",
          item.active ? "text-primary" : "text-muted-foreground hover:text-primary"
        );

        if (item.href) {
          return (
            <Link key={item.label} href={item.href} className={itemClass}>
              {inner}
            </Link>
          );
        }

        return (
          <button key={item.label} onClick={item.onClick} className={itemClass}>
            {inner}
          </button>
        );
      })}

      {/* CTA — inside pill */}
      {cta && (
        <>
          <div className="w-px h-4 bg-border mx-3" />
          <Button variant="secondary" size="sm" className="rounded-full" asChild={!!cta.href} onClick={cta.onClick}>
            {cta.href ? <Link href={cta.href}>{cta.label}</Link> : cta.label}
          </Button>
        </>
      )}
    </div>
  );
}
