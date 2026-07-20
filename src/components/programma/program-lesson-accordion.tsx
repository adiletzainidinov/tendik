"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ProgramLesson } from "@/types/islam-program";

type ProgramLessonAccordionProps = {
  lessons: readonly ProgramLesson[];
  moduleId: string;
};

export function ProgramLessonAccordion({
  lessons,
  moduleId,
}: ProgramLessonAccordionProps) {
  const [openLesson, setOpenLesson] = React.useState<number | null>(null);
  const [expanded, setExpanded] = React.useState(false);

  const toggle = (num: number) => {
    setOpenLesson((prev) => (prev === num ? null : num));
  };

  return (
    <div className="flex flex-col gap-1.5">
      {!expanded && lessons.length > 3 && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="mb-1 min-h-11 self-start rounded-xl border border-accent/30 bg-accent-soft px-3.5 py-1.5 text-[12.5px] font-medium text-primary-dark transition-colors hover:bg-accent/25"
        >
          Сабактарды көрсөтүү ({lessons.length})
        </button>
      )}

      {(expanded || lessons.length <= 3) &&
        lessons.map((lesson) => {
          const isOpen = openLesson === lesson.number;
          const panelId = `${moduleId}-lesson-${lesson.number}-panel`;
          const buttonId = `${moduleId}-lesson-${lesson.number}-btn`;

          return (
            <div
              key={lesson.number}
              className={cn(
                "overflow-hidden rounded-xl border bg-surface transition-colors duration-200",
                isOpen
                  ? "border-accent/45 shadow-[var(--shadow-soft)]"
                  : "border-border",
              )}
            >
              <button
                id={buttonId}
                type="button"
                onClick={() => toggle(lesson.number)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex min-h-11 w-full items-center gap-2.5 px-3.5 py-2.5 text-left transition-colors hover:bg-surface-soft"
              >
                <span
                  className={cn(
                    "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[11.5px] font-bold transition-colors",
                    isOpen
                      ? "border-accent bg-primary text-accent"
                      : "border-accent/40 bg-primary-soft text-primary-dark",
                  )}
                >
                  {lesson.number}
                </span>
                <span className="flex-1 text-[13.5px] leading-snug font-medium text-text">
                  {lesson.title}
                </span>
                <ChevronDown
                  aria-hidden
                  className={cn(
                    "h-4 w-4 shrink-0 text-muted transition-transform duration-200",
                    isOpen && "rotate-180 text-primary",
                  )}
                />
              </button>
              {isOpen && (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="animate-fade-in border-t border-accent/25 bg-surface-soft/40 px-3.5 py-3"
                >
                  <ul className="flex flex-col gap-1.5">
                    {lesson.topics.map((topic, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-[13px] leading-relaxed text-muted"
                      >
                        <svg
                          aria-hidden
                          viewBox="0 0 8 8"
                          className="mt-[6.5px] h-1.5 w-1.5 shrink-0 text-accent"
                        >
                          <path d="M4 0l4 4-4 4-4-4z" fill="currentColor" />
                        </svg>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}

      {expanded && lessons.length > 3 && (
        <button
          type="button"
          onClick={() => {
            setExpanded(false);
            setOpenLesson(null);
          }}
          className="mt-1 min-h-11 self-start rounded-xl bg-surface-soft px-3.5 py-1.5 text-[12.5px] font-medium text-muted transition-colors hover:bg-primary-soft hover:text-primary-dark"
        >
          Жыйноо
        </button>
      )}
    </div>
  );
}
