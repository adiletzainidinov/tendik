import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BENEFITS } from "@/data/course-data";
import { SectionHeading } from "@/components/ui/section-heading";

const EXPECTED_OUTCOMES = [
  "Араб тамгаларын таануу жана Куран окууга даярдык",
  "Даараттын жана намаздын негизги тартиби",
  "Күнүмдүк дубаларды билүү",
  "Жакшы адеп, тазалык жана жоопкерчилик",
] as const;

export function BenefitsSection() {
  return (
    <section
      aria-labelledby="value-title"
      className="px-5 pt-10"
      id="value"
    >
      <SectionHeading
        eyebrow="Балаңыз үчүн баалуулук"
        title="Бул жөн гана курс эмес — ыйманга, Куранга жана жакшы адепке бекем негиз"
        titleId="value-title"
        description="Бала Куран окууну гана эмес, даарат, намаз, дуба жана мусулмандык адепти күнүмдүк жашоосунда колдонууга акырындык менен үйрөнөт."
      />

      <div className="mt-5 flex flex-col gap-3">
        {BENEFITS.map(({ id, title, description, icon: Icon }) => (
          <div
            key={id}
            className="flex gap-3 rounded-2xl border border-border bg-surface p-4 shadow-[var(--shadow-soft)]"
          >
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-dark">
              <Icon aria-hidden className="h-5 w-5" strokeWidth={1.8} />
            </span>
            <div className="flex flex-col gap-1">
              <p className="text-[14px] font-semibold leading-snug text-text">
                {title}
              </p>
              {description && (
                <p className="text-[13px] leading-relaxed text-muted">
                  {description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Expected outcomes */}
      <div className="mt-6 rounded-2xl border border-accent/40 bg-accent-soft p-4 shadow-[var(--shadow-soft)]">
        <span className="text-[11.5px] font-medium tracking-wide text-primary-dark uppercase">
          80 сабактан кийин
        </span>
        <h3 className="mt-1.5 text-[15px] font-semibold leading-snug text-primary-dark">
          Балаңыздын билими жана аракети этап-этабы менен өсөт
        </h3>
        <ul className="mt-3 flex flex-col gap-2">
          {EXPECTED_OUTCOMES.map((outcome) => (
            <li
              key={outcome}
              className="flex items-start gap-2 text-[13.5px] leading-relaxed text-primary-dark"
            >
              <span
                aria-hidden
                className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              {outcome}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[12.5px] leading-relaxed text-primary-dark/80">
          Натыйжа ар бир окуучунун жашына, деңгээлине жана мүмкүнчүлүгүнө жараша
          бааланат.
        </p>
        <Link
          href="/programma"
          className="mt-3 inline-flex items-center gap-1.5 rounded-lg text-[13.5px] font-medium text-primary-dark transition-colors hover:text-primary"
        >
          80 сабактык толук программаны көрүү
          <ArrowRight aria-hidden className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
