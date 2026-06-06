import { RouteObject } from "react-router-dom";
import PageWrapper from "../sections/pageWrapper";
import Home from "./home";
import ProjectDetail from "./projectDetail";

export const publicRoutes: RouteObject[] = [
  {
    path: "",
    element: <PageWrapper />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects/:slug",
        element: <ProjectDetail />,
      },
    ],
  },
];
