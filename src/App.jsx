import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProjectProvider from "./contexts/ProjectContext";
import Authentication from "./pages/Authentication/Authentication";
import Construction from "./pages/Construction/Construction";

function App() {
  return (
    <>
      {/* <ProjectProvider>
        <Header />
        <Authentication />
        <Footer />
      </ProjectProvider> */}
      <Construction />
    </>
  );
}

export default App;
