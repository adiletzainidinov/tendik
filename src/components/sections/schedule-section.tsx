import { SCHEDULE } from "@/data/course-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site-config";

export function ScheduleSection() {
  const { courseSchedule } = siteConfig;

  return (
    <section
      aria-labelledby="schedule-title"
      className="px-5 pt-10"
      id="schedule"
    >
      <SectionHeading
        eyebrow="Убакыт"
        title="Сабактардын күнү жана убактысы"
        titleId="schedule-title"
        description="Убакыт намаз убактыларына негизделген. Ошондуктан так саат эмес, намаз убактысы менен көрсөтүлөт."
      />

      <div className="mt-5 grid grid-cols-2 gap-2">
        {SCHEDULE.map(({ id, title, description, icon: Icon }) => (
          <div
            key={id}
            className="flex flex-col gap-2 rounded-2xl border border-border bg-surface p-4 shadow-[var(--shadow-soft)]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white">
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

      <p className="mt-3 rounded-xl bg-surface-soft/70 px-3.5 py-2.5 text-[12.5px] leading-relaxed text-muted">
        Так убакыт мезгилге жана намаз убактысына жараша өзгөрөт. Жайында сабак
        ≈ {courseSchedule.summerApproximateEndTime}гө чейин созулушу мүмкүн.
      </p>
    </section>
  );
}
