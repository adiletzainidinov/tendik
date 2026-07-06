import * as React from "react";
import { cn } from "@/lib/cn";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: "surface" | "soft" | "primary";
};

export function Card({
  className,
  tone = "surface",
  ...rest
}: CardProps) {
  const toneClass =
    tone === "primary"
      ? "bg-primary text-white border-transparent"
      : tone === "soft"
        ? "bg-surface-soft border-border/70"
        : "bg-surface border-border/70";
  return (
    <div
      className={cn(
        "rounded-2xl border p-5 shadow-[var(--shadow-soft)]",
        toneClass,
        className,
      )}
      {...rest}
    />
  );
}
