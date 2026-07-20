import {
  BookOpen,
  ClipboardList,
  ExternalLink,
  HandHelping,
  HelpCircle,
  MessageCircle,
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/instagram-icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site-config";
import { QUICK_CONTACT_URL } from "@/lib/whatsapp";

const ITEMS = [
  { id: "program", title: "Программа менен таанышуу", icon: BookOpen },
  { id: "contact", title: "Уюштуруучу менен байланышуу", icon: MessageCircle },
  { id: "level", title: "Баланын деңгээлин тактоо", icon: HandHelping },
  { id: "order", title: "Сабактардын тартибин билүү", icon: ClipboardList },
  { id: "answers", title: "Каттоого чейин суроолорго жооп", icon: HelpCircle },
] as const;

export function ParentsSection() {
  const igUrl = siteConfig.social.instagram.profileUrl;
  const igLabel = `${siteConfig.name} курсунун Instagram баракчасын ачуу`;
  return (
    <section
      aria-labelledby="parents-title"
      className="px-5 pt-10"
      id="parents"
    >
      <SectionHeading
        eyebrow="Ата-энелерге"
        title="Ата-энелер үчүн ачык маалымат"
        description="Каттоого чейин уюштуруучу менен байланышып, программа, тартип жана баланын деңгээли боюнча тактап алса болот."
      />

      <ul className="mt-5 flex flex-col gap-2">
        {ITEMS.map(({ id, title, icon: Icon }) => (
          <li
            key={id}
            className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 shadow-[var(--shadow-soft)]"
          >
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-dark">
              <Icon aria-hidden className="h-4.5 w-4.5" strokeWidth={1.8} />
            </span>
            <span className="text-[14px] leading-snug text-text">{title}</span>
          </li>
        ))}
      </ul>

      <div className="surface-felt texture-felt relative overflow-hidden mt-5 rounded-2xl border border-accent/30 p-5 shadow-[var(--shadow-soft)]">
        <span
          aria-hidden
          className="edge-gold-top pointer-events-none absolute inset-x-0 top-0 h-px"
        />
        <p className="relative text-[16px] font-semibold text-primary-dark">
          Суроолоруңуз барбы?
        </p>
        <p className="mt-1 text-[13.5px] leading-relaxed text-primary-dark/85">
          Сабактын программасы, баланын деңгээли, каттоо жана төлөм тууралуу
          WhatsApp аркылуу так маалымат ала аласыз.
        </p>
        <p className="mt-2 text-[13px] leading-relaxed text-primary-dark/85">
          Сабактар кандай өтөрүн алдын ала көргүңүз келсе, Instagram
          баракчабыздагы чыныгы видеолорду жана пикирлерди көрүңүз.
        </p>
        <a
          href={QUICK_CONTACT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={
            "mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl " +
            "bg-primary px-4 text-[15px] font-medium text-white shadow-[var(--shadow-soft)] " +
            "transition-colors hover:bg-primary-dark active:scale-[0.99]"
          }
        >
          <MessageCircle aria-hidden className="h-4 w-4" />
          WhatsApp аркылуу суроо берүү
          <ExternalLink aria-hidden className="h-4 w-4 opacity-80" />
        </a>
        <a
          href={igUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={igLabel}
          className={
            "mt-2 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl " +
            "border border-primary/25 bg-transparent px-3.5 text-[13.5px] font-medium text-primary-dark " +
            "transition-colors hover:bg-primary-soft"
          }
        >
          <InstagramIcon aria-hidden className="h-4 w-4" />
          Instagram&apos;дан көрүү
          <ExternalLink aria-hidden className="h-3.5 w-3.5 opacity-70" />
        </a>
      </div>
    </section>
  );
}
