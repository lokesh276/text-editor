import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]); 

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const handleLap = () => {
    setLaps((prevLaps) => [...prevLaps, time]); 
  };

  return (
    <div className="flex justify-center items-center flex-col mt-[20px]">
      <h1 className="text-3xl font-medium">01 - Stopwatch</h1>
      <div className="mt-4 font-normal text-lg">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="space-x-5 mt-4 ">
        {running ? (
          <button
            className="text-white bg-blue-400 px-2 py-1 rounded-md"
            onClick={() => {
              setRunning(false);
            }}
          >
            Stop
          </button>
        ) : (
          <button
            className="text-white bg-blue-400 px-2 py-1 rounded-md"
            onClick={() => {
              setRunning(true);
            }}
          >
            Start
          </button>
        )}

        <button
          className="text-white bg-blue-400 px-2 py-1 rounded-md"
          onClick={() => {
            setTime(0);
            setLaps([]); 
          }}
        >
          Reset
        </button>

        <button
          className="text-white bg-blue-400 px-2 py-1 rounded-md"
          onClick={handleLap} 
        >
          Lap
        </button>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-medium">Laps</h2>
        <ul>
          {laps.map((lap, index) => (
            <div key={index} className="text-lg">
             Laps are showing here{index + 1}:{" "}
              {("0" + Math.floor((lap / 60000) % 60)).slice(-2)}:
              {("0" + Math.floor((lap / 1000) % 60)).slice(-2)}:
              {("0" + ((lap / 10) % 100)).slice(-2)}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
