import { SitePageShell } from "@/components/layout/site-page-shell";
import { HeroSection } from "@/components/sections/hero-section";
import { EnrollmentProgressSection } from "@/components/sections/enrollment-progress-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ProgramPreviewSection } from "@/components/sections/program-preview-section";
import { ScheduleSection } from "@/components/sections/schedule-section";
import { LocationSection } from "@/components/sections/location-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";

export default function HomePage() {
  return (
    <SitePageShell>
      <HeroSection />
      <EnrollmentProgressSection />
      <PricingSection />
      <ProgramPreviewSection />
      <ScheduleSection />
      <LocationSection />
      <FinalCtaSection />
    </SitePageShell>
  );
}
