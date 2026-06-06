import { Box } from "@mantine/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@global/store/store";
import { useTranslate } from "@global/localization";
import { projects } from "@assets/projects";
import styles from "./projects.module.css";

const Projects = () => {
  const { t, tL } = useTranslate();
  const { mainMargin } = useSelector((state: RootState) => state.ui);

  return (
    <Box component="section" className={styles.projects}>
      <Box px={mainMargin}>
        <h2 className={styles.title}>{t("projects.title")}</h2>
        <div className={styles.masonry}>
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              to={tL(`/projects/${project.slug}`)}
              className={styles[`cell${i + 1}`]}
            >
              <img src={project.image} alt={t(project.titleKey)} />
            </Link>
          ))}
        </div>
      </Box>
    </Box>
  );
};

export default Projects;
