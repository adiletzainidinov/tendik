import {
  ExternalLink,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/instagram-icon";
import { siteConfig } from "@/config/site-config";
import { QUICK_CONTACT_URL } from "@/lib/whatsapp";
import { TundukMark } from "@/components/decor/tunduk-mark";
import { NationalMotifChip } from "@/components/decor/national-motif";
import { OrnamentRow } from "@/components/decor/kyrgyz-ornament";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { phoneDisplay, phoneTel } = siteConfig.contact;
  const { mosqueName, addressShort, address, mapUrl } = siteConfig.location;
  const { handle: igHandle, profileUrl: igUrl } = siteConfig.social.instagram;
  const igLabel = `${siteConfig.name} курсунун Instagram баракчасын ачуу`;

  const contactLinkClass =
    "inline-flex min-h-11 w-full items-center gap-2.5 rounded-xl border border-white/15 " +
    "bg-white/[0.06] px-3.5 text-[13.5px] font-medium text-white/90 transition-colors " +
    "hover:bg-white/[0.12]";

  return (
    <footer className="decor-deep relative mt-10 overflow-hidden text-white">
      <div
        aria-hidden
        className="pattern-ethnic-dark pointer-events-none absolute inset-0 opacity-35"
      />
      <div aria-hidden className="relative text-accent/70">
        <OrnamentRow patternId="footer-ornament" className="h-2.5" />
      </div>

      <div className="relative flex flex-col gap-5 px-5 pt-7 pb-8">
        <div className="flex items-start gap-3">
          <span
            aria-hidden
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-accent/40 bg-white/[0.07] text-accent"
          >
            <TundukMark className="h-6.5 w-6.5" strokeWidth={2.8} />
          </span>
          <div className="flex flex-col">
            <span className="text-[17px] font-semibold text-white">
              {siteConfig.name}
            </span>
            <span className="text-[13px] text-white/70">
              {siteConfig.tagline}
            </span>
          </div>
        </div>

        <div>
          <p className="text-[11.5px] font-medium tracking-[0.08em] text-[#f2cf6f] uppercase">
            Биз менен байланышуу
          </p>

          <div className="mt-3 flex items-start gap-3">
            <span
              aria-hidden
              className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/[0.08] text-accent"
            >
              <MapPin className="h-4 w-4" strokeWidth={1.8} />
            </span>
            <div className="flex flex-col">
              <span className="text-[14px] font-semibold text-white">
                {mosqueName}
              </span>
              <span className="text-[13px] font-medium text-white/80">
                {addressShort}
              </span>
            </div>
          </div>

          <div className="mt-3 rounded-xl border border-white/12 bg-white/[0.05] px-3.5 py-2.5">
            <span className="text-[11px] font-medium tracking-wide text-white/60 uppercase">
              Дарек
            </span>
            <p
              className="mt-0.5 text-[12.5px] leading-relaxed text-white/75"
              style={{ overflowWrap: "anywhere" }}
            >
              {address}
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <a href={`tel:${phoneTel}`} className={contactLinkClass}>
              <Phone aria-hidden className="h-4 w-4 text-accent" />
              {phoneDisplay}
            </a>

            <a
              href={QUICK_CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={
                "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl " +
                "bg-accent px-4 text-[15px] font-medium text-primary-dark shadow-[var(--shadow-gold)] " +
                "transition-all hover:bg-[#b3852a] hover:text-white active:scale-[0.99]"
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
              className={contactLinkClass + " justify-center"}
            >
              <Navigation aria-hidden className="h-4 w-4 text-accent" />
              2GIS картадан көрүү
              <ExternalLink aria-hidden className="h-3.5 w-3.5 opacity-70" />
            </a>

            <a
              href={igUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={igLabel}
              className={contactLinkClass}
            >
              <span
                aria-hidden
                className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #833ab4 0%, #fd1d1d 55%, #fcb045 100%)",
                }}
              >
                <InstagramIcon className="h-3.5 w-3.5" />
              </span>
              <span className="flex-1">{igHandle}</span>
              <ExternalLink aria-hidden className="h-3.5 w-3.5 opacity-60" />
            </a>
          </div>
        </div>

        <p className="text-[12.5px] leading-relaxed text-white/65">
          Сабактар негизги топко {siteConfig.minimumStudents} бала толук
          чогулгандан кийин башталат.
        </p>

        {/*
         * Национальный блок. Официальная государственная символика (флаг,
         * герб КР) пока отсутствует — здесь только декоративный
         * NationalMotifChip. Официальный флаг или герб добавляется отдельным
         * проверенным PR: локальный asset в public/national-symbols/ и новый
         * компонент с корректными alt, width и height (см. ATTRIBUTION.md).
         * Приблизительные/самодельные версии размещать нельзя.
         */}
        <div className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.05] px-4 py-3">
          <NationalMotifChip className="h-8 w-8 rounded-lg" />
          <p className="text-[12px] leading-snug text-white/75">
            Кыргызстандагы балдар үчүн Куран жана адеп боюнча билим берүү
            демилгеси
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-white/12 pt-4 text-[12px] text-white/55">
          <span>
            © {year} {siteConfig.name}
          </span>
          <span>Кыргыз тилинде</span>
        </div>
      </div>
    </footer>
  );
}
