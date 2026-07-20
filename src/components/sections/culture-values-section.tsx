import Link from "next/link";
import { ArrowRight, HandHeart, Home, ShieldCheck } from "lucide-react";
import { BozUy } from "@/components/decor/boz-uy";
import { EthnicTexture } from "@/components/decor/ethnic-texture";
import { OrnamentRow } from "@/components/decor/kyrgyz-ornament";

const VALUES = [
  {
    icon: Home,
    title: "Үй-бүлө жана улууларды сыйлоо",
    text: "Ата-энени, чоң ата-энени жана улууларды урматтоо.",
  },
  {
    icon: HandHeart,
    title: "Меймандостук жана боорукердик",
    text: "Меймандостук, кайрымдуулук жана айланага жакшы мамиле.",
  },
  {
    icon: ShieldCheck,
    title: "Чынчылдык жана жоопкерчилик",
    text: "Чынчыл болуу, сөзүндө туруу жана жоопкерчиликти сезүү.",
  },
] as const;

/**
 * Культурный story-блок: связь кыргызских семейных ценностей и исламского
 * воспитания. Серверный компонент (без интерактивности).
 */
export function CultureValuesSection() {
  return (
    <section
      aria-labelledby="culture-title"
      className="px-5 pt-10"
      id="culture"
    >
      <div className="surface-deep texture-felt relative overflow-hidden rounded-3xl p-5 text-white shadow-[var(--shadow-elevated)]">
        <EthnicTexture variant="ornament-dark" opacityClassName="opacity-40" />
        <div aria-hidden className="absolute inset-x-0 top-0 z-0 text-accent/60">
          <OrnamentRow patternId="culture-ornament" className="h-2" />
        </div>

        <div className="relative z-10">
          <div className="flex items-start gap-4">
            <div className="min-w-0 flex-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white/[0.06] px-3 py-1 text-[11px] font-medium tracking-[0.08em] text-[#f2cf6f] uppercase">
                Улуттук баалуулук
              </span>
              <h2
                id="culture-title"
                className="mt-2.5 text-[20px] leading-[1.2] font-semibold text-white"
              >
                Кыргыз салты менен исламдык тарбия — бир багытта
              </h2>
            </div>
            <div className="w-[92px] shrink-0 sm:w-[104px]">
              <BozUy />
            </div>
          </div>

          <p className="mt-2.5 max-w-[440px] text-[13.5px] leading-relaxed text-white/80">
            Кыргыз маданияты үй-бүлөнү, улууларды, меймандостукту жана
            чынчылдыкты баалайт. Исламдык тарбия ушул жакшы сапаттарды
            бекемдейт. Курс Куранды, намазды, адепти жана үй-бүлөгө урматты
            бириктирет.
          </p>

          <ul className="mt-4 flex flex-col gap-2">
            {VALUES.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="flex items-start gap-3 rounded-2xl border border-white/12 bg-white/[0.05] px-3.5 py-3"
              >
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-accent/40 bg-white/[0.06] text-accent">
                  <Icon aria-hidden className="h-4.5 w-4.5" strokeWidth={1.7} />
                </span>
                <div className="flex flex-col">
                  <span className="text-[14px] font-semibold text-white">
                    {title}
                  </span>
                  <span className="text-[12.5px] leading-relaxed text-white/70">
                    {text}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <Link
            href="/programma"
            className="mt-4 inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-accent/40 bg-white/[0.06] px-4 text-[13.5px] font-medium text-[#f2cf6f] transition-colors hover:bg-white/[0.12]"
          >
            Программа кантип тарбиялайт
            <ArrowRight aria-hidden className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
