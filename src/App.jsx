import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  const [isAdding, setIsAdding] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [projects, setProjects] = useState([]);

  function saveValues(title, desc, date) {
    let project = { title: title, desc: desc, date: date };

    setProjects((prev) => [project, ...prev]);
  }

  return (
    <>
      <Sidebar
        setIsAdding={setIsAdding}
        setIsSelected={setIsSelected}
        projects={projects}
      />
      <MainContent
        isAdding={isAdding}
        isSelected={isSelected}
        setIsAdding={setIsAdding}
        saveValues={saveValues}
      />
    </>
  );
}

export default App;
