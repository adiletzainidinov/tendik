import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SitePageShell } from "@/components/layout/site-page-shell";
import { ProgramHero } from "./program-hero";
import { ProgramContent } from "./program-content";

export const metadata: Metadata = {
  title: "Исламдын негиздери — 80 сабактык программа",
  description:
    "Муаллим Сани, дубалар, даарат, намаз, акыйда, сира жана мусулмандык адеп-ахлак боюнча 80 сабактан турган окуу программасы.",
};

export default function ProgrammaPage() {
  return (
    <SitePageShell>
      <div className="px-5 pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-lg text-[13px] font-medium text-primary-dark transition-colors hover:text-primary"
        >
          <ArrowLeft aria-hidden className="h-3.5 w-3.5" />
          Башкы бетке кайтуу
        </Link>
      </div>
      <ProgramHero />
      <ProgramContent />
      <div className="px-5 pb-4 pt-8">
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 rounded-lg text-[13px] font-medium text-primary-dark transition-colors hover:text-primary"
        >
          Жогору кайтуу
        </a>
      </div>
    </SitePageShell>
  );
}
