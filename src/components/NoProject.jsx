import { useContext } from "react";
import { ProjectsContext } from "../store/projects-context";
import img from "../assets/no-projects.png";

const NoProject = () => {
  const { handleOpenAddForm } = useContext(ProjectsContext);

  return (
    <div className="flex flex-col gap-4 justify-center items-center pb-24 w-10/12">
      <img className="h-20" src={img} alt="no projects" />
      <h3 className=" text-lg text font-semibold text-stone-600">
        No Project Selected
      </h3>
      <p className="text-stone-500">
        Select a project or get started with a new one
      </p>
      <button
        onClick={handleOpenAddForm}
        className=" bg-stone-700 text-stone-400 py-2 px-4 rounded-md mt-6 hover:bg-stone-800"
      >
        Create new project
      </button>
    </div>
  );
};

export default NoProject;
