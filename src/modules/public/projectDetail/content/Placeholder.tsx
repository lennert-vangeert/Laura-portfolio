import { Box } from "@mantine/core";
import { useSelector } from "react-redux";
import { RootState } from "@global/store/store";
import { projects } from "@assets/projects";
import ProjectNav from "../ProjectNav";
import styles from "./placeholder.module.css";

/**
 * Temporary content for a project detail page until the bespoke masonry of
 * images + text is built. Shows the project thumbnail and a "coming soon" note.
 */
const Placeholder = ({ slug }: { slug: string }) => {
  const project = projects.find((p) => p.slug === slug);
  const { mainMargin } = useSelector((state: RootState) => state.ui);

  return (
    <Box px={mainMargin} className={styles.placeholder}>
      {project && (
        <img loading="lazy" decoding="async" src={project.image} alt="" className={styles.image} />
      )}
      <p className={styles.note}>Content coming soon</p>
      <ProjectNav slug={slug} />
    </Box>
  );
};

export default Placeholder;
