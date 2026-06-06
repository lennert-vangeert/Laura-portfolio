/**
 * Pure project metadata — no image imports, so this module is safe to import
 * from plain Node/tsx scripts (e.g. sitemap generation) as well as the app.
 * Order matches the p1..p8 images in `./index.ts`.
 */
export type ProjectMeta = {
  /** URL segment for the project's detail page. */
  slug: string;
  /** i18n key holding the project's full display title. */
  titleKey: string;
};

export const projectMeta: ProjectMeta[] = [
  { slug: "omleegvallers-gazet", titleKey: "projects.omleegvallers-gazet.title" }, // p1
  { slug: "jazz-in-t-park", titleKey: "projects.jazz-in-t-park.title" }, // p2
  { slug: "regenkreet", titleKey: "projects.regenkreet.title" }, // p3
  { slug: "the-models-guide", titleKey: "projects.the-models-guide.title" }, // p4
  { slug: "twiin", titleKey: "projects.twiin.title" }, // p5
  { slug: "tarot", titleKey: "projects.tarot.title" }, // p6
  { slug: "clb-kies", titleKey: "projects.clb-kies.title" }, // p7
  { slug: "crosby-stills-nash", titleKey: "projects.crosby-stills-nash.title" }, // p8
];
