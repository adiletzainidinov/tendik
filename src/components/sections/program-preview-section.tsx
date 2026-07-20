import Link from "next/link";
import {
  BookOpenText,
  ChevronRight,
  Clock,
  ListChecks,
  MoonStar,
  Users,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site-config";
import { PROGRAM_MODULES } from "@/data/islam-foundations-program";
import { TundukMark } from "@/components/decor/tunduk-mark";
import { ShyrdakCorner } from "@/components/decor/shyrdak-corner";

export function ProgramPreviewSection() {
  const months = siteConfig.pricing.programDurationMonths;
  const { courseSchedule } = siteConfig;

  return (
    <section
      aria-labelledby="program-preview-title"
      className="px-5 pt-10"
      id="program"
    >
      <SectionHeading
        eyebrow="Окуу программасы"
        title="Исламдын негиздери"
        titleId="program-preview-title"
        description="Окуучулар Муаллим Сани, дубалар, даарат, намаз, ыйман, сира жана мусулмандык адеп-ахлак боюнча этап-этабы менен билим алышат."
      />

      {/* Главный показатель программы — войлочная поверхность */}
      <div className="surface-felt texture-felt relative mt-5 overflow-hidden rounded-3xl border border-accent/30 p-5 shadow-[var(--shadow-soft)]">
        <span
          aria-hidden
          className="edge-gold-top pointer-events-none absolute inset-x-0 top-0 h-px"
        />
        <ShyrdakCorner
          corner="tr"
          className="pointer-events-none absolute right-2.5 top-2.5 h-9 w-9 text-primary/25"
        />
        <div className="relative flex items-center gap-4">
          <span
            aria-hidden
            className="relative inline-flex h-16 w-16 shrink-0 items-center justify-center text-accent"
          >
            <TundukMark className="absolute inset-0 h-16 w-16 opacity-30" strokeWidth={1.6} />
            <span className="text-[30px] leading-none font-bold tracking-[-0.03em] text-primary">
              80
            </span>
          </span>
          <div className="flex flex-col gap-0.5">
            <span className="text-[16px] font-semibold leading-tight text-text">
              сабактан турган толук программа
            </span>
            <span className="text-[12.5px] text-muted">
              8 бөлүм · {months} ай · жаш куракка ылайык
            </span>
          </div>
        </div>

        {/* Путь знаний: вертикальная дорожка из 8 модулей-медальонов */}
        <ol className="relative mt-5 flex flex-col gap-0">
          {PROGRAM_MODULES.map((mod, i) => (
            <li key={mod.id} className="relative flex gap-3 pb-3 last:pb-0">
              {i < PROGRAM_MODULES.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[13px] top-7 bottom-0 w-px bg-gradient-to-b from-accent/70 to-accent/20"
                />
              )}
              <span className="z-10 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/60 bg-surface text-[10.5px] font-bold text-primary-dark shadow-[0_1px_3px_rgba(111,18,35,0.12)]">
                {mod.romanNumber}
              </span>
              <div className="flex min-w-0 flex-1 items-baseline justify-between gap-2 pt-1">
                <span className="truncate text-[13.5px] font-medium text-text">
                  {mod.title}
                </span>
                <span className="shrink-0 text-[11.5px] text-muted">
                  {mod.lessonRange}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Ключевые факты */}
      <div className="mt-3 grid grid-cols-2 gap-2">
        {[
          { value: "80 сабак", icon: ListChecks },
          { value: `${months} ай`, icon: MoonStar },
          { value: `${courseSchedule.startTime}дө башталат`, icon: Clock },
          {
            value: `${courseSchedule.minDurationHours}–${courseSchedule.maxDurationHours} саат`,
            icon: BookOpenText,
          },
          { value: "Жаш куракка ылайык", icon: Users },
        ].map((stat, i, arr) => (
          <div
            key={stat.value}
            className={
              "flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2.5 shadow-[var(--shadow-soft)]" +
              (i === arr.length - 1 && arr.length % 2 !== 0
                ? " col-span-2"
                : "")
            }
          >
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
              <stat.icon aria-hidden className="h-3.5 w-3.5" strokeWidth={2} />
            </span>
            <span className="text-[13px] font-medium leading-tight text-text">
              {stat.value}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
        {`Сабактар ${courseSchedule.startsAfterPrayer} намазынан кийин башталып, ${courseSchedule.dismissalBeforePrayer} намазына ${courseSchedule.dismissalBeforePrayerMinutes} мүнөт калганда аяктайт.`}
      </p>

      <Link
        href="/programma"
        className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-primary text-[15px] font-medium text-white shadow-[var(--shadow-soft)] transition-all hover:bg-primary-dark active:scale-[0.98]"
      >
        Толук программаны көрүү
        <ChevronRight aria-hidden className="h-4 w-4" />
      </Link>
    </section>
  );
}
