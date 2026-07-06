import * as React from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "flex flex-col gap-2",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-[12px] font-medium tracking-wide text-primary-dark uppercase">
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-accent"
          />
          {eyebrow}
        </span>
      )}
      <h2 className="text-[22px] leading-[1.25] font-semibold text-text sm:text-[24px]">
        {title}
      </h2>
      {description && (
        <p className="text-[15px] leading-relaxed text-muted">{description}</p>
      )}
    </header>
  );
}
