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
    <div className="flex flex-col gap-1">
      {!expanded && lessons.length > 3 && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="mb-1 self-start rounded-lg bg-primary-soft px-3 py-1.5 text-[12.5px] font-medium text-primary-dark transition-colors hover:bg-accent-soft"
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
              className="rounded-xl border border-border bg-surface overflow-hidden"
            >
              <button
                id={buttonId}
                type="button"
                onClick={() => toggle(lesson.number)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex min-h-11 w-full items-center gap-2 px-3.5 py-2.5 text-left transition-colors hover:bg-surface-soft"
              >
                <span className="shrink-0 text-[12px] font-semibold text-primary-dark">
                  {lesson.number}-сабак
                </span>
                <span className="flex-1 text-[13.5px] leading-snug text-text">
                  {lesson.title}
                </span>
                <ChevronDown
                  aria-hidden
                  className={cn(
                    "h-4 w-4 shrink-0 text-muted transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
              {isOpen && (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="border-t border-border/60 px-3.5 py-3"
                >
                  <ul className="flex flex-col gap-1.5">
                    {lesson.topics.map((topic, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-[13px] leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden
                          className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                        />
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
          className="mt-1 self-start rounded-lg bg-surface-soft px-3 py-1.5 text-[12.5px] font-medium text-muted transition-colors hover:bg-primary-soft hover:text-primary-dark"
        >
          Жыйноо
        </button>
      )}
    </div>
  );
}
