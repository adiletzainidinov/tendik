"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site-config";
import { useRegistrationStore } from "@/store/registration-store";
import { TundukMark } from "@/components/decor/tunduk-mark";
import { NationalBadge } from "@/components/decor/kyrgyz-flag";
import { AlaTooSilhouette } from "@/components/decor/ala-too-silhouette";
import { OrnamentRow } from "@/components/decor/kyrgyz-ornament";

export function HeroSection() {
  const open = useRegistrationStore((s) => s.open);

  const scrollToValue = () => {
    const el = document.getElementById("value");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden"
    >
      <div className="decor-hero relative px-5 pt-4 pb-20">
        <HeroDecor />

        <div className="relative z-10 flex flex-col gap-4 text-white">
          <div aria-hidden className="-mx-5 mb-1 text-accent/70">
            <OrnamentRow patternId="hero-ornament" className="h-2.5" />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 bg-white/[0.07] px-3 py-1 text-[12px] font-medium tracking-wide text-white/90 backdrop-blur">
              <span aria-hidden className="text-accent">
                <TundukMark className="h-3.5 w-3.5" strokeWidth={4} />
              </span>
              {siteConfig.tagline}
            </span>
            <NationalBadge className="text-white/90" />
          </div>

          <h1
            id="hero-title"
            className="text-[30px] leading-[1.16] font-bold tracking-[-0.02em] text-white sm:text-[33px]"
          >
            Балаңыз Куранга жакындап,{" "}
            <span className="text-[#f2cf6f]">намазды</span> жана{" "}
            <span className="text-[#f2cf6f]">жакшы адепти</span> үйрөнсүн
          </h1>

          <p className="max-w-[420px] text-[15px] leading-relaxed text-white/85">
            Муаллим Сани, дуба, даарат, намаз, ыйман, сира жана адеп-ахлакты
            камтыган 80 сабактык, жаш куракка ылайык окуу программасы.
          </p>

          <div
            role="note"
            className="flex items-start gap-2.5 rounded-r-xl border-l-2 border-accent bg-white/[0.07] px-3.5 py-2.5 backdrop-blur-sm"
          >
            <p className="text-[13px] leading-snug text-white/90">
              Куран окуу, намаз, дуба жана исламдык тарбия — бир толук
              программада.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              "80 сабак",
              `${siteConfig.pricing.programDurationMonths} ай`,
              "Жаш куракка ылайык",
            ].map((stat) => (
              <span
                key={stat}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[12px] font-medium text-white/95"
              >
                {stat}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-6 flex flex-col gap-2.5">
          <Button variant="gold" size="lg" onClick={open} fullWidth>
            Баланы каттоо
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={scrollToValue}
            fullWidth
            className="!bg-white/10 !text-white border border-white/25 hover:!bg-white/15"
          >
            Бала эмнени үйрөнөт?
            <ChevronDown aria-hidden className="h-4 w-4" />
          </Button>
        </div>

        {/* Силуэт Ала-Тоо у нижней кромки hero */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 text-[#43091a]"
        >
          <AlaTooSilhouette className="h-16 w-full" />
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none -mt-6 h-6 bg-gradient-to-b from-transparent to-background"
      />
    </section>
  );
}

function HeroDecor() {
  return (
    <>
      {/* Большой золотой түндүк с 40 лучами — главный декоративный мотив */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-14 right-[-70px] text-accent opacity-[0.22]"
      >
        <div className="animate-float-slow">
          <svg
            viewBox="0 0 240 240"
            className="h-[260px] w-[260px]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="currentColor">
              {Array.from({ length: 40 }, (_, i) => (
                <line
                  key={i}
                  x1="120"
                  y1="14"
                  x2="120"
                  y2="34"
                  strokeWidth="2.4"
                  transform={`rotate(${i * 9} 120 120)`}
                />
              ))}
            </g>
            <circle cx="120" cy="120" r="72" stroke="currentColor" strokeWidth="2" />
            <g
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M52 120c20-18 116-18 136 0" />
              <path d="M60 94c24-13 96-13 120 0" />
              <path d="M60 146c24 13 96 13 120 0" />
              <path d="M120 52c-18 20-18 116 0 136" />
              <path d="M94 60c-13 24-13 96 0 120" />
              <path d="M146 60c13 24 13 96 0 120" />
            </g>
          </svg>
        </div>
      </div>
      <div
        aria-hidden
        className="pattern-ethnic-dark pointer-events-none absolute inset-0 opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 -top-14 h-56 w-56 rounded-full bg-[#ffdd00]/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 bottom-10 h-48 w-48 rounded-full bg-black/25 blur-3xl"
      />
    </>
  );
}
