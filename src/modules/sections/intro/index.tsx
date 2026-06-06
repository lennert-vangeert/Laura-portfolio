import { Box, Divider } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconArrowRight } from "@tabler/icons-react";
import { useTranslate } from "@global/localization";
import { introTileTopRight, introTileBottomLeft } from "@assets/projects";
import styles from "./intro.module.css";

const Intro = () => {
  const { t } = useTranslate();

  return (
    <Box component="section" className={styles.intro}>
      {/* Left: 2x2 checkerboard of blue blurbs + photos */}
      <div className={styles.grid}>
        <div className={styles.blueTile}>
          <h3 className={styles.tileTitle}>{t("intro.branding.title")}</h3>
          <p className={styles.tileText}>{t("intro.branding.body")}</p>
        </div>
        <div
          className={styles.photoTile}
          style={{ backgroundImage: `url(${introTileTopRight})` }}
        />
        <div
          className={styles.photoTile}
          style={{ backgroundImage: `url(${introTileBottomLeft})` }}
        />
        <div className={styles.blueTile}>
          <h3 className={styles.tileTitle}>{t("intro.print.title")}</h3>
          <p className={styles.tileText}>{t("intro.print.body")}</p>
        </div>
      </div>

      {/* Right: blue intro panel */}
      <div className={styles.panel}>
        <p className={styles.tagline}>{t("intro.tagline")}</p>
        <h2 className={styles.title}>{t("intro.title")}</h2>
        <p className={styles.paragraph}>{t("intro.paragraph")}</p>
        <Link to="#" className={styles.cta}>
          {t("intro.cta")}
          <IconArrowRight size={28} stroke={2} />
        </Link>
      </div>

      {/* Divider between the panel and the grid — only on the smallest (single-column) viewport */}
      <Divider size="sm" color="cream.5" className={styles.divider} />
    </Box>
  );
};

export default Intro;
