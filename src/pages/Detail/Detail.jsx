import React, { useEffect, useState } from "react";
import { useProjects } from "../../contexts/ProjectContext";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import NotFound from "../../components/NotFound/NotFound";
import { use } from "passport";

const Detail = () => {
  const { slug } = useParams(); 

  const { projectData, isLoading } = useProjects(); // Haalt de landendata op en controleert of het laden bezig is
  const [project, setproject] = useState(false); // State voor het geselecteerde land
  useEffect(() => {
    if (projectData) {
      const selectedProject = projectData.find(
        (project) => project.slug === slug
      );
      setproject(selectedProject);
    }
  });

  if (isLoading && !projectData) return <Loader />;
  else if (!project) return <NotFound />;
  else return <div>
    {project.title}
  </div>;
};

export default Detail;
