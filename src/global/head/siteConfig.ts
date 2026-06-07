import type { Locale } from "@global/localization/locales";

/** Canonical site origin. Matches scripts/generate-sitemap.ts. */
export const SITE_URL = "https://lauravolkaert.be";

/** Appended after each page title: "<page> | Portfolio". */
export const APP_TITLE = "Portfolio";
export const AUTHOR = "Laura Volkaert";
export const KEYWORDS = "portfolio, laura, volkaert, design, branding";

/** og:locale wants a full territory tag (e.g. en_US), not the bare BCP 47 code. */
export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  nl: "nl_BE",
};
