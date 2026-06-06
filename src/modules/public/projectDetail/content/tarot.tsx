import { Box } from "@mantine/core";
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
    <div className={styles.page}>
      <section className={styles.split}>
        <div className={styles.left}>
          <img loading="eager" fetchPriority="high" decoding="async" src={img.box} alt="Tarot — deck box and card" className={styles.box} />
          <p className={styles.body}>{t("projects.tarot.body")}</p>
        </div>
        <div className={styles.right}>
          <p className={styles.intro}>{t("projects.tarot.intro")}</p>
          <img loading="lazy" decoding="async" src={img.floating} alt="Tarot — floating cards" className={styles.floating} />
          <Box px={mainMargin} className={styles.navRow}>
            <ProjectNav slug="tarot" />
          </Box>
        </div>
      </section>
    </div>
  );
};

export default Tarot;
