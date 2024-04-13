import { useContext } from "react";
import { ProjectsContext } from "../store/projects-context";

const Sidebar = () => {
  const { projects, selectProject, selectedProjectId, handleOpenAddForm } =
    useContext(ProjectsContext);

  function handleSelectProject(projectId) {
    selectProject(projectId);
  }

  let projectsList = (
    <ul className="mt-8 px-8 flex flex-col gap-4">
      {projects?.map((p, index) => (
        <li
          key={index}
          className=" text-stone-400 bg-zinc-950 hover:bg-stone-900 cursor-pointer py-1 px-2"
        >
          <button
            className=" w-full text-left"
            onClick={() => handleSelectProject(p.projectId)}
          >
            {p.title}
          </button>
        </li>
      ))}
    </ul>
  );

  let sidebarContent = projects ? projectsList : "";

  return (
    <div className=" fixed bottom-0 left-0 w-1/4 h-[95vh] bg-zinc-950 rounded-se-xl text-white">
      <div className=" pt-16 pl-8 flex flex-col gap-8">
        <h3 className=" uppercase text-slate-200">Your Projects</h3>
        <button
          className=" bg-stone-800 w-32 p-2 rounded-md flex items-center text-stone-400 hover:bg-stone-700"
          onClick={handleOpenAddForm}
        >
          <svg
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
          <p>Add Project</p>
        </button>
      </div>
      {sidebarContent}
    </div>
  );
};

export default Sidebar;
