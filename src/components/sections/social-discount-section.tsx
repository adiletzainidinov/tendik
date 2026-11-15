import { HeartHandshake } from "lucide-react";

const discounts = [
  { title: "Ата-энесинин камкордугусуз калган балдар", amount: "100% чейин" },
  { title: "Өтө оор материалдык абалдагы үй-бүлөлөр", amount: "50–100%" },
  { title: "Аз камсыз болгон үй-бүлөлөр", amount: "30–50%" },
  { title: "Майыптыгы бар баланы тарбиялап, материалдык жактан кыйналган үй-бүлөлөр", amount: "30–50%" },
  { title: "Кирешеси аз жалгыз бой ата-энелер жана көп балалуу үй-бүлөлөр", amount: "20–30%" },
  { title: "Курста сабак берген устаздын өз балдары", amount: "50%" },
] as const;

export function SocialDiscountSection() {
  return (
    <section id="social-discounts" aria-labelledby="social-discounts-title" className="px-5 pt-9">
      <div className="rounded-3xl border border-accent/30 bg-surface p-5 shadow-[var(--shadow-soft)]">
        <div className="flex items-center gap-2"><HeartHandshake aria-hidden className="h-6 w-6 text-primary" /><h2 id="social-discounts-title" className="text-[20px] font-semibold text-text">Социалдык жеңилдиктер</h2></div>
        <p className="mt-3 text-[13.5px] leading-relaxed text-muted">Негизги 25 орундук топтон жеңилдик үчүн 5 орун бөлүнөт. Бул орундар катталуу кезегиндеги белгилүү бир номерлерге байланбайт: арыздар жеке каралат.</p>
        <div className="mt-4 flex flex-col gap-2">
          {discounts.map((item) => (
            <div key={item.title} className="flex items-start justify-between gap-3 rounded-xl border border-border bg-surface-soft/70 px-3 py-3">
              <span className="text-[13px] leading-relaxed text-text">{item.title}</span><span className="shrink-0 text-[13px] font-semibold text-primary-dark">{item.amount}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[12.5px] leading-relaxed text-muted">Устаздын балдары үчүн 50% жеңилдик каралган. Калган категориялар боюнча так өлчөм үй-бүлөнүн муктаждыгына жараша аныкталат. Жеңилдиктер кошулбайт жана 5 орундук чектин ичинде берилет.</p>
        <p className="mt-2 text-[12.5px] leading-relaxed text-muted">Жеңилдик сураган үй-бүлөлөр уюштуруучуга жеке кайрылса болот. Маалымат купуя каралат. Жеңилдик бекитилгенге чейин кадимки орун баасы колдонулат.</p>
      </div>
    </section>
  );
}
