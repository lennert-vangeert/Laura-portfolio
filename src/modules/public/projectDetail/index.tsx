import React from "react";
import { useParams } from "react-router-dom";
import { ProjectEntry } from "../projectList";
import { contentfulClient } from "@global/contentful/client";
import PageTitle from "@common/titles/pageTitle";
import { Image, LoadingOverlay, Text, SimpleGrid, Box } from "@mantine/core";
import MainSubTitle from "@common/titles/mainSubTitle";
import SubTitle from "@common/titles/subTitle";
import classes from "./projectdetailpage.module.css";
import GoBack from "@common/utilComponents/goBack";
import { useTranslate } from "@global/localization";
import Head from "@global/head";
import { useSelector } from "react-redux";
import { RootState } from "@global/store/store";

const ProjectDetailPage = () => {
  const { title } = useParams();
  const [project, setProject] = React.useState<ProjectEntry>();
  const { t } = useTranslate();
  const { mainMargin } = useSelector((state: RootState) => state.ui);

  React.useEffect(() => {
    const getEntry = async () => {
      // get entry by title
      const response = await contentfulClient.getEntries({
        content_type: "project",
        "fields.title": title,
       });
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
    <Box mx={mainMargin}>
      <Head
        title={String(project?.fields.title)}
        description={String(project?.fields.description)}
      />
      <GoBack path="/" />
      <PageTitle text={t(String(project?.fields.title))} />
      <MainSubTitle text={t(String(project?.fields.mainSubTitle))} />
      <Text maw="40rem">{t(String(project?.fields.description))}</Text>

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
              <SubTitle text={t(subtitle)} />
              {/* Using SimpleGrid for layout */}
                <SimpleGrid
                mb="10rem"
                cols={4}
                spacing="md"
                style={{
                  gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
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
    </Box>
  );
};

export default ProjectDetailPage;
