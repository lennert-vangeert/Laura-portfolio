import { contentfulClient } from "@global/contentful/client";
import * as React from "react";
import { Entry } from "contentful";
import { Anchor, Box } from "@mantine/core";
import { Link } from "react-router-dom";

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
    <Box>
      {projects.map((project) => (
        <Anchor key={project.sys.id} component={Link} to={`/projects/${project.sys.id}`}>
          <div>
            <h2>{String(project.fields.title)}</h2>
            <p>{String(project.fields.description)}</p>
          </div>
        </Anchor>
      ))}
    </Box>
  );
};

export default ProjectListPage;
