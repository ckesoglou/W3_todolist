import React, { useState } from "react";
import "./App.css";
import ItemList from "./components/ItemList";

var keyCount = 0;

function App(props) {
  const [todos, setTodos] = useState(props.todos);
  const [item, setItem] = useState("");
  const [search, setSearch] = useState("");

  function handleChange(event) {
    setItem(event.target.value);
  }

  function handleAdd(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      //key 13 is Enter key on keyboard
      setTodos([{ id: keyCount++, name: event.target.value, isComplete: false }, ...todos]);
      setItem(""); //Clear input box after adding item
    }
  }

  function handleClick(id) {
    setTodos(todos.map((todo) => {
      if (todo.id === id) todo.isComplete = !todo.isComplete;
      return todo;
    }));
  }

  function handleRemove(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleSearch(event) {
    setSearch(event.target.value);
  }
  return (
    <div className="container">
      <h1>To-do List</h1>

      <div className="input-group">
        <input
          className="form-control my-0"
          type="text"
          placeholder="Search"
          onChange={handleSearch}
        ></input>
        <div className="input-group-append">
          <span className="input-group-text">
            <i className="fa fa-search"></i>
          </span>
        </div>
      </div>

      <div>
        <input
          className="form-control"
          type="text"
          placeholder="Add an activity"
          onChange={handleChange}
          onKeyUp={handleAdd}
          value={item}
        ></input>

        <div>
          <ItemList todos={todos} handleClick={handleClick} handleRemove={handleRemove} search={search} />
        </div>
      </div>
    </div>
  );
}

export default App;
