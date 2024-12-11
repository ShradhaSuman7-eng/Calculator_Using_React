import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const handleButtonClick = (value) => {
    if (value === "Clear") {
      setInput("");
    } else if (value === "Del") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "x²") {
      setInput((parseFloat(input) ** 2).toString());
    } else if (value === "√") {
      setInput(Math.sqrt(parseFloat(input)).toString());
    } else if (value === "xʸ") {
      setInput(input + "**");
    } else if (value === "+/-") {
      setInput((parseFloat(input) * -1).toString());
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "Clear",
    "Del",
    "+/-",
    "x²",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "÷",
    "7",
    "8",
    "9",
    "-",
    "0",
    "xʸ",
    "√",
    "*",
    ".",
    "=",
  ];

  return (
    <>
      <div className="calculator">
        <div className="display">{input}</div>
        <div className="buttons">
          {buttons.map((button, index) => (
            <button key={index} onClick={() => handleButtonClick(button)}>
              {button}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
