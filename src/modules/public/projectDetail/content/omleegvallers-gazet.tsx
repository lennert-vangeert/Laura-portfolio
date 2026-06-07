import { Box, Image, Text } from "@mantine/core";
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
    <Box className={styles.page}>
      {/* Band 1 — cover (2x2) + two small pics + text beneath them */}
      <Box component="section" className={styles.band1}>
        <Image loading="eager" fetchPriority="high" decoding="async" src={img.cover} alt="Omleegvallers gazet — cover" className={styles.cover} />
        <Box className={styles.band1right}>
          <Box className={styles.smalls}>
            <Image loading="lazy" decoding="async" src={img.offfKaartFlat} alt="Offf op de kaart — spread" />
            <Image loading="lazy" decoding="async" src={img.wielen} alt="Een dag op wielen — spread" />
          </Box>
          <Text className={styles.text}>{t("projects.omleegvallers-gazet.body")}</Text>
        </Box>
      </Box>

      {/* Band 2 — four spreads in a row */}
      <Box component="section" className={styles.band2}>
        <Image loading="lazy" decoding="async" src={img.zakdoek} alt="Een zakdoek groot — spread" />
        <Image loading="lazy" decoding="async" src={img.howto} alt="How to: zakdoekje leggen — spread" />
        <Image loading="lazy" decoding="async" src={img.kerk} alt="Impe — church spread" />
        <Image loading="lazy" decoding="async" src={img.karate} alt="Karate Kid: Rani — spread" />
      </Box>

      {/* Band 3 — impe (2x2) + hand pic with nav beneath, bottom-right */}
      <Box component="section" className={styles.band3}>
        <Image loading="lazy" decoding="async" src={img.impe} alt="Impe — map spread" className={styles.impe} />
        <Box className={styles.band3right}>
          <Image loading="lazy" decoding="async" src={img.offfKaart} alt="Offf op de kaart — held spread" className={styles.hand} />
          <Box px={mainMargin} className={styles.navRow}>
            <ProjectNav slug="omleegvallers-gazet" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OmleegvallersGazet;
