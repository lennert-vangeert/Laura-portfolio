import { Box } from "@mantine/core";
import { useSelector } from "react-redux";
import { RootState } from "@global/store/store";
import { useTranslate } from "@global/localization";
import { omleegvallersImages as img } from "@assets/projects/omleegvallers";
import ProjectNav from "../ProjectNav";
import styles from "./omleegvallers-gazet.module.css";

const OmleegvallersGazet = () => {
  const { t } = useTranslate();
  const { mainMargin } = useSelector((state: RootState) => state.ui);

  return (
    <div className={styles.page}>
      {/* Band 1 — cover (2x2) + two small pics + text beneath them */}
      <section className={styles.band1}>
        <img loading="eager" fetchPriority="high" decoding="async" src={img.cover} alt="Omleegvallers gazet — cover" className={styles.cover} />
        <div className={styles.band1right}>
          <div className={styles.smalls}>
            <img loading="lazy" decoding="async" src={img.offfKaartFlat} alt="Offf op de kaart — spread" />
            <img loading="lazy" decoding="async" src={img.wielen} alt="Een dag op wielen — spread" />
          </div>
          <p className={styles.text}>{t("projects.omleegvallers-gazet.body")}</p>
        </div>
      </section>

      {/* Band 2 — four spreads in a row */}
      <section className={styles.band2}>
        <img loading="lazy" decoding="async" src={img.zakdoek} alt="Een zakdoek groot — spread" />
        <img loading="lazy" decoding="async" src={img.howto} alt="How to: zakdoekje leggen — spread" />
        <img loading="lazy" decoding="async" src={img.kerk} alt="Impe — church spread" />
        <img loading="lazy" decoding="async" src={img.karate} alt="Karate Kid: Rani — spread" />
      </section>

      {/* Band 3 — impe (2x2) + hand pic with nav beneath, bottom-right */}
      <section className={styles.band3}>
        <img loading="lazy" decoding="async" src={img.impe} alt="Impe — map spread" className={styles.impe} />
        <div className={styles.band3right}>
          <img loading="lazy" decoding="async" src={img.offfKaart} alt="Offf op de kaart — held spread" className={styles.hand} />
          <Box px={mainMargin} className={styles.navRow}>
            <ProjectNav slug="omleegvallers-gazet" />
          </Box>
        </div>
      </section>
    </div>
  );
};

export default OmleegvallersGazet;
