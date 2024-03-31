import NoProject from "./NoProject";
import AddProject from "./AddProject";
import SelectedProject from "./SelectedProject";

const MainContent = ({
  mainContent,
  setMainContent,
  saveValues,
  selectedProject,
  onAddTask,
  tasks,
}) => {
  function handleSave(title, description, dueDate) {
    saveValues(
      title.current.value,
      description.current.value,
      dueDate.current.value
    );
    setMainContent("");
  }

  function handleCancel() {
    setMainContent("");
  }

  let content = "";
  if (mainContent === "add") {
    content = (
      <AddProject handleCancel={handleCancel} handleSave={handleSave} />
    );
  } else if (mainContent === "select") {
    content = (
      <SelectedProject
        selectedProject={selectedProject}
        onAddTask={onAddTask}
        tasks={tasks}
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
