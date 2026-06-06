import { ReactNode } from "react";
import { Box } from "@mantine/core";
import { useSelector } from "react-redux";
import { RootState } from "@global/store/store";
import { useTranslate } from "@global/localization";
import { getAdjacent } from "@assets/projects";
import styles from "./ProjectShell.module.css";

type ProjectShellProps = {
  /** Slug of the currently displayed project. */
  slug: string;
  /** Project-specific content (masonry of images + text + nav). */
  children: ReactNode;
};

/**
 * Reusable shell for project detail pages: renders the project title (within
 * the page gutter) above full-bleed, project-specific content. The prev/next
 * navigation lives in the content itself (see ProjectNav), since its on-page
 * location differs per project.
 */
const ProjectShell = ({ slug, children }: ProjectShellProps) => {
  const { t } = useTranslate();
  const { mainMargin } = useSelector((state: RootState) => state.ui);

  const adjacent = getAdjacent(slug);
  if (!adjacent) return null;
  const { current } = adjacent;

  return (
    <Box component="section" className={styles.shell}>
      <Box px={mainMargin}>
        <h1 className={styles.title}>{t(current.titleKey)}</h1>
      </Box>

      <div className={styles.content}>{children}</div>
    </Box>
  );
};

export default ProjectShell;
