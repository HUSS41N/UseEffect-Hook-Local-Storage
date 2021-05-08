import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { FaPencilAlt } from "react-icons/fa";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  // this usee effect will fire before even components mount
  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const removeTodo = (id) => {
    console.log("clicked", id);
    return setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="container">
      <h1>
        TODO LIST{" "}
        <span>
          <FaPencilAlt className="pencil" />
        </span>
      </h1>
      <TodoForm setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}
