import React from "react";
import Item from "./Item";

function ItemList(props) {
  const { todos, handleClick, handleRemove, search } = props;

  return (
    <ul className="list-group list-group-flush">
      {/* Conditional rendering */}
      {todos.length > 0 &&
        todos
          .filter((todo) =>
            todo.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((todo, index) => (
            <Item key={todo.id} todo={todo} handleClick={handleClick} handleRemove={handleRemove} />
          ))}
      {todos.length === 0 && <p>No item has been added</p>}
    </ul>
  );
}

export default ItemList;
