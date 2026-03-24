import { type HTMLAttributes } from "react";

interface EyebrowProps extends HTMLAttributes<HTMLSpanElement> {}

export function Eyebrow({ className, children, ...props }: EyebrowProps) {
  return (
    <span
      className={`text-xs uppercase tracking-widest text-muted-foreground font-sans${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </span>
  );
}
