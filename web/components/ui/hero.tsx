"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/typography/heading";
import { Eyebrow } from "@/components/typography/eyebrow";
import { Text } from "@/components/typography/text";
import { cn } from "@/lib/utils";

interface HeroCta {
  label: string;
  href: string;
}

interface HeroProps {
  eyebrow?: string;
  title: string;
  accentWord?: string;
  description?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  variant?: "bottom" | "centered";
  className?: string;
}

const TYPING_SPEED = 45; // ms per character
const TYPING_DELAY = 400; // ms before typing starts

export function Hero({
  eyebrow,
  title,
  accentWord,
  description,
  primaryCta,
  secondaryCta,
  variant = "bottom",
  className,
}: HeroProps) {
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(false);
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

  // Split displayed text to highlight accentWord
  function renderTitle() {
    if (!accentWord || !displayed.toLowerCase().includes(accentWord.toLowerCase())) {
      return <>{displayed}</>;
    }
    const idx = displayed.toLowerCase().indexOf(accentWord.toLowerCase());
    const before = displayed.slice(0, idx);
    const match = displayed.slice(idx, idx + accentWord.length);
    const after = displayed.slice(idx + accentWord.length);
    return (
      <>
        {before}
        <span className="text-primary">{match}</span>
        {after}
      </>
    );
  }

  return (
    <section className={cn(
      "w-full min-h-screen bg-background flex flex-col",
      variant === "centered" ? "justify-center" : "justify-end",
      className
    )}>
      <div className="grid grid-cols-12 gap-5 px-8 md:px-12 lg:px-20 xl:px-24 pb-12 md:pb-16">
        <div className="col-span-12 md:col-start-4 md:col-span-6 flex flex-col gap-4">

          {eyebrow && (
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

        </div>
      </div>
    </section>
  );
}
