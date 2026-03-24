import { cva, type VariantProps } from "class-variance-authority";
import { type ElementType, type HTMLAttributes } from "react";

const textVariants = cva("font-sans text-foreground", {
  variants: {
    variant: {
      lead:    "text-xl leading-relaxed",
      body:    "text-base leading-relaxed",
      small:   "text-sm leading-relaxed",
      caption: "text-xs leading-normal",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

const defaultTags: Record<string, ElementType> = {
  lead:    "p",
  body:    "p",
  small:   "p",
  caption: "span",
};

type TextVariant = "lead" | "body" | "small" | "caption";

interface TextProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: ElementType;
  variant?: TextVariant;
}

export function Text({ as, variant = "body", className, children, ...props }: TextProps) {
  const Tag = as ?? defaultTags[variant];

  return (
    <Tag className={textVariants({ variant, className })} {...props}>
      {children}
    </Tag>
  );
}
