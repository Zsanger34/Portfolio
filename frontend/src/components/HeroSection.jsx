import React from 'react';
import '../CSS Files/HeroSection.css'; // Separate CSS file for Hero styles
import SkillsTree from './SkillTree'
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return (
    <div className="hero">
      <h1>Hi, I'm Zachary Sanger</h1>
      <p>Software Engineer Solving Complexity with Code</p>
        {/* <Link to="/Projects">
            <button className="hero-button">See My Work</button>
        </Link> */}
        {/* <SkillsTree /> */}

    </div>
  );
};

export default HeroSection;
