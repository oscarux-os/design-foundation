import { cva, type VariantProps } from "class-variance-authority";
import { type ElementType, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const headingVariants = cva("font-sans", {
  variants: {
    size: {
      "display-hero": "font-bold leading-[0.85] tracking-[0.02em] text-foreground",
      "display-lg":   "font-bold leading-[0.85] tracking-[0.02em] text-foreground",
      "display-md":   "font-bold leading-[0.85] tracking-[0.02em] text-foreground",
      "display-sm":   "font-bold leading-[0.85] tracking-[0.02em] text-foreground",
      h1: "font-normal tracking-tight text-foreground",
      h2: "text-3xl font-normal tracking-tight text-foreground",
      h3: "text-2xl font-normal tracking-tight text-foreground",
      h4: "text-xl font-normal tracking-tight text-foreground",
    },
  },
  defaultVariants: {
    size: "h2",
  },
});

const fluidSizes: Record<string, string> = {
  "display-hero": "clamp(3rem, 9vw, 6rem)",
  "display-lg":   "clamp(2rem, 6vw, 4rem)",
  "display-md":   "clamp(1.5rem, 4vw, 2.5rem)",
  "display-sm":   "clamp(1.25rem, 3vw, 2rem)",
  h1: "clamp(2rem, 5vw, 3.5rem)",
};

const defaultTags: Record<string, ElementType> = {
  "display-hero": "h1",
  "display-lg":   "h1",
  "display-md":   "h2",
  "display-sm":   "h2",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
};

type HeadingSize = "display-hero" | "display-lg" | "display-md" | "display-sm" | "h1" | "h2" | "h3" | "h4";

interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: ElementType;
  size?: HeadingSize;
  uppercase?: boolean;
}

export function Heading({ as, size = "h2", uppercase, className, style, children, ...props }: HeadingProps) {
  const Tag = as ?? defaultTags[size];
  const fluidStyle = fluidSizes[size] ? { fontSize: fluidSizes[size], ...style } : style;
  const isDisplay = size?.startsWith("display");
  const shouldUppercase = uppercase ?? isDisplay;

  return (
    <Tag className={cn(headingVariants({ size }), shouldUppercase && "uppercase", className)} style={fluidStyle} {...props}>
      {children}
    </Tag>
  );
}
