import { Box } from "@mantine/core";
import { useSelector } from "react-redux";
import { RootState } from "@global/store/store";
import { useTranslate } from "@global/localization";
import { projectImages } from "@assets/projects";
import styles from "./projects.module.css";

const Projects = () => {
  const { t } = useTranslate();
  const { mainMargin } = useSelector((state: RootState) => state.ui);

  return (
    <Box component="section" className={styles.projects}>
      <Box px={mainMargin}>
        <h2 className={styles.title}>{t("projects.title")}</h2>
        <div className={styles.masonry}>
          {projectImages.map((src, i) => (
            <img key={i} src={src} alt={`Project ${i + 1}`} />
          ))}
        </div>
      </Box>
    </Box>
  );
};

export default Projects;
