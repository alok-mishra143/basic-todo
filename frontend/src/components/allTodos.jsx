import { useState, useEffect } from "react";
import "./allTodos.css";

const AllTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3000/todo");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTodos(data.todos);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const handleMarkAsDone = async (id) => {
    console.log(id);
    try {
      const response = await fetch("http://localhost:3000/todo-done", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo._id === id ? { ...todo, completed: true } : todo
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="all-todos-container">
      <h1>All Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo._id}
            className={`todo-item ${todo.completed ? "done" : ""}`}
          >
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <button onClick={() => handleMarkAsDone(todo._id)}>
              {todo.completed ? "Completed" : "Mark as Done"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTodos;
