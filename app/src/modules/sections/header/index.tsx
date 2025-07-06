import {
  Anchor,
  AppShellHeader,
  Box,
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
} from "@mantine/core";
import AppIcon from "@common/appIcon/appIcon";
import LanguageSelect from "@common/languageSelect";
import { Link } from "react-router-dom";
import { useTranslate } from "@global/localization";
import { RootState } from "@global/store/store";
import { useSelector } from "react-redux";
import { HashLink } from "react-router-hash-link";
import { useDisclosure } from "@mantine/hooks";

const Header = () => {
  const { tL, t } = useTranslate();
  const { mainMargin, isTablet, isMobile } = useSelector(
    (state: RootState) => state.ui
  );
  const [opened, { open, close }] = useDisclosure();
  return (
    <AppShellHeader pos="relative" h="10vh" px={mainMargin} withBorder={false}>
      {isTablet ? (
        <>
          <Group justify="space-between" h="100%">
            <Box>
              <Link to={tL("/")}>
                <AppIcon />
              </Link>
            </Box>
            <Group gap="2rem">
              <LanguageSelect />
              <Burger onClick={open} aria-label="Toggle navigation" />
            </Group>
          </Group>
          <Drawer
            opened={opened}
            onClose={() => opened && close()}
            title={t("Menu")}
            size={isMobile ? "100%" : "80%"}
            overlayProps={{ blur: 4 }}
            position="right"
          ></Drawer>
        </>
      ) : (
        <Group justify="space-between" h="100%">
          <Box>
            <Link to={tL("/")}>
              <AppIcon />
            </Link>
          </Box>

          <Group>
            <Anchor
              style={{
                fontSize: "1.25rem",
              }}
              component={Link}
              to={tL("/#projects")}
            >
              {t("Projects")}
            </Anchor>
            <Divider
              orientation="vertical"
              h="2rem"
              size={2}
              style={{
                borderColor: "#000",
              }}
              mx="1rem"
            />
            <Anchor
              component={Link}
              to={tL("/about")}
              style={{
                fontSize: "1.25rem",
              }}
            >
              {t("About me")}
            </Anchor>
            <Divider
              orientation="vertical"
              h="2rem"
              size={2}
              style={{
                borderColor: "#000",
              }}
              mx="1rem"
            />
            <Anchor
              component={Link}
              to={tL("/blog")}
              style={{
                fontSize: "1.25rem",
              }}
            >
              {t("Blog")}
            </Anchor>
          </Group>
          <Group gap="2rem">
            <Button
              style={{
                fontSize: "1.25rem",
              }}
              variant="outline"
              component={HashLink}
              to={tL("/#contact")}
            >
              {t("Contact")}
            </Button>
            <LanguageSelect />
          </Group>
        </Group>
      )}
    </AppShellHeader>
  );
};

export default Header;
