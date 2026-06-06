import { Box } from "@mantine/core";
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
    <div className={styles.page}>
      {/* Band 1 — laptop + intro (left) | tall signage (right) */}
      <section className={styles.band1}>
        <div className={styles.band1left}>
          <img loading="eager" fetchPriority="high" decoding="async" src={img.website} alt="Twiin — one-page website mockup" className={styles.website} />
          <p className={styles.intro}>{t("projects.twiin.intro")}</p>
        </div>
        <img loading="lazy" decoding="async" src={img.signage} alt="Twiin — digital signage campaign" className={styles.signage} />
      </section>

      {/* Lower — left column (billboard → insta) flows independently of the
          right column (body → hands → nav), so the two bands interlock. */}
      <section className={styles.lower}>
        <div className={styles.lowerLeft}>
          <img loading="lazy" decoding="async" src={img.billboard} alt="Twiin — billboard: choose your own direction" className={styles.billboard} />
          <img loading="lazy" decoding="async" src={img.insta} alt="Twiin — Instagram campaign posts" className={styles.insta} />
        </div>
        <div className={styles.lowerRight}>
          <p className={styles.body}>{t("projects.twiin.body")}</p>
          <img loading="lazy" decoding="async" src={img.hands} alt="Twiin — sneakers held in hands" className={styles.hands} />
          <Box px={mainMargin} className={styles.navRow}>
            <ProjectNav slug="twiin" />
          </Box>
        </div>
      </section>
    </div>
  );
};

export default Twiin;
