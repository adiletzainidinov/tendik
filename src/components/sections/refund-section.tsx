import { CheckCircle2, Info, RotateCcw } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const RULES = [
  {
    id: "before-start",
    title: "Сабак баштала электе",
    description:
      "Эгер ата-эне сабактар баштала электе төлөмдү кайтарууну чечсе, төлөнгөн сумманын 20% кармалып, калган 80% кайтарылат.",
    example: "Мисалы: 5 000 сом төлөнсө — 4 000 сом кайтарылат.",
    icon: CheckCircle2,
  },
  {
    id: "after-start",
    title: "Сабактар башталгандан кийин",
    description:
      "Сабактар башталгандан кийин окулган убакыт үчүн төлөм кайтарылбайт. Калган, пайдаланылбаган окуу мөөнөтүнө туура келген сумманын 50% гана кайтарылат.",
    icon: RotateCcw,
  },
] as const;

export function RefundSection() {
  return (
    <section
      aria-labelledby="refund-title"
      className="px-5 pt-10"
      id="refund"
    >
      <SectionHeading
        eyebrow="Төлөм тартиби"
        title="Төлөмдү кайтаруу тартиби"
        titleId="refund-title"
        description="Ата-энелер үчүн ачык шарттар. Ар бир учур үчүн тартип төмөндө жазылган."
      />

      <ol className="mt-5 flex flex-col gap-3">
        {RULES.map((rule) => {
          const Icon = rule.icon;
          return (
            <li
              key={rule.id}
              className="rounded-2xl border border-border bg-surface p-4 shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-dark"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-[15px] font-semibold text-text">
                    {rule.title}
                  </p>
                  <p className="text-[13.5px] leading-relaxed text-muted">
                    {rule.description}
                  </p>
                  {"example" in rule && (
                    <p className="mt-1 rounded-lg bg-primary-soft/60 px-2.5 py-1.5 text-[13px] leading-relaxed text-primary-dark">
                      {rule.example}
                    </p>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-4 flex items-start gap-3 rounded-2xl border border-border bg-surface-soft/70 px-4 py-3">
        <span
          aria-hidden
          className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary-dark"
        >
          <Info className="h-3.5 w-3.5" strokeWidth={1.9} />
        </span>
        <p className="text-[12.5px] leading-relaxed text-muted">
          Бул тартип окуу планы, устаздардын убактысы жана жалпы уюштуруу иштери
          алдын ала ошол эсеп менен түзүлгөндүктөн колдонулат.
        </p>
      </div>
    </section>
  );
}
