import { CheckCircle2, Users } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function EnrollmentProgressSection() {
  const min = siteConfig.minimumStudents;
  const registered = siteConfig.registeredStudents;
  const reached = registered >= min;
  const remaining = Math.max(0, min - registered);

  return (
    <section aria-labelledby="enrollment-title" className="px-5 pt-6">
      <Card className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-soft"
        />
        <div className="relative">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary-soft text-primary-dark">
              <Users aria-hidden className="h-5 w-5" />
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-[12px] font-medium tracking-wide text-primary-dark uppercase">
                Каттоо прогресси
              </span>
              <h2
                id="enrollment-title"
                className="text-[17px] font-semibold text-text"
              >
                Максат: кеминде {min} окуучу
              </h2>
            </div>
          </div>

          <div className="mt-5 flex items-end justify-between gap-4">
            <div>
              <div className="text-[32px] leading-none font-semibold text-primary-dark">
                {registered}
                <span className="text-[16px] text-muted"> / {min}</span>
              </div>
              <p className="mt-1 text-[13px] text-muted">
                Каттоодон өткөн окуучулар
              </p>
            </div>
            {reached ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-[12px] font-medium text-white">
                <CheckCircle2 aria-hidden className="h-3.5 w-3.5" />
                Максат аткарылды
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1.5 text-[12px] font-medium text-primary-dark">
                Дагы {remaining} окуучу керек
              </span>
            )}
          </div>

          <div className="mt-4">
            <Progress
              value={registered}
              max={min}
              label={`${registered}, максат ${min}`}
            />
          </div>

          <div className="mt-4 rounded-xl border border-border bg-surface-soft/70 px-3.5 py-3 text-[13px] leading-relaxed text-muted">
            {reached
              ? "Курс баштоого жетиштүү окуучу топтолду. Уюштуруучу жакында сабактын башталышы жөнүндө кабарлайт."
              : "Каттоо тизмеси уюштуруучу тарабынан жаңыртылып турат. Сиз балаңызды каттоо аркылуу орун ээлей аласыз."}
          </div>
        </div>
      </Card>
    </section>
  );
}
