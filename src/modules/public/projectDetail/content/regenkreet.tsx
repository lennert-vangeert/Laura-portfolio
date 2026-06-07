import { Box, Image, Text } from "@mantine/core";
import { useSelector } from "react-redux";
import { RootState } from "@global/store/store";
import { useTranslate } from "@global/localization";
import { regenkreetImages as img } from "@assets/projects/regenkreet";
import ProjectNav from "../ProjectNav";
import styles from "./regenkreet.module.css";

const Regenkreet = () => {
  const { t } = useTranslate();
  const { mainMargin } = useSelector((state: RootState) => state.ui);

  return (
    <Box className={styles.page}>
      {/* Left (body → liggend) interlocks with the big staand poster on the right. */}
      <Box component="section" className={styles.split}>
        <Box className={styles.left}>
          <Text className={styles.body}>{t("projects.regenkreet.body")}</Text>
          <Image loading="lazy" decoding="async" src={img.liggend} alt="Regenkreet — poster on a ledge" className={styles.liggend} />
        </Box>
        <Box className={styles.right}>
          <Image loading="eager" fetchPriority="high" decoding="async" src={img.staand} alt="Regenkreet — poster on concrete" className={styles.staand} />
          <Box px={mainMargin} className={styles.navRow}>
            <ProjectNav slug="regenkreet" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Regenkreet;
