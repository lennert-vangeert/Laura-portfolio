import React from "react";
import style from "./Projects.module.css";
import { useProjects } from "../../contexts/ProjectContext";

const Projects = () => {
  const { projectData, isLoading, errors } = useProjects(); 

  if (isLoading) return <Loader />;
  else if (errors) return <p>Er is iets misgegaan...</p>;
  else
    return (
      <div>
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    );
  return <div></div>;
};

export default Projects;
