import React, { useState } from 'react';

const TodoForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === "") {
      setError("Task name cannot be empty");
      return;
    }
    addTask(taskName);
    setTaskName("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
    <input 
      type="text" 
      value={taskName} 
      onChange={(e) => setTaskName(e.target.value)} 
      placeholder="Enter task" 
    />
    <button type="submit">Add Task</button>
    {error && <p className="error-message">{error}</p>}
  </form>
  
  );
};

export default TodoForm;


