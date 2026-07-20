import * as React from "react";
import { cn } from "@/lib/cn";
import { MountainRange } from "@/components/decor/mountain-range";

type MobileShellProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Mobile-first оболочка (до 500px). На широких экранах окружающее
 * пространство — часть дизайна: решётка кереге по краям, силуэт гор
 * у нижней кромки и тёплое золотое свечение вокруг «полотна» контента.
 */
export function MobileShell({ children, className }: MobileShellProps) {
  return (
    <div className="relative flex min-h-[100dvh] w-full justify-center">
      {/* Внешний десктоп-канвас: решётка кереге + горы Ала-Тоо */}
      <div aria-hidden className="pointer-events-none fixed inset-0 hidden sm:block">
        <div className="pattern-kerege absolute inset-0 opacity-[0.06]" />
        <div className="absolute inset-x-0 bottom-0 text-[#12100e]">
          <MountainRange className="h-40" snow={false} />
        </div>
      </div>

      <div
        className={cn(
          "relative flex w-full max-w-[500px] min-h-[100dvh] flex-col bg-background",
          "sm:rounded-t-[28px] sm:border-x sm:border-accent/25",
          "shadow-[0_0_90px_rgba(0,0,0,0.6)]",
          className,
        )}
      >
        {/* Золотая нить по внешним краям полотна на десктопе */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 hidden w-px bg-gradient-to-b from-accent/50 via-transparent to-accent/30 sm:block"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-px bg-gradient-to-b from-accent/50 via-transparent to-accent/30 sm:block"
        />
        {children}
      </div>
    </div>
  );
}
