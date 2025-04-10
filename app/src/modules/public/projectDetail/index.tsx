import React from "react";
import { useParams } from "react-router-dom";
import { ProjectEntry } from "../projectList";
import { contentfulClient } from "@global/contentful/client";
import PageTitle from "@common/titles/pageTitle";
import { Image, LoadingOverlay, Text, SimpleGrid } from "@mantine/core";
import MainSubTitle from "@common/titles/mainSubTitle";
import SubTitle from "@common/titles/subTitle";
import classes from "./projectdetailpage.module.css";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [project, setProject] = React.useState<ProjectEntry>();

  React.useEffect(() => {
    const getEntry = async () => {
      const response = await contentfulClient.getEntries({ "sys.id": id });
      console.log(response.items);

      const typedEntry = response.items as ProjectEntry[];
      setProject(typedEntry[0]);
    };
    getEntry();
  }, []);

  if (!project) {
    return <LoadingOverlay />;
  }

  return (
    <>
      <PageTitle text={String(project?.fields.title)} />
      <MainSubTitle text={String(project?.fields.mainSubTitle)} />
      <Text maw="40rem">{String(project?.fields.description)}</Text>

      {Array.isArray(project?.fields.subTitles) &&
        project.fields.subTitles.map((subtitle, index) => {
          const imageListKey = `imageList${
            index + 1
          }` as keyof typeof project.fields;
          const images = project.fields[imageListKey] as unknown as
            | any[]
            | undefined;

          return (
            <React.Fragment key={index}>
              <SubTitle text={subtitle} />
              {/* Using SimpleGrid for layout */}
              <SimpleGrid
                mb="10rem"
                cols={3}
                spacing="md"
                style={{
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                }}
              >
                {images?.map((img, imgIndex) => (
                  <Image
                    className={classes.image}
                    key={imgIndex}
                    src={img.fields.file.url}
                    alt={img.fields.title || `Image ${imgIndex + 1}`}
                    style={{ width: "100%", height: "100%" }} // Let CSS control the height
                    fit="cover"
                  />
                ))}
              </SimpleGrid>
            </React.Fragment>
          );
        })}
    </>
  );
};

export default ProjectDetailPage;
