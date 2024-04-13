import { useContext } from "react";
import { ProjectsContext } from "../store/projects-context";

import NoProject from "./NoProject";
import AddProject from "./AddProject";
import SelectedProject from "./SelectedProject";

const MainContent = ({ tasks, onAddTask, onDeleteTask }) => {
  const { selectedProjectId, selectedProject } = useContext(ProjectsContext);

  let content = "";
  if (selectedProjectId === null) {
    content = <AddProject />;
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
