import { Box } from "@mantine/core";
import { useSelector } from "react-redux";
import { RootState } from "@global/store/store";
import { useTranslate } from "@global/localization";
import { regenkreetImages as img } from "@assets/projects/regenkreet";
import ProjectNav from "../ProjectNav";
import styles from "./regenkreet.module.css";

const Regenkreet = () => {
  const { t } = useTranslate();
  const { mainMargin } = useSelector((state: RootState) => state.ui);

  return (
    <div className={styles.page}>
      {/* Left (body → liggend) interlocks with the big staand poster on the right. */}
      <section className={styles.split}>
        <div className={styles.left}>
          <p className={styles.body}>{t("projects.regenkreet.body")}</p>
          <img src={img.liggend} alt="Regenkreet — poster on a ledge" className={styles.liggend} />
        </div>
        <div className={styles.right}>
          <img src={img.staand} alt="Regenkreet — poster on concrete" className={styles.staand} />
          <Box px={mainMargin} className={styles.navRow}>
            <ProjectNav slug="regenkreet" />
          </Box>
        </div>
      </section>
    </div>
  );
};

export default Regenkreet;
