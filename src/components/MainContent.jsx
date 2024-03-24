import { useState } from "react";
import img from "../assets/no-projects.png";

const MainContent = ({
  mainContent,
  setMainContent,
  saveValues,
  selectedProject,
}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [task, setTask] = useState("");

  let tasks = selectedProject.tasks;

  console.log(tasks);

  function clearInputs() {
    setTitle("");
    setDesc("");
    setDate("");
  }
  function handleSave() {
    saveValues(title, desc, date);
    setMainContent("");
    clearInputs();
  }

  function handleCancel() {
    setMainContent("");
    clearInputs();
  }

  function handleAddTask(task) {
    tasks.unshift(task);
    setTask("");
  }

  let noProject = (
    <div className="flex flex-col gap-4 justify-center items-center pb-24 w-10/12">
      <img className="h-20" src={img} alt="no projects" />
      <h3 className=" text-lg text font-semibold text-stone-600">
        No Project Selected
      </h3>
      <p className="text-stone-500">
        Select a project or get started with a new one
      </p>
      <button className=" bg-stone-700 text-stone-400 py-2 px-4 rounded-md mt-6 hover:bg-stone-800">
        Create new project
      </button>
    </div>
  );

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
      <form className=" mt-8">
        <div className="mb-4">
          <label
            htmlFor="name"
            className=" uppercase text-stone-600 font-semibold"
          >
            Title
          </label>
          <input
            type="text"
            id="name"
            className="w-full bg-stone-300 pb-1 mt-0.5 rounded-sm"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="desc"
            className=" uppercase text-stone-600 font-semibold"
          >
            Description
          </label>
          <textarea
            type="text"
            id="desc"
            className="w-full bg-stone-300 pb-4 mt-0.5 rounded-sm"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="date"
            className=" uppercase text-stone-600 font-semibold"
          >
            Due Date
          </label>
          <input
            type="date"
            id="date"
            className="w-full bg-stone-300 pb-1 mt-0.5 rounded-sm"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </form>
    </div>
  );

  let tasksContent = (
    <div>
      {tasks?.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );

  let selectedProjectContent = (
    <div className=" w-10/12">
      <div className=" flex justify-between items-center">
        <h2 className=" text-3xl text-stone-700 font-medium mb-4">
          {selectedProject.title}
        </h2>
        <button>Delete</button>
      </div>
      <p className=" text-stone-400 mb-6">{selectedProject.date}</p>
      <p className=" text-stone-600 mb-4">{selectedProject.desc}</p>
      <hr className=" border-2 border-stone-200 mb-4" />
      <h3 className=" text-xl text-zinc-700 font-semibold mb-4">Tasks</h3>
      <div className=" flex items-center gap-4 mb-8">
        <input
          type="text"
          id="task"
          className=" bg-stone-200 pb-2"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={() => handleAddTask(task)}>Add Task</button>
      </div>
      <div className=" w-full bg-stone-100 h-4">
        {tasks ? tasksContent : <p>There is no task</p>}
      </div>
    </div>
  );

  let content = "";
  if (mainContent === "add") {
    content = addProjectForm;
  } else if (mainContent === "select") {
    content = selectedProjectContent;
  } else {
    content = noProject;
  }

  return (
    <div className="w-3/4 fixed right-0 h-full flex justify-start items-center pl-16">
      {content}
    </div>
  );
};

export default MainContent;
