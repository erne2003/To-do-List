import React from 'react';
import { Link } from 'react-router-dom';

// About.jsx: Ensures full-height layout with header, content, and footer visible
const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
         <h1>To-Do-List</h1>
          <div className="flex space-x-6">
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          About This App
        </h1>
        <p className="text-gray-700 mb-6" style={{ textAlign: 'center',margin: "auto 10rem",}}>
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

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          About the Developer
        </h2>
        <p className="text-gray-700">
          Hi, I’m <strong>Ernesto Cardoso</strong>, a Computer Science student at
          Florida International University. I built this app to hone my web
          development skills, explore Tailwind CSS, and create something
          practical for everyday use.
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-4 text-center text-gray-600">
          &copy; 2025 My To-Do List. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default About;
