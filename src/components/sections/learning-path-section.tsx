import { LEARNING_PATH } from "@/data/course-data";
import { SectionHeading } from "@/components/ui/section-heading";

export function LearningPathSection() {
  return (
    <section
      aria-labelledby="path-title"
      className="px-5 pt-10"
      id="learning-path"
    >
      <SectionHeading
        eyebrow="Окуучунун жолу"
        title="Тизмектүү өнүгүү тартиби"
        description="Ар бир бала өзүнүн деңгээлине жана үйрөнүү ылдамдыгына жараша өнүгөт."
      />

      <ol className="mt-5 flex flex-col gap-3" aria-label="Окуучунун жолу">
        {LEARNING_PATH.map((step, index) => (
          <li key={step.id} className="flex items-start gap-3">
            <span
              aria-hidden
              className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-primary/25 bg-primary-soft text-[14px] font-semibold text-primary-dark"
            >
              {index + 1}
            </span>
            <div className="flex-1 rounded-2xl border border-border bg-surface px-4 py-3 shadow-[var(--shadow-soft)]">
              <p className="text-[15px] font-semibold text-text">
                {step.title}
              </p>
              <p className="mt-0.5 text-[13.5px] leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
