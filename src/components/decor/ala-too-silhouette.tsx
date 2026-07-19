import { cn } from "@/lib/cn";

type AlaTooSilhouetteProps = {
  className?: string;
};

/**
 * Силуэт гор Ала-Тоо в два плана. Рисуется currentColor с разной
 * прозрачностью слоёв — работает на любом фоне. Только декоративный.
 */
export function AlaTooSilhouette({ className }: AlaTooSilhouetteProps) {
  return (
    <svg
      viewBox="0 0 500 110"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden
      className={cn("block h-auto w-full", className)}
    >
      <path
        d="M0 110V72l42-30 34 22 46-40 38 28 52-44 48 36 40-26 44 32 36-20 46 34 34-18 40 26v38H0z"
        fill="currentColor"
        opacity="0.35"
      />
      <path
        d="M0 110V88l56-34 40 24 58-42 46 32 54-36 52 38 46-24 52 34 48-22 48 30v42H0z"
        fill="currentColor"
        opacity="0.75"
      />
    </svg>
  );
}
