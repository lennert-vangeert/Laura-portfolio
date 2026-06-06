import { RootState } from "@global/store/store";
import { Box, Flex, Image, Text, Title, useMantineTheme } from "@mantine/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProjectEntry } from "src/modules/public/projectList";
import styles from "./projectListItem.module.css";
import { useTranslate } from "@global/localization";
import { IconArrowRight } from "@tabler/icons-react";

const ProjectListItem = (project: ProjectEntry) => {
  const { mainMargin, isMobile, isBigTablet, isTablet } = useSelector(
    (state: RootState) => state.ui
  );
  const theme = useMantineTheme();
  const { t } = useTranslate();

  return (
    <Flex
      className={styles.projectItem}
      style={{
        borderBottom: isTablet ? "1px solid #000" : "none",
      }}
      component={Link}
      to={`/projects/${encodeURIComponent(String(project.fields.title))}`}
      px={mainMargin}
      py="8rem"
      direction={isTablet ? "column-reverse" : "row"}
    >
      <Box flex={1}>
        <Text fw={700} size={isMobile ? "1.5rem" : "2rem"}>
          {String(project.fields.year)}
        </Text>
        <Title
          mt="1rem"
          order={1}
          fw={400}
          tt="uppercase"
          size={
            isMobile
              ? theme.headings.sizes.h4.fontSize
              : theme.headings.sizes.h3.fontSize
          }
        >
          {String(project.fields.title)}
        </Title>
        <Text
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
          mt={isTablet ? "6rem" : "10rem"}
          size="1.25rem"
        >
          {t("Meer info")} <IconArrowRight stroke={1} size={32} />{" "}
        </Text>
      </Box>
      <Image
        mb={isTablet ? "2rem" : undefined}
        flex={1}
        ml={isBigTablet ? (isTablet ? undefined : "2rem") : undefined}
        // @ts-expect-error
        src={project.fields.imageList1[0].fields.file.url}
        w="100%"
        maw="60rem"
        style={{
          aspectRatio: 1.33,
        }}
      />
    </Flex>
  );
};

export default ProjectListItem;
