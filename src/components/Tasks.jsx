const Tasks = ({ selectedProject }) => {
  return (
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
};

export default Tasks;
