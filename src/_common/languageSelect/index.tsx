import { Group, Menu, useMantineTheme } from "@mantine/core";
import i18next from "i18next";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./languageSelect.module.css";
import { IconWorld } from "@tabler/icons-react";

const LanguageSelect = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);
  const navigate = useNavigate();


  useEffect(() => {
    const handleLanguageChangeEvent = () => {
      setCurrentLanguage(i18next.language);
    };

    i18next.on("languageChanged", handleLanguageChangeEvent);
    return () => {
      i18next.off("languageChanged", handleLanguageChangeEvent);
    };
  }, []);


  const handleLanguageChange = (lang: string) => {
    // Change language via i18next and update URL to reflect the new locale
    i18next.changeLanguage(lang);
    navigate(`/${lang}`);
  };
  const theme = useMantineTheme();

  // i18next.language may carry a region (e.g. "en-US"); the menu values are
  // the base codes, so normalise before matching the selected item.
  const selectedLanguage = currentLanguage?.split("-")[0];

  return (
    <Group>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <IconWorld
            stroke={1}
            style={{
              cursor: "pointer",
              color: theme.colors.styling[0],
              transition: "color 0.2s ease",
            }}
            size={32}
          />
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.RadioGroup
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <Menu.RadioItem value="en" className={styles.menuItem} h="2rem">
              English
            </Menu.RadioItem>
            <Menu.RadioItem value="nl" className={styles.menuItem} h="2rem">
              Nederlands
            </Menu.RadioItem>
          </Menu.RadioGroup>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
};

export default LanguageSelect;
