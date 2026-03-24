"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/typography/heading";
import { Eyebrow } from "@/components/typography/eyebrow";
import { Text } from "@/components/typography/text";
import { cn } from "@/lib/utils";

const TYPING_SPEED = 45;
const TYPING_DELAY = 400;

interface HeroMediaCta {
  label: string;
  href: string;
}

interface HeroMediaBaseProps {
  eyebrow?: string;
  available?: boolean;
  title: string;
  accentWord?: string;
  description?: string;
  primaryCta?: HeroMediaCta;
  secondaryCta?: HeroMediaCta;
  image?: string;
  video?: string;
  className?: string;
}

interface HeroMediaFullscreenProps extends HeroMediaBaseProps {
  variant?: "fullscreen" | "editorial";
  colSpan?: never;
  rowSpan?: never;
  colStart?: never;
  rowStart?: never;
}

interface HeroMediaGridProps extends HeroMediaBaseProps {
  variant: "grid";
  colSpan: number;
  rowSpan: number;
  colStart?: number;
  rowStart?: number;
}

type HeroMediaProps = HeroMediaFullscreenProps | HeroMediaGridProps;

export function HeroMedia({
  eyebrow,
  available,
  title,
  accentWord,
  description,
  primaryCta,
  secondaryCta,
  image,
  video,
  variant = "fullscreen",
  className,
  ...gridProps
}: HeroMediaProps) {

  const isGrid = variant === "grid";
  const isEditorial = variant === "editorial";
  const { colSpan, rowSpan, colStart, rowStart } = gridProps as HeroMediaGridProps;

  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!isEditorial) {
      setDisplayed(title);
      return;
    }
    const startDelay = setTimeout(() => {
      setTyping(true);
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(title.slice(0, i));
        if (i === title.length) {
          clearInterval(interval);
          setTyping(false);
          setRevealed(true);
        }
      }, TYPING_SPEED);
      return () => clearInterval(interval);
    }, TYPING_DELAY);

    return () => clearTimeout(startDelay);
  }, [title, isEditorial]);

  function renderTitle(text: string) {
    if (!accentWord || !text.toLowerCase().includes(accentWord.toLowerCase())) {
      return <>{text}</>;
    }
    const idx = text.toLowerCase().indexOf(accentWord.toLowerCase());
    const before = text.slice(0, idx);
    const match = text.slice(idx, idx + accentWord.length);
    const after = text.slice(idx + accentWord.length);
    return (
      <>
        {before}
        <span className="text-primary">{match}</span>
        {after}
      </>
    );
  }

  const cardStyle = isGrid ? {
    "--p-col-span":     colSpan,
    "--p-row-span":     rowSpan,
    "--p-col-start":    colStart ?? "auto",
    "--p-row-start":    rowStart ?? "auto",
    "--p-mobile-ratio": "16/9",
  } as React.CSSProperties : undefined;

  const inner = (
    <>
      {/* Image */}
      {image && (
        <Image src={image} alt={title} fill className="object-cover" />
      )}

      {/* Video */}
      {video && (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Overlay — always on */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Content */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0",
        isGrid
          ? "p-6 flex flex-col gap-4"
          : "grid grid-cols-6 md:grid-cols-12 gap-3 md:gap-4 lg:gap-7 xl:gap-8 px-5 sm:px-8 md:px-10 lg:px-20 xl:px-24 pb-8 md:pb-12"
      )}>

        <div className={cn("flex flex-col gap-4", !isGrid && "col-span-6 md:col-span-7")}>
          {available && (
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <Eyebrow className="text-white/70">Available for work</Eyebrow>
            </span>
          )}
          {!available && eyebrow && (
            <Eyebrow className="text-white/70">{eyebrow}</Eyebrow>
          )}

          <div className="flex flex-col gap-2">
            <Heading
              size={isGrid ? "display-sm" : "display-lg"}
              uppercase={false}
              className="text-white"
            >
              {renderTitle(title)}
            </Heading>
            {description && (
              <Text variant={isGrid ? "body" : "lead"} className="text-white/70">{description}</Text>
            )}
          </div>

          {(primaryCta || secondaryCta) && (
            <div className="flex items-center gap-3">
              {primaryCta && (
                <Button asChild>
                  <Link href={primaryCta.href}>{primaryCta.label}</Link>
                </Button>
              )}
              {secondaryCta && (
                <Button variant="secondary" asChild>
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );

  if (isEditorial) {
    return (
      <div className={cn(
        "relative w-full min-h-screen bg-background flex flex-col",
        "px-5 sm:px-8 md:px-10 lg:px-20 xl:px-24",
        "pt-30 pb-hero",
        className
      )}>
        <div className="flex-1 grid grid-cols-6 md:grid-cols-12 gap-3 md:gap-4 lg:gap-7 xl:gap-8 md:content-center">

          {/* Title — col 1–6 */}
          <div className="col-span-6 self-start">
            <Heading
              size="display-hero"
              uppercase={false}
              style={{ fontSize: "clamp(3.5rem, 11vw, 9rem)" }}
              className="text-muted-foreground"
            >
              {renderTitle(displayed)}
              {(typing || displayed.length === 0) && (
                <span className="typing-cursor ml-0.5 inline-block w-[2px] h-[1em] bg-foreground align-middle" />
              )}
            </Heading>
          </div>

          {/* Badge — col 10–12, top right */}
          {available && (
            <div className="col-span-6 md:col-span-3 md:col-start-10 md:row-start-1 self-start flex justify-end">
              <span className="inline-flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <Eyebrow>Available for work</Eyebrow>
              </span>
            </div>
          )}
          {!available && eyebrow && (
            <div className="col-span-6 md:col-span-3 md:col-start-10 md:row-start-1 self-start flex justify-end">
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
          )}

          {/* Description + CTA — col 10–12, bottom of title */}
          {description && (
            <div className={cn(
              "col-span-6 md:col-start-10 md:col-span-3 md:row-start-1 self-end md:mt-0 flex flex-col gap-text-to-component transition-all duration-700",
              revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              <Heading size="h2" as="p">{description}</Heading>
              {secondaryCta && (
                <Button size="xl" variant="secondary" className="self-start" asChild>
                  <Link href={secondaryCta.href}>
                    {secondaryCta.label}
                    <ArrowRight size={16} weight="regular" aria-hidden="true" />
                  </Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (isGrid) {
    return (
      <div
        className={cn("project-card relative rounded-xl overflow-hidden bg-muted", className)}
        style={cardStyle}
      >
        {inner}
      </div>
    );
  }

  return (
    <div className={cn("relative w-full min-h-screen rounded-xl overflow-hidden bg-muted", className)}>
      {inner}
    </div>
  );
}
