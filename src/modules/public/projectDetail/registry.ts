import { lazy } from "react";
import type { ComponentType } from "react";

/**
 * Maps a project slug to its lazily-loaded content component. Each project's
 * bespoke masonry/text lives in its own file under `content/`, so pages can be
 * built independently and image-heavy bundles are code-split.
 */
export const contentRegistry: Record<string, ComponentType> = {
  twiin: lazy(() => import("./content/twiin")),
  "the-models-guide": lazy(() => import("./content/the-models-guide")),
  "crosby-stills-nash": lazy(() => import("./content/crosby-stills-nash")),
  "clb-kies": lazy(() => import("./content/clb-kies")),
  regenkreet: lazy(() => import("./content/regenkreet")),
  "jazz-in-t-park": lazy(() => import("./content/jazz-in-t-park")),
  "omleegvallers-gazet": lazy(() => import("./content/omleegvallers-gazet")),
  tarot: lazy(() => import("./content/tarot")),
};
