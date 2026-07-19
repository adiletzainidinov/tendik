"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site-config";
import { useRegistrationStore } from "@/store/registration-store";

export function ProgramHero() {
  const open = useRegistrationStore((s) => s.open);
  const months = siteConfig.pricing.programDurationMonths;
  const { courseSchedule } = siteConfig;

  const scrollToLessons = () => {
    const el = document.getElementById("lessons");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="top" className="px-5 pt-6" aria-labelledby="program-hero-title">
      <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-[12px] font-medium tracking-wide text-primary-dark uppercase">
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
        80 сабактык окуу программасы
      </span>

      <h1
        id="program-hero-title"
        className="mt-3 text-[26px] leading-[1.2] font-semibold tracking-[-0.015em] text-text sm:text-[28px]"
      >
        ИСЛАМДЫН НЕГИЗДЕРИ
      </h1>

      <p className="mt-1.5 text-[15px] font-medium text-primary-dark">
        Муаллим Сани, дуба, даарат, намаз, ыйман, сира жана мусулмандык
        адеп-ахлак
      </p>

      <p className="mt-3 text-[14px] leading-relaxed text-muted">
        Бул программа окуучуларга Исламдын негиздерин жашына жана
        мүмкүнчүлүгүнө жараша этап-этабы менен үйрөтүүгө багытталган.
      </p>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {[
          { value: "80 сабак" },
          { value: "8 негизги бөлүм" },
          { value: `${courseSchedule.startTime}дө башталат` },
          { value: `${courseSchedule.minDurationHours}–${courseSchedule.maxDurationHours} сааттык окуу күнү` },
          { value: `${months} айлык программа` },
        ].map((stat, i, arr) => (
          <div
            key={stat.value}
            className={cn(
              "rounded-xl border border-border bg-surface px-3 py-2.5 text-center shadow-[var(--shadow-soft)]",
              i === arr.length - 1 && arr.length % 2 !== 0 && "col-span-2",
            )}
          >
            <span className="text-[13.5px] font-semibold text-primary-dark">
              {stat.value}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-3 rounded-xl bg-surface-soft/70 px-3.5 py-2.5 text-[13px] leading-relaxed text-muted">
        {`Сабактар ${courseSchedule.startsAfterPrayer} намазынан кийин башталып, ${courseSchedule.dismissalBeforePrayer} намазына ${courseSchedule.dismissalBeforePrayerMinutes} мүнөт калганда аяктайт. Мезгилге жараша ${courseSchedule.minDurationHours}–${courseSchedule.maxDurationHours} саат созулат.`}
      </p>

      <div className="mt-5 flex flex-col gap-2.5">
        <Button variant="primary" size="lg" onClick={open} fullWidth>
          Баланы каттоо
          <ArrowRight aria-hidden className="h-4 w-4" />
        </Button>
        <Button variant="secondary" size="lg" onClick={scrollToLessons} fullWidth>
          Сабактарды көрүү
          <ChevronDown aria-hidden className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
