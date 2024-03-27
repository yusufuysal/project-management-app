import NoProject from "./NoProject";
import AddProject from "./AddProject";
import SelectedProject from "./SelectedProject";

const MainContent = ({
  mainContent,
  setMainContent,
  saveValues,
  selectedProject,
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

  let tasksContent = (
    <div className=" bg-stone-100 px-4 py-8 rounded-md">
      {selectedProject.tasks?.map((task, index) => (
        <div key={index} className=" flex justify-between items-center mb-4">
          <p>task</p>
          <button className=" text-stone-500 hover:text-stone-600 hover:font-medium">
            Clear
          </button>
        </div>
      ))}
    </div>
  );

  let content = "";
  if (mainContent === "add") {
    content = (
      <AddProject handleCancel={handleCancel} handleSave={handleSave} />
    );
  } else if (mainContent === "select") {
    content = (
      <SelectedProject
        selectedProject={selectedProject}
        tasksContent={tasksContent}
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
