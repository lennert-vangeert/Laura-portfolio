import { Suspense } from "react";
import { Navigate, useParams } from "react-router-dom";
import Head from "@global/head";
import { useTranslate } from "@global/localization";
import { getAdjacent } from "@assets/projects";
import ProjectShell from "./ProjectShell";
import { contentRegistry } from "./registry";

/**
 * Route component for `/:locale/projects/:slug`. Looks up the project's content
 * component and renders it inside the shared ProjectShell. Unknown slugs
 * redirect home.
 */
const ProjectDetail = () => {
  const { t, tL } = useTranslate();
  const { slug } = useParams();

  const adjacent = slug ? getAdjacent(slug) : null;
  const Content = slug ? contentRegistry[slug] : undefined;

  if (!slug || !adjacent || !Content) {
    return <Navigate to={tL("/")} replace />;
  }

  return (
    <>
      <Head title={t(adjacent.current.titleKey)} description="Project by Laura Volkaert" />
      <ProjectShell slug={slug}>
        <Suspense fallback={null}>
          <Content />
        </Suspense>
      </ProjectShell>
    </>
  );
};

export default ProjectDetail;
