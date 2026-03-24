"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/typography/heading";
import { Eyebrow } from "@/components/typography/eyebrow";
import { Text } from "@/components/typography/text";
import { cn } from "@/lib/utils";

// ─── Typing constants (match hero.tsx) ───────────────────────────────────────

const TYPING_SPEED = 45;
const TYPING_DELAY = 400;

// ─── Breathing dots ───────────────────────────────────────────────────────────

const SIZE    = 13;
const CENTER  = (SIZE - 1) / 2;
const RADIUS  = CENTER;
const MAX_RING = Math.round(RADIUS);

function BreathingDots({ className }: { className?: string }) {
  return (
    <div className={cn("aspect-square w-full max-w-[280px]", className)}>
      <div
        className="grid h-full w-full"
        style={{ gridTemplateColumns: `repeat(${SIZE}, 1fr)`, gap: "10px" }}
      >
        {Array.from({ length: SIZE * SIZE }, (_, i) => {
          const col  = i % SIZE;
          const row  = Math.floor(i / SIZE);
          const dist = Math.sqrt((col - CENTER) ** 2 + (row - CENTER) ** 2);

          if (dist > RADIUS) return <span key={i} className="block" />;

          const delay = (Math.round(dist) / MAX_RING) * 1.6;

          return (
            <span
              key={i}
              className="block w-[20%] aspect-square rounded-full bg-primary/40 breathing-dot"
              style={{ animationDelay: `${delay.toFixed(2)}s` }}
            />
          );
        })}
      </div>
    </div>
  );
}

// ─── HeroGrid ─────────────────────────────────────────────────────────────────

interface HeroGridCta {
  label: string;
  href: string;
}

interface HeroGridProps {
  eyebrow?: string;
  available?: boolean;
  title: string;
  accentWord?: string;
  description?: string;
  primaryCta?: HeroGridCta;
  secondaryCta?: HeroGridCta;
  variant?: "split" | "centered";
  position?: "center" | "bottom";
  className?: string;
}

export function HeroGrid({
  eyebrow,
  title,
  accentWord,
  description,
  primaryCta,
  secondaryCta,
  variant = "split",
  position = "center",
  available,
  className,
}: HeroGridProps) {
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping]       = useState(false);
  const [heroRevealed, setHeroRevealed] = useState(false);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      setTyping(true);
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(title.slice(0, i));
        if (i === title.length) {
          clearInterval(interval);
          setTyping(false);
          setHeroRevealed(true);
        }
      }, TYPING_SPEED);
      return () => clearInterval(interval);
    }, TYPING_DELAY);

    return () => clearTimeout(startDelay);
  }, [title]);

  function renderTitle() {
    if (!accentWord || !displayed.toLowerCase().includes(accentWord.toLowerCase())) {
      return <>{displayed}</>;
    }
    const idx    = displayed.toLowerCase().indexOf(accentWord.toLowerCase());
    const before = displayed.slice(0, idx);
    const match  = displayed.slice(idx, idx + accentWord.length);
    const after  = displayed.slice(idx + accentWord.length);
    return (
      <>
        {before}
        <span className="text-primary">{match}</span>
        {after}
      </>
    );
  }

  const content = (
    <>
      {available && (
        <span className="inline-flex items-center gap-2 animate-fade-in-up opacity-0" style={{ animationDelay: "0ms" }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          <Eyebrow>Available for work</Eyebrow>
        </span>
      )}
      {!available && eyebrow && (
        <Eyebrow className="animate-fade-in-up opacity-0" style={{ animationDelay: "0ms" }}>
          {eyebrow}
        </Eyebrow>
      )}

      <Heading size="display-hero" as="h1">
        {renderTitle()}
        {(typing || displayed.length === 0) && (
          <span className="typing-cursor ml-0.5 inline-block w-[2px] h-[1em] bg-foreground align-middle" />
        )}
      </Heading>

      <div
        className={cn(
          "flex flex-col gap-4 transition-all duration-700",
          heroRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        {description && (
          <Text variant="lead" className="text-muted-foreground">{description}</Text>
        )}
        <div className="flex items-center gap-3">
          {primaryCta && (
            <Button size="xl" asChild>
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
          )}
          {secondaryCta && (
            <Button size="xl" variant="secondary" asChild>
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </>
  );

  // ── Centered variant ─────────────────────────────────────────────────────────
  if (variant === "centered") {
    return (
      <section className={cn("relative w-full min-h-screen flex flex-col overflow-hidden", className)}>
        {/* Dots fill the whole section behind everything */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <BreathingDots className="w-[min(60vh,60vw)] max-w-[480px]" />
        </div>

        {/* 12-col grid — content in centre 6 cols */}
        <div className="relative flex-1 grid grid-cols-12 gap-5 px-5 sm:px-8 md:px-10 lg:px-20 xl:px-24">
          <div className="col-span-12 md:col-start-4 md:col-span-6 flex flex-col justify-center gap-4 py-12">
            {content}
          </div>
        </div>
      </section>
    );
  }

  // ── Split variant (default) ──────────────────────────────────────────────────
  return (
    <section className={cn("w-full min-h-screen flex flex-col", className)}>
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="relative flex-1 grid grid-cols-1 md:grid-cols-2">

          {/* Mobile dots — behind content */}
          <div className="absolute inset-0 flex items-center justify-center md:hidden pointer-events-none">
            <BreathingDots className="w-[70%] max-w-[280px]" />
          </div>

          {/* Left — content */}
          <div className={cn(
            "relative flex flex-col gap-4 px-5 sm:px-8 md:px-10 lg:px-20 xl:px-24 py-12",
            position === "bottom" ? "justify-end" : "justify-center"
          )}>
            {content}
          </div>

          {/* Right — dots (desktop only) */}
          <div className="hidden md:flex items-center justify-center p-10 md:p-12">
            <BreathingDots className="w-full" />
          </div>

        </div>
      </div>
    </section>
  );
}
