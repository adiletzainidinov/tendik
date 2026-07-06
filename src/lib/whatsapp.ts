import { siteConfig } from "@/config/site-config";
import type { RegistrationForm } from "@/types/registration";

export const QUICK_CONTACT_MESSAGE = `Ассаламу алейкум! ${siteConfig.name} Куран курсу тууралуу маалымат алгым келет.`;

export function buildRegistrationMessage(data: RegistrationForm): string {
  return [
    "Ассаламу алейкум!",
    `${siteConfig.name} Куран курсуна баламды каттагым келет.`,
    "",
    `Ата-эненин аты-жөнү: ${data.parentName.trim()}`,
    `Дареги / кайсы жактан жазып жатат: ${data.address.trim()}`,
    "",
    `Сабак өтүүчү жер: ${siteConfig.location.mosqueName}`,
    `Дарек: ${siteConfig.location.addressShort}`,
  ].join("\n");
}

export function buildWhatsappUrl(message: string): string {
  const number = siteConfig.contact.whatsappNumber;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const QUICK_CONTACT_URL = buildWhatsappUrl(QUICK_CONTACT_MESSAGE);
