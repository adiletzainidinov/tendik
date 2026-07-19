"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/config/site-config";
import { NavigationDrawer } from "@/components/layout/navigation-drawer";
import { TundukMark } from "@/components/decor/tunduk-mark";

export function SiteHeader() {
  const [compact, setCompact] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const menuButtonRef = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-30 w-full backdrop-blur-lg transition-all duration-300",
          compact
            ? "bg-background/85 border-b border-accent/25 shadow-[0_6px_24px_rgba(111,18,35,0.06)]"
            : "bg-background/55 border-b border-transparent",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between gap-3 px-5 transition-all duration-300",
            compact ? "py-2" : "py-3",
          )}
        >
          <Link
            href="/"
            className="group -ml-1 inline-flex items-center gap-2.5 rounded-xl px-1 py-1"
            aria-label={`${siteConfig.name} — башкы бет`}
          >
            <span
              aria-hidden
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-accent shadow-[var(--shadow-soft)] transition-transform duration-200 group-hover:scale-105"
            >
              <TundukMark className="h-5.5 w-5.5" strokeWidth={3} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[15.5px] font-semibold tracking-[-0.01em] text-text">
                {siteConfig.name}
              </span>
              <span className="text-[11px] text-muted">
                {siteConfig.tagline}
              </span>
            </span>
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Менюну ачуу"
            aria-expanded={drawerOpen}
            aria-controls="navigation-drawer"
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-full",
              "border border-accent/25 bg-surface text-primary-dark",
              "transition-all hover:bg-accent-soft active:scale-[0.95]",
            )}
          >
            <Menu aria-hidden className="h-5 w-5" />
          </button>
        </div>
        {/* Тонкая золотая лента под шапкой. */}
        <div
          aria-hidden
          className={cn(
            "h-px w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent transition-opacity duration-300",
            compact ? "opacity-100" : "opacity-0",
          )}
        />
      </header>
      <NavigationDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        triggerRef={menuButtonRef}
      />
    </>
  );
}
