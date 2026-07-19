import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site-config";
import {
  AGE_ADAPTATIONS,
  ASSESSMENT_CATEGORIES,
  ASSESSMENT_LEVELS,
  EXPECTED_OUTCOMES,
  LESSON_SCHEDULE,
  MONTHLY_REPORT_ITEMS,
  MUALLIM_PHASES,
  PROGRAM_MODULES,
  PROGRAM_OBJECTIVES,
  SOFT_ASSESSMENT_LABELS,
  YOUNG_CHILDREN_NOTE,
} from "@/data/islam-foundations-program";
import { ProgramLessonAccordion } from "@/components/programma/program-lesson-accordion";
import { ProgramRegistrationCta } from "@/components/programma/program-registration-cta";

export function ProgramContent() {
  const { courseSchedule } = siteConfig;

  return (
    <div className="flex flex-col">
      {/* Objective */}
      <section className="px-5 pt-8" id="objective" aria-labelledby="objective-title">
        <SectionHeading title="Программанын негизги максаты" titleId="objective-title" />
        <p className="mt-2 text-[14px] leading-relaxed text-muted">
          Окуучуларга:
        </p>
        <ul className="mt-2 flex flex-col gap-1.5">
          {PROGRAM_OBJECTIVES.map((obj, i) => (
            <li key={i} className="flex items-start gap-2 text-[13.5px] leading-relaxed text-text">
              <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {obj.text}
            </li>
          ))}
        </ul>
      </section>

      {/* Table of Contents */}
      <section className="px-5 pt-8" id="toc" aria-labelledby="toc-title">
        <SectionHeading title="Мазмуну" titleId="toc-title" />
        <nav className="mt-3">
          <ul className="grid grid-cols-2 gap-1.5">
            {[
              { label: "Программанын максаты", href: "#objective" },
              { label: "Окуу күнүнүн түзүлүшү", href: "#schedule-structure" },
              { label: "Муаллим Сани", href: "#muallim-sani" },
              ...PROGRAM_MODULES.map((m) => ({
                label: `${m.romanNumber} бөлүм`,
                href: `#${m.id}`,
              })),
              { label: "Жаш курак", href: "#age-adaptation" },
              { label: "Күтүлгөн натыйжа", href: "#outcomes" },
              { label: "Баалоо", href: "#assessment" },
              { label: "Айлык отчет", href: "#monthly-report" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex min-h-9 items-center rounded-lg border border-border bg-surface px-2.5 py-1.5 text-[12.5px] font-medium text-primary-dark transition-colors hover:border-accent/40 hover:bg-accent-soft"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* Lesson schedule structure */}
      <section
        className="scroll-mt-16 px-5 pt-8"
        id="schedule-structure"
        aria-labelledby="schedule-structure-title"
      >
        <SectionHeading
          eyebrow="Бир окуу күнү"
          title="Сабактын ийкемдүү түзүлүшү"
          titleId="schedule-structure-title"
          description={`Сабактар ${courseSchedule.startsAfterPrayer} намазынан кийин, саат ${courseSchedule.startTime}дө башталат. Окуучулар ${courseSchedule.dismissalBeforePrayer} намазына ${courseSchedule.dismissalBeforePrayerMinutes} мүнөт калганда үйлөрүнө жөнөтүлөт. Ошондуктан окуу күнү мезгилге жараша болжол менен ${courseSchedule.minDurationHours}–${courseSchedule.maxDurationHours} саатка созулат.`}
        />
        <div className="mt-3 flex flex-col gap-1">
          {LESSON_SCHEDULE.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-surface px-3.5 py-2.5"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary-soft text-[11px] font-bold text-primary-dark">
                  {i + 1}
                </span>
                <span className="text-[13.5px] font-medium text-text">
                  {item.title}
                </span>
              </div>
              {item.details && (
                <ul className="mt-1.5 flex flex-col gap-0.5 pl-8">
                  {item.details.map((d, j) => (
                    <li key={j} className="text-[12.5px] text-muted">
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <p className="mt-2.5 text-[12.5px] leading-relaxed text-muted">
          Муаллим Сани — окуу күнүнүн негизги багыттарынын бири. Ага бөлүнгөн
          убакыт окуучулардын деңгээлине жана ошол күндүн жалпы узактыгына жараша
          аныкталат.
        </p>
        <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">
          {`Так аяктоо убактысы мезгилге жана ${courseSchedule.dismissalBeforePrayer} намазынын убактысына жараша ата-энелерге алдын ала маалымдалат.`}
        </p>
        <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">
          Этаптардын узактыгы ийкемдүү өзгөрөт. Так мүнөттөр белгиленбейт.
        </p>
      </section>

      {/* Muallim Sani progression */}
      <section
        className="scroll-mt-16 px-5 pt-8"
        id="muallim-sani"
        aria-labelledby="muallim-sani-title"
      >
        <SectionHeading
          title="Муаллим Санинин 80 сабактагы багыты"
          titleId="muallim-sani-title"
          description="Ар бир окуучу китепти өзүнүн деңгээлине жараша өтөт."
        />
        <div className="mt-3 flex flex-col gap-2">
          {MUALLIM_PHASES.map((phase) => (
            <Card key={phase.range} tone="soft" className="!p-3.5">
              <span className="text-[12.5px] font-semibold text-primary-dark">
                {phase.range}
              </span>
              <ul className="mt-1.5 flex flex-col gap-1">
                {phase.topics.map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-text">
                    <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                    {t}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Modules with lessons */}
      <section className="scroll-mt-16 pt-8" id="lessons" aria-labelledby="lessons-title">
        <div className="px-5">
          <SectionHeading
            eyebrow="80 сабак"
            title="Негизги бөлүмдөр"
            titleId="lessons-title"
          />
        </div>

        <div className="mt-4 flex flex-col gap-6 px-5">
          {PROGRAM_MODULES.map((mod) => (
            <div
              key={mod.id}
              id={mod.id}
              className="scroll-mt-16"
            >
              <div className="decor-hero relative flex items-center gap-2.5 overflow-hidden rounded-2xl px-4 py-3.5 text-white shadow-[var(--shadow-soft)]">
                <div
                  aria-hidden
                  className="pattern-ethnic-dark pointer-events-none absolute inset-0 opacity-35"
                />
                <span className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-accent/50 bg-white/[0.08] text-[13px] font-bold text-[#f2cf6f]">
                  {mod.romanNumber}
                </span>
                <div className="relative flex flex-col leading-tight">
                  <span className="text-[14.5px] font-semibold text-white">
                    {mod.title}
                  </span>
                  <span className="text-[12px] text-white/70">
                    {mod.lessonRange}-сабактар · {mod.lessons.length} сабак
                  </span>
                </div>
              </div>
              <div className="mt-2">
                <ProgramLessonAccordion
                  lessons={mod.lessons}
                  moduleId={mod.id}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Age adaptation */}
      <section
        className="scroll-mt-16 px-5 pt-8"
        id="age-adaptation"
        aria-labelledby="age-adaptation-title"
      >
        <SectionHeading
          title="Жаш куракка жараша ыңгайлаштыруу"
          titleId="age-adaptation-title"
        />
        <div className="mt-3 flex flex-col gap-2">
          {AGE_ADAPTATIONS.map((age) => (
            <Card key={age.id} tone="soft" className="!p-3.5">
              <span className="text-[14px] font-semibold text-primary-dark">
                {age.ageRange}
              </span>
              {age.note && (
                <p className="mt-1 rounded-lg bg-accent-soft/60 px-2.5 py-1.5 text-[12.5px] font-medium text-primary-dark">
                  {age.note}
                </p>
              )}
              <ul className="mt-2 flex flex-col gap-1">
                {age.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-text">
                    <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    {p}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Expected outcomes */}
      <section
        className="scroll-mt-16 px-5 pt-8"
        id="outcomes"
        aria-labelledby="outcomes-title"
      >
        <SectionHeading
          title="80 сабактан кийинки күтүлгөн натыйжа"
          titleId="outcomes-title"
          description="Натыйжа ар бир окуучунун жашына, деңгээлине жана мүмкүнчүлүгүнө жараша бааланат."
        />
        <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
          Программаны толук бүтүргөн окуучу өзүнүн жашына жана мүмкүнчүлүгүнө
          жараша:
        </p>
        <ul className="mt-3 flex flex-col gap-1.5">
          {EXPECTED_OUTCOMES.map((outcome, i) => (
            <li key={i} className="flex items-start gap-2 text-[13.5px] leading-relaxed text-text">
              <CheckCircle2 aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.8} />
              {outcome}
            </li>
          ))}
        </ul>
        <Card tone="soft" className="mt-3 !p-3.5">
          <p className="text-[13px] leading-relaxed text-primary-dark">
            {YOUNG_CHILDREN_NOTE}
          </p>
        </Card>
      </section>

      {/* Assessment system */}
      <section
        className="scroll-mt-16 px-5 pt-8"
        id="assessment"
        aria-labelledby="assessment-title"
      >
        <SectionHeading title="Баалоо системасы" titleId="assessment-title" />

        <div className="mt-3 flex flex-col gap-1.5">
          {ASSESSMENT_CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className="flex items-center justify-between rounded-xl border border-border bg-surface px-3.5 py-2.5"
            >
              <span className="text-[13.5px] text-text">{cat.name}</span>
              <span className="shrink-0 text-[14px] font-semibold text-primary-dark">
                {cat.points} балл
              </span>
            </div>
          ))}
          <div className="flex items-center justify-between rounded-xl border border-primary/30 bg-primary-soft px-3.5 py-2.5">
            <span className="text-[14px] font-semibold text-primary-dark">
              Жалпы
            </span>
            <span className="text-[15px] font-bold text-primary-dark">
              100 балл
            </span>
          </div>
        </div>

        {/* Progress bar representation */}
        <div className="mt-3 overflow-hidden rounded-lg" role="img" aria-label="Баалоо пропорциясы: 100 баллдан">
          <div className="flex h-5">
            {ASSESSMENT_CATEGORIES.map((cat, i) => {
              const colors = [
                "bg-primary",
                "bg-accent",
                "bg-primary-dark",
                "bg-primary/70",
                "bg-accent/70",
              ];
              return (
                <div
                  key={cat.name}
                  className={cn(colors[i], "flex items-center justify-center")}
                  style={{ width: `${cat.points}%` }}
                  title={`${cat.name}: ${cat.points}`}
                >
                  <span className="text-[10px] font-bold text-white">
                    {cat.points}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-3 flex flex-col gap-1">
          {ASSESSMENT_LEVELS.map((level) => (
            <div
              key={level.range}
              className="flex items-center justify-between rounded-lg bg-surface-soft/70 px-3 py-2"
            >
              <span className="text-[13px] font-medium text-primary-dark">
                {level.range} балл
              </span>
              <span className="text-[13px] text-muted">{level.label}</span>
            </div>
          ))}
        </div>

        <Card tone="soft" className="mt-3 !p-3.5">
          <p className="text-[12.5px] font-medium text-primary-dark">
            Кичинекей балдарга балл коюунун ордуна жумшак баалоо колдонулат:
          </p>
          <ul className="mt-1.5 flex flex-wrap gap-1.5">
            {SOFT_ASSESSMENT_LABELS.map((label) => (
              <li
                key={label}
                className="rounded-full bg-accent-soft px-2.5 py-1 text-[11.5px] font-medium text-primary-dark"
              >
                {label}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* Monthly report */}
      <section
        className="scroll-mt-16 px-5 pt-8"
        id="monthly-report"
        aria-labelledby="monthly-report-title"
      >
        <SectionHeading
          title="Ата-энеге берилүүчү айлык отчет"
          titleId="monthly-report-title"
          description="Ар бир айдын аягында ата-энеге төмөнкү маалымат берилет:"
        />
        <ul className="mt-3 flex flex-col gap-1.5">
          {MONTHLY_REPORT_ITEMS.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-2.5 rounded-xl border border-border bg-surface px-3.5 py-2.5"
            >
              <CheckCircle2
                aria-hidden
                className="h-4 w-4 shrink-0 text-primary"
                strokeWidth={1.8}
              />
              <span className="text-[13.5px] text-text">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Final CTA */}
      <ProgramRegistrationCta />
    </div>
  );
}
