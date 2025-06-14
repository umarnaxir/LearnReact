import React, { useState } from 'react';

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>📝 Todo List</h2>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
        style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
      />
      <button onClick={addTask} style={{ padding: "8px 16px", marginBottom: "20px" }}>
        Add Task
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ padding: "5px 0" }}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
