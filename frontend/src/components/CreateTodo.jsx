import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function addTodo() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const jsonData = await response.json();
      console.log(jsonData);
      setLoading(false);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
      setLoading(false);
    }
  }

  return (
    <div className="create-todo-container">
      <h2>Create Todo</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Enter the title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        name="description"
        id="description"
        placeholder="Enter the description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button id="add-todo" onClick={addTodo} disabled={loading}>
        {loading ? "Adding..." : "Add a Todo"}
      </button>
    </div>
  );
}
