import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Detail from "../../pages/Detail/Detail";
import ROUTES from "../../consts/Routes";
import NotFound from "../NotFound/NotFound";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

// Component voor authenticatie
const Authentication = () => {
  return (
    <Routes>
      {/* Route voor de Home pagina */}
      <Route path={ROUTES.home} element={<Home />} />

      {/* Route voor de Projects pagina */}
      <Route path={ROUTES.list} element={<Projects />} />

      {/* Route voor de Detail pagina */}
      <Route path={ROUTES.detail.path} element={<Detail />} />

      {/* Route voor de AboutMe pagina */}
      <Route path={ROUTES.aboutMe} element={<AboutMe />} />

      {/* Route voor de Contact pagina */}
      <Route path={ROUTES.contact} element={<Contact />} />

      {/* Route voor elke andere URL, navigeert naar de notFound pagina */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Authentication;
