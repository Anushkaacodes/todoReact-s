import React, { useState } from 'react';

const TodoList = ({ tasks, deleteTask, toggleCompletion, editTask }) => {
  const [editMode, setEditMode] = useState(null);
  const [newName, setNewName] = useState("");

  const handleEdit = (task) => {
    setEditMode(task.id);
    setNewName(task.name);
  };

  const handleSave = (taskId) => {
    editTask(taskId, newName);
    setEditMode(null);
    setNewName("");
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleCompletion(task.id)}
          />
          {editMode === task.id ? (
            
            <>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <button onClick={() => handleSave(task.id)}>Save</button>
              <button onClick={() => setEditMode(null)}>Cancel</button>
            </>
          ) : (
          \
            <>
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.name}
              </span>
              <button onClick={() => handleEdit(task)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;