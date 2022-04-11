import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

type CounterProp = {
  counter: number;
  setCounter: Function;
};

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/increaser">Increaser</Link>
        <Link to="/decreaser">Decreaser</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<TextGizmo />}></Route>
        <Route path="/about" element={<About />} />
        <Route
          path="/increaser"
          element={<Increaser counter={counter} setCounter={setCounter} />}
        />
        <Route
          path="/decreaser"
          element={<Decreaser counter={counter} setCounter={setCounter} />}
        />
      </Routes>
    </Router>
  );
}

function Increaser(props: CounterProp) {
  return (
    <div className="App">
      <h1>Increaser</h1>
      <p>Current count: {props.counter}</p>
      <Button
        variant="contained"
        onClick={() => props.setCounter(props.counter + 1)}
      >
        Increase counter
      </Button>
    </div>
  );
}
function Decreaser(props: CounterProp) {
  return (
    <div className="App">
      <h1>Decreaser</h1>
      <p>Current count: {props.counter}</p>
      <Button
        variant="contained"
        onClick={() => props.setCounter(props.counter - 1)}
      >
        Decrease counter
      </Button>
    </div>
  );
}

function About() {
  return (
    <div className="App">
      <h1>About</h1>
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
        <div className="vertical-centering">
          <TextField
            variant="outlined"
            type="text"
            name="inputText"
            id="inputText"
            value={inputContent}
            onChange={(e) => setInputContent(e.target.value)}
          />
          <Button
            variant="contained"
            id="clearBtn"
            onClick={(e) => {
              e.preventDefault();
              setInputContent("");
            }}
          >
            Clear
          </Button>
        </div>
      </form>
    </div>
  );
}
