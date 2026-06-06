import { Box } from "@mantine/core";
import { useSelector } from "react-redux";
import { RootState } from "@global/store/store";
import { useTranslate } from "@global/localization";
import { clbImages as img } from "@assets/projects/clb";
import ProjectNav from "../ProjectNav";
import styles from "./clb-kies.module.css";

const ClbKies = () => {
  const { t } = useTranslate();
  const { mainMargin } = useSelector((state: RootState) => state.ui);

  return (
    <>
      <div className={styles.masonry}>
        <img loading="eager" fetchPriority="high" decoding="async" src={img.omslag} alt="CLB Kies! — campaign posters" className={styles.big} />
        <p className={`${styles.txt} ${styles.wide}`}>{t("projects.clb-kies.intro")}</p>
        <img loading="lazy" decoding="async" src={img.stickers} alt="CLB Kies! — stickers on a laptop" />
        <img loading="lazy" decoding="async" src={img.video3} alt="CLB Kies! — interactive school map" />
        <p className={`${styles.txt} ${styles.wide}`}>{t("projects.clb-kies.within")}</p>
        <img loading="lazy" decoding="async" src={img.brochure} alt="CLB Kies! — brochure spread" className={styles.wide} />
        <img loading="lazy" decoding="async" src={img.laptopTable} alt="CLB Kies! — website on a laptop" className={styles.tall} />
        <img loading="lazy" decoding="async" src={img.wieBenIk} alt="CLB Kies! — 'Wie ben ik' checklists" />
        <img loading="lazy" decoding="async" src={img.deviceArray} alt="CLB Kies! — website across devices" className={styles.wide} />
        <p className={`${styles.txt} ${styles.wide}`}>{t("projects.clb-kies.award")}</p>
        <img loading="lazy" decoding="async" src={img.banners} alt="CLB Kies! — roll-up banners" />
        <img loading="lazy" decoding="async" src={img.video2} alt="CLB Kies! — animation with mascots" className={styles.wide} />
        <img loading="lazy" decoding="async" src={img.infodag} alt="CLB Kies! — info-day forms" />
        <img loading="lazy" decoding="async" src={img.eersteSchooldag} alt="CLB Kies! — first school day checklist" />
        <img loading="lazy" decoding="async" src={img.poster} alt="CLB Kies! — folded campaign poster" className={styles.big} />
        <img loading="lazy" decoding="async" src={img.laptop2} alt="CLB Kies! — careers explorer on a laptop" className={styles.big} />
      </div>

      {/* Bottom row — body text (2-wide) left of the nav buttons */}
      <div className={styles.bottomRow}>
        <p className={`${styles.txt} ${styles.bodyText}`}>{t("projects.clb-kies.body")}</p>
        <Box px={mainMargin} className={styles.navWrap}>
          <ProjectNav slug="clb-kies" />
        </Box>
      </div>
    </>
  );
};

export default ClbKies;
