import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  const [mainContent, setMainContent] = useState("");
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState({});

  const [tasks, setTasks] = useState([]);

  function saveValues(title, desc, date) {
    let project = {
      id: Math.random().toString(36).substr(2, 9),
      title: title,
      desc: desc,
      date: date,
      tasks: [],
    };

    setProjects((prev) => [project, ...prev]);
  }

  function saveSelect(selectedProject) {
    setSelectedProject(selectedProject);
  }

  function onAddTask(task) {
    setTasks((prevTasks) => [
      {
        projectId: selectedProject.id,
        id: Math.random().toString(36).substr(2, 9),
        content: task,
      },
      ...prevTasks,
    ]);
  }

  function onDeleteTask(selectedTask) {
    setTasks((prevTasks) => {
      const newTasks = prevTasks.filter((task) => task.id !== selectedTask.id);

      return newTasks;
    });
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
        projects={projects}
        setProjects={setProjects}
        tasks={tasks}
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
      />
    </>
  );
}

export default App;
