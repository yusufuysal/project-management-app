import { ProjectsContextProvider } from "./store/projects-context";

import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <ProjectsContextProvider>
      <Sidebar />
      <MainContent />
    </ProjectsContextProvider>
  );
}

export default App;
