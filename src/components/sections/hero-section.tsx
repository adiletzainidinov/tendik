"use client";

import { ArrowRight, BookOpenText, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRegistrationStore } from "@/store/registration-store";

export function HeroSection() {
  const open = useRegistrationStore((s) => s.open);

  const scrollToCurriculum = () => {
    const el = document.getElementById("curriculum");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden"
    >
      <div className="decor-arch relative px-5 pt-6 pb-24">
        <MihrabDecor />
        <div className="relative z-10 flex flex-col gap-5 text-white">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[12px] font-medium tracking-wide text-white/90 backdrop-blur">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
            Мечиттеги Куран курсу
          </span>
          <h1
            id="hero-title"
            className="text-[28px] leading-[1.2] font-semibold tracking-[-0.015em] text-white sm:text-[30px]"
          >
            Балаңыз Куранды туура окуп үйрөнсүн
          </h1>
          <p className="max-w-[420px] text-[15px] leading-relaxed text-white/85">
            Балдар үчүн мечитте өтүүчү дем алыш күндөрүндөгү Куран курсу.
            Тажрыйбалуу устаздардын жетекчилиги астында тынч жана тартиптүү
            чөйрөдө өтөт.
          </p>
          <div className="mt-1 flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-3.5 py-3 backdrop-blur">
            <BookOpenText
              aria-hidden
              className="h-5 w-5 shrink-0 text-accent"
            />
            <p className="text-[13.5px] leading-snug text-white/95">
              Курс{" "}
              <span className="font-semibold text-white">25 окуучу</span>{" "}
              топтолгондон кийин башталат
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-6 flex flex-col gap-2.5">
          <Button
            variant="primary"
            size="lg"
            onClick={open}
            fullWidth
            className="!bg-accent !text-primary-dark hover:!bg-[#d6a747] shadow-[0_10px_30px_rgba(200,155,60,0.35)]"
          >
            Баланы каттоо
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={scrollToCurriculum}
            fullWidth
            className="!bg-white/10 !text-white border border-white/25 hover:!bg-white/15"
          >
            Программаны көрүү
            <ChevronDown aria-hidden className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none -mt-8 h-8 bg-gradient-to-b from-transparent to-background"
      />
    </section>
  );
}

function MihrabDecor() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 flex justify-center"
      >
        <svg
          viewBox="0 0 320 320"
          className="w-[340px] max-w-none opacity-[0.15]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M160 20c60 0 100 40 100 100v180H60V120C60 60 100 20 160 20z"
            stroke="#c89b3c"
            strokeWidth="1.4"
          />
          <path
            d="M160 40c50 0 82 34 82 82v158H78V122C78 74 110 40 160 40z"
            stroke="#c89b3c"
            strokeWidth="1"
          />
          <path
            d="M160 62c40 0 64 26 64 64v154H96V126c0-38 24-64 64-64z"
            stroke="#c89b3c"
            strokeWidth="0.8"
          />
        </svg>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-24 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 -top-10 h-56 w-56 rounded-full bg-white/5 blur-3xl"
      />
    </>
  );
}
