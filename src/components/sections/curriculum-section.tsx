import { CURRICULUM } from "@/data/course-data";
import { SectionHeading } from "@/components/ui/section-heading";

export function CurriculumSection() {
  return (
    <section
      aria-labelledby="curriculum-title"
      className="px-5 pt-10"
      id="curriculum"
    >
      <SectionHeading
        eyebrow="Программа"
        title="Курстун негизги багыттары"
        description="Негизги көңүл Куран үйрөнүүгө жана туура окууга бурулат."
      />

      <ul className="mt-5 flex flex-col gap-3">
        {CURRICULUM.map(({ id, title, description, points, icon: Icon }) => (
          <li
            key={id}
            className="rounded-2xl border border-border bg-surface p-4 shadow-[var(--shadow-soft)]"
          >
            <div className="flex items-start gap-3">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-dark">
                <Icon aria-hidden className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[16px] font-semibold text-text">{title}</h3>
                <p className="text-[13.5px] leading-relaxed text-muted">
                  {description}
                </p>
              </div>
            </div>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {points.map((point) => (
                <li
                  key={point}
                  className="rounded-full border border-border bg-surface-soft/60 px-2.5 py-1 text-[12.5px] text-primary-dark"
                >
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
