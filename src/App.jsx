import { useState } from "react";
import "./App.css";
import usePasswordGenerator from "./hooks/usePasswordGenerator";
import StrengthChecker from "./components/strengthChecker";
import Password from "./components/Password";
import CheckBox from "./components/CheckBox";

function App() {
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleCheckboxChange = (index) => {
    const newCheckboxData = [...checkboxData];
    newCheckboxData[index].state = !newCheckboxData[index].state;
    setCheckboxData(newCheckboxData);
  };

  const { password, error, generatePassword } = usePasswordGenerator();

  return (
    <div className="container">
      <Password password={password} copied={copied} handleCopy={handleCopy} />
      {error && <div className="error">{error}</div>}
      <div className="length">
        <span>
          <label>Character Length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
      </div>
      <div className="checkboxes">
        {checkboxData.map((checkbox, index) => (
          <CheckBox
            checkbox={checkbox}
            index={index}
            handleCheckboxChange={handleCheckboxChange}
          />
        ))}
      </div>
      <StrengthChecker password={password} />
      <button
        className="generate"
        onClick={() => generatePassword(length, checkboxData)}
      >
        Generate Password
      </button>
    </div>
  );
}

export default App;
