import React from 'react';
import './Navbar.css'; // Importing the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Zachary Sanger</h2>
      </div>
      <ul className="navbar-links">
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#homelab">Home Lab</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-icons">
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.youtube.com/your-youtube" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
