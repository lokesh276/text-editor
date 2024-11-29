import { useState } from "react";
import Button from "./Button";

function About() {
  const data = [
    {
      summary: "Can I use Landwind in open-source projects?",
      description:
        "Landwind is an open-source library of interactive components built on top of Tailwind CSS, including buttons, dropdowns, modals, navbars, and more.",
    },
    {
      summary: "Is there a Figma file available?",
      description:
        "Landwind is first conceptualized and designed using Figma, so everything you see in the library has a design equivalent in our Figma file.",
    },
    {
      summary: "What are the differences between Landwind and Tailwind UI?",
      description:
        "The main difference is that the core components from Landwind are open-source under the MIT license, whereas Tailwind UI is a paid product.",
    },
    {
      summary: "What about browser support?",
      description:
        "Landwind’s components are open-source and provide support for modern browsers. Learn more about browser compatibility.",
    },
  ];

  const [buttonText, setButtonText] = useState("Enable Light Mode");
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
    border: "2px solid white",
  });

  const chnageStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setButtonText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "2px solid white",
      });
      setButtonText("Enable Light Mode");
    }
  };

  return (
    <div className="text-center mx-auto p-10 bg-white " style={myStyle}>
      <h1>About Us</h1>
      <div>
        {data.map((item, index) => (
          <details
            key={index}
            className="border-b border-gray-200 dark:border-gray-700"
          >
            <summary className="py-5 px-4 font-medium cursor-pointer">
              {item.summary}
            </summary>
            <div className="py-5">
              <p>{item.description}</p>
            </div>
          </details>
        ))}
        <div className="container">
          <Button onClick={chnageStyle} text={buttonText} />
        </div>
      </div>
    </div>
  );
}

export default About;
