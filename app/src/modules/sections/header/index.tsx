import { AppShellHeader, Box, Group } from "@mantine/core";
import AppIcon from "@common/appIcon/appIcon";
import LocalizedLink from "@global/utils/localizedLink";
import LanguageSelect from "@common/languageSelect";

const Header = () => {
  return (
    <AppShellHeader h={"10vh"} pl="2.5rem" pr="2.5rem">
      <Group justify="space-between" h="100%">
        <Box>
          <LocalizedLink to={"/"}>
            <AppIcon />
          </LocalizedLink>
        </Box>
        <LanguageSelect />
      </Group>
    </AppShellHeader>
  );
};

export default Header;
