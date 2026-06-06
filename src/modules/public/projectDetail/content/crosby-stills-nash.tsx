import { Box } from "@mantine/core";
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
    <div className={styles.page}>
      {/* Left (cover → intro → backcover) interlocks with the tall right
          column (plaat → body → nav). */}
      <section className={styles.split}>
        <div className={styles.left}>
          <img src={img.cover} alt="Crosby, Stills & Nash — front cover" className={styles.cover} />
          <p className={styles.intro}>{t("projects.crosby-stills-nash.intro")}</p>
          <img src={img.backcover} alt="Crosby, Stills & Nash — back cover with tracklist" className={styles.backcover} />
        </div>
        <div className={styles.right}>
          <img src={img.plaat} alt="Crosby, Stills & Nash — vinyl record held in hand" className={styles.plaat} />
          <p className={styles.body}>{t("projects.crosby-stills-nash.body")}</p>
          <Box px={mainMargin} className={styles.navRow}>
            <ProjectNav slug="crosby-stills-nash" />
          </Box>
        </div>
      </section>
    </div>
  );
};

export default CrosbyStillsNash;
