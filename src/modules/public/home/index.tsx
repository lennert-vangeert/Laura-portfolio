import Head from "@global/head";
import { useTranslation } from "react-i18next";
import Hero from "../../sections/hero";
import Intro from "../../sections/intro";
import Projects from "../../sections/projects";
import About from "../../sections/about";

/**
 * Home page — stacked sections (hero, projects, about).
 * The Header chrome and AppShell are provided by the surrounding PageWrapper layout.
 */
const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head title={t("Homepage")} description="Portfolio of Laura Volkaert" />
      <Hero />
      <Intro />
      <Projects />
      <About />
    </>
  );
};

export default Home;
