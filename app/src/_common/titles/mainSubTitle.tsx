import { Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const MainSubTitle = ({ text }: { text: string }) => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
  return (
    <Title size={isMobile ? "2.5rem" : undefined} mb="2rem" order={2}>
      {text}
    </Title>
  );
};

export default MainSubTitle;
