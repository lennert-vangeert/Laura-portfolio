import { Box, Image, Text } from "@mantine/core";
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
    <Box className={styles.page}>
      {/* Upper — left (avocado → toast) interlocks with the taller right
          column (cover → body) so band 2 rises beside the big cover. */}
      <Box component="section" className={styles.upper}>
        <Box className={styles.upperLeft}>
          <Image loading="lazy" decoding="async" src={img.avocado} alt="The Model's Guide — Avocado spread" className={styles.avocado} />
          <Image loading="lazy" decoding="async" src={img.toast} alt="The Model's Guide — Eenzame beschuit spread" className={styles.toast} />
        </Box>
        <Box className={styles.upperRight}>
          <Image loading="eager" fetchPriority="high" decoding="async" src={img.cover} alt="The Model's Guide — cover" className={styles.cover} />
          <Text className={styles.body}>{t("projects.the-models-guide.body")}</Text>
        </Box>
      </Box>

      {/* Lower — left (inhoud → sandwich) interlocks with right (keukentools → introRed → nav) */}
      <Box component="section" className={styles.lower}>
        <Box className={styles.lowerLeft}>
          <Image loading="lazy" decoding="async" src={img.inhoud} alt="The Model's Guide — Inhoud table of contents" className={styles.inhoud} />
          <Image loading="lazy" decoding="async" src={img.sandwich} alt="The Model's Guide — sandwich spread" className={styles.sandwich} />
        </Box>
        <Box className={styles.lowerRight}>
          <Image loading="lazy" decoding="async" src={img.keukentools} alt="The Model's Guide — Essentiële keukentools spread" className={styles.keukentools} />
          <Image loading="lazy" decoding="async" src={img.introRed} alt="The Model's Guide — introduction spread" className={styles.introRed} />
          <Box px={mainMargin} mt="2rem" className={styles.navRow}>
            <ProjectNav slug="the-models-guide" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TheModelsGuide;
