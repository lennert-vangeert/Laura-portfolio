import { createContext, useContext, useState } from "react";
import data from "../assets/data.json";

// Maakt een context aan voor landendata
const ProjectContext = createContext();
// Provider component om landendata te beheren en door te geven aan kinderen
const ProjectProvider = ({ children }) => {
  const [projectData, setProjectData] = useState(data); // State voor landendata
  const [isLoading, setIsLoading] = useState(false); // State om laadstatus bij te houden
  const [errors, setErrors] = useState(false); // State om fouten bij te houden
  // Geeft de Provider component terug met de contextwaarde
  return (
    <ProjectContext.Provider value={{ projectData, isLoading, errors }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;

export const useProjects = () => useContext(ProjectContext);

//${window.location.origin}/test.json
//https://restcountries.com/v3.1/all
