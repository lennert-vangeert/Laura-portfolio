// scripts/generate-sitemap.cjs

// 1) Imports
const fs = require('fs');
const path = require('path');

// 2) CONFIG:
//    - Replace with your actual domain, or set SITE_URL in your env before running
const SITE_URL = process.env.SITE_URL || 'https://lauravolkaert.be';

// 3) Routes to include. The router exposes an optional locale prefix
//    (`/:maybeLang?` in src/modules/routes.tsx), so we list the homepage
//    and its locale variants.
const ROUTES = ['/', '/en', '/nl'];

// 4) Utility: wrap a URL in a <url> block
function urlEntry(loc) {
  return `
  <url>
    <loc>${SITE_URL}${loc}</loc>
  </url>`;
}

function generate() {
  // 5) Build sitemap XML
  const header = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  const urls = ROUTES.map(urlEntry).join('');

  const footer = '\n</urlset>';

  const xml = [header, urls, footer].join('');

  // 6) Write to public/sitemap.xml
  const outPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outPath, xml, 'utf8');
  console.log(`✅ Sitemap successfully written to ${outPath}`);
}

// run it
generate();
