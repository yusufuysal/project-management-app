import img from "../assets/no-projects.png";

const MainContent = ({ isAdding, isSelected }) => {
  let noProject = (
    <div className="flex flex-col gap-4 justify-center items-center pb-24">
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
        <button>Cancel</button>
        <button className="bg-zinc-950 rounded-md py-2 px-6 text-white">
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
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="desc"
            className=" uppercase text-stone-600 font-semibold"
          >
            Description
          </label>
          <input
            type="text"
            id="desc"
            className="w-full bg-stone-300 pb-4 mt-0.5 rounded-sm"
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
          />
        </div>
      </form>
    </div>
  );

  let selectedProject = <p>this is a selected project</p>;

  let content = "";
  if (isAdding) {
    content = addProjectForm;
  } else if (isSelected && !isAdding) {
    content = selectedProject;
  } else if (!isSelected && !isAdding) {
    content = noProject;
  }

  return (
    <div className="w-3/4 fixed right-0 h-full flex justify-center items-center pl-16">
      {content}
    </div>
  );
};

export default MainContent;
