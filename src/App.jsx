// // import { useEffect, useState } from "react";

import { useState } from "react";
import Input from "./Components/Input";
import Board from "./Components/Board";



function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="px-12">
      <div className="flex flex-col items-center justify-center py-4 gap-4">
        <h1 className="text-bold text-2xl">To-do List</h1>
        <Input taskList={taskList} setTaskList={setTaskList} />
        <div className=" w-[100%] grid grid-cols-3 px-4 sm:px  ms:px-10 lg:10-12 gap-14">
          {taskList.map((tasks, index) => (
            <Board
              key={index}
              tasks={tasks}
              TaskList={taskList}
              setTaskList={setTaskList}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;


