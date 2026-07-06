import { ExternalLink, MapPin, Navigation } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { SectionHeading } from "@/components/ui/section-heading";

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

      <div className="mt-5 rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-soft)]">
        <div className="flex items-start gap-3">
          <span
            aria-hidden
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white"
          >
            <MapPin className="h-5 w-5" strokeWidth={1.8} />
          </span>
          <div className="flex flex-col gap-0.5">
            <p
              id="location-title"
              className="text-[16px] font-semibold text-text"
            >
              {mosqueName}
            </p>
            <p className="text-[14px] font-medium leading-snug text-primary-dark">
              {addressShort}
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-border bg-surface-soft/70 px-3.5 py-3">
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
            "bg-primary-soft px-4 text-[14px] font-medium text-primary-dark transition-colors " +
            "hover:bg-primary/15 active:scale-[0.99]"
          }
        >
          <Navigation aria-hidden className="h-4 w-4" />
          2GIS картадан көрүү
          <ExternalLink aria-hidden className="h-4 w-4 opacity-70" />
        </a>
      </div>
    </section>
  );
}
