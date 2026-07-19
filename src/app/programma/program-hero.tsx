"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site-config";
import { useRegistrationStore } from "@/store/registration-store";
import { TundukMark } from "@/components/decor/tunduk-mark";
import { OrnamentRow } from "@/components/decor/kyrgyz-ornament";

export function ProgramHero() {
  const open = useRegistrationStore((s) => s.open);
  const months = siteConfig.pricing.programDurationMonths;
  const { courseSchedule } = siteConfig;

  const scrollToLessons = () => {
    const el = document.getElementById("lessons");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="top" aria-labelledby="program-hero-title">
      <div className="decor-hero relative overflow-hidden px-5 pt-4 pb-7 text-white">
        <div
          aria-hidden
          className="pattern-ethnic-dark pointer-events-none absolute inset-0 opacity-40"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-10 h-44 w-44 rounded-full bg-[#ffdd00]/10 blur-3xl"
        />

        <div className="relative">
          <div aria-hidden className="-mx-5 mb-3 text-accent/70">
            <OrnamentRow patternId="program-hero-ornament" className="h-2.5" />
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white/[0.07] px-3 py-1 text-[12px] font-medium tracking-wide text-white/90 uppercase backdrop-blur">
            <span aria-hidden className="text-accent">
              <TundukMark className="h-3.5 w-3.5" strokeWidth={4} />
            </span>
            80 сабактык окуу программасы
          </span>

          <h1
            id="program-hero-title"
            className="mt-3 text-[27px] leading-[1.15] font-bold tracking-[-0.02em] text-white sm:text-[30px]"
          >
            ИСЛАМДЫН НЕГИЗДЕРИ
          </h1>

          <p className="mt-1.5 text-[15px] font-medium text-[#f2cf6f]">
            Муаллим Сани, дуба, даарат, намаз, ыйман, сира жана мусулмандык
            адеп-ахлак
          </p>

          <p className="mt-3 text-[14px] leading-relaxed text-white/80">
            Бул программа окуучуларга Исламдын негиздерин жашына жана
            мүмкүнчүлүгүнө жараша этап-этабы менен үйрөтүүгө багытталган.
          </p>
        </div>
      </div>

      <div className="px-5 pt-4">
        <div className="grid grid-cols-2 gap-2">
          {[
            { value: "80 сабак" },
            { value: "8 негизги бөлүм" },
            { value: `${courseSchedule.startTime}дө башталат` },
            {
              value: `${courseSchedule.minDurationHours}–${courseSchedule.maxDurationHours} сааттык окуу күнү`,
            },
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

        <p className="mt-3 rounded-xl border border-accent/25 bg-accent-soft/60 px-3.5 py-2.5 text-[13px] leading-relaxed text-primary-dark/90">
          {`Сабактар ${courseSchedule.startsAfterPrayer} намазынан кийин башталып, ${courseSchedule.dismissalBeforePrayer} намазына ${courseSchedule.dismissalBeforePrayerMinutes} мүнөт калганда аяктайт. Мезгилге жараша ${courseSchedule.minDurationHours}–${courseSchedule.maxDurationHours} саат созулат.`}
        </p>

        <div className="mt-5 flex flex-col gap-2.5">
          <Button variant="primary" size="lg" onClick={open} fullWidth>
            Баланы каттоо
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={scrollToLessons}
            fullWidth
          >
            Сабактарды көрүү
            <ChevronDown aria-hidden className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
