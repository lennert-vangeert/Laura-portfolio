// scripts/generate-sitemap.ts
//
// Generates public/sitemap.xml from the live data: every locale home plus every
// project detail page. Run via `npm run generate-sitemap` (tsx) — also wired as
// a `prebuild` hook so it regenerates on every build/deploy.
//
// Override the domain with SITE_URL=... when running.

import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { projectMeta } from "../src/assets/projects/meta";
import { localeIds } from "../src/global/localization/locales";

const dir = dirname(fileURLToPath(import.meta.url));
const SITE_URL = process.env.SITE_URL ?? "https://lauravolkaert.be";
const lastmod = new Date().toISOString().slice(0, 10);

// Root + per-locale home + per-locale project detail pages.
const routes: string[] = [
  "/",
  ...localeIds.flatMap((locale) => [
    `/${locale}`,
    ...projectMeta.map((p) => `/${locale}/projects/${p.slug}`),
  ]),
];

const urlEntry = (loc: string) =>
  `\n  <url>\n    <loc>${SITE_URL}${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes
  .map(urlEntry)
  .join("")}
</urlset>`;

const outPath = resolve(dir, "../public/sitemap.xml");
writeFileSync(outPath, xml, "utf8");
console.log(`✅ Sitemap written to ${outPath} (${routes.length} URLs)`);
