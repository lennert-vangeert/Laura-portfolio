import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../consts/Routes";
import style from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  return (
    <Link to={`${ROUTES.detail.to}${project.slug}`}>
      <div>{project.title}
        <img src={project.image} alt={project.title} />
      </div>
    </Link>
  );
};

export default ProjectCard;
