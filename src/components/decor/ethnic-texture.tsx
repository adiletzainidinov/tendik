import { cn } from "@/lib/cn";

type EthnicTextureProps = {
  /** Мотив накладываемой текстуры. */
  variant?: "felt" | "ornament-dark" | "ornament-light" | "kerege";
  className?: string;
  /** Дополнительная непрозрачность-обёртка через utility-класс. */
  opacityClassName?: string;
};

const VARIANT_CLASS: Record<
  NonNullable<EthnicTextureProps["variant"]>,
  string
> = {
  felt: "texture-felt",
  "ornament-dark": "pattern-ethnic-dark",
  "ornament-light": "pattern-ethnic-light",
  kerege: "pattern-kerege",
};

/**
 * Переиспользуемый декоративный слой материальности (войлок/орнамент/
 * кереге). Кладётся абсолютно поверх родителя с `position: relative`.
 * Всегда `aria-hidden`, не мешает тексту (низкая непрозрачность).
 *
 * Вариант `felt` использует ::after (feTurbulence), поэтому обёртка сама
 * является слоем; для остальных вариантов паттерн рисуется как фон.
 */
export function EthnicTexture({
  variant = "felt",
  className,
  opacityClassName = "opacity-40",
}: EthnicTextureProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0",
        VARIANT_CLASS[variant],
        opacityClassName,
        className,
      )}
    />
  );
}
