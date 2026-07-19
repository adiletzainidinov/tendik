"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalLink, MessageCircle, Phone, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/config/site-config";
import { QUICK_CONTACT_URL } from "@/lib/whatsapp";
import { useRegistrationStore } from "@/store/registration-store";
import { TundukMark } from "@/components/decor/tunduk-mark";
import { KyrgyzFlag } from "@/components/decor/kyrgyz-flag";

type NavLink = {
  label: string;
  href: string;
};

type NavGroup = {
  title: string;
  links: readonly NavLink[];
};

const NAV_GROUPS: readonly NavGroup[] = [
  {
    title: "Негизги",
    links: [
      { label: "Башкы бет", href: "/" },
      { label: "Бала эмнени үйрөнөт?", href: "/#value" },
      { label: "Исламдын негиздери — 80 сабак", href: "/programma" },
      { label: "Баалар жана орундар", href: "/maalymat#pricing" },
    ],
  },
  {
    title: "Курс жөнүндө",
    links: [
      { label: "Курс жөнүндө", href: "/maalymat" },
      { label: "Окуу багыттары", href: "/maalymat#curriculum" },
      { label: "Балдарды мотивациялоо", href: "/maalymat#motivation" },
      { label: "Төлөм жана отчет", href: "/maalymat#expenses" },
      { label: "Акчаны кайтаруу шарттары", href: "/maalymat#refund" },
      { label: "Ата-энелер үчүн", href: "/maalymat#parents" },
      { label: "Суроо-жооп", href: "/maalymat#faq" },
    ],
  },
  {
    title: "Байланыш",
    links: [
      { label: "Instagram", href: "/maalymat#instagram" },
      { label: "Дарек", href: "/#location" },
    ],
  },
];

type NavigationDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
};

export function NavigationDrawer({
  isOpen,
  onClose,
  triggerRef,
}: NavigationDrawerProps) {
  const pathname = usePathname();
  const openRegistration = useRegistrationStore((s) => s.open);
  const drawerRef = React.useRef<HTMLDivElement | null>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    if (!isOpen) return;
    const triggerEl = triggerRef.current;
    document.body.classList.add("scroll-lock");
    const timer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 60);
    return () => {
      document.body.classList.remove("scroll-lock");
      window.clearTimeout(timer);
      triggerEl?.focus();
    };
  }, [isOpen, triggerRef]);

  React.useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "Tab" && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first || !last) return;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  const handleLinkClick = () => {
    onClose();
  };

  const handleRegister = () => {
    onClose();
    openRegistration();
  };

  function isActive(href: string): boolean {
    if (href.includes("#")) return false;
    if (href === "/") return pathname === "/";
    return pathname === href;
  }

  return (
    <div
      aria-hidden={!isOpen}
      className={cn(
        "fixed inset-0 z-40 flex justify-center",
        "transition-opacity duration-200",
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
      )}
    >
      <div className="relative w-full max-w-[500px]">
        <button
          type="button"
          aria-label="Менюну жабуу"
          onClick={onClose}
          tabIndex={isOpen ? 0 : -1}
          className="absolute inset-0 bg-[#2a0910]/55 backdrop-blur-[3px]"
        />

        <div
          ref={drawerRef}
          id="navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-labelledby="nav-drawer-title"
          className={cn(
            "absolute top-0 right-0 bottom-0 flex flex-col",
            "w-[min(86vw,360px)] bg-background",
            "border-l border-accent/30",
            "shadow-[var(--shadow-elevated)] overflow-y-auto",
            "transition-transform duration-300 ease-out",
            isOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          {/* Верхний национальный блок */}
          <div className="decor-hero relative overflow-hidden px-5 pt-4 pb-4 text-white">
            <div
              aria-hidden
              className="pattern-ethnic-dark pointer-events-none absolute inset-0 opacity-50"
            />
            <div className="relative flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span
                  aria-hidden
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-accent"
                >
                  <TundukMark className="h-6 w-6" strokeWidth={3} />
                </span>
                <div className="flex flex-col leading-tight">
                  <h2
                    id="nav-drawer-title"
                    className="text-[17px] font-semibold text-white"
                  >
                    {siteConfig.name}
                  </h2>
                  <span className="text-[11.5px] text-white/75">
                    {siteConfig.tagline}
                  </span>
                </div>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Менюну жабуу"
                tabIndex={isOpen ? 0 : -1}
                className={cn(
                  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
                  "border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20",
                )}
              >
                <X aria-hidden className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div
            aria-hidden
            className="h-[3px] w-full bg-gradient-to-r from-primary via-accent to-primary"
          />

          <nav className="flex-1 px-3 pt-3 pb-2">
            {NAV_GROUPS.map((group) => (
              <div key={group.title} className="mb-2.5">
                <p className="px-3 pb-1 pt-1.5 text-[11px] font-semibold tracking-[0.08em] text-accent uppercase">
                  {group.title}
                </p>
                <ul className="flex flex-col gap-0.5">
                  {group.links.map((link) => {
                    const active = isActive(link.href);
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={handleLinkClick}
                          tabIndex={isOpen ? 0 : -1}
                          className={cn(
                            "relative flex min-h-11 items-center gap-2.5 rounded-xl px-3 py-2 text-[14px] transition-colors",
                            active
                              ? "bg-primary-soft font-medium text-primary-dark"
                              : "text-text hover:bg-surface-soft",
                          )}
                        >
                          {active && (
                            <span
                              aria-hidden
                              className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-full bg-accent"
                            />
                          )}
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>

          <div className="border-t border-accent/20 px-4 py-4">
            <button
              type="button"
              onClick={handleRegister}
              tabIndex={isOpen ? 0 : -1}
              className={cn(
                "flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl",
                "bg-primary text-[15px] font-medium text-white shadow-[var(--shadow-soft)]",
                "transition-all hover:bg-primary-dark active:scale-[0.98]",
              )}
            >
              Баланы каттоо
            </button>

            <div className="mt-3 flex gap-2">
              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                tabIndex={isOpen ? 0 : -1}
                className={cn(
                  "flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-xl",
                  "border border-border bg-surface text-[13px] font-medium text-text",
                  "transition-colors hover:bg-surface-soft",
                )}
              >
                <Phone aria-hidden className="h-3.5 w-3.5 text-primary" />
                Чалуу
              </a>
              <a
                href={QUICK_CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={isOpen ? 0 : -1}
                className={cn(
                  "flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-xl",
                  "border border-border bg-surface text-[13px] font-medium text-text",
                  "transition-colors hover:bg-surface-soft",
                )}
              >
                <MessageCircle aria-hidden className="h-3.5 w-3.5 text-forest" />
                WhatsApp
                <ExternalLink aria-hidden className="h-3 w-3 opacity-60" />
              </a>
            </div>

            <div className="mt-4 flex items-center gap-2.5 border-t border-border/70 pt-3.5">
              <span className="inline-flex h-[18px] w-[30px] shrink-0 items-center overflow-hidden rounded-[3px] shadow-sm">
                <KyrgyzFlag decorative />
              </span>
              <span className="text-[11.5px] leading-snug text-muted">
                Кыргызстандагы балдар үчүн билим берүү демилгеси
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
