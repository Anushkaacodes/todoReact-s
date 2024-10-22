// Task Requirements
// Project Objective:
// The goal of this project is to build a simple Todo List app that allows users to add, edit, delete, and filter tasks (by All, Completed, or Incomplete). It will help the junior developer practice essential React concepts such as state management, component reusability, and basic form handling.

// Requirements:
// 	1.	Add New Task:
// 	•	Create an input field where users can type the task name and a button to add it to the task list.
// 	•	Display an error message if the input is empty.
// 	2.	Task List:
// 	•	Display a list of tasks that were added.
// 	•	Each task should have a checkbox to mark it as completed.
// 	•	Include a button to delete each task.
// 	3.	Edit Task:
// 	•	Allow users to edit the task name by clicking an edit button next to each task.
// 	4.	Filter Tasks:
// 	•	Add buttons or a dropdown to filter tasks by “All”, “Completed”, and “Incomplete”.

import React, { useState, useEffect } from 'react';
import TodoForm from "./Components/TodoForm"
import TodoList from './Components/Todolist';
import FilterButtons from './Components/filterButton';
import './styles.css'; 

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskName) => {
    if (taskName.trim() === "") return;
    const newTask = { id: Date.now(), name: taskName, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleCompletion = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const editTask = (taskId, newName) => {
    if (newName.trim() === "") return;
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, name: newName } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "Completed") return task.completed;
    if (filter === "Incomplete") return !task.completed;
    return true;
  });

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTask={addTask} />
      <FilterButtons setFilter={setFilter} currentFilter={filter} />
      <TodoList 
        tasks={filteredTasks} 
        deleteTask={deleteTask} 
        toggleCompletion={toggleCompletion} 
        editTask= {editTask}
      />
    </div>
  );
}

export default App;
