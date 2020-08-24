import React, { useState } from "react";
import classNames from "classnames";
import "./Item.css";

function Item(props) {
  const { todo, handleRemove } = props;
  const [complete, setComplete] = useState(todo.isComplete);
  function handleClick() {
    setComplete((prevState) => !prevState);
  }

  return (
    <li
      className={classNames("list-group-item", {
        "list-group-item-done": complete,
      })}
    >
      {complete ? (
        <i class="fa fa-check-circle fa-2x done" onClick={handleClick}></i>
      ) : (
        <i class="fa fa-circle-thin fa-2x done" onClick={handleClick}></i>
      )}
      <span className="item-content">{todo.name}</span>
      <i
        class="fa fa-trash-o fa-lg"
        onClick={() => handleRemove(todo.name)}
      ></i>
    </li>
  );
}

export default Item;
