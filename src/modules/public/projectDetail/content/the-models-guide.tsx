import { Box } from "@mantine/core";
import { useSelector } from "react-redux";
import { RootState } from "@global/store/store";
import { useTranslate } from "@global/localization";
import { modelGuideImages as img } from "@assets/projects/modelGuide";
import ProjectNav from "../ProjectNav";
import styles from "./the-models-guide.module.css";

const TheModelsGuide = () => {
  const { t } = useTranslate();
  const { mainMargin } = useSelector((state: RootState) => state.ui);

  return (
    <div className={styles.page}>
      {/* Upper — left (avocado → toast) interlocks with the taller right
          column (cover → body) so band 2 rises beside the big cover. */}
      <section className={styles.upper}>
        <div className={styles.upperLeft}>
          <img src={img.avocado} alt="The Model's Guide — Avocado spread" className={styles.avocado} />
          <img src={img.toast} alt="The Model's Guide — Eenzame beschuit spread" className={styles.toast} />
        </div>
        <div className={styles.upperRight}>
          <img src={img.cover} alt="The Model's Guide — cover" className={styles.cover} />
          <p className={styles.body}>{t("projects.the-models-guide.body")}</p>
        </div>
      </section>

      {/* Lower — left (inhoud → sandwich) interlocks with right (keukentools → introRed → nav) */}
      <section className={styles.lower}>
        <div className={styles.lowerLeft}>
          <img src={img.inhoud} alt="The Model's Guide — Inhoud table of contents" className={styles.inhoud} />
          <img src={img.sandwich} alt="The Model's Guide — sandwich spread" className={styles.sandwich} />
        </div>
        <div className={styles.lowerRight}>
          <img src={img.keukentools} alt="The Model's Guide — Essentiële keukentools spread" className={styles.keukentools} />
          <img src={img.introRed} alt="The Model's Guide — introduction spread" className={styles.introRed} />
          <Box px={mainMargin} mt="2rem" className={styles.navRow}>
            <ProjectNav slug="the-models-guide" />
          </Box>
        </div>
      </section>
    </div>
  );
};

export default TheModelsGuide;
