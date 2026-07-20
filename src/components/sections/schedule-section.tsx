import { SCHEDULE } from "@/data/course-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site-config";
import { EthnicDivider } from "@/components/decor/ethnic-divider";

// Системные, но различимые акценты для четырёх карт расписания.
const CARD_ACCENT = [
  "bg-primary-soft text-primary",
  "bg-accent-soft text-accent",
  "bg-forest-soft text-forest",
  "bg-clay-soft text-clay",
] as const;

export function ScheduleSection() {
  const { courseSchedule } = siteConfig;

  return (
    <section
      aria-labelledby="schedule-title"
      className="px-5 pt-10"
      id="schedule"
    >
      <EthnicDivider variant="belt" className="mb-7" />

      <SectionHeading
        eyebrow="Убакыт"
        title="Сабактардын күнү жана убактысы"
        titleId="schedule-title"
        description={`Сабактар ${courseSchedule.startsAfterPrayer} намазынан кийин, саат ${courseSchedule.startTime}дө башталып, ${courseSchedule.dismissalBeforePrayer} намазына ${courseSchedule.dismissalBeforePrayerMinutes} мүнөт калганда аяктайт. Ошондуктан окуу күнүнүн узактыгы мезгилге жараша өзгөрөт.`}
      />

      {/* Четыре факта как одна композиция на решётке кереге */}
      <div className="relative mt-5 overflow-hidden rounded-3xl border border-border bg-surface p-3 shadow-[var(--shadow-soft)]">
        <div
          aria-hidden
          className="pattern-kerege pointer-events-none absolute inset-0 text-accent opacity-[0.05]"
        />
        <div className="relative grid grid-cols-2 gap-2.5">
          {SCHEDULE.map(({ id, title, description, icon: Icon }, i) => (
            <div
              key={id}
              className="flex flex-col gap-2.5 rounded-2xl border border-border/70 bg-surface p-3.5"
            >
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-xl ${CARD_ACCENT[i % CARD_ACCENT.length]}`}
              >
                <Icon aria-hidden className="h-4.5 w-4.5" strokeWidth={1.8} />
              </span>
              <div className="flex flex-col gap-0.5">
                <p className="text-[14px] font-semibold leading-tight text-text">
                  {title}
                </p>
                <p className="text-[12.5px] leading-relaxed text-muted">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-3 rounded-xl border border-accent/25 bg-accent-soft/60 px-3.5 py-2.5 text-[12.5px] leading-relaxed text-primary-dark/90">
        {`Так аяктоо убактысы мезгилге жана ${courseSchedule.dismissalBeforePrayer} намазынын убактысына жараша ата-энелерге алдын ала маалымдалат. Жайында сабак ${courseSchedule.summerApproximateEndTime} чамасына чейин созулушу мүмкүн.`}
      </p>
    </section>
  );
}
