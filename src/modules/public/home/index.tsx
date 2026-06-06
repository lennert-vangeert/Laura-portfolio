import Head from "@global/head";
import { useTranslation } from "react-i18next";

/**
 * Home page.
 * Intentionally blank — a clean canvas for the upcoming redesign.
 * The Header chrome is provided by the surrounding PageWrapper layout.
 */
const Home = () => {
  const { t } = useTranslation();
  return <Head title={t("Homepage")} description="Portfolio of Laura Volkaert" />;
};

export default Home;
