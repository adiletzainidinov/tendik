import * as React from "react";
import { cn } from "@/lib/cn";

type OrnamentRowProps = {
  className?: string;
  /** Уникальный id обязателен при нескольких экземплярах на странице. */
  patternId?: string;
};

/**
 * Повторяющаяся орнаментальная лента в духе шырдак/курак: ряд ромбов с
 * рогообразными завитками. Цвет — currentColor. Только декоративная.
 */
export function OrnamentRow({
  className,
  patternId = "kg-ornament",
}: OrnamentRowProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("block h-2.5 w-full", className)}
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id={patternId}
          width="28"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 5l7-4 7 4-7 4-7-4zm14 0l7-4 7 4-7 4-7-4z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.1"
          />
          <circle cx="7" cy="5" r="0.9" fill="currentColor" />
          <circle cx="21" cy="5" r="0.9" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
