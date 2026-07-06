import { FAQ } from "@/data/course-data";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/section-heading";

export function FaqSection() {
  return (
    <section aria-labelledby="faq-title" className="px-5 pt-10" id="faq">
      <SectionHeading
        eyebrow="Суроо-жооп"
        title="Көп берилүүчү суроолор"
        description="Кыска жооптор. Кошумча суроолор боюнча уюштуруучу менен байланышыңыз."
      />
      <div className="mt-5">
        <Accordion items={FAQ} />
      </div>
    </section>
  );
}
