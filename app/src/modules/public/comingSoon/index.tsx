import { useState } from "react";
import {
  Center,
  Stack,
  Text,
  Title,
  Button,
  Anchor,
  AppShell,
  Group,
  AppShellFooter,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import styles from "./comingSoon.module.css";
import Header from "../../sections/header/index";
const ComingSoonPage = () => {
  const { t } = useTranslation();
  const audio = new Audio("/audio/music.mp3");
  const [showCredits, setShowCredits] = useState(false);

  const toggleMusic = () => {
    setShowCredits(true);
    if (showCredits) return;
    audio.currentTime = 0;
    audio.loop = true;
    audio.volume = 0.5;
    audio.play();
  };

  return (
    <>
      <AppShell>
        <Header />
        <Center h="100vh">
          <Stack align="center" gap="md">
            <Title>{t("Coming soon")}</Title>
            <Text>
              {t("We're working hard to get things ready. Stay tuned!")}
            </Text>

            <Text>{t("Listen to some music in the meantime.")}</Text>
            <Button disabled={showCredits} bg="#fff" onClick={toggleMusic}>
              {t("Play")}
            </Button>

            <div className={styles.loader}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            {showCredits && (
              <AppShellFooter>
                <Group py="1rem" justify="center">
                  <Text size="sm">
                    {t("Music by")}{" "}
                    <Anchor
                      href="https://pixabay.com/users/denis-pavlov-music-35636692/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=249305"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Denis Pavlov
                    </Anchor>{" "}
                    {t("from")}{" "}
                    <Anchor
                      href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=249305"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pixabay
                    </Anchor>
                  </Text>
                </Group>
              </AppShellFooter>
            )}
          </Stack>
        </Center>
      </AppShell>
    </>
  );
};

export default ComingSoonPage;
