import { useState, useContext, useEffect } from "react";
import { ProjectsContext } from "../store/projects-context";

import Tasks from "./Tasks";

const SelectedProject = ({ tasks, onAddTask, onDeleteTask }) => {
  const [task, setTask] = useState("");

  const { projects, selectedProject } = useContext(ProjectsContext);

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleAddTask() {
    if (task.trim() !== "") {
      onAddTask(task);
      setTask("");
    }
  }

  console.log("SELECTED PROJECT IS RENDERDDD");

  return (
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
        <input
          type="text"
          id="task"
          value={task}
          onChange={handleChange}
          className=" bg-stone-200 pb-2"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className=" w-full h-4">
        {tasks?.filter((task) => task.projectId === selectedProject.id).length >
        0 ? (
          <Tasks
            tasks={tasks.filter(
              (task) => task.projectId === selectedProject.id
            )}
            handleDelete={onDeleteTask}
          />
        ) : (
          <p>There are no tasks</p>
        )}
      </div>
    </div>
  );
};

export default SelectedProject;
