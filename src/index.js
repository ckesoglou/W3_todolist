import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.css";

const todos = [
  {
    id: -1,
    name: "Learn React Hooks",
    isComplete: false,
  },
  {
    id: -2,
    name: "Read book",
    isComplete: true,
  },
  {
    id: -3,
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
