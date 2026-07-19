import * as React from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  titleId?: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  titleId,
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
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-[12px] font-medium tracking-wide text-primary-dark uppercase">
          <svg
            aria-hidden
            viewBox="0 0 8 8"
            className="h-2 w-2 shrink-0 text-accent"
          >
            <path d="M4 0l4 4-4 4-4-4z" fill="currentColor" />
          </svg>
          {eyebrow}
        </span>
      )}
      <h2
        id={titleId}
        className="text-[22px] leading-[1.22] font-semibold text-text sm:text-[24px]"
      >
        {title}
      </h2>
      {description && (
        <p className="text-[14.5px] leading-relaxed text-muted">{description}</p>
      )}
    </header>
  );
}
