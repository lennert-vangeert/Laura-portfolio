import Head from "@global/head";
import { Center, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";

const Homepage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head title="Homepage" description="This is the homepage" SEODisabled />
      <Center h="100vh">
        <Title order={1}>{t("Homepage")}</Title>
      </Center>
    </>
  );
};

export default Homepage;
