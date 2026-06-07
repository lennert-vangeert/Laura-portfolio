import { Anchor, Box, Image, Text } from "@mantine/core";
import { useSelector } from "react-redux";
import { RootState } from "@global/store/store";
import { useTranslate } from "@global/localization";
import { clbImages as img } from "@assets/projects/clb";
import ProjectNav from "../ProjectNav";
import styles from "./clb-kies.module.css";

const ClbKies = () => {
  const { t } = useTranslate();
  const { mainMargin } = useSelector((state: RootState) => state.ui);

  // The intro ends with the SAM platform URL on its own line — split it out
  // so it renders as a clickable link instead of plain text.
  const intro = t("projects.clb-kies.intro");
  const urlMatch = intro.match(/(https?:\/\/\S+)/);
  const introText = urlMatch ? intro.slice(0, urlMatch.index).trimEnd() : intro;
  const introUrl = urlMatch?.[0];

  return (
    <>
      <Box className={styles.masonry}>
        <Image loading="eager" fetchPriority="high" decoding="async" src={img.omslag} alt="CLB Kies! — campaign posters" className={styles.big} />
        <Text className={`${styles.txt} ${styles.wide}`}>
          {introText}
          {introUrl && (
            <>
              {"\n"}
              <Anchor href={introUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {introUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </Anchor>
            </>
          )}
        </Text>
        <Image loading="lazy" decoding="async" src={img.stickers} alt="CLB Kies! — stickers on a laptop" />
        <Image loading="lazy" decoding="async" src={img.video3} alt="CLB Kies! — interactive school map" />
        <Text className={`${styles.txt} ${styles.wide}`}>{t("projects.clb-kies.within")}</Text>
        <Image loading="lazy" decoding="async" src={img.brochure} alt="CLB Kies! — brochure spread" className={styles.wide} />
        <Image loading="lazy" decoding="async" src={img.laptopTable} alt="CLB Kies! — website on a laptop" className={styles.tall} />
        <Image loading="lazy" decoding="async" src={img.wieBenIk} alt="CLB Kies! — 'Wie ben ik' checklists" />
        <Image loading="lazy" decoding="async" src={img.deviceArray} alt="CLB Kies! — website across devices" className={styles.wide} />
        <Text className={`${styles.txt} ${styles.wide}`}>{t("projects.clb-kies.award")}</Text>
        <Image loading="lazy" decoding="async" src={img.banners} alt="CLB Kies! — roll-up banners" />
        <Image loading="lazy" decoding="async" src={img.video2} alt="CLB Kies! — animation with mascots" className={styles.wide} />
        <Image loading="lazy" decoding="async" src={img.infodag} alt="CLB Kies! — info-day forms" />
        <Image loading="lazy" decoding="async" src={img.eersteSchooldag} alt="CLB Kies! — first school day checklist" />
        <Image loading="lazy" decoding="async" src={img.poster} alt="CLB Kies! — folded campaign poster" className={styles.big} />
        <Image loading="lazy" decoding="async" src={img.laptop2} alt="CLB Kies! — careers explorer on a laptop" className={styles.big} />
      </Box>

      {/* Bottom row — body text (2-wide) left of the nav buttons */}
      <Box className={styles.bottomRow}>
        <Text className={`${styles.txt} ${styles.bodyText}`}>{t("projects.clb-kies.body")}</Text>
        <Box px={mainMargin} className={styles.navWrap}>
          <ProjectNav slug="clb-kies" />
        </Box>
      </Box>
    </>
  );
};

export default ClbKies;
