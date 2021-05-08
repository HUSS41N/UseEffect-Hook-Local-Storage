import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, removeTodo }) => {
  return (
    <ul>
      {todos.map((item) => (
        <Todo
          todo={item.todo}
          key={item.id}
          id={item.id}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
