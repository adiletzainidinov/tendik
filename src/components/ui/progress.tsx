import * as React from "react";
import { cn } from "@/lib/cn";

type ProgressProps = {
  value: number;
  max: number;
  label?: string;
  className?: string;
};

export function Progress({ value, max, label, className }: ProgressProps) {
  const safeMax = Math.max(1, max);
  const clamped = Math.max(0, Math.min(value, safeMax));
  const percent = Math.round((clamped / safeMax) * 100);

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div
        className="relative h-2.5 w-full overflow-hidden rounded-full bg-primary-soft"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={safeMax}
        aria-valuenow={clamped}
        aria-label={label ?? "Каттоо прогресси"}
      >
        <div
          className="animate-progress h-full rounded-full bg-gradient-to-r from-primary to-primary-dark"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
