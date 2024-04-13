import { useRef, useContext } from "react";
import { ProjectsContext } from "../store/projects-context";
import Input from "./Input";

const AddProject = () => {
  const { handleSave, handleCloseAddForm } = useContext(ProjectsContext);

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  return (
    <div className="border-2 border-purple-300 w-10/12 max-w-2xl">
      <div className=" flex justify-end items-center gap-4">
        <button
          className="rounded-md py-2 px-6 hover:bg-gray-100"
          onClick={handleCloseAddForm}
        >
          Cancel
        </button>
        <button
          className="bg-zinc-950 rounded-md py-2 px-6 text-white hover:bg-zinc-800"
          onClick={() => handleSave(title, description, dueDate)}
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
};

export default AddProject;
