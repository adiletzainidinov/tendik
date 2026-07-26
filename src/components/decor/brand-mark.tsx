import { cn } from "@/lib/cn";

type BrandMarkProps = {
  className?: string;
  /** Толщина линий эмблемы. Крупнее — для маленьких размеров. */
  strokeWidth?: number;
};

/**
 * Фирменный знак «Теңдик» — круглая эмблема с восьмиконечной исламской
 * звездой (хатам / رب الحزب), образованной двумя наложенными квадратами,
 * в двойном кольце с центральной точкой. Чистый геометрический вектор,
 * читается на светлом и тёмном фоне, хорошо смотрится в маленьком круглом
 * контейнере. Рисуется в currentColor — цвет задаёт контейнер.
 *
 * Декоративный: сам SVG помечен aria-hidden. Смысловую подпись бренда
 * даёт текст «Теңдик» и aria-label родительской ссылки/лого.
 *
 * (Реализовано локально как самостоятельный SVG — без внешних ассетов и
 * без hotlink.)
 */
export function BrandMark({ className, strokeWidth = 2.2 }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("h-6 w-6", className)}
    >
      {/* Двойное кольцо-оправа */}
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle
        cx="24"
        cy="24"
        r="18.4"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.7}
        opacity="0.7"
      />
      {/* Восьмиконечная звезда: два наложенных квадрата */}
      <g
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      >
        <path d="M24 9.5 39 24 24 38.5 9 24Z" />
        <path d="M13.4 13.4H34.6V34.6H13.4Z" />
      </g>
      {/* Центр */}
      <circle cx="24" cy="24" r="2.7" fill="currentColor" />
    </svg>
  );
}
