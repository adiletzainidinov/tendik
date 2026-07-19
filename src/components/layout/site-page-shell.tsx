import { MobileShell } from "@/components/layout/mobile-shell";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { StickyRegistrationBar } from "@/components/layout/sticky-registration-bar";
import { RegistrationSheet } from "@/components/registration/registration-sheet";

type SitePageShellProps = {
  children: React.ReactNode;
  mainClassName?: string;
};

export function SitePageShell({ children, mainClassName }: SitePageShellProps) {
  return (
    <MobileShell>
      <SiteHeader />
      <main className={mainClassName ?? "flex flex-col pb-24"}>
        {children}
      </main>
      <SiteFooter />
      <StickyRegistrationBar />
      <RegistrationSheet />
    </MobileShell>
  );
}
