import Head from "@global/head";
import { useTranslation } from "react-i18next";
import Hero from "../../sections/hero";
import Intro from "../../sections/intro";
import Projects from "../../sections/projects";
import About from "../../sections/about";
import Marquee from "../../sections/marquee";
import Footer from "../../sections/footer";

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
      <Marquee />
      <Footer variant="big" />
    </>
  );
};

export default Home;
