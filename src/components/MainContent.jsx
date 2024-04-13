import { useContext } from "react";
import { ProjectsContext } from "../store/projects-context";

import NoProject from "./NoProject";
import AddProject from "./AddProject";
import SelectedProject from "./SelectedProject";

const MainContent = ({ tasks, onAddTask, onDeleteTask }) => {
  const {
    projects,
    selectedProjectId,
    selectedProject,
    addProject,
    handleCloseAddForm,
  } = useContext(ProjectsContext);

  console.log("SELECTED PROJECT ID: ", selectedProjectId);
  console.log("SELECTED PROJECT: ", selectedProject);

  function handleSave(title, description, dueDate) {
    addProject(
      title.current.value,
      description.current.value,
      dueDate.current.value
    );
  }

  let content = "";
  if (selectedProjectId === null) {
    content = (
      <AddProject handleCancel={handleCloseAddForm} handleSave={handleSave} />
    );
  } else if (selectedProject) {
    content = (
      <SelectedProject
        tasks={tasks}
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
      />
    );
  } else {
    content = <NoProject />;
  }

  return (
    <div className="w-3/4 fixed right-0 h-full flex justify-start items-center pl-16">
      {content}
    </div>
  );
};

export default MainContent;
