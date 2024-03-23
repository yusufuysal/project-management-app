const Sidebar = ({setIsAdding, setIsSelected}) => {

  const handleAddProject = () => {
    setIsAdding(true);
  }

  return (
    <div className=" fixed bottom-0 left-0 w-1/4 h-[95vh] bg-zinc-950 rounded-se-xl text-white">
        <div className=" pt-16 pl-8 flex flex-col gap-8">
            <h3 className=" uppercase text-slate-200">Your Projects</h3>
            <button className=" bg-stone-800 w-32 p-2 rounded-md flex items-center text-stone-400 hover:bg-stone-700" onClick={handleAddProject}>
                <svg class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                </svg>
                <p>Add Project</p>
            </button>
        </div>
    </div>
  )
}

export default Sidebar
