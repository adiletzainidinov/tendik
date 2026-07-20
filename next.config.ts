import type { NextConfig } from "next";

/**
 * Безопасные заголовки для статического сайта. CSP намеренно не добавляется:
 * в проекте есть inline-стили и data-URI SVG, а внешние ссылки (WhatsApp,
 * Instagram, 2GIS) открываются в новой вкладке — слепой CSP может сломать
 * прод. Добавление CSP вынесено в follow-up (см. docs/project-audit.md).
 */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
