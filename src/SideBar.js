import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css"; // Importing CSS for styling
const SideBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true); // Show sidebar when mouse enters
  };

  const handleMouseLeave = () => {
    setIsVisible(false); // Hide sidebar when mouse leaves
  };

  return (
    <>
      {/* Trigger area for hover */}
      <div
        className="sidebar-trigger"
        onMouseEnter={handleMouseEnter} // Show sidebar when hovering over the trigger
      ></div>

      {/* Sidebar */}
      <div
        className={`sidebar ${isVisible ? "visible" : ""}`}
        onMouseLeave={handleMouseLeave} // Hide sidebar when mouse leaves
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/plans">Plans</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
