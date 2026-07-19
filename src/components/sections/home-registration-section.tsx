"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Users } from "lucide-react";
import { formatSom } from "@/lib/format";
import { getNextSeatPrice, siteConfig } from "@/config/site-config";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { useRegistrationStore } from "@/store/registration-store";

export function HomeRegistrationSection() {
  const open = useRegistrationStore((s) => s.open);
  const registered = siteConfig.registeredStudents;
  const groupSize = siteConfig.minimumStudents;
  const nextSeat = getNextSeatPrice();
  const remaining = Math.max(0, groupSize - registered);
  const { afterLaunch } = siteConfig.pricing;

  return (
    <section
      aria-labelledby="home-registration-title"
      className="px-5 pt-10"
      id="register"
    >
      <SectionHeading
        eyebrow="Каттоо"
        title="Балаңызга орун ээлеп коюңуз"
        titleId="home-registration-title"
      />

      {nextSeat ? (
        <div className="mt-4 rounded-2xl border border-accent/40 bg-accent-soft p-4 shadow-[var(--shadow-soft)]">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/25 text-primary-dark"
            >
              <Sparkles className="h-5 w-5" strokeWidth={1.8} />
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-[12px] font-medium tracking-wide text-primary-dark uppercase">
                Кийинки орун
              </span>
              <span className="text-[17px] font-semibold text-primary-dark">
                {nextSeat.seat}-орун — {formatSom(nextSeat.priceSom)}
              </span>
            </div>
          </div>
          <p className="mt-3 text-[13px] leading-relaxed text-primary-dark/80">
            Эрте катталган окуучулар үчүн баа пайдалуураак болот. Дагы{" "}
            <span className="font-semibold">{remaining} орун</span> калды.
          </p>
        </div>
      ) : (
        <div className="mt-4 rounded-2xl border border-primary/25 bg-primary-soft/60 p-4 shadow-[var(--shadow-soft)]">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-dark"
            >
              <Users className="h-5 w-5" strokeWidth={1.8} />
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-[17px] font-semibold text-primary-dark">
                Негизги топ толду
              </span>
            </div>
          </div>
          <div className="mt-3 flex flex-col gap-1.5">
            <div className="flex items-center justify-between rounded-xl border border-border bg-surface px-3.5 py-2.5">
              <span className="text-[13.5px] text-text">1 айга</span>
              <span className="text-[14px] font-semibold text-primary-dark">
                {formatSom(afterLaunch.monthlySom)}
              </span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-border bg-surface px-3.5 py-2.5">
              <span className="text-[13.5px] text-text">3 айга алдын ала</span>
              <span className="text-[14px] font-semibold text-primary-dark">
                {formatSom(afterLaunch.threeMonthsAdvanceSom)}
              </span>
            </div>
          </div>
          <p className="mt-2 text-[13px] leading-relaxed text-primary-dark/80">
            Сабактар башталгандан кийин да курска кошулууга болот.
          </p>
        </div>
      )}

      <div className="mt-4 flex flex-col gap-2">
        <Button variant="primary" size="lg" onClick={open} fullWidth>
          Баланы каттоо
          <ArrowRight aria-hidden className="h-4 w-4" />
        </Button>
        <Link
          href="/maalymat#pricing"
          className="flex min-h-11 w-full items-center justify-center gap-1.5 rounded-2xl border border-border bg-surface text-[14px] font-medium text-primary-dark transition-colors hover:bg-surface-soft"
        >
          Бардык бааларды көрүү
        </Link>
      </div>
    </section>
  );
}
