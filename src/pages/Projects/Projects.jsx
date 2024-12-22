import React from "react";
import style from "./Projects.module.css";
import { useProjects } from "../../contexts/ProjectContext";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Loader from "../../components/Loader/Loader";

const Projects = () => {
  const { projectData, isLoading, errors } = useProjects();

  if (isLoading) return <Loader />;
  else if (errors) return <p>Er is iets misgegaan...</p>;
  else
    return (
      <div>
        {projectData ? (
          <div className={style.container}>
            {projectData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        ) : (
          <p>Geen projecten gevonden</p>
        )}
      </div>
    );
  return <div></div>;
};

export default Projects;
