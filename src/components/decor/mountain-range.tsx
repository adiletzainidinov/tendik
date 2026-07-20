import { cn } from "@/lib/cn";

type MountainRangeProps = {
  className?: string;
  /** Показать снежные вершины (золотой блик). */
  snow?: boolean;
};

/**
 * Многослойный силуэт гор Ала-Тоо: дальний хребет, ближний хребет и
 * подножие, с опциональными снежными вершинами. Наследует цвет через
 * currentColor (тело гор), снег — золото. Декоративный.
 */
export function MountainRange({ className, snow = true }: MountainRangeProps) {
  return (
    <svg
      viewBox="0 0 500 140"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden
      className={cn("block h-auto w-full", className)}
    >
      {/* дальний хребет */}
      <path
        d="M0 140V70l60-40 46 30 58-46 50 38 66-52 60 46 52-34 58 44v40z"
        fill="currentColor"
        opacity="0.28"
      />
      {/* ближний хребет */}
      <path
        d="M0 140V96l70-52 52 34 40-30 64 48 44-34 58 44 52-30 60 46v44z"
        fill="currentColor"
        opacity="0.7"
      />
      {snow && (
        <g fill="var(--color-accent)" opacity="0.85">
          {/* снежные шапки на ближних пиках */}
          <path d="M70 44l14 9-7 3-7-4-7 5 3-9z" opacity="0.9" />
          <path d="M226 44l12 9-6 3-6-4-8 5 4-9z" opacity="0.75" />
          <path d="M338 44l12 9-6 3-6-4-7 5 3-9z" opacity="0.8" />
        </g>
      )}
    </svg>
  );
}
