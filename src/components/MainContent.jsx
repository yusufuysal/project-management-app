import NoProject from "./NoProject";
import AddProject from "./AddProject";

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

  let selectedProjectContent = (
    <div className=" w-8/12">
      <div className=" flex justify-between items-center">
        <h2 className=" text-3xl text-stone-700 font-medium mb-4">
          {selectedProject.title}
        </h2>
        <button className="rounded-md py-2 px-6 hover:bg-gray-100">
          Delete
        </button>
      </div>
      <p className=" text-stone-400 mb-6">{selectedProject.date}</p>
      <p className=" text-stone-600 mb-4">{selectedProject.desc}</p>
      <hr className=" border-2 border-stone-200 mb-4" />
      <h3 className=" text-xl text-zinc-700 font-semibold mb-4">Tasks</h3>
      <div className=" flex items-center gap-4 mb-8">
        <input type="text" id="task" className=" bg-stone-200 pb-2" />
        <button>Add Task</button>
      </div>
      <div className=" w-full h-4">
        {selectedProject.tasks ? tasksContent : <p>There is no task</p>}
      </div>
    </div>
  );

  let content = "";
  if (mainContent === "add") {
    content = (
      <AddProject handleCancel={handleCancel} handleSave={handleSave} />
    );
  } else if (mainContent === "select") {
    content = selectedProjectContent;
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
