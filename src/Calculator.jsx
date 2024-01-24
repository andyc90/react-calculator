import { useState } from "react";
import { evaluate } from "mathjs";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const buttons = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "C", "0", "/", "="];

  const handleClick = (value) => {
    if (value === "C") {
      clear();
    } else if (value === "=") {
      calculate();
    } else {
      setInput(input + value);
    }
  };

  const calculate = () => {
    try {
      setInput(evaluate(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const clear = () => {
    setInput("");
  };

  return (
    <div className="calculator">
      <form>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} readOnly />
      </form>
      <div className="button-grid">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => handleClick(btn)}
            className={`button ${
              btn === "C" ? "clear-button" : ["=", "+", "-", "*", "/"].includes(btn) ? "function-button" : "number-button"
            }`}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
