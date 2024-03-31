const Tasks = ({ tasks, handleDelete }) => {
  return (
    <div className=" bg-stone-100 px-4 py-8 rounded-md">
      {tasks?.map((task) => (
        <div key={task.id} className=" flex justify-between items-center mb-4">
          <p>{task.content}</p>
          <button
            onClick={() => handleDelete(task)}
            className=" text-stone-500 hover:text-stone-600 hover:font-medium"
          >
            Clear
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
