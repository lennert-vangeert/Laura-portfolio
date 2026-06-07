import { Box, Image, Text } from "@mantine/core";
import { useSelector } from "react-redux";
import { RootState } from "@global/store/store";
import { useTranslate } from "@global/localization";
import { crosbyImages as img } from "@assets/projects/crosby";
import ProjectNav from "../ProjectNav";
import styles from "./crosby-stills-nash.module.css";

const CrosbyStillsNash = () => {
  const { t } = useTranslate();
  const { mainMargin } = useSelector((state: RootState) => state.ui);

  return (
    <Box className={styles.page}>
      {/* Left (cover → intro → backcover) interlocks with the tall right
          column (plaat → body → nav). */}
      <Box component="section" className={styles.split}>
        <Box className={styles.left}>
          <Image loading="eager" fetchPriority="high" decoding="async" src={img.cover} alt="Crosby, Stills & Nash — front cover" className={styles.cover} />
          <Text className={styles.intro}>{t("projects.crosby-stills-nash.intro")}</Text>
          <Image loading="lazy" decoding="async" src={img.backcover} alt="Crosby, Stills & Nash — back cover with tracklist" className={styles.backcover} />
        </Box>
        <Box className={styles.right}>
          <Image loading="lazy" decoding="async" src={img.plaat} alt="Crosby, Stills & Nash — vinyl record held in hand" className={styles.plaat} />
          <Text className={styles.body}>{t("projects.crosby-stills-nash.body")}</Text>
          <Box px={mainMargin} className={styles.navRow}>
            <ProjectNav slug="crosby-stills-nash" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CrosbyStillsNash;
