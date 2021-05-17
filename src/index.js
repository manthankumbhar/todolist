import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";

var destination = document.querySelector("#container");

ReactDOM.render(
  <div>
    <h1 className="header">Todo-list by Manthan :)</h1>
    <TodoList />
  </div>,
  destination
);
