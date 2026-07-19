import { cn } from "@/lib/cn";

type TundukMarkProps = {
  className?: string;
  strokeWidth?: number;
};

/**
 * Стилизованный түндүк (круглый свод боз үй) — центральный национальный
 * знак дизайн-системы. Рисуется currentColor, чтобы переиспользоваться
 * на светлом и тёмном фоне. Декоративный: всегда aria-hidden.
 */
export function TundukMark({ className, strokeWidth = 2.6 }: TundukMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("h-6 w-6", className)}
    >
      <circle
        cx="24"
        cy="24"
        r="20"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <g stroke="currentColor" strokeWidth={strokeWidth * 0.75} strokeLinecap="round">
        <path d="M6 24c6-5.4 30-5.4 36 0" />
        <path d="M7.6 17.4c7.4-4.4 25.4-4.4 32.8 0" />
        <path d="M7.6 30.6c7.4 4.4 25.4 4.4 32.8 0" />
        <path d="M24 6c-5.4 6-5.4 30 0 36" />
        <path d="M17.4 7.6c-4.4 7.4-4.4 25.4 0 32.8" />
        <path d="M30.6 7.6c4.4 7.4 4.4 25.4 0 32.8" />
      </g>
    </svg>
  );
}
