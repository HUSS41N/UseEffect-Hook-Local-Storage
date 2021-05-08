import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { FaPencilAlt } from "react-icons/fa";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="container">
      <h1>
        TODO LIST{" "}
        <span>
          <FaPencilAlt className="pencil" />
        </span>
      </h1>
      <TodoForm setTodos={setTodos} />
      <TodoList />
    </div>
  );
}
