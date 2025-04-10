import { Divider, Title, useMantineTheme } from "@mantine/core";
import { useElementSize, useMediaQuery } from "@mantine/hooks";

const PageTitle = ({ text, line = true }: { text: string; line?: boolean }) => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
  const { ref, width } = useElementSize();
  return (
    <>
      <Title
        ref={ref}
        size={isMobile ? "3rem" : undefined}
        order={1}
        w="fit-content"
        mb={!line ? "4rem" : undefined}
      >
        {text}
      </Title>
      {line && <Divider w={width} color="red" size={2} mb="4rem" />}
    </>
  );
};

export default PageTitle;
