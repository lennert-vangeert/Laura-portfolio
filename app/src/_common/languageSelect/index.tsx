import i18n from "@global/localization";
import { Button, Group, Menu } from "@mantine/core";
import { changeLanguage } from "i18next";
import { useCallback, useEffect, useState } from "react";
import BelgiumFlag from "./_assets/belgium.svg?react";
import UKFlag from "./_assets/uk.svg?react";
import styles from "./languageSelect.module.css";

const LanguageSelect = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  useEffect(() => {
    const handleLanguageChange = () => {
      setCurrentLanguage(i18n.language);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  const currentLanguageText = useCallback(() => {
    if (currentLanguage === "en") {
      return "English";
    }
    if (currentLanguage === "nl") {
      return "Nederlands";
    }
  }, [currentLanguage]);
  return (
    <Group>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button bg="#fff">{currentLanguageText()}</Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item
            className={styles.menuItem}
            h="2rem"
            onClick={() => changeLanguage("en")}
            leftSection={<UKFlag height="2rem" width="3rem" />}
          >
            English
          </Menu.Item>
          <Menu.Item
            className={styles.menuItem}
            h="2rem"
            onClick={() => changeLanguage("nl")}
            leftSection={<BelgiumFlag height="2rem" width="3rem" />}
          >
            Nederlands
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
};

export default LanguageSelect;
