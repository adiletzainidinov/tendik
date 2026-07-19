"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site-config";
import { useRegistrationStore } from "@/store/registration-store";
import { TundukMark } from "@/components/decor/tunduk-mark";
import { OrnamentRow } from "@/components/decor/kyrgyz-ornament";

export function FinalCtaSection() {
  const open = useRegistrationStore((s) => s.open);

  return (
    <section aria-labelledby="final-cta-title" className="px-5 pt-10" id="cta">
      <div className="decor-deep frame-gold relative overflow-hidden rounded-3xl p-6 text-white shadow-[var(--shadow-elevated)]">
        <div
          aria-hidden
          className="pattern-ethnic-dark pointer-events-none absolute inset-0 opacity-45"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-14 -bottom-16 h-56 w-56 rounded-full bg-accent/15 blur-2xl"
        />
        <div aria-hidden className="absolute inset-x-0 top-0 text-accent/60">
          <OrnamentRow patternId="cta-ornament" className="h-2" />
        </div>

        <div className="relative flex flex-col gap-3">
          <span
            aria-hidden
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/40 bg-white/[0.07] text-accent"
          >
            <TundukMark className="h-7 w-7" strokeWidth={2.8} />
          </span>
          <h2
            id="final-cta-title"
            className="text-[25px] leading-[1.2] font-bold tracking-[-0.015em] text-white"
          >
            Балаңызды Куран үйрөнүүгө каттаңыз
          </h2>
          <p className="max-w-[380px] text-[14px] leading-relaxed text-white/85">
            Сабактар негизги топко {siteConfig.minimumStudents} бала толук
            чогулгандан кийин башталат. Каттоо аркылуу балаңыздын ордун алдын
            ала белгилеп коюңуз.
          </p>
          <Button
            variant="gold"
            size="lg"
            onClick={open}
            fullWidth
            className="mt-2 justify-center"
          >
            Каттоо формасын ачуу
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
