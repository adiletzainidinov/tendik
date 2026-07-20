import { cn } from "@/lib/cn";

type ShyrdakCornerProps = {
  className?: string;
  /** Поворот угла: по умолчанию верхний-левый. */
  corner?: "tl" | "tr" | "bl" | "br";
};

const ROTATION: Record<NonNullable<ShyrdakCornerProps["corner"]>, string> = {
  tl: "rotate-0",
  tr: "rotate-90",
  br: "rotate-180",
  bl: "-rotate-90",
};

/**
 * Угловой орнамент в духе шырдака (кочкор мүйүз, вписанный в угол
 * войлочной карточки). Наследует цвет через currentColor. Декоративный.
 */
export function ShyrdakCorner({ className, corner = "tl" }: ShyrdakCornerProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("h-9 w-9", ROTATION[corner], className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    >
      <path d="M4 4h13M4 4v13" strokeWidth="1.8" />
      <path d="M9 9c9 0 16 6 16 15" opacity="0.9" />
      <path d="M9 9c0 9 6 16 15 16" opacity="0.9" />
      <path d="M9 9c4.5 0 8 1.6 8 5.4 0 2.4-1.6 3.9-3.6 3.9-1.6 0-2.7-1-2.7-2.4" />
      <circle cx="27" cy="27" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
