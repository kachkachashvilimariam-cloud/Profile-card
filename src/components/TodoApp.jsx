import { useState } from "preact/hooks";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: crypto.randomUUID(), text };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>Todo აპლიკაცია</h2>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}
