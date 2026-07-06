import { CheckCircle2, Info, RotateCcw } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const RULES = [
  {
    id: "before-start",
    title: "Сабак баштала электе",
    description:
      "Эгер сабак баштала электе төлөм кылсаңыз, окуу башталганга чейин каалаган убакта акчаңызды толугу менен кайтарып ала аласыз.",
    icon: CheckCircle2,
  },
  {
    id: "after-start",
    title: "Сабак башталгандан кийин",
    description:
      "Эгер сабак башталып, кийин уланта албай калсаңыз же баш тартып калсаңыз, калган мөөнөттүн төлөмүнүн 50% гана кайтарылат.",
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
        description="Ата-энелер үчүн ачык шарттар. Ар бир учур үчүн тартип төмөндө жазылган."
      />

      <ol className="mt-5 flex flex-col gap-3">
        {RULES.map(({ id, title, description, icon: Icon }) => (
          <li
            key={id}
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
                <p className="text-[15px] font-semibold text-text">{title}</p>
                <p className="text-[13.5px] leading-relaxed text-muted">
                  {description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-4 rounded-2xl border border-primary/25 bg-primary-soft/60 p-4">
        <p className="text-[11.5px] font-medium tracking-wide text-primary-dark uppercase">
          Мисал
        </p>
        <p className="mt-1 text-[13.5px] leading-relaxed text-primary-dark">
          Мисалы, эгер окуу 6 айга эсептелип, окуучу 2 ай окуп токтосо, калган
          4 айдын төлөмүнүн жарымы кайтарылат.
        </p>
      </div>

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
