import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import TexthtmlForm from "./Components/TextForm";
import About from "./Components/About";
import { useState } from "react";
import Alert from "./Alert";
import FetchApi from "./Components/FetchApi";
import UseState from "./Components/myHooks/UseState";
import Useeffect from "./Components/myHooks/Useeffect";
import UseCallBack from "./Components/myHooks/UseCallBack";
import ReactForm from "./Components/myHooks/ReactForm";

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
      setTimeout(() => {
        document.title = "TextUtils-Dark";
      }, 2000);
    } else {
      setMode("white");
      document.body.style.backgroundColor = "white";
      handleAlert("Light mode is enable");
      setTimeout(() => {
        document.title = "TextUtils-Light";
      }, 2000);
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
      <FetchApi />
      <UseState />
      <Useeffect />
      <UseCallBack />
      <ReactForm/>
    </div>
  );
}

export default App;