import { omleegvallersImages } from "./omleegvallers";
import { jazzImages } from "./jazz";
import { regenkreetImages } from "./regenkreet";
import { modelGuideImages } from "./modelGuide";
import { twiinImages } from "./twiin";
import { tarotImages } from "./tarot";
import { clbImages } from "./clb";
import { crosbyImages } from "./crosby";

/**
 * slug → all detail-page image URLs, for intent-based prefetching. The per-slug
 * modules only export Vite-hashed URL strings, so importing them all here is
 * cheap (no image binaries are pulled into the bundle).
 */
export const projectImageUrls: Record<string, string[]> = {
  "omleegvallers-gazet": Object.values(omleegvallersImages),
  "jazz-in-t-park": Object.values(jazzImages),
  regenkreet: Object.values(regenkreetImages),
  "the-models-guide": Object.values(modelGuideImages),
  twiin: Object.values(twiinImages),
  tarot: Object.values(tarotImages),
  "clb-kies": Object.values(clbImages),
  "crosby-stills-nash": Object.values(crosbyImages),
};
