import { Box, Image, Text } from "@mantine/core";
import { useSelector } from "react-redux";
import { RootState } from "@global/store/store";
import { useTranslate } from "@global/localization";
import { twiinImages as img } from "@assets/projects/twiin";
import ProjectNav from "../ProjectNav";
import styles from "./twiin.module.css";

const Twiin = () => {
  const { t } = useTranslate();
  const { mainMargin } = useSelector((state: RootState) => state.ui);

  return (
    <Box className={styles.page}>
      {/* Band 1 — laptop + intro (left) | tall signage (right) */}
      <Box component="section" className={styles.band1}>
        <Box className={styles.band1left}>
          <Image loading="eager" fetchPriority="high" decoding="async" src={img.website} alt="Twiin — one-page website mockup" className={styles.website} />
          <Text className={styles.intro}>{t("projects.twiin.intro")}</Text>
        </Box>
        <Image loading="lazy" decoding="async" src={img.signage} alt="Twiin — digital signage campaign" className={styles.signage} />
      </Box>

      {/* Lower — left column (billboard → insta) flows independently of the
          right column (body → hands → nav), so the two bands interlock. */}
      <Box component="section" className={styles.lower}>
        <Box className={styles.lowerLeft}>
          <Image loading="lazy" decoding="async" src={img.billboard} alt="Twiin — billboard: choose your own direction" className={styles.billboard} />
          <Image loading="lazy" decoding="async" src={img.insta} alt="Twiin — Instagram campaign posts" className={styles.insta} />
        </Box>
        <Box className={styles.lowerRight}>
          <Text className={styles.body}>{t("projects.twiin.body")}</Text>
          <Image loading="lazy" decoding="async" src={img.hands} alt="Twiin — sneakers held in hands" className={styles.hands} />
          <Box px={mainMargin} className={styles.navRow}>
            <ProjectNav slug="twiin" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Twiin;
