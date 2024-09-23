import React from 'react';
import '../CSS Files/HeroSection.css'; // Separate CSS file for Hero styles
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return (
    <div className="hero">
      <h1>Hi, I'm Zachary Sanger</h1>
      <p>— Computer Scientist Solving Complexity with Code</p>
        <Link to="/Projects">
            <button className="hero-button">See My Work</button>
        </Link>

    </div>
  );
};

export default HeroSection;
