import { Link } from "react-router-dom";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useTranslate } from "@global/localization";
import { getAdjacent } from "@assets/projects";
import { prefetchProject } from "./prefetch";
import styles from "./ProjectNav.module.css";

type ProjectNavProps = {
  /** Slug of the current project; neighbours are derived from it. */
  slug: string;
};

/**
 * Prev/next project navigation: two stacked, right-aligned links showing the
 * neighbouring project names. Content components place this wherever their
 * layout calls for it.
 */
const ProjectNav = ({ slug }: ProjectNavProps) => {
  const { t, tL } = useTranslate();

  const adjacent = getAdjacent(slug);
  if (!adjacent) return null;
  const { prev, next } = adjacent;

  return (
    <nav className={styles.nav} aria-label="Project navigation">
      <Link
        to={tL(`/projects/${next.slug}`)}
        className={styles.navLink}
        rel="next"
        onMouseEnter={() => prefetchProject(next.slug)}
        onFocus={() => prefetchProject(next.slug)}
      >
        {t(next.titleKey)}
        <IconArrowRight size={20} stroke={2} />
      </Link>
      <Link
        to={tL(`/projects/${prev.slug}`)}
        className={styles.navLink}
        rel="prev"
        onMouseEnter={() => prefetchProject(prev.slug)}
        onFocus={() => prefetchProject(prev.slug)}
      >
        <IconArrowLeft size={20} stroke={2} />
        {t(prev.titleKey)}
      </Link>
    </nav>
  );
};

export default ProjectNav;
