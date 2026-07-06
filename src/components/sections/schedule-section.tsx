import { SCHEDULE } from "@/data/course-data";
import { SectionHeading } from "@/components/ui/section-heading";

export function ScheduleSection() {
  return (
    <section
      aria-labelledby="schedule-title"
      className="px-5 pt-10"
      id="schedule"
    >
      <SectionHeading
        eyebrow="Убакыт"
        title="Сабактардын күнү жана убактысы"
        description="Убакыт намаз убактыларына негизделген. Ошондуктан так саат эмес, намаз убактысы менен көрсөтүлөт."
      />

      <ol className="mt-5 flex flex-col gap-3">
        {SCHEDULE.map(({ id, title, description, icon: Icon }, index) => (
          <li
            key={id}
            className="relative flex gap-3 rounded-2xl border border-border bg-surface p-4 shadow-[var(--shadow-soft)]"
          >
            <div className="flex flex-col items-center">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white">
                <Icon aria-hidden className="h-4.5 w-4.5" strokeWidth={1.8} />
              </span>
              {index < SCHEDULE.length - 1 && (
                <span
                  aria-hidden
                  className="mt-1 h-full w-px flex-1 bg-border"
                />
              )}
            </div>
            <div className="flex flex-col gap-0.5 pb-0.5 pt-1">
              <p className="text-[15px] font-semibold text-text">{title}</p>
              <p className="text-[13.5px] leading-relaxed text-muted">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
