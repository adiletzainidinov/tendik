import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site-config";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.metadataTitle,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.metadataDescription,
  applicationName: siteConfig.name,
  keywords: [
    "Куран",
    "балдар",
    "тажвид",
    "мечит",
    "Муаллим Саани",
    "намаз",
    "дуа",
    "Кыргызстан",
    "Ислам",
  ],
  authors: [{ name: siteConfig.name }],
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "ky_KG",
    siteName: siteConfig.name,
    title: siteConfig.metadataTitle,
    description: siteConfig.metadataDescription,
  },
  twitter: {
    card: "summary",
    title: siteConfig.metadataTitle,
    description: siteConfig.metadataDescription,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#9e1b32",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ky">
      <body>{children}</body>
    </html>
  );
}
