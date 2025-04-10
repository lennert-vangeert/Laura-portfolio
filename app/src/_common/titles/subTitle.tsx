import { Divider, Title } from "@mantine/core";
import { useElementSize } from "@mantine/hooks";

const SubTitle = ({ text }: { text: string }) => {
  const { ref, width } = useElementSize();
  return (
    <>
      <Title mt="3rem" w="fit-content" ref={ref} order={3}>
        {text}
      </Title>{" "}
      <Divider maw={width + 64} size={2} mb="2rem" />
    </>
  );
};
export default SubTitle;
