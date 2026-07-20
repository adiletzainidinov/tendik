import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MobileShell } from "@/components/layout/mobile-shell";
import { TundukMark } from "@/components/decor/tunduk-mark";
import { OrnamentRow } from "@/components/decor/kyrgyz-ornament";

export default function NotFound() {
  return (
    <MobileShell>
      <main className="flex flex-1 flex-col items-center justify-center px-5 py-16 text-center">
        <div aria-hidden className="mb-6 w-40 text-accent/70">
          <OrnamentRow patternId="notfound-ornament" className="h-2.5" />
        </div>
        <span
          aria-hidden
          className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-accent shadow-[var(--shadow-soft)]"
        >
          <TundukMark className="h-9 w-9" strokeWidth={2.4} />
        </span>
        <p className="mt-6 text-[44px] leading-none font-bold text-primary">
          404
        </p>
        <h1 className="mt-3 text-[20px] font-semibold text-text">
          Бет табылган жок
        </h1>
        <p className="mt-2 max-w-[340px] text-[14px] leading-relaxed text-muted">
          Сиз издеген барак жок болушу же дареги өзгөргөн болушу мүмкүн.
          Башкы бетке кайтып, курс жөнүндө маалыматты көрө аласыз.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-primary px-5 text-[15px] font-medium text-white shadow-[var(--shadow-soft)] transition-colors hover:bg-primary-dark"
        >
          Башкы бетке кайтуу
          <ArrowRight aria-hidden className="h-4 w-4" />
        </Link>
        <div aria-hidden className="mt-8 w-40 text-accent/70">
          <OrnamentRow patternId="notfound-ornament-2" className="h-2.5" />
        </div>
      </main>
    </MobileShell>
  );
}
