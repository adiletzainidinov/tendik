import { MobileShell } from "@/components/layout/mobile-shell";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { StickyRegistrationBar } from "@/components/layout/sticky-registration-bar";
import { HeroSection } from "@/components/sections/hero-section";
import { EnrollmentProgressSection } from "@/components/sections/enrollment-progress-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { ScheduleSection } from "@/components/sections/schedule-section";
import { LocationSection } from "@/components/sections/location-section";
import { CurriculumSection } from "@/components/sections/curriculum-section";
import { LearningPathSection } from "@/components/sections/learning-path-section";
import { MotivationSection } from "@/components/sections/motivation-section";
import { InstagramSection } from "@/components/sections/instagram-section";
import { ExpensesSection } from "@/components/sections/expenses-section";
import { RefundSection } from "@/components/sections/refund-section";
import { ParentsSection } from "@/components/sections/parents-section";
import { FaqSection } from "@/components/sections/faq-section";
import { WatchFirstCtaSection } from "@/components/sections/watch-first-cta-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { RegistrationSheet } from "@/components/registration/registration-sheet";

export default function HomePage() {
  return (
    <MobileShell>
      <SiteHeader />
      <main className="flex flex-col pb-24">
        <HeroSection />
        <EnrollmentProgressSection />
        <BenefitsSection />
        <ScheduleSection />
        <LocationSection />
        <CurriculumSection />
        <LearningPathSection />
        <MotivationSection />
        <InstagramSection />
        <ExpensesSection />
        <RefundSection />
        <ParentsSection />
        <FaqSection />
        <WatchFirstCtaSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
      <StickyRegistrationBar />
      <RegistrationSheet />
    </MobileShell>
  );
}
