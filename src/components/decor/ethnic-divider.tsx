import { cn } from "@/lib/cn";

type EthnicDividerProps = {
  className?: string;
};

/**
 * Горизонтальный разделитель с мотивом «кочкор мүйүз» (бараньи рога) по
 * центру. Цвет наследуется через currentColor. Только декоративный.
 */
export function EthnicDivider({ className }: EthnicDividerProps) {
  return (
    <div
      aria-hidden
      className={cn("flex items-center gap-3 text-accent", className)}
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-current opacity-45" />
      <svg
        viewBox="0 0 64 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-14 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <path d="M32 4c8 0 13 4.6 13 10.4 0 4-2.7 6.4-5.8 6.4-2.5 0-4.2-1.7-4.2-3.9 0-1.8 1.3-3.1 3-3.1" />
        <path d="M32 4c-8 0-13 4.6-13 10.4 0 4 2.7 6.4 5.8 6.4 2.5 0 4.2-1.7 4.2-3.9 0-1.8-1.3-3.1-3-3.1" />
        <circle cx="4" cy="12" r="1.6" fill="currentColor" stroke="none" />
        <circle cx="60" cy="12" r="1.6" fill="currentColor" stroke="none" />
      </svg>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-current opacity-45" />
    </div>
  );
}
