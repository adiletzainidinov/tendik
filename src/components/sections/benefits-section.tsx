import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BENEFITS } from "@/data/course-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { EthnicDivider } from "@/components/decor/ethnic-divider";
import { OrnamentRow } from "@/components/decor/kyrgyz-ornament";

const EXPECTED_OUTCOMES = [
  "Араб тамгаларын таануу жана Куран окууга даярдык",
  "Даараттын жана намаздын негизги тартиби",
  "Күнүмдүк дубаларды билүү",
  "Жакшы адеп, тазалык жана жоопкерчилик",
] as const;

export function BenefitsSection() {
  const featured = BENEFITS.slice(0, 2);
  const rest = BENEFITS.slice(2);

  return (
    <section aria-labelledby="value-title" className="px-5 pt-10" id="value">
      <SectionHeading
        eyebrow="Балаңыз үчүн баалуулук"
        title="Бул жөн гана курс эмес — ыйманга, Куранга жана жакшы адепке бекем негиз"
        titleId="value-title"
        description="Бала Куран окууну гана эмес, даарат, намаз, дуба жана мусулмандык адепти күнүмдүк жашоосунда колдонууга акырындык менен үйрөнөт."
      />

      {/* Две главные карточки — крупный акцент */}
      <div className="mt-5 flex flex-col gap-3">
        {featured.map(({ id, title, description, icon: Icon }) => (
          <div
            key={id}
            className="group relative overflow-hidden rounded-2xl border border-accent/30 bg-surface p-5 shadow-[var(--shadow-soft)] transition-shadow duration-200 hover:shadow-[var(--shadow-elevated)]"
          >
            <div
              aria-hidden
              className="pattern-ethnic-light pointer-events-none absolute inset-0 opacity-60"
            />
            <div className="relative flex flex-col gap-2.5">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-[var(--shadow-soft)]">
                <Icon aria-hidden className="h-6 w-6" strokeWidth={1.7} />
              </span>
              <p className="text-[16px] font-semibold leading-snug text-text">
                {title}
              </p>
              {description && (
                <p className="text-[13.5px] leading-relaxed text-muted">
                  {description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Остальные — компактная сетка */}
      <div className="mt-3 grid grid-cols-2 gap-2.5">
        {rest.map(({ id, title, description, icon: Icon }) => (
          <div
            key={id}
            className="flex flex-col gap-2 rounded-2xl border border-border bg-surface p-3.5 shadow-[var(--shadow-soft)] transition-shadow duration-200 hover:shadow-[var(--shadow-elevated)]"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <Icon aria-hidden className="h-4.5 w-4.5" strokeWidth={1.8} />
            </span>
            <p className="text-[13.5px] font-semibold leading-snug text-text">
              {title}
            </p>
            {description && (
              <p className="text-[12px] leading-relaxed text-muted">
                {description}
              </p>
            )}
          </div>
        ))}
      </div>

      <EthnicDivider className="mt-7" />

      {/* Ожидаемые результаты — премиальный блок */}
      <div className="decor-deep relative mt-5 overflow-hidden rounded-3xl p-5 text-white shadow-[var(--shadow-elevated)]">
        <div
          aria-hidden
          className="pattern-ethnic-dark pointer-events-none absolute inset-0 opacity-40"
        />
        <div aria-hidden className="absolute inset-x-0 top-0 text-accent/60">
          <OrnamentRow patternId="outcomes-ornament" className="h-2" />
        </div>
        <div className="relative">
          <span className="text-[11.5px] font-medium tracking-[0.08em] text-[#f2cf6f] uppercase">
            80 сабактан кийин
          </span>
          <h3 className="mt-1.5 text-[17px] font-semibold leading-snug text-white">
            Балаңыздын билими жана аракети этап-этабы менен өсөт
          </h3>
          <ul className="mt-3 flex flex-col gap-2.5">
            {EXPECTED_OUTCOMES.map((outcome) => (
              <li
                key={outcome}
                className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-white/90"
              >
                <svg
                  aria-hidden
                  viewBox="0 0 8 8"
                  className="mt-[6px] h-2 w-2 shrink-0 text-accent"
                >
                  <path d="M4 0l4 4-4 4-4-4z" fill="currentColor" />
                </svg>
                {outcome}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[12.5px] leading-relaxed text-white/65">
            Натыйжа ар бир окуучунун жашына, деңгээлине жана мүмкүнчүлүгүнө
            жараша бааланат.
          </p>
          <Link
            href="/programma"
            className="mt-4 inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-accent/40 bg-white/[0.06] px-4 text-[13.5px] font-medium text-[#f2cf6f] transition-colors hover:bg-white/[0.12]"
          >
            80 сабактык толук программаны көрүү
            <ArrowRight aria-hidden className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
