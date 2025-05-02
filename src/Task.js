// Task.js
import React, { useState } from "react";
import "./Task.css"; // Ensure the path is correct

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  class TaskNode {
    constructor(description) {
      this.description = description;
      this.completed = false; // Initially set as not completed
    }
  }

  // Handle input field change
  const getInput = (event) => {
    setInputValue(event.target.value);
  };

  // Add a new task
  const addTask = () => {
    if (inputValue.trim() !== "") {
      const newTask = new TaskNode(inputValue);
      setTasks([...tasks, newTask]);
      setInputValue(""); // Clear the input field
    }
  };

  // Toggle task completion
  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Render task list
  const getTasks = () => {
    return tasks.map((task, index) => (
      <div className="List-Container" key={index}>
        <li key={index}>
          <div className="Space-between-tasks">
            <input
              type="checkbox"
              checked={task.completed} // Bind checkbox state to task completion
              onChange={() => toggleTaskCompletion(index)} // Toggle task completion on checkbox click
            />
            <span id="Task-text">{task.description}</span>
          </div>
        </li>
      </div>
    ));
  };

  return (
    <div className="Task">
      <h1 className="title">To-Do List</h1>
      <div className="Navigation">
        <input
          type="text"
          value={inputValue}
          onChange={getInput}
          placeholder="Enter a task"
        />
        <button id="Task-Function" onClick={addTask}>
          Add Task
        </button>
      </div>

      <div className="container">
        <div className="Task">
          <ul>{getTasks()}</ul>
        </div>
      </div>
    </div>
  );
};

export default Task;
