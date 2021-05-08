import React from "react";
import { FaTrash } from "react-icons/fa";
const Todo = ({ todo, removeTodo, id }) => {
  return (
    <li>
      <span>
        <FaTrash className="icon" onClick={() => removeTodo(id)} />
      </span>{" "}
      {todo}
    </li>
  );
};

export default Todo;
