const SelectedProject = ({ selectedProject, tasksContent }) => {
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
        <input type="text" id="task" className=" bg-stone-200 pb-2" />
        <button>Add Task</button>
      </div>
      <div className=" w-full h-4">
        {selectedProject.tasks ? tasksContent : <p>There is no task</p>}
      </div>
    </div>
  );
};

export default SelectedProject;
