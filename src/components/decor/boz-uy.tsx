import { cn } from "@/lib/cn";

type BozUyProps = {
  className?: string;
};

/**
 * Оригинальная стилизованная иллюстрация боз үй (юрты): купол с түндүк,
 * решётка кереге и мотив уук. Собственная графика проекта, не фотография
 * и не государственный символ. Декоративная (aria-hidden); смысловую
 * подпись даёт окружающий текст.
 */
export function BozUy({ className }: BozUyProps) {
  return (
    <svg
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("block h-auto w-full", className)}
      fill="none"
    >
      {/* тело юрты (кереге) */}
      <path
        d="M28 150V96c0-6 5-10 12-11 18-3 42-5 60-5s42 2 60 5c7 1 12 5 12 11v54z"
        fill="var(--color-clay)"
        opacity="0.22"
      />
      {/* решётка кереге */}
      <g stroke="var(--color-clay)" strokeOpacity="0.55" strokeWidth="1.4">
        <path d="M46 150v-52M70 150v-56M100 150v-58M130 150v-56M154 150v-52" />
        <path d="M28 116h144M32 134h136" />
        <path d="M40 96l40 54M80 92l40 58M120 92l40 58M160 96l-40 54M120 92L80 150M80 92l40 58" opacity="0.35" />
      </g>
      {/* купол (уук) */}
      <path
        d="M20 96C34 54 62 32 100 32s66 22 80 64z"
        fill="var(--color-primary)"
        opacity="0.9"
      />
      {/* рёбра уук */}
      <g stroke="var(--color-accent)" strokeWidth="1.3" strokeOpacity="0.75" strokeLinecap="round">
        <path d="M100 34C74 40 52 60 34 92" />
        <path d="M100 34c26 6 48 26 66 58" />
        <path d="M100 34v-2M76 38C64 48 52 66 44 90M124 38c12 10 24 28 32 52" />
      </g>
      {/* түндүк */}
      <g transform="translate(100 40)">
        <circle r="15" fill="var(--color-primary-deep)" stroke="var(--color-accent)" strokeWidth="2" />
        <g stroke="var(--color-accent)" strokeWidth="1.4" strokeLinecap="round">
          <path d="M-11 0c4-4 18-4 22 0M-9 -6c4-2 14-2 18 0M-9 6c4 2 14 2 18 0" />
          <path d="M0 -11c-4 4-4 18 0 22M-6 -9c-2 4-2 14 0 18M6 -9c2 4 2 14 0 18" />
        </g>
      </g>
      {/* дверь */}
      <path
        d="M88 150v-30c0-4 3-7 12-7s12 3 12 7v30z"
        fill="var(--color-primary-deep)"
        opacity="0.85"
      />
      <path d="M100 116v34" stroke="var(--color-accent)" strokeWidth="1" strokeOpacity="0.5" />
    </svg>
  );
}
