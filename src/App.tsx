import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<TextGizmo />}></Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>hello world</p>
    </div>
  );
}

function TextGizmo() {
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
