import p1 from "./p1.jpg";
import p2 from "./p2.jpg";
import p3 from "./p3.jpg";
import p4 from "./p4.jpg";
import p5 from "./p5.jpg";
import p6 from "./p6.jpg";
import p7 from "./p7.jpg";
import p8 from "./p8.jpg";
import { projectMeta, type ProjectMeta } from "./meta";

export type Project = ProjectMeta & {
  /** Thumbnail image, reused by the Projects masonry and Hero tiles. */
  image: string;
};

/**
 * Ordered list of projects: the pure `projectMeta` (slug + titleKey) zipped
 * with the p1..p8 images. Order is the single coupling point — keep `projectMeta`
 * in the same order as the images below so the masonry `cell{i+1}` placement stays correct.
 */
const images = [p1, p2, p3, p4, p5, p6, p7, p8];
export const projects: Project[] = projectMeta.map((meta, i) => ({
  ...meta,
  image: images[i],
}));

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
