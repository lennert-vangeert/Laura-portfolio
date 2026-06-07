import { preloadContent } from "./registry";
import { projectImageUrls } from "@assets/projects/preloadImages";

const done = new Set<string>();

/**
 * Warm the lazy JS chunk + image cache for a project on user intent
 * (hover/focus) or idle time. Idempotent per slug for the session, and image
 * fetches run at low priority so they never contend with the current page.
 */
export const prefetchProject = (slug: string) => {
  if (done.has(slug)) return;
  done.add(slug);

  preloadContent(slug);

  for (const src of projectImageUrls[slug] ?? []) {
    const img = new Image();
    img.decoding = "async";
    img.fetchPriority = "low";
    img.src = src; // decode into the browser cache → instant paint on navigate
  }
};
