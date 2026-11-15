import type { Metadata } from "next";
import Link from "next/link";
import { SitePageShell } from "@/components/layout/site-page-shell";
import { PUBLISHED_LESSON_GROUPS } from "@/data/published-lessons";

export const metadata: Metadata = {
  title: "Даяр сабактар — Теңдик",
  description: "80 сабактын алгачкы 6 сабагы: видеолор, ата-энелерге кыскача маалымат жана устазга эскертмелер.",
};

export default function ProgrammaPage() {
  return (
    <SitePageShell>
      <main className="px-5 py-8">
        <Link href="/" className="text-[13px] font-medium text-primary">← Башкы бетке кайтуу</Link>
        <h1 className="mt-5 text-[27px] font-bold text-text">Даяр сабактар</h1>
        <p className="mt-2 text-[14px] leading-relaxed text-muted">Бул видеолор устаздар үчүн даярдалган. Устаз ар бир сабактын алдында тиешелүү видеону көрүп, негизги ойлорун эстеп алат. Андан кийин балдарга видеону жөн эле көрсөтпөстөн, мазмунун өз сөзү менен жашына ылайык түшүндүрүп берет. Азыр 3 видео бар, алар кийин 6 өзүнчө сабакка бөлүнөт. Ар жума сайын дагы 2 сабак даярдалат.</p>
        <div className="mt-6 flex flex-col gap-4">
          {PUBLISHED_LESSON_GROUPS.map((lesson) => (
            <article key={lesson.id} className="rounded-2xl border border-border bg-surface p-4 shadow-[var(--shadow-soft)]">
              <h2 className="text-[17px] font-semibold text-text">{lesson.title}</h2>
              <a href={lesson.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-10 items-center rounded-xl bg-primary px-4 text-[13px] font-medium text-white">YouTube'дан көрүү ↗</a>
            </article>
          ))}
        </div>
      </main>
    </SitePageShell>
  );
}
