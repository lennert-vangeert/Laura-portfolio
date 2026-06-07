// scripts/prerender.ts
//
// Postbuild step: writes static per-route HTML for every known route with the
// correct <head> (title, description, canonical, OpenGraph, Twitter, JSON-LD)
// and <html lang> baked in, so social scrapers / non-JS crawlers see real
// metadata. The SPA body is left untouched and hydrates as usual; the injected
// tags are marked data-prerendered and stripped on the client before render
// (see src/main.tsx) so React 19 owns the head after boot.
//
// Mirrors the route set + SEO data the runtime Head component produces. Run via
// `npm run build` (npm fires this as the `postbuild` hook, after `vite build`).

import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  readdirSync,
} from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { projectMeta } from "../src/assets/projects/meta";
import {
  localeIds,
  defaultLocale,
  type Locale,
} from "../src/global/localization/locales";
import {
  SITE_URL,
  APP_TITLE,
  AUTHOR,
  KEYWORDS,
  OG_LOCALE,
} from "../src/global/head/siteConfig";

const dir = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(dir, "../dist");
const localeDir = resolve(dir, "../src/global/localization");

const template = readFileSync(resolve(distDir, "index.html"), "utf8");

// Title strings live in the flat-keyed translation JSON (keySeparator: false).
const translations: Record<Locale, Record<string, string>> = {
  en: JSON.parse(readFileSync(resolve(localeDir, "_en.json"), "utf8")),
  nl: JSON.parse(readFileSync(resolve(localeDir, "_nl.json"), "utf8")),
};

// Resolve a project's hashed thumbnail (p{n}-<hash>.jpg) from the built assets.
const assetFiles = readdirSync(resolve(distDir, "assets"));
const hashedThumb = (n: number): string | undefined => {
  const file = assetFiles.find((f) => new RegExp(`^p${n}-.*\\.jpg$`).test(f));
  return file ? `${SITE_URL}/assets/${file}` : undefined;
};

const escAttr = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
const escText = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const HOME_DESC = "Portfolio of Laura Volkaert";
const PROJECT_DESC = "Project by Laura Volkaert";

type Route = {
  /** Output path under dist/, e.g. "nl/projects/twiin/index.html". */
  out: string;
  /** Canonical/og:url path, e.g. "/nl/projects/twiin". */
  canonicalPath: string;
  locale: Locale;
  title: string;
  description: string;
  image?: string;
};

const homeTitle = (l: Locale) => translations[l].Homepage;

const routes: Route[] = [
  // Bare root redirects to the default locale at runtime — point its canonical there.
  {
    out: "index.html",
    canonicalPath: `/${defaultLocale}`,
    locale: defaultLocale,
    title: homeTitle(defaultLocale),
    description: HOME_DESC,
  },
  ...localeIds.flatMap((locale): Route[] => [
    {
      out: `${locale}/index.html`,
      canonicalPath: `/${locale}`,
      locale,
      title: homeTitle(locale),
      description: HOME_DESC,
    },
    ...projectMeta.map((p, i): Route => ({
      out: `${locale}/projects/${p.slug}/index.html`,
      canonicalPath: `/${locale}/projects/${p.slug}`,
      locale,
      title: translations[locale][p.titleKey],
      description: PROJECT_DESC,
      image: hashedThumb(i + 1),
    })),
  ]),
];

const headBlock = (r: Route): string => {
  const fullTitle = `${r.title} | ${APP_TITLE}`;
  const url = `${SITE_URL}${r.canonicalPath}`;
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: fullTitle,
    description: r.description,
    url,
    inLanguage: r.locale,
  }).replace(/</g, "\\u003c");

  const tags = [
    `<title data-prerendered>${escText(fullTitle)}</title>`,
    `<meta data-prerendered name="description" content="${escAttr(r.description)}" />`,
    `<meta data-prerendered name="keywords" content="${escAttr(KEYWORDS)}" />`,
    `<meta data-prerendered name="author" content="${escAttr(AUTHOR)}" />`,
    `<meta data-prerendered name="robots" content="index, follow" />`,
    `<link data-prerendered rel="canonical" href="${escAttr(url)}" />`,
    `<meta data-prerendered property="og:type" content="website" />`,
    `<meta data-prerendered property="og:site_name" content="${escAttr(AUTHOR)}" />`,
    `<meta data-prerendered property="og:locale" content="${OG_LOCALE[r.locale]}" />`,
    `<meta data-prerendered property="og:title" content="${escAttr(fullTitle)}" />`,
    `<meta data-prerendered property="og:description" content="${escAttr(r.description)}" />`,
    `<meta data-prerendered property="og:url" content="${escAttr(url)}" />`,
    ...(r.image
      ? [`<meta data-prerendered property="og:image" content="${escAttr(r.image)}" />`]
      : []),
    `<meta data-prerendered name="twitter:card" content="${r.image ? "summary_large_image" : "summary"}" />`,
    `<meta data-prerendered name="twitter:title" content="${escAttr(fullTitle)}" />`,
    `<meta data-prerendered name="twitter:description" content="${escAttr(r.description)}" />`,
    ...(r.image
      ? [`<meta data-prerendered name="twitter:image" content="${escAttr(r.image)}" />`]
      : []),
    `<script data-prerendered type="application/ld+json">${jsonLd}</script>`,
  ];
  return tags.map((t) => `    ${t}`).join("\n");
};

for (const r of routes) {
  const html = template
    .replace('<html lang="en">', `<html lang="${r.locale}">`)
    .replace("</head>", `${headBlock(r)}\n  </head>`);
  const outPath = resolve(distDir, r.out);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html, "utf8");
}

console.log(`✅ Prerendered ${routes.length} route(s) into dist/`);
