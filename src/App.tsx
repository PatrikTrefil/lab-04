import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [inputContent, setInputContent] = useState("");
  return (
    <div className="App">
      <form action="">
        <label htmlFor="inputText" id="labelText">
          {inputContent}
        </label>
        <br />
        <input
          type="text"
          name="inputText"
          id="inputText"
          value={inputContent}
          onChange={(e) => setInputContent(e.target.value)}
        />
        <button
          id="clearBtn"
          onClick={(e) => {
            e.preventDefault();
            setInputContent("");
          }}
        >
          Clear
        </button>
      </form>
    </div>
  );
}

export default App;
