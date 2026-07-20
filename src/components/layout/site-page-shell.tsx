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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-[14px] focus:font-medium focus:text-white focus:shadow-[var(--shadow-elevated)]"
      >
        Негизги мазмунга өтүү
      </a>
      <SiteHeader />
      <main
        id="main-content"
        tabIndex={-1}
        className={mainClassName ?? "flex flex-col pb-24"}
      >
        {children}
      </main>
      <SiteFooter />
      <StickyRegistrationBar />
      <RegistrationSheet />
    </MobileShell>
  );
}
