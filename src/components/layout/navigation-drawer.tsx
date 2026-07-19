"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalLink, MessageCircle, Phone, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/config/site-config";
import { QUICK_CONTACT_URL } from "@/lib/whatsapp";
import { useRegistrationStore } from "@/store/registration-store";

type NavLink = {
  label: string;
  href: string;
};

const NAV_LINKS: readonly NavLink[] = [
  { label: "Башкы бет", href: "/" },
  { label: "Баалар жана орундар", href: "/#pricing" },
  { label: "Исламдын негиздери — 80 сабак", href: "/programma" },
  { label: "Курс жөнүндө", href: "/maalymat" },
  { label: "Окуу багыттары", href: "/maalymat#curriculum" },
  { label: "Балдарды мотивациялоо", href: "/maalymat#motivation" },
  { label: "Төлөм жана отчет", href: "/maalymat#expenses" },
  { label: "Акчаны кайтаруу шарттары", href: "/maalymat#refund" },
  { label: "Ата-энелер үчүн", href: "/maalymat#parents" },
  { label: "Суроо-жооп", href: "/maalymat#faq" },
  { label: "Instagram", href: "/maalymat#instagram" },
  { label: "Дарек", href: "/#location" },
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
    const basePath = href.split("#")[0] || "/";
    if (basePath === "/") {
      return pathname === "/" && href === "/";
    }
    return pathname === basePath;
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
          className="absolute inset-0 bg-primary-dark/45 backdrop-blur-[2px]"
        />

        <div
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="nav-drawer-title"
          className={cn(
            "absolute top-0 right-0 bottom-0 flex flex-col",
            "w-[min(86vw,360px)] bg-background border-l border-border",
            "shadow-[var(--shadow-elevated)] overflow-y-auto",
            "transition-transform duration-300 ease-out",
            isOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-start justify-between gap-3 border-b border-border/70 px-5 pt-4 pb-3">
            <div className="flex flex-col">
              <h2
                id="nav-drawer-title"
                className="text-[16px] font-semibold text-text"
              >
                Меню
              </h2>
              <span className="text-[12px] text-muted">
                {siteConfig.name} — {siteConfig.tagline}
              </span>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Менюну жабуу"
              tabIndex={isOpen ? 0 : -1}
              className={cn(
                "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
                "bg-surface-soft text-primary-dark transition-colors hover:bg-primary-soft",
              )}
            >
              <X aria-hidden className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 px-3 py-3">
            <ul className="flex flex-col gap-0.5">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      tabIndex={isOpen ? 0 : -1}
                      className={cn(
                        "flex min-h-11 items-center gap-2.5 rounded-xl px-3 py-2 text-[14px] transition-colors",
                        active
                          ? "bg-primary-soft font-medium text-primary-dark"
                          : "text-text hover:bg-surface-soft",
                      )}
                    >
                      {active && (
                        <span
                          aria-hidden
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        />
                      )}
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="border-t border-border/70 px-4 py-4">
            <button
              type="button"
              onClick={handleRegister}
              tabIndex={isOpen ? 0 : -1}
              className={cn(
                "flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl",
                "bg-primary text-[15px] font-medium text-white shadow-[var(--shadow-soft)]",
                "transition-all active:scale-[0.98]",
              )}
            >
              Баланы каттоо
            </button>

            <div className="mt-3 flex gap-2">
              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                tabIndex={isOpen ? 0 : -1}
                className={cn(
                  "flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-xl",
                  "border border-border bg-surface text-[13px] font-medium text-text",
                  "transition-colors hover:bg-surface-soft",
                )}
              >
                <Phone aria-hidden className="h-3.5 w-3.5" />
                Чалуу
              </a>
              <a
                href={QUICK_CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={isOpen ? 0 : -1}
                className={cn(
                  "flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-xl",
                  "border border-border bg-surface text-[13px] font-medium text-text",
                  "transition-colors hover:bg-surface-soft",
                )}
              >
                <MessageCircle aria-hidden className="h-3.5 w-3.5" />
                WhatsApp
                <ExternalLink aria-hidden className="h-3 w-3 opacity-60" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
