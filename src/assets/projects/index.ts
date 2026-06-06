import p1 from "./p1.jpg";
import p2 from "./p2.jpg";
import p3 from "./p3.jpg";
import p4 from "./p4.jpg";
import p5 from "./p5.jpg";
import p6 from "./p6.jpg";
import p7 from "./p7.jpg";
import p8 from "./p8.jpg";

export type Project = {
  /** URL segment for the project's detail page. */
  slug: string;
  /** i18n key holding the project's full display title. */
  titleKey: string;
  /** Thumbnail image, reused by the Projects masonry and Hero tiles. */
  image: string;
};

/**
 * Ordered list of projects, kept in p1..p8 order so the Projects masonry's
 * explicit `cell{i+1}` placement stays correct.
 */
export const projects: Project[] = [
  { slug: "omleegvallers-gazet", titleKey: "projects.omleegvallers-gazet.title", image: p1 },
  { slug: "jazz-in-t-park", titleKey: "projects.jazz-in-t-park.title", image: p2 },
  { slug: "regenkreet", titleKey: "projects.regenkreet.title", image: p3 },
  { slug: "the-models-guide", titleKey: "projects.the-models-guide.title", image: p4 },
  { slug: "twiin", titleKey: "projects.twiin.title", image: p5 },
  { slug: "tarot", titleKey: "projects.tarot.title", image: p6 },
  { slug: "clb-kies", titleKey: "projects.clb-kies.title", image: p7 },
  { slug: "crosby-stills-nash", titleKey: "projects.crosby-stills-nash.title", image: p8 },
];

/** Ordered list of project images, reused by the Projects masonry and the Hero tiles. */
export const projectImages: string[] = projects.map((p) => p.image);

/** Named exports for the two images the Hero reuses. */
export const introTileTopRight = projects[0].image;
export const introTileBottomLeft = projects[3].image;

/**
 * Resolve a project and its wrapping neighbours by slug.
 * Wrapping means the last project's `next` is the first, and vice versa.
 */
export const getAdjacent = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return null;
  const n = projects.length;
  return {
    current: projects[i],
    prev: projects[(i - 1 + n) % n],
    next: projects[(i + 1) % n],
  };
};
