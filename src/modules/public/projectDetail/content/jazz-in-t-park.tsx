import { Box } from "@mantine/core";
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
    <div className={styles.page}>
      {/* Band A — insta + intro (left) | Echo Horizon poster (right) */}
      <section className={styles.bandA}>
        <div className={styles.col}>
          <img loading="eager" fetchPriority="high" decoding="async" src={img.insta} alt="Jazz in 't park — Instagram posts" className={styles.insta} />
          <p className={styles.intro}>{t("projects.jazz-in-t-park.intro")}</p>
        </div>
        <div className={styles.col}>
          <img loading="lazy" decoding="async" src={img.echo} alt="Jazz in 't park — Echo Horizon poster" className={styles.echo} />
        </div>
      </section>

      {/* Band B — Sonic Muse poster (left) | folder cover + body (right) */}
      <section className={styles.bandB}>
        <div className={styles.col}>
          <img loading="lazy" decoding="async" src={img.sonic} alt="Jazz in 't park — Sonic Muse poster" className={styles.sonic} />
        </div>
        <div className={styles.col}>
          <img loading="lazy" decoding="async" src={img.folderCover} alt="Jazz in 't park — festival folder" className={styles.folderCover} />
          <p className={styles.body}>{t("projects.jazz-in-t-park.body")}</p>
        </div>
      </section>

      {/* Band C — Jazz Nova poster (left) | folder programme + nav (right) */}
      <section className={styles.bandC}>
        <div className={styles.col}>
          <img loading="lazy" decoding="async" src={img.jazzNova} alt="Jazz in 't park — Jazz Nova poster" className={styles.jazzNova} />
        </div>
        <div className={styles.col}>
          <img loading="lazy" decoding="async" src={img.folderInner} alt="Jazz in 't park — folder programme" className={styles.folderInner} />
          <Box px={mainMargin} className={styles.navRow}>
            <ProjectNav slug="jazz-in-t-park" />
          </Box>
        </div>
      </section>
    </div>
  );
};

export default JazzInTPark;
