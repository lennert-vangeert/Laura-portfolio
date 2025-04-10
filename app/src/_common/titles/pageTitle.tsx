import { Divider, Title } from "@mantine/core";

const PageTitle = ({ text }: { text: string }) => {
  return (
    <>
      <Title mt="5rem" order={1}>
        {text}
      </Title>
      <Divider color="red" size={2} mb="4rem" />
    </>
  );
};

export default PageTitle;
