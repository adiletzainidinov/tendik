import {
  ExternalLink,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { QUICK_CONTACT_URL } from "@/lib/whatsapp";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { phoneDisplay, phoneTel } = siteConfig.contact;
  const { mosqueName, addressShort, address, mapUrl } = siteConfig.location;

  return (
    <footer className="mt-8 border-t border-border bg-surface-soft px-5 pt-8 pb-10">
      <div className="flex flex-col gap-5">
        <div className="flex items-start gap-3">
          <span
            aria-hidden
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white"
          >
            <FooterGlyph />
          </span>
          <div className="flex flex-col">
            <span className="text-[16px] font-semibold text-text">
              {siteConfig.name}
            </span>
            <span className="text-[13px] text-muted">
              {siteConfig.tagline}
            </span>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-4 shadow-[var(--shadow-soft)]">
          <p className="text-[12px] font-medium tracking-wide text-primary-dark uppercase">
            Биз менен байланышуу
          </p>

          <div className="mt-3 flex items-start gap-3">
            <span
              aria-hidden
              className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-dark"
            >
              <MapPin className="h-4 w-4" strokeWidth={1.8} />
            </span>
            <div className="flex flex-col">
              <span className="text-[14px] font-semibold text-text">
                {mosqueName}
              </span>
              <span className="text-[13px] font-medium text-primary-dark">
                {addressShort}
              </span>
            </div>
          </div>

          <div className="mt-3 rounded-xl border border-border bg-surface-soft/70 px-3 py-2.5">
            <span className="text-[11.5px] font-medium tracking-wide text-primary-dark uppercase">
              Дарек
            </span>
            <p
              className="mt-0.5 text-[12.5px] leading-relaxed text-muted"
              style={{ overflowWrap: "anywhere" }}
            >
              {address}
            </p>
          </div>

          <a
            href={`tel:${phoneTel}`}
            className={
              "mt-4 inline-flex min-h-11 w-full items-center gap-2.5 rounded-xl border border-border " +
              "bg-surface px-3.5 text-[14px] font-medium text-text transition-colors " +
              "hover:bg-surface-soft"
            }
          >
            <Phone aria-hidden className="h-4 w-4 text-primary" />
            {phoneDisplay}
          </a>

          <a
            href={QUICK_CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={
              "mt-2 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl " +
              "bg-primary px-4 text-[15px] font-medium text-white shadow-[var(--shadow-soft)] " +
              "transition-colors hover:bg-primary-dark active:scale-[0.99]"
            }
          >
            <MessageCircle aria-hidden className="h-4 w-4" />
            WhatsApp аркылуу жазуу
            <ExternalLink aria-hidden className="h-4 w-4 opacity-80" />
          </a>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={
              "mt-2 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl " +
              "border border-primary/25 bg-transparent px-3.5 text-[13.5px] font-medium text-primary-dark " +
              "transition-colors hover:bg-primary-soft"
            }
          >
            <Navigation aria-hidden className="h-4 w-4" />
            2GIS картадан көрүү
            <ExternalLink aria-hidden className="h-3.5 w-3.5 opacity-70" />
          </a>
        </div>

        <p className="text-[13px] leading-relaxed text-muted">
          Курс кеминде {siteConfig.minimumStudents} окуучу топтолгондон кийин
          башталат.
        </p>

        <div className="flex items-center justify-between border-t border-border pt-4 text-[12px] text-muted">
          <span>© {year} {siteConfig.name}</span>
          <span>Кыргыз тилинде</span>
        </div>
      </div>
    </footer>
  );
}

function FooterGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 3c3 1.7 5 4.8 5 8.3 0 4.2-3.1 7.7-7.3 8.5A9 9 0 0 0 21 12.5 9 9 0 0 0 12 3.5V3z"
        fill="#c89b3c"
      />
      <path
        d="M9.5 8.5c-.9.8-1.5 2-1.5 3.3 0 2.4 2 4.3 4.4 4.3.7 0 1.3-.1 1.9-.4-1 1.6-2.8 2.6-4.8 2.6a5.6 5.6 0 0 1-5.6-5.6c0-2.8 2-5.1 4.7-5.5-.4.3-.7.7-1.1 1.3z"
        fill="#ffffff"
      />
    </svg>
  );
}
