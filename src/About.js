import React from 'react';
import { BsJustify } from 'react-icons/bs';
import { Link } from 'react-router-dom';

// About.jsx: Ensures full-height layout with header, content, and footer visible
const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col" style={{ position: 'relative', top: '80px', minHeight: 'fit-content'}}>
      {/* Navbar */}

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{ position: 'relative', height:'700px', top:'0px', marginTop: '-40px',}}>
        <h1 className="text-3xl font-bold text-gray-800 mb-4" style={{ marginBottom:'40px', position:'relative', bottom:'50px'}}>
          About This App
        </h1>
        <p className="text-gray-700 " style={{ textAlign: 'center',margin: "auto 10rem", marginBottom: '5px', marginTop: '5px', position:'relative', bottom:'30px'}}>
          Welcome to my <strong>To-Do List</strong>, a simple and intuitive web
          application designed to help you manage your tasks and boost
          productivity. Whether you’re organizing work projects, household chores,
          or personal goals, this app offers a clean interface and effortless
          task tracking.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Key Features</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2" style={{ listStyleType: 'disc',}}>
          <li>Add, edit, and delete tasks with a single click</li>
          <li>
            Organize tasks into customizable categories (Work, Home, Groceries,
            etc.)
          </li>
          <li>Mark tasks as completed and view your progress at a glance</li>
          <li>Responsive design for desktop and mobile</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Tech Stack</h2>
        <p className="text-gray-700 mb-6">
          Built with <span className="font-medium">React</span>,{' '}
          <span className="font-medium">Tailwind CSS</span>, and{' '}
          <span className="font-medium">JavaScript</span>. This app uses the
          Tailwind CDN for rapid styling and minimal setup.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3" style={{ marginBottom: '40px', position:'relative', bottom:'-40px'}}>  
          About the Developer
        </h2>
        <p className="text-gray-700"  style={{ marginBottom: '40px', position:'relative', bottom:'-60px', marginLeft: '3px', marginRight: '1px', justifyContent: 'center'}}>
          Hi, I’m <strong>Ernesto Cardoso</strong>, a Computer Science student at
          Florida International University. I built this app to hone my web
          development skills, explore Tailwind CSS, and create something
          practical for everyday use.
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t" style={{marginBottom: "-20px", position: "relative", top: "60px"}}>
        <div className="container mx-auto px-4 py-4 text-center text-gray-600">
          &copy; 2025 My To-Do List. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default About;
