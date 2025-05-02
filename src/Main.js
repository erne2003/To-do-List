// Main.js
import React from "react";
import Task from "./Task"; // Import Task component
import "./Main.css"; // Ensure the path to your CSS file is correct

const Main = () => {
  return (
    <div className="Main">
      {/* Render the Task component */}
      <Task />
    </div>
  );
};

export default Main;
