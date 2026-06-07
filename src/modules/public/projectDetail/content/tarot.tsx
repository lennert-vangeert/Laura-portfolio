import { Box, Image, Text } from "@mantine/core";
import { useSelector } from "react-redux";
import { RootState } from "@global/store/store";
import { useTranslate } from "@global/localization";
import { tarotImages as img } from "@assets/projects/tarot";
import ProjectNav from "../ProjectNav";
import styles from "./tarot.module.css";

const Tarot = () => {
  const { t } = useTranslate();
  const { mainMargin } = useSelector((state: RootState) => state.ui);

  return (
    <Box className={styles.page}>
      <Box component="section" className={styles.split}>
        <Box className={styles.left}>
          <Image loading="eager" fetchPriority="high" decoding="async" src={img.box} alt="Tarot — deck box and card" className={styles.box} />
          <Text className={styles.body}>{t("projects.tarot.body")}</Text>
        </Box>
        <Box className={styles.right}>
          <Text className={styles.intro}>{t("projects.tarot.intro")}</Text>
          <Image loading="lazy" decoding="async" src={img.floating} alt="Tarot — floating cards" className={styles.floating} />
          <Box px={mainMargin} className={styles.navRow}>
            <ProjectNav slug="tarot" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Tarot;
