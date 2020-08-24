import React from "react";

function Activity(props) {
  const todos = props.activities;

  const list = todos.map((todo, index) => {
    return (
      <li className="list-group-item" key={index}>
        {todo.isComplete ? (
          <i class="fa fa-check-circle fa-2x"></i>
        ) : (
          <i class="fa fa-circle-thin fa-2x"></i>
        )}
        {todo.name}
      </li>
    );
  });

  // const icon;
  //

  return (
    <div>
      {/* Conditional rendering */}
      {todos.length > 0 && (
        <ul className="list-group list-group-flush">{list}</ul>
      )}
      {todos.length === 0 && <p>No item has been added</p>}

      {/* {icon} */}
    </div>
  );
}

export default Activity;
