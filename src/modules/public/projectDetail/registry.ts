import { lazy } from "react";
import type { ComponentType } from "react";

type Importer = () => Promise<{ default: ComponentType }>;

/**
 * Slug → dynamic importer for each project's content component. Kept as raw
 * importer functions so they can be invoked ahead of render (prefetch) and also
 * wrapped in `React.lazy` for code-split rendering.
 */
const importers: Record<string, Importer> = {
  twiin: () => import("./content/twiin"),
  "the-models-guide": () => import("./content/the-models-guide"),
  "crosby-stills-nash": () => import("./content/crosby-stills-nash"),
  "clb-kies": () => import("./content/clb-kies"),
  regenkreet: () => import("./content/regenkreet"),
  "jazz-in-t-park": () => import("./content/jazz-in-t-park"),
  "omleegvallers-gazet": () => import("./content/omleegvallers-gazet"),
  tarot: () => import("./content/tarot"),
};

/**
 * Maps a project slug to its lazily-loaded content component. Each project's
 * bespoke masonry/text lives in its own file under `content/`, so pages can be
 * built independently and image-heavy bundles are code-split.
 */
export const contentRegistry: Record<string, ComponentType> = Object.fromEntries(
  Object.entries(importers).map(([slug, imp]) => [slug, lazy(imp)]),
);

/**
 * Warm a project's content chunk ahead of navigation. React.lazy reuses the
 * same in-flight import promise, so calling this early avoids the Suspense
 * fallback on click.
 */
export const preloadContent = (slug: string) => {
  void importers[slug]?.();
};
