import { cn } from "@/lib/cn";
import { TundukMark } from "@/components/decor/tunduk-mark";

/*
 * Стилизованные национальные мотивы дизайн-системы.
 *
 * Официальные государственные символы (флаг, герб Кыргызской Республики)
 * в UI сейчас отсутствуют и этим файлом не изображаются. Они будут
 * добавлены отдельным PR после ручной проверки источника — порядок описан
 * в ATTRIBUTION.md. Самодельные или приблизительные версии государственных
 * символов создавать нельзя.
 */

type NationalMotifChipProps = {
  className?: string;
};

/**
 * Красно-золотой декоративный мотив түндүк, вдохновлённый национальной
 * символикой. Официальным флагом не является — всегда aria-hidden.
 */
export function NationalMotifChip({ className }: NationalMotifChipProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md",
        "bg-[var(--color-national-red)] text-[var(--color-national-gold)]",
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
