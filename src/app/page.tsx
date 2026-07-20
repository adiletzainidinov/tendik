import { SitePageShell } from "@/components/layout/site-page-shell";
import { HeroSection } from "@/components/sections/hero-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { CultureValuesSection } from "@/components/sections/culture-values-section";
import { ProgramPreviewSection } from "@/components/sections/program-preview-section";
import { ScheduleSection } from "@/components/sections/schedule-section";
import { EnrollmentProgressSection } from "@/components/sections/enrollment-progress-section";
import { HomeRegistrationSection } from "@/components/sections/home-registration-section";
import { LocationSection } from "@/components/sections/location-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";

export default function HomePage() {
  return (
    <SitePageShell>
      <HeroSection />
      <BenefitsSection />
      <CultureValuesSection />
      <ProgramPreviewSection />
      <ScheduleSection />
      <EnrollmentProgressSection />
      <HomeRegistrationSection />
      <LocationSection />
      <FinalCtaSection />
    </SitePageShell>
  );
}
