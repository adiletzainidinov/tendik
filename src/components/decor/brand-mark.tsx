import { cn } from "@/lib/cn";

type BrandMarkProps = {
  className?: string;
};

// 40 лучей солнца — короткие острые лучи вокруг диска.
const RAYS = Array.from({ length: 40 }, (_, i) => (
  <path key={i} d="M50 5 52.4 22 47.6 22Z" transform={`rotate(${i * 9} 50 50)`} />
));

// Тündük (шаңырак): три группы изогнутых линий-уук, повёрнутые на 60°,
// переплетаются в решётку — как крыша боз үй сверху.
const WEAVE_ANGLES = [0, 60, 120];

/**
 * Фирменный знак «Теңдик» — стилизованное солнце с түндүк (шаңырак):
 * 40 лучей, круговое кольцо и переплетённые изогнутые линии-уук внутри.
 * Воспроизводит мотив «солнце и түндүк». Локальный inline-SVG в
 * currentColor (цвет задаёт контейнер), без внешних ассетов и hotlink.
 *
 * Декоративный SVG: aria-hidden. Смысл бренда несёт текст «Теңдик» и
 * aria-label ссылки-лого. Это стилизованный брендовый знак, а не
 * воспроизведение официального государственного символа.
 */
export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("h-6 w-6", className)}
    >
      <g fill="currentColor">{RAYS}</g>
      <circle cx="50" cy="50" r="28.5" stroke="currentColor" strokeWidth="4.4" />
      <g
        stroke="currentColor"
        strokeWidth="3.2"
        fill="none"
        strokeLinecap="round"
      >
        {WEAVE_ANGLES.map((a) => (
          <g key={a} transform={`rotate(${a} 50 50)`}>
            <path d="M27 55 Q50 41 73 55" />
            <path d="M27 46 Q50 32 73 46" />
          </g>
        ))}
      </g>
    </svg>
  );
}
