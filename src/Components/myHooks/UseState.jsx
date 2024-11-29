import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    {
      count && setCount(count - 1);
    }
  };
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={increaseCount}
        className="text-white bg-[black] px-2 py-1"
      >
        increase
      </button>
      <button
        onClick={decreaseCount}
        className="text-white bg-[black] px-2 py-1"
      >
        decrease
      </button>
    </div>
  );
}

export default UseState;
//use state is a function that an array i.e current state and updated state
// In sates data can change with time i.e there were render difference between them.So every time you render state will change.Usestate is hook in react used to manipulate the state.
//example-when your are fetching a data from the api we are showing loading spinner to the use, so we are showing something is happening to the application,so that we have might we have piece of code we call loading that will be true when the data is fetching.
