// scripts/generate-sitemap.js

// 1) Imports
const fs = require('fs');
const path = require('path');
const { contentfulClient } = require('@global/contentful/client'); 
// (adjust import path if yours differs)

// 2) CONFIG:
//    - Replace with your actual domain, or set SITE_URL in your env before running
const SITE_URL = process.env.SITE_URL || 'https://lauravolkaert.be';

// 3) Utility: wrap a URL in a <url> block
function urlEntry(loc) {
  return `
  <url>
    <loc>${SITE_URL}${loc}</loc>
  </url>`;
}

async function generate() {
  try {
    // 4) Fetch all projects
    const response = await contentfulClient.getEntries({
      content_type: 'project',   // <-- make sure this matches your Contentful contentTypeId
      select: 'fields.title'     // only need title for the slug
    });

    const projects = response.items;

    // 5) Build sitemap XML
    const header = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // always include your homepage and projects list
    const staticUrls = [
      urlEntry('/'),
      urlEntry('/projects/')
    ].join('');

    // dynamic project URLs
    const projectUrls = projects
      .map((proj) => {
        const title = proj.fields.title;
        // if you use a slug field, use that instead; otherwise URI‑encode the title
        const slug = encodeURIComponent(title.trim().toLowerCase().replace(/\s+/g, '-'));
        return urlEntry(`/projects/${slug}`);
      })
      .join('');

    const footer = '\n</urlset>';

    const xml = [header, staticUrls, projectUrls, footer].join('');

    // 6) Write to public/sitemap.xml
    const outPath = path.resolve(__dirname, '../public/sitemap.xml');
    fs.writeFileSync(outPath, xml, 'utf8');
    console.log(`✅ Sitemap successfully written to ${outPath}`);
  } catch (err) {
    console.error('❌ Error generating sitemap:', err);
    process.exit(1);
  }
}

// run it
generate();
