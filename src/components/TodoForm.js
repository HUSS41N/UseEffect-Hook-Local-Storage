import React, { useState } from "react";
import { v4 } from "uuid";
const TodoForm = ({ setTodos, todos }) => {
  const [input, setInput] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (input === "") {
      return alert("Failed to insert empty todo");
    }
    const todo = {
      todo: input,
      id: v4()
    };
    setTodos([...todos, todo]);
    setInput("");
  };
  return (
    <div>
      <form className="flex" onSubmit={submitHandler}>
        <input
          name="todo"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add TOdo"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
