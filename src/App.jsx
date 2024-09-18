import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProjectProvider from "./contexts/ProjectContext";
import Authentication from "./pages/Authentication/Authentication";

function App() {
  return (
    <>
      <ProjectProvider>
        <Header />
        <Authentication />
        <Footer />
      </ProjectProvider>
    </>
  );
}

export default App;
