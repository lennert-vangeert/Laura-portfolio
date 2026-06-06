/**
 * Pure locale config — no i18next/react/JSON imports, so this module is safe
 * to import from plain Node/tsx scripts (e.g. sitemap generation) as well as
 * the app's i18n setup.
 */
export type Locale = "en" | "nl";

/** Supported locale ids, in order. */
export const localeIds: Locale[] = ["en", "nl"];

/** Default locale (used as i18next fallback). */
export const defaultLocale: Locale = "nl";
