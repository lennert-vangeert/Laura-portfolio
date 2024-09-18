const ROUTES = {
  home: "/",
  list: "/projects",
  detail: { path: "projects/:slug", to: "/projects/" },
  aboutMe: "/aboutme",
  contact: "/contact",
  notFound: "*",
};

export default ROUTES;
