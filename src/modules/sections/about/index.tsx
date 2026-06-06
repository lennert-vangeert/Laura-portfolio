import { Box } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconArrowRight } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { RootState } from "@global/store/store";
import { useTranslate } from "@global/localization";
import PillButton from "@common/pillButton";
import styles from "./about.module.css";

const About = () => {
  const { t, locale } = useTranslate();
  const { mainMargin } = useSelector((state: RootState) => state.ui);

  // Primary pill = CV in the current language; secondary link = the other language.
  const isDutch = locale === "nl";
  const primaryCv = isDutch ? "about.cvDutch" : "about.cvEnglish";
  const secondaryCv = isDutch ? "about.cvEnglish" : "about.cvDutch";

  return (
    <Box component="section" id="about" className={styles.about} px={mainMargin}>
      <div className={styles.inner}>
        <div className={styles.content}>
        <Box>
          <h2 className={styles.title}>{t("about.title")}</h2>
            <p className={styles.bio}>{t("about.bio")}</p>
        </Box>
          <div className={styles.cv}>
            <PillButton to="#">{t(primaryCv)}</PillButton>
            <Link to="#" className={styles.cvDutch}>
              {t(secondaryCv)}
              <IconArrowRight size={20} stroke={2} />
            </Link>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default About;
