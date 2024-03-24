import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  const [mainContent, setMainContent] = useState("");
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState({});

  function saveValues(title, desc, date) {
    let project = { title: title, desc: desc, date: date, tasks: [] };

    setProjects((prev) => [project, ...prev]);
  }

  function saveSelect(selectedProject) {
    setSelectedProject(selectedProject);
  }

  return (
    <>
      <Sidebar
        setMainContent={setMainContent}
        projects={projects}
        saveSelect={saveSelect}
      />
      <MainContent
        mainContent={mainContent}
        setMainContent={setMainContent}
        saveValues={saveValues}
        selectedProject={selectedProject}
      />
    </>
  );
}

export default App;
