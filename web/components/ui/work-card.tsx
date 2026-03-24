"use client";

import Image from "next/image";
import { Plus } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Heading } from "@/components/typography/heading";
import { Eyebrow } from "@/components/typography/eyebrow";
import { Text } from "@/components/typography/text";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface WorkCardProps {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  visual?: React.ReactNode;
  className?: string;
}

export function WorkCard({ eyebrow, title, description, image, visual, className }: WorkCardProps) {
  const [open, setOpen] = useState(false);
  const hasMedia = !!image || !!visual;

  return (
    <>
      <div className={cn("relative flex flex-col bg-card rounded-lg overflow-hidden aspect-[3/4]", className)}>

        {/* Image */}
        {image && (
          <Image src={image} alt={eyebrow} fill className="object-cover" />
        )}

        {/* Custom visual */}
        {!image && visual && (
          <div className="absolute inset-0">{visual}</div>
        )}

        {/* Top gradient — only when there's media, ensures text readability */}
        {hasMedia && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />
        )}

        {/* Text — top */}
        <div className={cn("relative z-10 p-6 flex flex-col gap-2", hasMedia && "text-white")}>
          <Eyebrow className={hasMedia ? "text-white/70" : undefined}>{eyebrow}</Eyebrow>
          <Heading size="h2" as="h3" uppercase={false}>{title}</Heading>
        </div>

        {/* Plus button — bottom right */}
        <Button
          variant="secondary"
          size="icon"
          className="absolute bottom-4 right-4 rounded-full z-10"
          onClick={() => setOpen(true)}
          aria-label={`Learn more about ${eyebrow}`}
        >
          <Plus size={16} weight="regular" aria-hidden="true" />
        </Button>

      </div>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="fixed top-5 right-5 bottom-5 left-5 translate-x-0 translate-y-0 max-w-none rounded-lg overflow-y-auto p-0 md:top-20 md:bottom-20 md:left-1/2 md:right-auto md:w-1/2 md:-translate-x-1/2 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-4 data-[state=closed]:slide-out-to-bottom-4">
          <DialogHeader className="p-6 md:p-10">
            <Eyebrow className="mb-3">{eyebrow}</Eyebrow>
            <DialogTitle asChild>
              <Heading size="display-md" as="h2" uppercase={false}>{title}</Heading>
            </DialogTitle>
            {description && (
              <DialogDescription className="text-base mt-3">
                {description}
              </DialogDescription>
            )}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
