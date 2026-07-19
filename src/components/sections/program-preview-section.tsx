import Link from "next/link";
import {
  BookOpenText,
  ChevronRight,
  Clock,
  Droplets,
  GraduationCap,
  HandHeart,
  ListChecks,
  MoonStar,
  Users,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site-config";

const DIRECTIONS = [
  { label: "Муаллим Сани", icon: BookOpenText },
  { label: "Даарат жана намаз", icon: Droplets },
  { label: "Дубалар", icon: HandHeart },
  { label: "Ыйман жана Ислам", icon: MoonStar },
  { label: "Сира", icon: Users },
  { label: "Адеп-ахлак", icon: GraduationCap },
];

export function ProgramPreviewSection() {
  const months = siteConfig.pricing.programDurationMonths;

  return (
    <section
      aria-labelledby="program-preview-title"
      className="px-5 pt-10"
      id="program"
    >
      <SectionHeading
        eyebrow="Окуу программасы"
        title="Исламдын негиздери"
        titleId="program-preview-title"
        description="Окуучулар Муаллим Сани, дубалар, даарат, намаз, ыйман, сира жана мусулмандык адеп-ахлак боюнча этап-этабы менен билим алышат."
      />

      <p className="mt-2 text-[17px] font-semibold text-primary-dark">
        80 сабактан турган толук программа
      </p>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {[
          { value: "80 сабак", icon: ListChecks },
          { value: `${months} ай`, icon: MoonStar },
          { value: "14:00дө башталат", icon: Clock },
          { value: "3–6 саат", icon: BookOpenText },
          { value: "Жаш куракка ылайык", icon: Users },
        ].map((stat) => (
          <div
            key={stat.value}
            className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2.5 shadow-[var(--shadow-soft)]"
          >
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary-dark">
              <stat.icon aria-hidden className="h-3.5 w-3.5" strokeWidth={2} />
            </span>
            <span className="text-[13px] font-medium leading-tight text-text">
              {stat.value}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
        Сабак Бешим намазынан кийин башталып, Шам намазына 30 мүнөт калганда
        бүтөт. Узактыгы мезгилге жараша өзгөрөт.
      </p>

      <div className="mt-4 flex flex-col gap-1.5">
        {DIRECTIONS.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center gap-2.5 rounded-xl border border-border bg-surface-soft/70 px-3.5 py-2.5"
          >
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-primary-dark">
              <Icon aria-hidden className="h-3.5 w-3.5" strokeWidth={1.8} />
            </span>
            <span className="text-[13.5px] text-text">{label}</span>
          </div>
        ))}
      </div>

      <Link
        href="/programma"
        className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-primary text-[15px] font-medium text-white shadow-[var(--shadow-soft)] transition-all active:scale-[0.98]"
      >
        Толук программаны көрүү
        <ChevronRight aria-hidden className="h-4 w-4" />
      </Link>
    </section>
  );
}
