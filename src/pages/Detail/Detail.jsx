import React, { useEffect, useState } from "react";
import { useProjects } from "../../contexts/ProjectContext";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import NotFound from "../../components/NotFound/NotFound";
import style from "./Detail.module.css";

const Detail = () => {
  const { slug } = useParams();
  const { projectData, isLoading } = useProjects();
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (projectData?.length) {
      const selectedProject = projectData.find(
        (project) => project.slug === slug
      );
      setProject(selectedProject || null);
    }
  }, [projectData, slug]);

  // Helper functions to check file type
  const isImage = (file) => /\.(jpg|jpeg|png|gif|bmp)$/i.test(file);
  const isVideo = (file) => /\.(mp4|webm|ogg|mov)$/i.test(file);

  if (isLoading && !projectData) return <Loader />;
  if (!project) return <NotFound />;

  return (
    <div className={style.container}>
      {project.subtitles.map((subtitle, subIndex) => (
        <div key={subIndex} className={style.subtitleContainer}>
          <h2>{subtitle.text}</h2>
          <div className={style.mediaContainer}>
            {subtitle.media.map((mediaItem, mediaIndex) => (
              <div key={mediaIndex} className={style.mediaItem}>
                {isImage(mediaItem) ? (
                  <img
                    src={mediaItem}
                    alt={`Media for ${subtitle.text}`}
                    className={style.image}
                  />
                ) : isVideo(mediaItem) ? (
                  <video src={mediaItem} controls className={style.video} />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ))}
      <p className={style.description}>{project.description}</p>
    </div>
  );
};

export default Detail;
