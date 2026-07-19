import * as React from "react";
import { cn } from "@/lib/cn";

type MobileShellProps = {
  children: React.ReactNode;
  className?: string;
};

export function MobileShell({ children, className }: MobileShellProps) {
  return (
    <div className="relative flex min-h-[100dvh] w-full justify-center">
      {/* Тихий этнический узор на внешнем тёмном канвасе (desktop). */}
      <div
        aria-hidden
        className="pattern-ethnic-dark pointer-events-none fixed inset-0 hidden opacity-60 sm:block"
      />
      <div
        className={cn(
          "relative flex w-full max-w-[500px] min-h-[100dvh] flex-col bg-background",
          "sm:ring-1 sm:ring-accent/25",
          "shadow-[0_0_80px_rgba(0,0,0,0.55)]",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
