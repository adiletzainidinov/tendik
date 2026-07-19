import { FileText } from "lucide-react";
import { EXPENSES } from "@/data/course-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { getMainGroupPriceRange, siteConfig } from "@/config/site-config";
import { formatSom } from "@/lib/format";

export function ExpensesSection() {
  const { afterLaunch } = siteConfig.pricing;
  const { minSom, maxSom } = getMainGroupPriceRange();
  const minPriceLabel = formatSom(minSom);
  const maxPriceLabel = formatSom(maxSom);

  return (
    <section
      aria-labelledby="expenses-title"
      className="px-5 pt-10"
      id="expenses"
    >
      <SectionHeading
        eyebrow="Ачык-айкындык"
        title="Төлөмдөр боюнча толук отчет"
        description="Чогулган каражат курсту туруктуу өткөрүүгө, устаздарды камсыз кылууга жана балдардын мотивациясына сарпталат."
      />

      <div className="mt-5 rounded-2xl border border-border bg-primary p-5 text-white shadow-[var(--shadow-soft)]">
        <p className="text-[12px] font-medium tracking-wide text-white/75 uppercase">
          Бир окуучунун катышуу акысы
        </p>
        <p className="mt-1 text-[24px] font-semibold leading-tight">
          {minPriceLabel} — {maxPriceLabel}
        </p>
        <p className="mt-1 text-[13px] leading-relaxed text-white/85">
          Алгачкы {siteConfig.minimumStudents} окуучу үчүн баа катталуу
          кезегине жараша аныкталат.
        </p>
        <p className="mt-3 text-[13px] leading-relaxed text-white/85">
          Негизги топ толгондон кийин: 1 айга{" "}
          {formatSom(afterLaunch.monthlySom)} же 3 айга алдын ала{" "}
          {formatSom(afterLaunch.threeMonthsAdvanceSom)}. Төлөм боюнча кошумча
          маалымат каттоо учурунда берилет.
        </p>
      </div>

      <div className="mt-4 flex items-start gap-3 rounded-2xl border border-accent/40 bg-accent-soft px-4 py-3.5 shadow-[var(--shadow-soft)]">
        <span
          aria-hidden
          className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent/25 text-primary-dark"
        >
          <FileText className="h-4 w-4" strokeWidth={1.8} />
        </span>
        <p className="text-[13.5px] leading-relaxed text-primary-dark">
          Ар бир төлөмдүн кайда жана кандай жумшалганы боюнча ата-энелерге
          толук отчет беребиз.
        </p>
      </div>

      <ul className="mt-4 flex flex-col gap-2">
        {EXPENSES.map(({ id, title, icon: Icon }) => (
          <li
            key={id}
            className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 shadow-[var(--shadow-soft)]"
          >
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-dark">
              <Icon aria-hidden className="h-4.5 w-4.5" strokeWidth={1.8} />
            </span>
            <span className="text-[14px] leading-snug text-text">{title}</span>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-[12.5px] leading-relaxed text-muted">
        Так пайыздык бөлүштүрүү көрсөтүлбөйт — чыгашалар айга жана окуучулардын
        санына жараша өзгөрүшү мүмкүн.
      </p>
    </section>
  );
}
