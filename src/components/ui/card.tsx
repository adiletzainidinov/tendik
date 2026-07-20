import * as React from "react";
import { cn } from "@/lib/cn";
import { ShyrdakCorner } from "@/components/decor/shyrdak-corner";

type CardTone = "surface" | "soft" | "primary" | "felt" | "deep";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: CardTone;
  /** Добавить орнаментальный угол шырдак + золотую кромку. */
  ethnic?: boolean;
};

const TONE_CLASS: Record<CardTone, string> = {
  surface: "bg-surface border-border/70 text-text",
  soft: "bg-surface-soft border-border/70 text-text",
  primary: "bg-primary text-white border-transparent",
  felt: "surface-felt border-accent/25 text-text",
  deep: "surface-deep text-white border-transparent frame-gold",
};

const CORNER_COLOR: Record<CardTone, string> = {
  surface: "text-accent/45",
  soft: "text-accent/45",
  primary: "text-white/40",
  felt: "text-primary/30",
  deep: "text-accent/50",
};

export function Card({
  className,
  tone = "surface",
  ethnic = false,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border p-5 shadow-[var(--shadow-soft)]",
        TONE_CLASS[tone],
        className,
      )}
      {...rest}
    >
      {ethnic && (
        <>
          <span
            aria-hidden
            className="edge-gold-top pointer-events-none absolute inset-x-0 top-0 h-px"
          />
          <ShyrdakCorner
            corner="tr"
            className={cn(
              "pointer-events-none absolute right-2 top-2 h-8 w-8",
              CORNER_COLOR[tone],
            )}
          />
        </>
      )}
      {children}
    </div>
  );
}
