import React, { useState } from "react";
import "./Task.css"; // Ensure the path is correct

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("Plan1"); // State to track the selected plan

  // Handle input field change
  const getInput = (event) => {
    setInputValue(event.target.value);
  };

  // Add a new task
  const addTask = () => {
    if (inputValue.trim() !== "") {
      const newTask = { description: inputValue, completed: false };
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
        <li>
          <div className="Space-between-tasks">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
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
      <div className="Plan-Navigation">
        <button style={{backgroundColor:"white", border:"0px", width:"fit-content", height:"fit-content",}}><div style={{marginRight:"20px"}}className="Plan-Navigation-Content">Plan1</div></button>
        <button style={{backgroundColor:"white", border:"0px", width:"fit-content", height:"fit-content",}}><div style={{marginRight:"20px"}}className="Plan-Navigation-Content">Plan2</div></button>
        <button style={{backgroundColor:"white", border:"0px", width:"fit-content", height:"fit-content",}}><div style={{marginRight:"20px"}}className="Plan-Navigation-Content">Plan3</div></button>
        <button style={{backgroundColor:"white", border:"0px", width:"fit-content", height:"fit-content",}}><div style={{marginRight:"20px"}}className="Plan-Navigation-Content">Plan4</div></button>
      </div>

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
