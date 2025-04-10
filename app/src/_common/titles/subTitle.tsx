import { Divider, Title, useMantineTheme } from "@mantine/core";
import { useElementSize, useMediaQuery } from "@mantine/hooks";

const SubTitle = ({ text }: { text: string }) => {
  const { ref, width } = useElementSize();
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
  return (
    <>
      <Title
        size={isMobile ? "2rem" : undefined}
        mt="3rem"
        w="fit-content"
        ref={ref}
        order={3}
      >
        {text}
      </Title>{" "}
      <Divider maw={width + 64} size={2} mb="2rem" />
    </>
  );
};
export default SubTitle;
