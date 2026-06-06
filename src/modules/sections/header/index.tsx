import {
  AppShellHeader,
  Box,
  Burger,
  Drawer,
  Group,
  Stack,
} from "@mantine/core";
import LanguageSelect from "@common/languageSelect";
import PillButton from "@common/pillButton";
import { Link } from "react-router-dom";
import { useTranslate } from "@global/localization";
import { RootState } from "@global/store/store";
import { useSelector } from "react-redux";
import { useDisclosure } from "@mantine/hooks";
import styles from "./header.module.css";

const Header = () => {
  const { tL, t } = useTranslate();
  const { mainMargin, isTablet } = useSelector((state: RootState) => state.ui);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <AppShellHeader pos="relative" px={mainMargin} pt={30} pb={30} withBorder={false}>
      <Group justify="space-between" align="center" wrap="nowrap">
        <Link to={tL("/")} className={styles.logo}>
          {"L\\Volkaert"}
        </Link>

        {isTablet ? (
          <Group gap="lg" align="center" wrap="nowrap">
            <LanguageSelect />
            <Burger
              opened={opened}
              onClick={open}
              aria-label="Toggle navigation"
              color="var(--mantine-color-brand-5)"
            />
          </Group>
        ) : (
          <Group gap={25} align="center" wrap="nowrap">
            <Group gap={20} align="center" wrap="nowrap">
              <Link to={tL("/#projects")} className={styles.navLink}>
                {t("Projects")}
              </Link>
              <Box className={styles.divider} />
              <Link to={tL("/#about")} className={styles.navLink}>
                {t("About me")}
              </Link>
            </Group>
            <PillButton to={tL("/#contact")}>{t("Contact")}</PillButton>
            <LanguageSelect />
          </Group>
        )}
      </Group>

      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        title={t("Menu")}
        size="80%"
        overlayProps={{ blur: 4 }}
        styles={{
          body: { height: "calc(100% - 60px)", display: "flex", flexDirection: "column" },
        }}
      >
        <Stack gap="xl" align="start" mt="xl">
          <Link to={tL("/#projects")} className={styles.navLink} onClick={close}>
            {t("Projects")}
          </Link>
          <Link to={tL("/#about")} className={styles.navLink} onClick={close}>
            {t("About me")}
          </Link>
        </Stack>
        <PillButton to={tL("/#contact")} onClick={close} className={styles.drawerContact}>
          {t("Contact")}
        </PillButton>
      </Drawer>
    </AppShellHeader>
  );
};

export default Header;
