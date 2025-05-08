import React, { useState, useEffect } from "react";
import "./Task.css";
import { Plan } from "./Plans"; // Import the Plan class

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(""); // State to track the selected plan
  const [plans, setPlans] = useState(() => {
    const saved = localStorage.getItem("plans");
    if (saved) {
      const parsedPlans = JSON.parse(saved);
      return parsedPlans.map(plan => new Plan(plan.name, plan.taskList || []));
    }
    return [];
  });

  // Persist plans to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("plans", JSON.stringify(plans));
  }, [plans]);

  // Update tasks whenever the selected plan changes
  useEffect(() => {
    if (!selectedPlan) {
      setTasks([]);
      return;
    }
    const sp = plans.find(p => p.name === selectedPlan);
    setTasks(sp?.taskList || []);
  }, [selectedPlan, plans]);

  // Handle input field change
  const getInput = event => {
    setInputValue(event.target.value);
  };

  // Add a new task into the selected plan
  const addTask = () => {
    if (!inputValue.trim() || !selectedPlan) return;

    const newTask = { description: inputValue.trim(), completed: false };

    // Update the plans array
    const updatedPlans = plans.map(p => {
      if (p.name !== selectedPlan) return p;
      return {
        ...p,
        taskList: [...(p.taskList || []), newTask]
      };
    });
    setPlans(updatedPlans);

    // Update tasks for the selected plan
    const sp = updatedPlans.find(p => p.name === selectedPlan);
    setTasks(sp?.taskList || []);

    setInputValue("");
  };

  // Toggle a task’s completed flag inside the selected plan
  const toggleTaskCompletion = index => {
    const updatedPlans = plans.map(p => {
      if (p.name !== selectedPlan) return p;
      return {
        ...p,
        taskList: p.taskList.map((t, i) =>
          i === index ? { ...t, completed: !t.completed } : t
        )
      };
    });
    setPlans(updatedPlans);

    const sp = updatedPlans.find(p => p.name === selectedPlan);
    setTasks(sp?.taskList || []);
  };

  // Render task list
  const getTasks = () =>
    tasks.map((task, index) => (
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

  return (
    <div className="Task">
      <h1 className="title">To-Do List</h1>

      {/* Plan selector */}
      <div className="Plan-Navigation">
        <ul style={{ display: "flex", listStyle: "none", padding: 0 }}>
          {plans.map((plan, index) => (
            <li key={index} style={{ marginRight: 8 }}>
              <button
                className="Navigation-Plans"
                onClick={() => setSelectedPlan(plan.name)}
                style={{
                  backgroundColor:
                    plan.name === selectedPlan ? "#eee" : "white"
                }}
              >
                {plan.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* New task input */}
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

      {/* Task list for the current plan */}
      <div className="container">
        <div className="TaskList">
          <ul>{getTasks()}</ul>
        </div>
      </div>
    </div>
  );
};

export default Task;
