function Board({ tasks,  setTaskList,TaskList }) {


    
    const deleteTask = (deletetask) => {
        setTaskList(TaskList.filter((task)=>task!=deletetask))
    }
    

  return (
    <div className="max-w-md rounded-lg flex pt-2 pb-4 px-4 flex-col items-center justify-center border">
      <p className="text-xl">{tasks}</p>
      <button
        onClick={() => deleteTask(tasks)}
        className="bg-red-600 rounded-lg mt-4 text-white px-2 py-1"
      >
        Delete
      </button>
    </div>
  );
}

export default Board;





