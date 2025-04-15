import { contentfulClient } from "@global/contentful/client";
import * as React from "react";
import { Entry } from "contentful";
import {
  Anchor,
  Box,
  Divider,
  Flex,
  Image,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { Link } from "react-router-dom";
import PageTitle from "@common/titles/pageTitle";
import { useTranslate } from "@global/localization";
import classes from "./projectList.module.css";
import { useMediaQuery } from "@mantine/hooks";
import Head from "@global/head";

export type ProjectFields = {
  fields: {
    content: string;
    description: string;
    title: string;
    mainSubTitle: string;
    subTitles: string[];
    imageList1: {
      fields: {
        file: {
          url: string;
        };
      };
    }[];
  };
  contentTypeId: string;
};

export type ProjectEntry = Entry<ProjectFields>;

const ProjectListPage = () => {
  const { t } = useTranslate();
  const theme = useMantineTheme();
  const [projects, setProjects] = React.useState<ProjectEntry[]>([]);
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  React.useEffect(() => {
    const getEntries = async () => {
      const response = await contentfulClient.getEntries();
      console.log(response.items);

      const typedEntries = response.items as ProjectEntry[];
      setProjects(typedEntries);
    };
    getEntries();
  }, []);

  return (
    <>
      <Head title="Laura Volkaert" description="Laura Volkaert" />
      <PageTitle line={false} text={t("My projects")} />
      <Box>
        {projects.map((project) => (
          <React.Fragment key={project.sys.id}>
            <Divider mb="1rem" size={2} color="red" />
            <Anchor
              className={classes.projectItem}
              td="none"
              c={theme.black}
              component={Link}
              to={`/projects/${encodeURIComponent(
                String(project.fields.title)
              )}`}
            >
              <Flex direction={isMobile ? "column" : "row"} gap="2rem">
                <Image
                  // @ts-expect-error
                  src={project.fields.imageList1[0].fields.file.url}
                  width="100%"
                  height="auto"
                  mah="15rem"
                />
                <Stack justify="center" gap="2rem" maw="100%">
                  <Title mt="1rem" order={3}>
                    {t(String(project.fields.title))}
                  </Title>
                  <Text>{t(String(project.fields.description))}</Text>
                </Stack>
              </Flex>
            </Anchor>
          </React.Fragment>
        ))}
      </Box>
    </>
  );
};

export default ProjectListPage;
