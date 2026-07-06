import { MOTIVATION } from "@/data/course-data";
import { SectionHeading } from "@/components/ui/section-heading";

export function MotivationSection() {
  return (
    <section
      aria-labelledby="motivation-title"
      className="px-5 pt-10"
      id="motivation"
    >
      <SectionHeading
        eyebrow="Мотивация"
        title="Балдар үчүн мотивация"
        description="Балдар сабактан кийин мечиттин тазалыгына салым кошуп, жоопкерчиликке жана тазалыкты сүйүүгө үйрөнүшөт."
      />

      <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {MOTIVATION.map(({ id, title, description, icon: Icon }) => (
          <li
            key={id}
            className="flex gap-3 rounded-2xl border border-border bg-surface p-3.5 shadow-[var(--shadow-soft)]"
          >
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-primary-dark">
              <Icon aria-hidden className="h-5 w-5" strokeWidth={1.8} />
            </span>
            <div className="flex flex-col">
              <p className="text-[14px] font-semibold text-text">{title}</p>
              <p className="mt-0.5 text-[12.5px] leading-relaxed text-muted">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-4 rounded-2xl border border-border bg-surface-soft/70 px-4 py-3 text-[13px] leading-relaxed text-muted">
        Бардык иштер балдардын жашына ылайыктуу жана чоңдордун көзөмөлү астында
        өтөт.
      </p>
    </section>
  );
}
