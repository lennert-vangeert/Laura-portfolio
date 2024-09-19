import React, { useEffect, useState } from "react";
import { useProjects } from "../../contexts/ProjectContext";
import Loader from "../../components/Loader/Loader";
import style from "./Home.module.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Home = () => {
  const { projectData, isLoading, errors } = useProjects();

  if (isLoading) return <Loader />;
  else if (errors) return <p>Er is iets misgegaan...</p>;
  else
    return (
      <div className={style.container}>
        <img className={style.image} src="./IMG_4486.JPG" alt="" />
      </div>
    );
};

export default Home;
