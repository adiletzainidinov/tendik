"use client";

import * as React from "react";
import { ExternalLink, MessageCircle } from "lucide-react";
import { cn } from "@/lib/cn";
import { buildRegistrationMessage, buildWhatsappUrl } from "@/lib/whatsapp";
import { useRegistrationStore } from "@/store/registration-store";
import type {
  RegistrationErrors,
  RegistrationForm as RegistrationFormData,
} from "@/types/registration";

type Status = "idle" | "opened" | "blocked";

function validate(data: RegistrationFormData): RegistrationErrors {
  const errors: RegistrationErrors = {};

  if (data.parentName.trim().length < 2) {
    errors.parentName = "Ата-эненин аты-жөнүн жазыңыз";
  }

  if (data.address.trim().length < 2) {
    errors.address = "Дарегиңизди жазыңыз";
  }

  return errors;
}

export function RegistrationForm() {
  const draft = useRegistrationStore((s) => s.draft);
  const updateDraft = useRegistrationStore((s) => s.updateDraft);

  const [errors, setErrors] = React.useState<RegistrationErrors>({});
  const [status, setStatus] = React.useState<Status>("idle");
  const [whatsappUrl, setWhatsappUrl] = React.useState<string>("");

  const firstFieldRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    firstFieldRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(draft);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstErrorField = document.querySelector<HTMLElement>(
        "[data-has-error='true']",
      );
      firstErrorField?.focus();
      return;
    }
    const message = buildRegistrationMessage(draft);
    const url = buildWhatsappUrl(message);
    setWhatsappUrl(url);
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    setStatus(opened ? "opened" : "blocked");
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex min-h-0 flex-1 flex-col overflow-hidden"
      aria-label="Каттоо формасы"
    >
      <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-5 pt-4 pb-4">
        <div className="flex flex-col gap-4">
          <Field
            id="parentName"
            label="Ата-эненин аты-жөнү"
            value={draft.parentName}
            onChange={(v) => updateDraft({ parentName: v })}
            error={errors.parentName}
            autoComplete="name"
            inputRef={firstFieldRef}
            required
          />
          <Field
            id="address"
            label="Дарегиңиз / кайсы жактан жазып жатасыз?"
            value={draft.address}
            onChange={(v) => updateDraft({ address: v })}
            error={errors.address}
            placeholder="Мисалы: Теңдик ж/м"
            autoComplete="off"
            required
          />

          {status === "opened" && whatsappUrl && (
            <div
              role="status"
              className="flex flex-col gap-2 rounded-2xl border border-forest/30 bg-forest-soft px-4 py-3.5 text-[13.5px] leading-relaxed text-forest"
            >
              <p className="font-semibold">
                WhatsApp ачылды. Даяр билдирүүнү жөнөтүү баскычын басыңыз.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-forest underline underline-offset-2"
              >
                WhatsApp кайра ачуу
                <ExternalLink aria-hidden className="h-3.5 w-3.5" />
              </a>
            </div>
          )}

          {status === "blocked" && whatsappUrl && (
            <div
              role="alert"
              className="flex flex-col gap-2 rounded-2xl border border-accent/40 bg-accent-soft px-4 py-3.5 text-[13.5px] leading-relaxed text-primary-dark"
            >
              <p className="font-semibold">
                Браузер жаңы терезени бөгөттөгөн окшойт.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-primary underline underline-offset-2"
              >
                WhatsApp&apos;ты ачуу үчүн ушул шилтемени басыңыз
                <ExternalLink aria-hidden className="h-3.5 w-3.5" />
              </a>
            </div>
          )}
        </div>
      </div>

      <div
        className="border-t border-border/80 bg-background/95 backdrop-blur px-5 pt-3 pb-4"
        style={{
          paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 16px)",
        }}
      >
        <button
          type="submit"
          className={cn(
            "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-primary px-4",
            "text-[15px] font-medium text-white shadow-[var(--shadow-soft)] transition-all active:scale-[0.99]",
            "hover:bg-primary-dark",
          )}
        >
          <MessageCircle aria-hidden className="h-4 w-4" />
          WhatsApp аркылуу катталуу
        </button>
        <p className="mt-2 text-[12px] leading-relaxed text-muted">
          Баскычты баскандан кийин даяр билдирүү WhatsApp аркылуу ачылат.
        </p>
      </div>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
  inputRef?: React.Ref<HTMLInputElement>;
};

function Field({
  id,
  label,
  value,
  onChange,
  error,
  required,
  placeholder,
  autoComplete,
  inputRef,
}: FieldProps) {
  const errorId = `${id}-error`;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[13.5px] font-medium text-text">
        {label}
        {required && (
          <span aria-hidden className="ml-0.5 text-danger">
            *
          </span>
        )}
      </label>
      <input
        id={id}
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        data-has-error={error ? "true" : undefined}
        className={cn(
          "min-h-12 w-full rounded-xl border bg-surface px-3.5 text-[15px] text-text placeholder:text-muted/70",
          "border-border transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
          error && "border-danger focus:border-danger focus:ring-danger/20",
        )}
      />
      {error && (
        <p id={errorId} role="alert" className="text-[12.5px] text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
