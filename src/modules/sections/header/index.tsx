import { AppShellHeader, Box, Group } from "@mantine/core";
import AppIcon from "@common/appIcon/appIcon";
import LanguageSelect from "@common/languageSelect";
import { Link } from "react-router-dom";
import { useTranslate } from "@global/localization";
import { RootState } from "@global/store/store";
import { useSelector } from "react-redux";

const Header = () => {
  const { tL } = useTranslate();
  const { mainMargin } = useSelector((state: RootState) => state.ui);

  return (
    <AppShellHeader pos="relative" h="10vh" px={mainMargin} withBorder={false}>
      <Group justify="space-between" h="100%">
        <Box>
          <Link to={tL("/")}>
            <AppIcon />
          </Link>
        </Box>
        <LanguageSelect />
      </Group>
    </AppShellHeader>
  );
};

export default Header;
