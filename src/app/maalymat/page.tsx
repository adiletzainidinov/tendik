import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SitePageShell } from "@/components/layout/site-page-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { PricingSection } from "@/components/sections/pricing-section";
import { CurriculumSection } from "@/components/sections/curriculum-section";
import { LearningPathSection } from "@/components/sections/learning-path-section";
import { MotivationSection } from "@/components/sections/motivation-section";
import { WatchFirstCtaSection } from "@/components/sections/watch-first-cta-section";
import { InstagramSection } from "@/components/sections/instagram-section";
import { ExpensesSection } from "@/components/sections/expenses-section";
import { RefundSection } from "@/components/sections/refund-section";
import { ParentsSection } from "@/components/sections/parents-section";
import { FaqSection } from "@/components/sections/faq-section";

export const metadata: Metadata = {
  title: "Курс жөнүндө толук маалымат",
  description:
    "Теңдик Куран курсунун окуу багыттары, мотивациясы, төлөм тартиби, ата-энелер үчүн маалымат жана суроо-жооптор.",
};

export default function MaalymatPage() {
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
      <div className="px-5 pt-4">
        <SectionHeading
          eyebrow="Курс жөнүндө"
          title="Толук маалымат"
          description="Баалар, окуу багыттары, балдарды мотивациялоо, төлөм тартиби жана ата-энелер үчүн керектүү маалымат."
        />
      </div>
      <PricingSection />
      <CurriculumSection />
      <LearningPathSection />
      <MotivationSection />
      <WatchFirstCtaSection />
      <InstagramSection />
      <ExpensesSection />
      <RefundSection />
      <ParentsSection />
      <FaqSection />
    </SitePageShell>
  );
}
