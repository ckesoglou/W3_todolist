import React, { useState } from "react";
import classNames from "classnames";
import "./Item.css";

function Item(props) {
  const { todo, handleClick, handleRemove } = props;
  const [complete, setComplete] = useState(todo.isComplete);
  
  React.useEffect(() => { setComplete(todo.isComplete) }, [todo.isComplete]);

  return (
    <li
      className={classNames("list-group-item", {
        "list-group-item-done": complete,
      })}
    >
      {complete ? (
        <i className="fa fa-check-circle fa-2x done" onClick={() => handleClick(todo.id)}></i>
      ) : (
        <i className="fa fa-circle-thin fa-2x done" onClick={() => handleClick(todo.id)}></i>
      )}
      <span className="item-content">{todo.name}</span>
      <i
        className="fa fa-trash-o fa-lg"
        onClick={() => handleRemove(todo.id)}
      ></i>
    </li>
  );
}

export default Item;
