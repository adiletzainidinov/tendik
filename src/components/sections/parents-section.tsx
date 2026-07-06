import {
  BookOpen,
  ClipboardList,
  ExternalLink,
  HandHelping,
  HelpCircle,
  MessageCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { QUICK_CONTACT_URL } from "@/lib/whatsapp";

const ITEMS = [
  { id: "program", title: "Программа менен таанышуу", icon: BookOpen },
  { id: "contact", title: "Уюштуруучу менен байланышуу", icon: MessageCircle },
  { id: "level", title: "Баланын деңгээлин тактоо", icon: HandHelping },
  { id: "order", title: "Сабактардын тартибин билүү", icon: ClipboardList },
  { id: "answers", title: "Каттоого чейин суроолорго жооп", icon: HelpCircle },
] as const;

export function ParentsSection() {
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

      <div className="mt-5 rounded-2xl border border-primary/25 bg-primary-soft/60 p-5 shadow-[var(--shadow-soft)]">
        <p className="text-[16px] font-semibold text-primary-dark">
          Суроолоруңуз барбы?
        </p>
        <p className="mt-1 text-[13.5px] leading-relaxed text-primary-dark/85">
          Сабактын программасы, баланын деңгээли, каттоо жана төлөм тууралуу
          WhatsApp аркылуу так маалымат ала аласыз.
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
      </div>
    </section>
  );
}
