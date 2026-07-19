import { ExternalLink, MapPin, Navigation } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { SectionHeading } from "@/components/ui/section-heading";
import { AlaTooSilhouette } from "@/components/decor/ala-too-silhouette";

export function LocationSection() {
  const { mosqueName, addressShort, address, mapUrl } = siteConfig.location;

  return (
    <section
      aria-labelledby="location-title"
      className="px-5 pt-10"
      id="location"
    >
      <SectionHeading
        eyebrow="Дарек"
        title="Сабак өтүүчү жер"
        description="Куран сабактары ушул мечитте ишемби жана жекшемби күндөрү өткөрүлөт."
      />

      <div className="mt-5 overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-soft)]">
        {/* Атмосферная шапка карточки с горами Ала-Тоо */}
        <div className="decor-hero relative flex h-[104px] items-end overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-8 right-6 h-24 w-24 rounded-full bg-[#ffdd00]/15 blur-2xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 text-[#43091a]"
          >
            <AlaTooSilhouette className="h-14 w-full" />
          </div>
          <span
            aria-hidden
            className="relative z-10 mb-3 ml-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/25 bg-white/15 text-white backdrop-blur"
          >
            <MapPin className="h-5 w-5" strokeWidth={1.8} />
          </span>
        </div>

        <div className="p-5 pt-4">
          <p id="location-title" className="text-[17px] font-semibold text-text">
            {mosqueName}
          </p>
          <p className="mt-0.5 text-[14px] font-medium leading-snug text-primary">
            {addressShort}
          </p>

          <div className="mt-3.5 rounded-xl border border-border bg-surface-soft/70 px-3.5 py-3">
            <p className="text-[11.5px] font-medium tracking-wide text-primary-dark uppercase">
              Дарек
            </p>
            <p
              className="mt-1 break-words text-[13px] leading-relaxed text-muted"
              style={{ overflowWrap: "anywhere" }}
            >
              {address}
            </p>
          </div>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={
              "mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl " +
              "bg-primary px-4 text-[14.5px] font-medium text-white shadow-[var(--shadow-soft)] " +
              "transition-all hover:bg-primary-dark active:scale-[0.99]"
            }
          >
            <Navigation aria-hidden className="h-4 w-4" />
            2GIS картадан көрүү
            <ExternalLink aria-hidden className="h-4 w-4 opacity-70" />
          </a>
        </div>
      </div>
    </section>
  );
}
