import { RouteObject } from "react-router-dom";
import PageWrapper from "../sections/pageWrapper";
import Home from "./home";

export const publicRoutes: RouteObject[] = [
  {
    path: "",
    element: <PageWrapper />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];
