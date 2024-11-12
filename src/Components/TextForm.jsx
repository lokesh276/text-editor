import PropTypes from "prop-types";
import { useState } from "react";
import Button from "./Button";
function TexthtmlForm({ heading,mode }) {
  const [text, setText] = useState("");
  

  const handleUpClick = () => {
    //   console.log("uppercase was clicked" + text);
    let newText = text.toLocaleUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log(event.target.value);
  };

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    // console.log("you clicked on lower case button")
    setText(newText);
  };
  const handleClaerText = () => {
    setText("");
  };
  const handlefirstCapital = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
  };

  const firstLetterLowerCase = () => {
    let newtext = text.charAt(0).toLowerCase() + text.slice(1);
    setText(newtext);
  };

  const handleReversetext = () => {
    let newtext = text.split(" ").reverse().join(" ");
    setText(newtext);
  };
  const copytext = () => {
    navigator.clipboard.writeText(text);
  };

    const removeExtraSpace = () => {
        let newtext = text.replace(/^\s+|\s+$/gm, "");
        setText(newtext)
  };

  return (
    <div className="container mx-auto">
      <h1 className={`mt-3 text-xl text-${mode=="black" ? "white" : "black"} mb-3 font-medium w-[80%]`}>
        {heading}{" "}
      </h1>
      <textarea
        value={text}
        onChange={handleOnChange}
        id="message"
        rows="4"
        className="block p-2.5 w-full text-sm  bg-gray-50 text-black rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>
      <div className="container flex gap-3 flex-col md:flex-row p-3">
        <Button text="UpperCase" onClick={handleUpClick} />
        <Button text="ConvertToLowerCase" onClick={handleLowerCase} />
        <Button text="ClearText" onClick={handleClaerText} />
        <Button text="FirstLetterCapital" onClick={handlefirstCapital} />
        <Button text="FirstLetterLower" onClick={firstLetterLowerCase} />
        <Button text="ReverseText" onClick={handleReversetext} />
        <Button text="Copy Text " onClick={copytext} />
        <Button text="RemoveExtraSpace" onClick={removeExtraSpace} />
      </div>
      <div className={`container my-2 text-${mode=="black" ?"white" : "black"} `}>
        <h1 className="text-2xl font-medium">Your text summary</h1>
        <p className="text-lg font-medium ">
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p className="text-lg font-medium ">
          {0.008 * text.split(" ").length} mintues you will take to read this
        </p>
        <p className="text-lg font-medium ">
          <span>{text.split(" ").length - 1} :SpaceCount</span>
        </p>
        <h2 className="text-xl font-bold ">Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default TexthtmlForm;

TexthtmlForm.propTypes = {
  heading: PropTypes.string.isRequired,
  mode:PropTypes.string
};
