import { useTranslate } from "@global/localization";
import { Anchor, Box, Group, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import ArrowLeft from "./arrow-left.svg?react";

const GoBack = ({ path }: { path: string }) => {
  const { t, tL } = useTranslate();
  return (
    <Box mt="7rem">
      <Anchor td="none" c="black" component={Link} to={tL(path)}>
        <Group>
          <ArrowLeft />
          <Text>{t("Go back")}</Text>
        </Group>
      </Anchor>
    </Box>
  );
};

export default GoBack;
