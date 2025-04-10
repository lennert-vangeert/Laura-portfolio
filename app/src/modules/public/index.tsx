import { RouteObject } from "react-router-dom";
import PageWrapper from "../sections/pageWrapper";
import ProjectListPage from "./projectList";
import ProjectDetailPage from "./projectDetail";

export const publicRoutes: RouteObject[] = [
  {
    path: "",
    element: <PageWrapper />,
    children: [
      {
        index: true,
        element: <ProjectListPage />,
      },
      {
        path: "projects/:id",
        element: <ProjectDetailPage />,
      },
    ],
  },
];
