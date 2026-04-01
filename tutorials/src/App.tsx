import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState(""); // input= show on screen, setInput= update the input

  const handleClick = (value: string) => {
    setInput((prev) => prev + value); // prev is the previous value of the input, so (12 + 3) = 123
  };

  const clear = () => {
    // clear the input
    setInput("");
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString()); //eval does the calc and toString back to string
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="Calculator">
      <h1>Calculator</h1>
      <div className="calculator"></div>
      <input type="text" value={input} readOnly />{" "}
      {/*readOnly for buttons only */}
      <div className="buttons">
        <button onClick={clear}>C</button> {/*calls the clear function */}
        <button onClick={() => handleClick("/")}>/</button>{" "}
        {/*button operations */}
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("+")}>+</button>
        {/*button numbers */}
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={calculate}>=</button>{" "}
        {/*calls the calculate function */}
      </div>
    </div>
  );
}

export default App;
