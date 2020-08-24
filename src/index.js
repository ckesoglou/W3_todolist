import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.css";

const todos = [
  {
    name: "Learn React Hooks",
    isComplete: false,
  },
  {
    name: "Read book",
    isComplete: true,
  },
  {
    name: "Study AIP",
    isComplete: false,
  },
];
ReactDOM.render(
  <React.StrictMode>
    <App todos={todos} />
  </React.StrictMode>,
  document.getElementById("root")
);
