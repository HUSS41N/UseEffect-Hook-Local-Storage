import React from "react";
import { FaTrash } from "react-icons/fa";
const Todo = () => {
  return (
    <li>
      <span>
        <FaTrash className="icon" />
      </span>{" "}
      Kill Faith Seed
    </li>
  );
};

export default Todo;
