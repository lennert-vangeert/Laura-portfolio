import { Box } from "@mantine/core";
import { IconArrowDown } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { RootState } from "@global/store/store";
import styles from "./hero.module.css";

const Hero = () => {
  const { mainMargin } = useSelector((state: RootState) => state.ui);

  return (
    <Box component="section" className={styles.hero} px={mainMargin}>
      <h1 className={styles.title}>
        <span className={styles.line}>Laura</span>
        <span className={styles.line}>Volkaert</span>
      </h1>
      <div className={styles.scroll} aria-hidden="true">
        <IconArrowDown size={56} stroke={2} />
      </div>
    </Box>
  );
};

export default Hero;
