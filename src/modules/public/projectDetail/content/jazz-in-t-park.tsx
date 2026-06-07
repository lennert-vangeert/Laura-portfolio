import { Box, Image, Text } from "@mantine/core";
import { useSelector } from "react-redux";
import { RootState } from "@global/store/store";
import { useTranslate } from "@global/localization";
import { jazzImages as img } from "@assets/projects/jazz";
import ProjectNav from "../ProjectNav";
import styles from "./jazz-in-t-park.module.css";

const JazzInTPark = () => {
  const { t } = useTranslate();
  const { mainMargin } = useSelector((state: RootState) => state.ui);

  return (
    <Box className={styles.page}>
      {/* Band A — insta + intro (left) | Echo Horizon poster (right) */}
      <Box component="section" className={styles.bandA}>
        <Box className={styles.col}>
          <Image loading="eager" fetchPriority="high" decoding="async" src={img.insta} alt="Jazz in 't park — Instagram posts" className={styles.insta} />
          <Text className={styles.intro}>{t("projects.jazz-in-t-park.intro")}</Text>
        </Box>
        <Box className={styles.col}>
          <Image loading="lazy" decoding="async" src={img.echo} alt="Jazz in 't park — Echo Horizon poster" className={styles.echo} />
        </Box>
      </Box>

      {/* Band B — Sonic Muse poster (left) | folder cover + body (right) */}
      <Box component="section" className={styles.bandB}>
        <Box className={styles.col}>
          <Image loading="lazy" decoding="async" src={img.sonic} alt="Jazz in 't park — Sonic Muse poster" className={styles.sonic} />
        </Box>
        <Box className={styles.col}>
          <Image loading="lazy" decoding="async" src={img.folderCover} alt="Jazz in 't park — festival folder" className={styles.folderCover} />
          <Text className={styles.body}>{t("projects.jazz-in-t-park.body")}</Text>
        </Box>
      </Box>

      {/* Band C — Jazz Nova poster (left) | folder programme + nav (right) */}
      <Box component="section" className={styles.bandC}>
        <Box className={styles.col}>
          <Image loading="lazy" decoding="async" src={img.jazzNova} alt="Jazz in 't park — Jazz Nova poster" className={styles.jazzNova} />
        </Box>
        <Box className={styles.col}>
          <Image loading="lazy" decoding="async" src={img.folderInner} alt="Jazz in 't park — folder programme" className={styles.folderInner} />
          <Box px={mainMargin} className={styles.navRow}>
            <ProjectNav slug="jazz-in-t-park" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default JazzInTPark;
