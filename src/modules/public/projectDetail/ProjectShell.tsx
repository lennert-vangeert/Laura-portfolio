import { ReactNode } from "react";
import { Box } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { RootState } from "@global/store/store";
import { useTranslate } from "@global/localization";
import { getAdjacent } from "@assets/projects";
import styles from "./ProjectShell.module.css";

type ProjectShellProps = {
  /** Slug of the currently displayed project. */
  slug: string;
  /** Project-specific content (masonry of images + text). */
  children: ReactNode;
};

/**
 * Reusable shell for project detail pages: renders the project title and
 * next/previous navigation (wrapping at the ends). The bespoke content for
 * each project is passed as children.
 */
const ProjectShell = ({ slug, children }: ProjectShellProps) => {
  const { t, tL } = useTranslate();
  const { mainMargin } = useSelector((state: RootState) => state.ui);

  const adjacent = getAdjacent(slug);
  if (!adjacent) return null;
  const { current, prev, next } = adjacent;

  return (
    <Box component="section" className={styles.shell} px={mainMargin}>
      <h1 className={styles.title}>{t(current.titleKey)}</h1>

      <div className={styles.content}>{children}</div>

      <nav className={styles.nav} aria-label="Project navigation">
        <Link
          to={tL(`/projects/${prev.slug}`)}
          className={styles.navLink}
          rel="prev"
        >
          <IconArrowLeft size={20} stroke={2} />
          {t(prev.titleKey)}
        </Link>
        <Link
          to={tL(`/projects/${next.slug}`)}
          className={`${styles.navLink} ${styles.navLinkNext}`}
          rel="next"
        >
          {t(next.titleKey)}
          <IconArrowRight size={20} stroke={2} />
        </Link>
      </nav>
    </Box>
  );
};

export default ProjectShell;
