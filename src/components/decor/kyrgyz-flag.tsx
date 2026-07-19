import { cn } from "@/lib/cn";

type KyrgyzFlagProps = {
  className?: string;
  /**
   * Флаг — официальный государственный символ, поэтому по умолчанию он
   * озвучивается для скринридеров. Для чисто декоративных повторов
   * можно передать decorative.
   */
  decorative?: boolean;
};

const RAY_COUNT = 40;

/**
 * Государственный флаг Кыргызской Республики (пропорция 3:5): красное
 * полотнище, в центре — солнце с 40 лучами, внутри солнца — түндүк.
 * Состав элементов, пропорции и цвета не искажаются.
 */
export function KyrgyzFlag({ className, decorative = false }: KyrgyzFlagProps) {
  const rays = Array.from({ length: RAY_COUNT }, (_, i) => (
    <polygon
      key={i}
      points="0,-104 5,-70 -5,-70"
      transform={`rotate(${(360 / RAY_COUNT) * i})`}
    />
  ));

  return (
    <svg
      viewBox="0 0 500 300"
      xmlns="http://www.w3.org/2000/svg"
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={
        decorative ? undefined : "Кыргыз Республикасынын мамлекеттик туусу"
      }
      className={cn("block h-auto w-full", className)}
    >
      <rect width="500" height="300" fill="var(--color-flag-red, #e8112d)" />
      <g transform="translate(250 150)" fill="var(--color-flag-gold, #ffdd00)">
        {rays}
        <circle r="66" />
      </g>
      <g transform="translate(250 150)">
        <circle
          r="40"
          fill="none"
          stroke="var(--color-flag-red, #e8112d)"
          strokeWidth="9"
        />
        <g
          stroke="var(--color-flag-red, #e8112d)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        >
          <path d="M-38 0c12-10 64-10 76 0" />
          <path d="M-34 -15c13-7 55-7 68 0" />
          <path d="M-34 15c13 7 55 7 68 0" />
          <path d="M0 -38c-10 12-10 64 0 76" />
          <path d="M-15 -34c-7 13-7 55 0 68" />
          <path d="M15 -34c7 13 7 55 0 68" />
        </g>
      </g>
    </svg>
  );
}

type FlagBadgeProps = {
  label?: string;
  className?: string;
};

/**
 * Компактный национальный бейдж: маленький флаг + подпись.
 * Используется в hero и footer как уважительный знак кыргызской
 * образовательной инициативы.
 */
export function FlagBadge({ label = "Кыргызстан", className }: FlagBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 py-1 pl-1.5 pr-3 backdrop-blur-sm",
        className,
      )}
    >
      <span className="inline-flex h-5 w-[33px] shrink-0 items-center overflow-hidden rounded-[4px] shadow-[0_1px_4px_rgba(0,0,0,0.35)]">
        <KyrgyzFlag />
      </span>
      <span className="text-[11.5px] font-medium tracking-wide">{label}</span>
    </span>
  );
}
