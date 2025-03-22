// Routing.tsx
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  useParams,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
import i18n from "@global/localization";
import PublicRoutes from "./public";
// import PageWrapper from "./sections/pageWrapper";

const Routing = () => {
  return (
    <BrowserRouter>
      {/* <PageWrapper> */}
      <Routes>
        {/* Redirect root URL to include the current language */}
        <Route
          path="/"
          element={<Navigate to={`/${i18n.language}`} replace />}
        />

        {/* Parent route that includes language */}
        <Route path=":language" element={<LanguageWrapper />}>
          {/* Nested routes */}
          {PublicRoutes()}
        </Route>
        {/* Redirect any invalid paths */}
        <Route
          path="*"
          element={<Navigate to={`/${i18n.language}/404`} replace />}
        />
      </Routes>
      {/* </PageWrapper> */}
    </BrowserRouter>
  );
};

const LanguageWrapper = () => {
  const navigate = useNavigate();
  const { language } = useParams();

  useEffect(() => {
    const currentLang = i18n.language;
    if (!language) {
      // If no language in URL, add it and redirect
      navigate(`/${currentLang}`);
    } else if (language !== currentLang) {
      // Sync the URL language with i18next
      i18n.changeLanguage(language);
    }
  }, [language, navigate]);

  return <Outlet />; // Render nested routes here
};

export default Routing;
