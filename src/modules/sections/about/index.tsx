import { Box } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconArrowRight } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { RootState } from "@global/store/store";
import { useTranslate } from "@global/localization";
import PillButton from "@common/pillButton";
import styles from "./about.module.css";

const About = () => {
  const { t } = useTranslate();
  const { mainMargin } = useSelector((state: RootState) => state.ui);

  return (
    <Box component="section" className={styles.about} px={mainMargin}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{t("about.title")}</h2>
        <p className={styles.bio}>{t("about.bio")}</p>
        <div className={styles.cv}>
          <p className={styles.cvHint}>{t("about.cvHint")}</p>
          <PillButton to="#">{t("about.cvEnglish")}</PillButton>
          <Link to="#" className={styles.cvDutch}>
            {t("about.cvDutch")}
            <IconArrowRight size={20} stroke={2} />
          </Link>
        </div>
      </div>
    </Box>
  );
};

export default About;
