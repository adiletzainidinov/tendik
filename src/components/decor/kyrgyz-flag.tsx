import { cn } from "@/lib/cn";
import { TundukMark } from "@/components/decor/tunduk-mark";

/*
 * ГОСУДАРСТВЕННАЯ СИМВОЛИКА
 *
 * Официальный флаг Кыргызской Республики НЕ рисуется в коде вручную.
 * Компонент KyrgyzFlag отображает только локальный проверенный SVG-asset:
 *
 *   public/national-symbols/kyrgyzstan-flag.svg
 *
 * Порядок добавления файла и требования к источнику описаны в ATTRIBUTION.md
 * (корень репозитория). Пока проверенный asset не добавлен, KyrgyzFlag нигде
 * не должен использоваться в UI — вместо него используются стилизованные
 * декоративные мотивы (NationalMotifChip, NationalBadge), которые официальным
 * флагом не являются и никогда так не подписываются.
 */

export const KYRGYZ_FLAG_ASSET = "/national-symbols/kyrgyzstan-flag.svg";

type KyrgyzFlagProps = {
  className?: string;
  /** true — чисто декоративное использование (alt="" + aria-hidden). */
  decorative?: boolean;
};

/**
 * Отображает официальный флаг Кыргызской Республики из локального
 * проверенного asset. Пропорция 3:5 задана атрибутами width/height,
 * чтобы не было layout shift. Геометрия и цвета файла не изменяются.
 */
export function KyrgyzFlag({ className, decorative = false }: KyrgyzFlagProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- статический локальный SVG, next/image не даёт преимуществ
    <img
      src={KYRGYZ_FLAG_ASSET}
      width={500}
      height={300}
      alt={decorative ? "" : "Кыргыз Республикасынын мамлекеттик туусу"}
      aria-hidden={decorative ? true : undefined}
      className={cn("block h-auto w-full", className)}
    />
  );
}

type NationalMotifChipProps = {
  className?: string;
};

/**
 * Стилизованный красно-золотой мотив түндүк, вдохновлённый национальной
 * символикой. Это ДЕКОРАТИВНЫЙ элемент дизайн-системы, а не официальный
 * флаг — всегда aria-hidden.
 */
export function NationalMotifChip({ className }: NationalMotifChipProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md",
        "bg-[var(--color-flag-red)] text-[var(--color-flag-gold)]",
        "shadow-[0_1px_4px_rgba(0,0,0,0.35)]",
        className,
      )}
    >
      <TundukMark className="h-3.5 w-3.5" strokeWidth={4.5} />
    </span>
  );
}

type NationalBadgeProps = {
  label?: string;
  className?: string;
};

/**
 * Компактный национальный бейдж: стилизованный мотив түндүк + подпись
 * «Кыргызстан». Знак кыргызской образовательной инициативы; официальную
 * государственную символику не изображает.
 */
export function NationalBadge({
  label = "Кыргызстан",
  className,
}: NationalBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 py-1 pl-1.5 pr-3 backdrop-blur-sm",
        className,
      )}
    >
      <NationalMotifChip />
      <span className="text-[11.5px] font-medium tracking-wide">{label}</span>
    </span>
  );
}
