// App.js
import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './SideBar';   // Sidebar with Links for navigation
import Main from './Main';         // Main component that handles tasks and the title
import Plans from './Plans';       // The Plans screen component
import About from './About';       // The About screen component
import Contact from './Contact';   // The Contact screen component

function App() {
  // ─── Lift planList state into App ─────────────────────────────────────
  const [planList, setPlanList] = useState(() => {
    const saved = localStorage.getItem("plans");
    return saved ? JSON.parse(saved) : [];
  });

  // Persist whenever planList changes
  useEffect(() => {
    localStorage.setItem("plans", JSON.stringify(planList));
  }, [planList]);
  // ─────────────────────────────────────────────────────────────────────

  return (
    <Router>
      <div className="App">
        {/* Sidebar with Links for navigation */}
        <SideBar />

        <div style={{ marginLeft: "0px", marginBottom: "0px", marginTop: "-30px" }}>
          {/* Define Routes for different screens */}
          <Routes>
            {/* Pass planList into Main (Task screen) */}
            <Route path="/" element={<Main planList={planList} />} />

            {/* Give Plans both the array and its setter */}
            <Route
              path="/plans"
              element={
                <Plans
                  planList={planList}
                  setPlanList={setPlanList}
                />
              }
            />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
