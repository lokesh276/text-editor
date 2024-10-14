// import { useState } from "react";

import { useState } from "react"

function TodoBoard({ taskList, setTaskList }) {
  const [input, setInput] = useState("");

  const handleAddTodoItem = (e) => {
    e.preventDefault();
      setTaskList([...taskList, input]);
      setInput("");
  };

  return (
    <div>
      <form className="flex flex-row items-center gap-3  ">
        <input
          className="border rounded-xl mt-4 px-2 py-1 text-lg"
          type="text"
          placeholder="Enter a to-do item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleAddTodoItem}
          type="submit"
          className=" bg-blue-200 mt-3 px-2 py-1 text-white rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoBoard;






