import { Group, Menu, useMantineTheme } from "@mantine/core";
import i18next from "i18next";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./languageSelect.module.css";
import { IconWorld } from "@tabler/icons-react";
import { useHover } from "@mantine/hooks";

const LanguageSelect = () => {
  const [, setCurrentLanguage] = useState(i18next.language);
  const navigate = useNavigate();
  const { hovered, ref } = useHover();

  useEffect(() => {
    const handleLanguageChangeEvent = () => {
      setCurrentLanguage(i18next.language);
    };

    i18next.on("languageChanged", handleLanguageChangeEvent);
    return () => {
      i18next.off("languageChanged", handleLanguageChangeEvent);
    };
  }, []);

  // const currentLanguageText = useCallback(() => {
  //   if (currentLanguage === "en") {
  //     return "English";
  //   }
  //   if (currentLanguage === "nl") {
  //     return "Nederlands";
  //   }
  //   return "Select Language"; // Fallback if needed
  // }, [currentLanguage]);

  const handleLanguageChange = (lang: string) => {
    // Change language via i18next and update URL to reflect the new locale
    i18next.changeLanguage(lang);
    navigate(`/${lang}`);
  };
  const theme = useMantineTheme();

  return (
    <Group>
      <Menu shadow="md" width={200}>
        <Menu.Target ref={ref}>
          <IconWorld
            stroke={1}
            style={{
              cursor: "pointer",
              color: hovered ? theme.colors.styling[0] : theme.black,
              transition: "color 0.2s ease",
            }}
            size={32}
          />
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            className={styles.menuItem}
            h="2rem"
            onClick={() => handleLanguageChange("en")}
          >
            English
          </Menu.Item>
          <Menu.Item
            className={styles.menuItem}
            h="2rem"
            onClick={() => handleLanguageChange("nl")}
          >
            Nederlands
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
};

export default LanguageSelect;
