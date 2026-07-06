"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRegistrationStore } from "@/store/registration-store";

export function FinalCtaSection() {
  const open = useRegistrationStore((s) => s.open);

  return (
    <section
      aria-labelledby="final-cta-title"
      className="px-5 pt-10"
      id="cta"
    >
      <div className="relative overflow-hidden rounded-3xl bg-primary p-6 text-white shadow-[var(--shadow-elevated)]">
        <div
          aria-hidden
          className="pattern-dots pointer-events-none absolute inset-0 opacity-40"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-14 -bottom-16 h-56 w-56 rounded-full bg-accent/20 blur-2xl"
        />
        <div className="relative flex flex-col gap-3">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[12px] font-medium tracking-wide text-white/90">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
            Каттоо
          </span>
          <h2
            id="final-cta-title"
            className="text-[24px] leading-[1.25] font-semibold tracking-[-0.01em]"
          >
            Балаңызды Куран үйрөнүүгө каттаңыз
          </h2>
          <p className="max-w-[380px] text-[14px] leading-relaxed text-white/85">
            Курс башталышы үчүн кеминде 25 окуучу керек. Каттоо аркылуу
            балаңыздын ордун алдын ала белгилеп коюңуз.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={open}
            fullWidth
            className="mt-2 !bg-accent !text-primary-dark hover:!bg-[#d6a747] justify-center shadow-[0_10px_30px_rgba(200,155,60,0.25)]"
          >
            Каттоо формасын ачуу
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
