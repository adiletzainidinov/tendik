import { BENEFITS } from "@/data/course-data";
import { SectionHeading } from "@/components/ui/section-heading";

export function BenefitsSection() {
  return (
    <section
      aria-labelledby="benefits-title"
      className="px-5 pt-10"
      id="benefits"
    >
      <SectionHeading
        eyebrow="Эмне үчүн курс"
        title="Ата-энелер тандаган себептер"
        description="Курс — балаңыздын Куран менен байланышын түптөй турган тынч чөйрө."
      />

      <ul className="mt-5 grid grid-cols-2 gap-2.5">
        {BENEFITS.map(({ id, title, icon: Icon }) => (
          <li
            key={id}
            className="flex flex-col gap-2 rounded-2xl border border-border bg-surface p-3.5 shadow-[var(--shadow-soft)]"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary-soft text-primary-dark">
              <Icon aria-hidden className="h-4.5 w-4.5" strokeWidth={1.8} />
            </span>
            <p className="text-[13.5px] leading-snug text-text">{title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
