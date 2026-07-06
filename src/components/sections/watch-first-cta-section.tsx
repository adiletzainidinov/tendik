"use client";

import { ExternalLink, UserPlus2 } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { InstagramIcon } from "@/components/ui/instagram-icon";
import { useRegistrationStore } from "@/store/registration-store";

export function WatchFirstCtaSection() {
  const open = useRegistrationStore((s) => s.open);
  const { profileUrl } = siteConfig.social.instagram;
  const igLabel = `${siteConfig.name} курсунун Instagram баракчасын ачуу`;

  return (
    <section
      aria-labelledby="watch-first-title"
      className="px-5 pt-10"
      id="watch-first"
    >
      <div className="rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-soft)]">
        <p
          id="watch-first-title"
          className="text-[17px] font-semibold text-text"
        >
          Алгач сабактарыбызды көрүп чыгыңыз
        </p>
        <p className="mt-1 text-[13.5px] leading-relaxed text-muted">
          Instagram баракчабызда сабактардан чыныгы видеолор жана окутуу
          тууралуу пикирлер бар.
        </p>

        <div className="mt-4 flex flex-col gap-2.5">
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={igLabel}
            className={
              "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl " +
              "border border-primary/30 bg-surface-soft px-4 text-[14.5px] font-medium text-primary-dark " +
              "transition-colors hover:bg-primary-soft active:scale-[0.99]"
            }
          >
            <InstagramIcon aria-hidden className="h-4 w-4" />
            Видеолорду көрүү
            <ExternalLink aria-hidden className="h-4 w-4 opacity-70" />
          </a>
          <button
            type="button"
            onClick={open}
            className={
              "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl " +
              "bg-primary px-4 text-[15px] font-medium text-white shadow-[var(--shadow-soft)] " +
              "transition-colors hover:bg-primary-dark active:scale-[0.99]"
            }
          >
            <UserPlus2 aria-hidden className="h-4 w-4" />
            Баланы каттоо
          </button>
        </div>
      </div>
    </section>
  );
}
