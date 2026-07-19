"use client";

import { CheckCircle2, Sparkles, UserPlus2, Users } from "lucide-react";
import { cn } from "@/lib/cn";
import { formatSom } from "@/lib/format";
import { getNextSeatPrice, siteConfig } from "@/config/site-config";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { useRegistrationStore } from "@/store/registration-store";

export function PricingSection() {
  const open = useRegistrationStore((s) => s.open);
  const registered = siteConfig.registeredStudents;
  const groupSize = siteConfig.minimumStudents;
  const { seatPrices, afterLaunch, programDurationMonths } =
    siteConfig.pricing;
  const nextSeat = getNextSeatPrice();
  const groupFull = nextSeat === null;

  return (
    <section
      aria-labelledby="pricing-title"
      className="px-5 pt-10"
      id="pricing"
    >
      <SectionHeading
        eyebrow={`${programDurationMonths} айлык программа`}
        title={`Алгачкы ${groupSize} орун үчүн атайын баалар`}
        titleId="pricing-title"
        description={`Алгач биз ${programDurationMonths} ай бою окуй турган ${groupSize} баладан турган негизги топту чогултабыз. Сабактар негизги топ толук чогулгандан кийин башталат.`}
      />

      <Card tone="soft" className="mt-5">
        <h3 className="text-[15px] font-semibold text-text">
          Эмне үчүн баалар ар башка?
        </h3>
        <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
          Алгачкы катталган ата-энелер топтун толушун жана сабактардын
          башталышын көбүрөөк күтүшү мүмкүн. Ошондой эле алар долбоорубузга
          биринчилерден болуп ишеним көрсөтүп, курстун башталышына жардам
          беришет.
        </p>
        <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
          Ошондуктан эрте катталган окуучуларга эң чоң жеңилдик берилет.
          Орундар толгон сайын сабактын башталышы жакындап, баа акырындык
          менен жогорулайт.
        </p>
      </Card>

      {nextSeat ? (
        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-accent/40 bg-accent-soft px-4 py-3.5 shadow-[var(--shadow-soft)]">
          <span
            aria-hidden
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/25 text-primary-dark"
          >
            <Sparkles className="h-5 w-5" strokeWidth={1.8} />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-[12px] font-medium tracking-wide text-primary-dark uppercase">
              Кийинки жеткиликтүү орун
            </span>
            <span className="text-[17px] font-semibold text-primary-dark">
              {nextSeat.seat}-орун — {formatSom(nextSeat.priceSom)}
            </span>
          </div>
        </div>
      ) : (
        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-primary/25 bg-primary-soft/60 px-4 py-3.5 shadow-[var(--shadow-soft)]">
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
            <span className="text-[13px] text-primary-dark/80">
              Курска төмөнкү тарифтер менен кошулууга болот.
            </span>
          </div>
        </div>
      )}

      <ol className="mt-4 flex flex-col gap-1.5">
        {seatPrices.map(({ seat, priceSom }, index) => {
          const isTaken = index < registered;
          const isCurrent = !groupFull && index === registered;
          return (
            <li
              key={seat}
              className={cn(
                "flex min-h-10 items-center justify-between gap-2 rounded-xl border px-3.5 py-2",
                isCurrent
                  ? "border-primary/50 bg-primary-soft shadow-[var(--shadow-soft)]"
                  : "border-border bg-surface",
                isTaken && "opacity-55",
              )}
            >
              <span className="flex min-w-0 items-center gap-2">
                <span
                  className={cn(
                    "text-[14px]",
                    isCurrent
                      ? "font-semibold text-primary-dark"
                      : "text-text",
                  )}
                >
                  {seat}-орун
                </span>
                {isCurrent && (
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-[11px] font-medium text-white">
                    <CheckCircle2 aria-hidden className="h-3 w-3" />
                    Азыркы баа
                  </span>
                )}
              </span>
              <span
                className={cn(
                  "shrink-0 text-[14px] whitespace-nowrap",
                  isCurrent
                    ? "font-semibold text-primary-dark"
                    : isTaken
                      ? "text-muted"
                      : "font-medium text-text",
                )}
              >
                {formatSom(priceSom)}
              </span>
            </li>
          );
        })}
      </ol>

      <Card className="mt-5">
        <h3 className="text-[15px] font-semibold text-text">
          Негизги топ толгондон кийин
        </h3>
        <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
          {groupSize} бала чогулуп, сабактар башталгандан кийин да башка
          окуучуларга курска кошулуу мүмкүнчүлүгү берилет.
        </p>
        <div className="mt-3 flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2 rounded-xl border border-border bg-surface-soft/70 px-3.5 py-2.5">
            <span className="text-[14px] text-text">1 айга</span>
            <span className="shrink-0 text-[14px] font-semibold whitespace-nowrap text-primary-dark">
              {formatSom(afterLaunch.monthlySom)}
            </span>
          </div>
          <div className="flex items-center justify-between gap-2 rounded-xl border border-border bg-surface-soft/70 px-3.5 py-2.5">
            <span className="text-[14px] text-text">3 айга алдын ала</span>
            <span className="shrink-0 text-[14px] font-semibold whitespace-nowrap text-primary-dark">
              {formatSom(afterLaunch.threeMonthsAdvanceSom)}
            </span>
          </div>
        </div>
        <p className="mt-3 text-[13px] leading-relaxed text-muted">
          Бул тарифтер негизги топко берилген атайын жеңилдикке кирбейт.
          Анткени кийин кошулган окуучулар топтун чогулушун күтпөстөн, даяр
          болуп калган окуу программасына дароо кошула алышат.
        </p>
      </Card>

      <div className="mt-4 rounded-2xl border border-accent/40 bg-accent-soft p-4 shadow-[var(--shadow-soft)]">
        <p className="text-[14px] leading-relaxed font-medium text-primary-dark">
          Алгачкы {groupSize} окуучу өзгөчө шарттар жана пайдалуу баалар менен
          кабыл алынат. Эрте катталган сайын баа арзаныраак болот!
        </p>
        <Button
          variant="primary"
          size="lg"
          onClick={open}
          fullWidth
          className="mt-3"
        >
          <UserPlus2 aria-hidden className="h-4 w-4" />
          Баланы каттоо
        </Button>
      </div>
    </section>
  );
}
