import * as React from "react";
import { cn } from "@/lib/cn";

type MobileShellProps = {
  children: React.ReactNode;
  className?: string;
};

export function MobileShell({ children, className }: MobileShellProps) {
  return (
    <div className="flex min-h-[100dvh] w-full justify-center bg-[#eae4d5]">
      <div
        className={cn(
          "relative flex w-full max-w-[500px] min-h-[100dvh] flex-col bg-background",
          "shadow-[0_0_60px_rgba(15,81,50,0.08)]",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
