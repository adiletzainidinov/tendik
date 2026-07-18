"use client";

import * as React from "react";
import { UserPlus2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/config/site-config";
import { useRegistrationStore } from "@/store/registration-store";

export function SiteHeader() {
  const open = useRegistrationStore((s) => s.open);
  const [compact, setCompact] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-30 w-full backdrop-blur-md transition-all duration-300",
        compact
          ? "bg-background/85 border-b border-border/70"
          : "bg-background/60 border-b border-transparent",
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between gap-3 px-5",
          compact ? "py-2.5" : "py-3",
        )}
      >
        <a
          href="#top"
          className="group inline-flex items-center gap-2.5 rounded-xl px-1 py-1 -ml-1"
          aria-label={`${siteConfig.name} — башкы бет`}
        >
          <span
            aria-hidden
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white shadow-[var(--shadow-soft)]"
          >
            <BrandGlyph />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[15px] font-semibold tracking-[-0.01em] text-text">
              {siteConfig.name}
            </span>
            <span className="text-[11px] text-muted">
              {siteConfig.tagline}
            </span>
          </span>
        </a>
        <button
          type="button"
          onClick={open}
          className={cn(
            "inline-flex min-h-11 items-center gap-1.5 rounded-full px-3.5 text-[13px] font-medium",
            "bg-primary text-white shadow-[var(--shadow-soft)] transition-all active:scale-[0.97]",
          )}
        >
          <UserPlus2 aria-hidden className="h-4 w-4" />
          <span>Каттоо</span>
        </button>
      </div>
    </header>
  );
}

function BrandGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 3c3 1.7 5 4.8 5 8.3 0 4.2-3.1 7.7-7.3 8.5A9 9 0 0 0 21 12.5 9 9 0 0 0 12 3.5V3z"
        fill="#c89b3c"
      />
      <path
        d="M9.5 8.5c-.9.8-1.5 2-1.5 3.3 0 2.4 2 4.3 4.4 4.3.7 0 1.3-.1 1.9-.4-1 1.6-2.8 2.6-4.8 2.6a5.6 5.6 0 0 1-5.6-5.6c0-2.8 2-5.1 4.7-5.5-.4.3-.7.7-1.1 1.3z"
        fill="#ffffff"
      />
    </svg>
  );
}
