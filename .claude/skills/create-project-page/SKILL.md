---
name: create-project-page
description: Build a project detail page for the Laura-portfolio site — the full-bleed responsive image+text masonry under /projects/:slug. Use when adding or editing a project's detail page (e.g. "build the Twiin page", "create the tarot project page").
---

# Create a project detail page

Each of the 8 portfolio projects has a detail page at `/:locale/projects/:slug`. The shell, routing, data model and prev/next nav already exist — building a page means writing **one content component + its CSS** (a bespoke responsive image/text masonry) and wiring up its images and text. The **Omleegvallers gazet** page is the canonical worked example; copy its shape.

## Architecture (already in place — don't rebuild)

- **Route**: `/:locale/projects/:slug` → `src/modules/public/projectDetail/index.tsx`. It looks up `contentRegistry[slug]` in `src/modules/public/projectDetail/registry.ts` (React.lazy imports — all 8 slugs registered), renders `<ProjectShell slug><Content/></ProjectShell>`, and `<Navigate to={tL("/")}>` on an unknown slug.
- **ProjectShell** (`src/modules/public/projectDetail/ProjectShell.tsx`): renders the project **title** (Rozha One, `var(--mantine-color-brand-5)`, inside the `mainMargin` gutter) and then your content **full-bleed** (width 100%, no horizontal padding). → In content, **don't** add a page title or a horizontal page gutter; the shell owns those.
- **Project data** (`src/assets/projects/index.ts`): ordered `projects[]` of `{ slug, titleKey, image }` + `getAdjacent(slug)` (wrapping prev/next). All 8 slugs already exist: `omleegvallers-gazet`, `jazz-in-t-park`, `regenkreet`, `the-models-guide`, `twiin`, `tarot`, `clb-kies`, `crosby-stills-nash`.
- **ProjectNav** (`src/modules/public/projectDetail/ProjectNav.tsx`): `{ slug }` → two stacked, right-aligned links (next on top, prev below) showing the neighbouring **project names** with arrows. Content decides where it sits.
- **i18n**: `useTranslate()` → `{ t, tL, locale }`. `t("flat.dotted.key")`, `tL("/path")` localizes a URL. Keys are **literal flat strings** (i18next has `keySeparator:false`/`nsSeparator:false`).
- **Responsive**: `mainMargin` (page gutter) comes from Redux — `useSelector((s: RootState) => s.ui).mainMargin`.

## Steps to build a page (slug already in `projects[]`)

### 1. Images
Get the mockups from the project's Figma node:
- Try the Figma MCP: `mcp__framelink-figma__get_figma_data` then `mcp__framelink-figma__download_figma_images`.
- ⚠️ The MCP is often **rate-limited** on a Viewer/Starter seat (429, multi-day retry). If so, ask the user to **export the PNGs manually** and drop them in `src/assets/projects/`.

Then put them under `src/assets/projects/<slug>/` and create `src/assets/projects/<slug>/index.ts` exporting a named object. The cover image is usually the homepage thumbnail — reuse it via `projects[i].image` instead of duplicating. Mirror `src/assets/projects/omleegvallers/index.ts`:

```ts
import { projects } from "..";
import wielen from "./wielen.png";
// ...more imports
export const <slug>Images = {
  cover: projects[0].image, // shared homepage thumbnail
  wielen,
  // ...
};
```

### 2. i18n text
- The title key `projects.<slug>.title` already exists in `_en.json` / `_nl.json`.
- Add any body/caption keys (e.g. `projects.<slug>.body`) to **both** `src/global/localization/_en.json` and `_nl.json`. Join paragraphs with `\n\n`.
- Write NL too: translate descriptors, keep brand names; tell the user to refine.

### 3. Content component
Rewrite `src/modules/public/projectDetail/content/<slug>.tsx` (it currently renders the `Placeholder` stub) and add `content/<slug>.module.css`. End the layout with the nav, inset by the page gutter:

```tsx
import { Box } from "@mantine/core";
import { useSelector } from "react-redux";
import { RootState } from "@global/store/store";
import { useTranslate } from "@global/localization";
import { <slug>Images as img } from "@assets/projects/<slug>";
import ProjectNav from "../ProjectNav";
import styles from "./<slug>.module.css";

const Component = () => {
  const { t } = useTranslate();
  const { mainMargin } = useSelector((s: RootState) => s.ui);
  return (
    <div className={styles.page}>
      {/* ...bands of <img>/<p> per the design... */}
      <Box px={mainMargin} className={styles.navRow}>
        <ProjectNav slug="<slug>" />
      </Box>
    </div>
  );
};
export default Component;
```

The registry already maps every slug, so no registry edit is needed. (Only for a *brand-new* project beyond the 8 do you also add to `projects[]`, `registry.ts`, and the homepage tiles in `src/modules/sections/projects/`.)

## Layout recipe

Reference: `src/modules/public/projectDetail/content/omleegvallers-gazet.module.css`.

- Compose the page as **stacked bands** — `.page` is `display:flex; flex-direction:column; gap:var(--gap)`, and each band is a grid (or flex) of image tiles ± a text block. Translate the designer's "tile is 2×2 / 1×1 / 1.5×1.5" language into grid columns + spans / widths.
- Shared spacing token: `.page { --gap: clamp(8px,1vw,14px); }`.
- Base image rule: `.page img { width:100%; object-fit:cover; border-radius:8px; }`, then give tiles `aspect-ratio` (e.g. `1/1` for square tiles, `3/2` for spreads).
- **Full-bleed**: outer images touch the page edges — bands get **no horizontal padding**. Only inset the **text** (`padding-right: clamp(24px,6vw,100px)`) and the **nav** (`<Box px={mainMargin}>`).
- **Text**: `font-family:"Nunito"`, `color:var(--mantine-color-brand-5)`, `white-space:pre-line` (renders `\n\n` breaks) — same as `about.bio`.
- **Responsive** (match existing breakpoints): `@media (max-width:64rem)` → fewer columns (tablet); `@media (max-width:36rem)` → single column (phone). Keep **DOM order = mobile reading order** so the single-column stack reads correctly.

### ⚠️ Gotcha: CSS-module specificity
`.page img` (class + element selector) out-specifies a bare `.tile` class, so a per-tile `width` silently loses (shows crossed-out in devtools). Scope width overrides under a parent to win:
```css
.band3right .hand { width: 60%; }   /* beats .page img */
```

## Verify

1. `npx tsc --noEmit` and `npm run build` — both pass.
2. `npm run dev`, open `/en/projects/<slug>` (and reach it via the homepage masonry tile).
3. Screenshot to compare against the reference, e.g.:
   `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --screenshot=/tmp/page.png --window-size=1440,2200 http://localhost:<port>/en/projects/<slug>`
4. Check: title sits in the gutter; outer images are full-bleed to both edges; text/nav are inset; prev/next show neighbour names and wrap; tablet (≤64rem) and phone (≤36rem) reflow without overflow.
