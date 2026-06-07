import { Suspense, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import Head from "@global/head";
import { useTranslate } from "@global/localization";
import { getAdjacent } from "@assets/projects";
import ProjectShell from "./ProjectShell";
import { contentRegistry } from "./registry";
import { prefetchProject } from "./prefetch";

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

  // Idle-prefetch the neighbouring projects so prev/next feels instant even
  // without hovering the nav links.
  useEffect(() => {
    if (!adjacent) return;
    const run = () => {
      prefetchProject(adjacent.prev.slug);
      prefetchProject(adjacent.next.slug);
    };
    const ric = window.requestIdleCallback;
    const id = ric ? ric(run) : window.setTimeout(run, 1200);
    return () => {
      if (ric) window.cancelIdleCallback?.(id as number);
      else window.clearTimeout(id as number);
    };
  }, [slug]); // eslint-disable-line react-hooks/exhaustive-deps

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
