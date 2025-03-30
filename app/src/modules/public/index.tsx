import { RouteObject } from "react-router-dom";
import PageWrapper from "../sections/pageWrapper";
import ComingSoonPage from "./comingSoon";

export const publicRoutes: RouteObject[] = [
  {
    path: "",
    element: <PageWrapper />,
    children: [
      {
        index: true,
        element: <ComingSoonPage />,
      },
    ],
  },
];
