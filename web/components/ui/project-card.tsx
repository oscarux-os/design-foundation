"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/typography/heading";
import { Text } from "@/components/typography/text";
import { cn } from "@/lib/utils";

// ─── ProjectGrid ─────────────────────────────────────────────────────────────

interface ProjectGridProps {
  children: React.ReactNode;
  className?: string;
}

export function ProjectGrid({ children, className }: ProjectGridProps) {
  return (
    <div className={cn("project-grid", className)}>
      {children}
    </div>
  );
}

// ─── ProjectCard ─────────────────────────────────────────────────────────────

interface ProjectCardProps {
  colSpan: number;
  rowSpan: number;
  colStart?: number;
  rowStart?: number;
  title?: string;
  description?: string;
  tags?: string[];
  image?: string;
  video?: string;
  href?: string;
  variant?: "default" | "square" | "portrait";
  className?: string;
}

export function ProjectCard({
  colSpan,
  rowSpan,
  colStart,
  rowStart,
  title,
  description,
  tags,
  image,
  video,
  href = "#",
  variant = "default",
  className,
}: ProjectCardProps) {
  const mobileRatio = variant === "portrait" ? "4/5" : "1/1";

  const cardStyle = {
    "--p-mobile-ratio": mobileRatio,
  } as React.CSSProperties;

  const inner = (
    <>
      {/* Image — subtle zoom on hover */}
      {image && (
        <Image
          src={image}
          alt={title ?? ""}
          fill
          className="object-cover transition-transform duration-700 ease-reveal group-hover:scale-105"
        />
      )}

      {/* Video — autoplays silently, covers the card */}
      {video && (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-reveal group-hover:scale-105"
        />
      )}

      {/* Overlay — always on mobile, hover-only on desktop */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 ease-reveal" />

      {/* Tags — always on mobile, hover-only on desktop */}
      {tags && tags.length > 0 && (
        <ul className="absolute top-6 left-6 flex flex-wrap gap-between-chips list-none opacity-100 translate-y-0 md:opacity-0 md:-translate-y-1 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-[opacity,transform] duration-500 ease-reveal md:delay-150">
          {tags.map((tag) => (
            <li key={tag}>
              <Badge variant="secondary">{tag}</Badge>
            </li>
          ))}
        </ul>
      )}

      {/* Bottom row — text + arrow */}
      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-component-default">

        {/* Title + description — always on mobile, hover-only on desktop */}
        {(title || description) && (
          <div className="flex flex-col gap-1 min-w-0 opacity-100 translate-y-0 md:opacity-0 md:translate-y-3 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-[opacity,transform] duration-500 ease-reveal md:delay-200">
            {title && (
              <Heading size="display-sm" uppercase={false} className="text-white max-md:text-lg">
                {title}
              </Heading>
            )}
            {description && (
              <Text variant="body" className="text-white/80">{description}</Text>
            )}
          </div>
        )}

        {/* Arrow button */}
        <Button
          variant="outline"
          size="icon"
          className="shrink-0 rounded-full pointer-events-none max-md:h-8 max-md:w-8 max-md:bg-primary max-md:text-primary-foreground max-md:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors duration-300 ease-reveal"
          tabIndex={-1}
          aria-hidden
        >
          <span className="relative w-4 h-4 overflow-hidden flex items-center justify-center">
            {/* Arrow 1 — visible on desktop rest, exits on hover, hidden on mobile */}
            <ArrowUpRight
              size={16}
              weight="bold"
              className="absolute max-md:opacity-0 transition-transform duration-300 ease-reveal group-hover:translate-x-4 group-hover:-translate-y-4"
            />
            {/* Arrow 2 — enters on desktop hover, always centered on mobile */}
            <ArrowUpRight
              size={16}
              weight="bold"
              className="absolute -translate-x-4 translate-y-4 max-md:translate-x-0 max-md:translate-y-0 transition-transform duration-300 ease-reveal group-hover:translate-x-0 group-hover:translate-y-0"
            />
          </span>
        </Button>
      </div>
    </>
  );

  return (
    <Link
      href={href}
      className={cn(
        "project-card group relative rounded-xl overflow-hidden bg-muted block",
        className
      )}
      style={{
        ...cardStyle,
        "--p-col": colStart ? `${colStart} / span ${colSpan}` : `span ${colSpan}`,
        "--p-row": rowStart ? `${rowStart} / span ${rowSpan}` : `span ${rowSpan}`,
      } as React.CSSProperties}
    >
      {inner}
    </Link>
  );
}
