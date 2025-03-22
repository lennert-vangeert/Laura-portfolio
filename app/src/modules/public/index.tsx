import { Route } from "react-router-dom";
import ComingSoonPage from "./comingSoon";

const PublicRoutes = () => {
  return (
    <>
      <Route path="" element={<ComingSoonPage />} />
      {/* <Route path="aboutus" element={<AboutUs />} />
      <Route path="404" element={<NotFoundPage />} /> */}
    </>
  );
};

export default PublicRoutes;
