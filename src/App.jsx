import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import TexthtmlForm from "./Components/TextForm";
import About from "./Components/About";
import { useState } from "react";
import Alert from "./Alert";
import FecthApi from "./Components/FecthApi";

function App() {
  const [mode, setMode] = useState("white");
  const [alert, setAlert] = useState(null);

  const handleAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
  };

  const changeColor = () => {
    if (mode == "white") {
      setMode("black");
      document.body.style.backgroundColor = "black";
      handleAlert("Dark mode is enable ");
    } else {
      setMode("white");
      document.body.style.backgroundColor = "white";
      handleAlert("Light mode is enable");
    }
  };

  return (
    <div>
      <Navbar
        title="TextUtils"
        Aboutus="AboutUs"
        mode={mode}
        changeColor={changeColor}
      />
      <Alert text={alert} />
      <Routes>
        <Route
          path="/"
          element={
            <TexthtmlForm heading="Enter the text to analyze" mode={mode} />
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <FecthApi/>
    </div>
  );
}

export default App;
