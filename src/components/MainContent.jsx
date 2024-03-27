import { useRef } from "react";
import Input from "./Input";
import NoProject from "./NoProject";

const MainContent = ({
  mainContent,
  setMainContent,
  saveValues,
  selectedProject,
}) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
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

  let addProjectForm = (
    <div className="border-2 border-purple-300 w-10/12 max-w-2xl">
      <div className=" flex justify-end items-center gap-4">
        <button
          className="rounded-md py-2 px-6 hover:bg-gray-100"
          onClick={() => handleCancel()}
        >
          Cancel
        </button>
        <button
          className="bg-zinc-950 rounded-md py-2 px-6 text-white hover:bg-zinc-800"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      <div className=" mt-8">
        <Input type="text" ref={title} name="Title" />
        <Input ref={description} name="Description" textarea />
        <Input type="date" ref={dueDate} name="Due Date" />
      </div>
    </div>
  );

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
    content = addProjectForm;
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
