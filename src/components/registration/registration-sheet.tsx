"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";
import { useRegistrationStore } from "@/store/registration-store";
import { RegistrationForm } from "./registration-form";

export function RegistrationSheet() {
  const isOpen = useRegistrationStore((s) => s.isOpen);
  const close = useRegistrationStore((s) => s.close);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const previouslyFocused = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (!isOpen) return;
    previouslyFocused.current =
      (document.activeElement as HTMLElement | null) ?? null;
    document.body.classList.add("scroll-lock");
    const focusTimer = window.setTimeout(() => {
      const first = containerRef.current?.querySelector<HTMLElement>(
        'input:not([disabled]), button:not([disabled]), textarea, select, [tabindex]:not([tabindex="-1"])',
      );
      first?.focus();
    }, 60);
    return () => {
      document.body.classList.remove("scroll-lock");
      window.clearTimeout(focusTimer);
      previouslyFocused.current?.focus?.();
    };
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key === "Tab" && containerRef.current) {
        const focusable = containerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input:not([disabled]), select, [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first || !last) return;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="registration-title"
      aria-hidden={!isOpen}
      className={cn(
        "fixed inset-0 z-50 flex items-end justify-center",
        "transition-opacity duration-200",
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
      )}
    >
      <button
        type="button"
        aria-label="Форманы жабуу"
        onClick={close}
        tabIndex={isOpen ? 0 : -1}
        className="absolute inset-0 bg-[#2a0910]/55 backdrop-blur-[3px]"
      />

      <div
        ref={containerRef}
        className={cn(
          "relative flex w-full max-w-[500px] flex-col overflow-hidden",
          "max-h-[92dvh]",
          "bg-background shadow-[0_-10px_44px_rgba(74,10,22,0.35)]",
          "border border-accent/30",
          "rounded-t-3xl",
          "transition-transform duration-300 ease-out",
          isOpen ? "translate-y-0" : "translate-y-full",
        )}
      >
        {/* Золотая орнаментальная кромка листа */}
        <div
          aria-hidden
          className="h-[3px] w-full shrink-0 bg-gradient-to-r from-primary via-accent to-primary"
        />
        <div
          aria-hidden
          className="mx-auto mt-2 h-1 w-10 shrink-0 rounded-full bg-border"
        />
        <div className="surface-felt flex items-start justify-between gap-3 border-b border-accent/20 px-5 pt-2 pb-3">
          <div className="flex flex-col">
            <span className="inline-flex items-center gap-1.5 text-[12px] font-medium tracking-wide text-primary uppercase">
              <svg aria-hidden viewBox="0 0 8 8" className="h-2 w-2 text-accent">
                <path d="M4 0l4 4-4 4-4-4z" fill="currentColor" />
              </svg>
              Каттоо
            </span>
            <h2
              id="registration-title"
              className="text-[18px] font-semibold text-text"
            >
              Баланы курска каттоо
            </h2>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Форманы жабуу"
            tabIndex={isOpen ? 0 : -1}
            className={cn(
              "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
              "border border-border bg-surface text-primary-dark transition-colors hover:bg-primary-soft",
            )}
          >
            <X aria-hidden className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-1 min-h-0 flex-col">
          {isOpen && <RegistrationForm />}
        </div>
      </div>
    </div>
  );
}
