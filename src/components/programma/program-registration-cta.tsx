"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRegistrationStore } from "@/store/registration-store";

export function ProgramRegistrationCta() {
  const open = useRegistrationStore((s) => s.open);

  return (
    <section className="px-5 pt-8 pb-4">
      <div className="rounded-2xl border border-accent/40 bg-accent-soft p-4 shadow-[var(--shadow-soft)]">
        <p className="text-[14px] font-medium leading-relaxed text-primary-dark">
          80 сабактан турган толук программабызга балаңызды каттаңыз!
        </p>
        <Button
          variant="primary"
          size="lg"
          onClick={open}
          fullWidth
          className="mt-3"
        >
          Баланы каттоо
          <ArrowRight aria-hidden className="h-4 w-4" />
        </Button>
        <Link
          href="/"
          className="mt-2 flex min-h-10 w-full items-center justify-center rounded-xl text-[13.5px] font-medium text-primary-dark transition-colors hover:bg-primary-soft"
        >
          Башкы бетке кайтуу
        </Link>
      </div>
    </section>
  );
}
