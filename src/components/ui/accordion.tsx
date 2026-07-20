"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export type AccordionItemData = {
  id: string;
  question: string;
  answer: string;
};

type AccordionProps = {
  items: readonly AccordionItemData[];
  className?: string;
};

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = React.useState<string | null>(null);

  return (
    <div className={cn("flex flex-col gap-2.5", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `faq-panel-${item.id}`;
        const triggerId = `faq-trigger-${item.id}`;
        return (
          <div
            key={item.id}
            className={cn(
              "relative overflow-hidden rounded-2xl border bg-surface shadow-[var(--shadow-soft)] transition-colors",
              isOpen ? "border-accent/50" : "border-border",
            )}
          >
            {isOpen && (
              <span
                aria-hidden
                className="absolute inset-y-0 left-0 w-[3px] bg-accent"
              />
            )}
            <h3 className="m-0">
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-left",
                  "min-h-11 text-[15px] font-medium text-text",
                  "transition-colors hover:bg-primary-soft/40",
                )}
              >
                <svg
                  aria-hidden
                  viewBox="0 0 8 8"
                  className={cn(
                    "h-2 w-2 shrink-0 transition-colors",
                    isOpen ? "text-accent" : "text-primary/50",
                  )}
                >
                  <path d="M4 0l4 4-4 4-4-4z" fill="currentColor" />
                </svg>
                <span className="flex-1">{item.question}</span>
                <ChevronDown
                  aria-hidden
                  className={cn(
                    "h-5 w-5 shrink-0 text-primary transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
              className={cn(
                "grid overflow-hidden px-4 pl-9 text-[15px] leading-relaxed text-muted",
                isOpen ? "pb-4" : "pb-0",
              )}
            >
              {isOpen && <p className="animate-fade-in">{item.answer}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
