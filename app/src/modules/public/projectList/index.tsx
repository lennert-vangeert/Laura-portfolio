import { contentfulClient } from "@global/contentful/client";
import * as React from "react";
import { Entry } from "contentful";
import { Box } from "@mantine/core";
import Head from "@global/head";
import ProjectListItem from "@common/projectListItem";

export type ProjectFields = {
  fields: {
    content: string;
    description: string;
    title: string;
    year: number;
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
  const [projects, setProjects] = React.useState<ProjectEntry[]>([]);

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

      <Box mb="5rem">
        {projects.map((project) => (
          // <React.Fragment key={project.sys.id}>
          //   <Divider my="1rem" size={2} color="red" />
          //   <Anchor
          //     className={classes.projectItem}
          //     td="none"
          //     c={theme.black}
          //     component={Link}
          //     to={`/projects/${encodeURIComponent(
          //       String(project.fields.title)
          //     )}`}
          //   >
          //     <Flex
          //       px={!isMobile ? "10rem" : undefined}
          //       direction={isMobile ? "column" : "row"}
          //       gap="2rem"
          //     >
          //       <Image
          //         // @ts-expect-error
          //         src={project.fields.imageList1[0].fields.file.url}
          //         width="15rem"
          //         height="100%"
          //         mah="15rem"
          //         style={{
          //           aspectRatio: 1 / 1,
          //         }}
          //       />
          //       <Stack justify="center" gap="2rem" maw="100%">
          //         <Title mt="1rem" order={3}>
          //           {t(String(project.fields.title))}
          //         </Title>
          //         <Text>{t(String(project.fields.description))}</Text>
          //       </Stack>
          //     </Flex>
          //   </Anchor>
          // </React.Fragment>
          <ProjectListItem key={project.sys.id} {...project} />
        ))}
      </Box>
      <Box id="contact">contact</Box>
    </>
  );
};

export default ProjectListPage;
