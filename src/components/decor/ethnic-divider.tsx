import { cn } from "@/lib/cn";
import { TundukMark } from "@/components/decor/tunduk-mark";

type EthnicDividerProps = {
  className?: string;
  /**
   * Мотив разделителя. Чередование вариантов задаёт ритм страницы:
   * - horns: кочкор мүйүз по центру (по умолчанию);
   * - medallion: медальон түндүк;
   * - belt: орнаментальный пояс из ромбов.
   */
  variant?: "horns" | "medallion" | "belt";
};

/**
 * Горизонтальный этнический разделитель. Наследует цвет через
 * currentColor. Только декоративный (aria-hidden).
 */
export function EthnicDivider({
  className,
  variant = "horns",
}: EthnicDividerProps) {
  return (
    <div
      aria-hidden
      className={cn("flex items-center gap-3 text-accent", className)}
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-current opacity-45" />
      {variant === "horns" && (
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
      )}
      {variant === "medallion" && (
        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-current/50">
          <TundukMark className="h-4 w-4" strokeWidth={3.4} />
        </span>
      )}
      {variant === "belt" && (
        <svg
          viewBox="0 0 72 16"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-[72px] shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <path d="M12 8l6-5 6 5-6 5zM30 8l6-5 6 5-6 5zM48 8l6-5 6 5-6 5z" />
          <circle cx="18" cy="8" r="1" fill="currentColor" stroke="none" />
          <circle cx="36" cy="8" r="1" fill="currentColor" stroke="none" />
          <circle cx="54" cy="8" r="1" fill="currentColor" stroke="none" />
        </svg>
      )}
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-current opacity-45" />
    </div>
  );
}
