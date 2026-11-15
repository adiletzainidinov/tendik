import Link from "next/link";
import { ChevronRight, PlayCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { PUBLISHED_LESSON_GROUPS } from "@/data/published-lessons";

export function ProgramPreviewSection() {
  return (
    <section aria-labelledby="program-preview-title" className="px-5 pt-10" id="program">
      <SectionHeading eyebrow="Окуу материалдары" title="Алгачкы 6 сабак даяр" titleId="program-preview-title" description="80 сабактын алгачкы алтоосу үч видеого бириктирилген. Жакында ар бири өзүнчө бөлүнөт. Ар жума сайын дагы 2 сабак даярдалат." />
      <div className="mt-5 flex flex-col gap-3">
        {PUBLISHED_LESSON_GROUPS.map((lesson) => (
          <a key={lesson.id} href={lesson.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-4 shadow-[var(--shadow-soft)]">
            <PlayCircle aria-hidden className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
            <div><p className="text-[14px] font-semibold text-text">{lesson.title}</p><p className="mt-1 text-[12.5px] leading-relaxed text-muted">{lesson.parentSummary}</p><span className="mt-2 inline-block text-[12px] font-semibold text-primary">Видеону көрүү ↗</span></div>
          </a>
        ))}
      </div>
      <Link href="/programma" className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-primary text-[15px] font-medium text-white">Сабактар жана устазга эскертмелер <ChevronRight aria-hidden className="h-4 w-4" /></Link>
    </section>
  );
}
