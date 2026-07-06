"use client";

import * as React from "react";
import { UserPlus2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/config/site-config";
import { useRegistrationStore } from "@/store/registration-store";

export function StickyRegistrationBar() {
  const open = useRegistrationStore((s) => s.open);
  const isModalOpen = useRegistrationStore((s) => s.isOpen);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const nearBottom =
        window.innerHeight + scrolled >=
        document.documentElement.scrollHeight - 200;
      setVisible(scrolled > 320 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (isModalOpen) return null;

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-20 flex justify-center px-3 pointer-events-none transition-all duration-300",
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0",
      )}
      style={{
        paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 12px)",
      }}
    >
      <div
        className={cn(
          "w-full max-w-[476px] rounded-2xl border border-border/80 bg-surface/95 backdrop-blur",
          "shadow-[var(--shadow-elevated)] pointer-events-auto",
          "flex items-center justify-between gap-3 pl-4 pr-2 py-2",
        )}
      >
        <div className="flex flex-col leading-tight">
          <span className="text-[12px] font-medium text-primary-dark">
            Курс баштоо үчүн
          </span>
          <span className="text-[13px] text-muted">
            кеминде {siteConfig.minimumStudents} окуучу керек
          </span>
        </div>
        <button
          type="button"
          onClick={open}
          className={cn(
            "inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-xl bg-primary px-4 text-[14px] font-medium text-white",
            "shadow-[var(--shadow-soft)] transition-all active:scale-[0.97]",
          )}
        >
          <UserPlus2 aria-hidden className="h-4 w-4" />
          Баланы каттоо
        </button>
      </div>
    </div>
  );
}
