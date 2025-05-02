import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './SideBar';  // Sidebar with Links for navigation
import Main from './Main';  // Main component that handles tasks and the title
import Plans from './Plans';  // The Plans screen component
import About from './About';  // The About screen component
import Contact from './Contact';  // The Contact screen component
function App() {
  return (
    <Router>
      <div className="App">
        {/* Sidebar with Links for navigation */}
        <SideBar />

        <div style={{ marginLeft: "0px", marginBottom:"0px", marginTop:"-30px",  }}> {/* Push the content to the right */}
          {/* Define Routes for different screens */}
          <Routes>
            <Route path="/" element={<Main />} /> {/* Main screen with tasks */}
            <Route path="/plans" element={<Plans />} /> {/* Plans screen */}
            <Route path="/about" element={<About />} /> {/* About screen */}
            <Route path="/contact" element={<Contact />} /> {/* Contact screen */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

