import React from 'react';
import '../CSS Files/Resume.css';
import resumePDF from "../assets/Resume.pdf"; // Renaming the PDF import to avoid conflicts

const Resume = () => {
  return (
    <div className="container">
      <h1>Zachary Sanger - Resume</h1>
      <p>If the PDF does not load, <a href={resumePDF} target="_blank" rel="noopener noreferrer">click here to download it.</a></p>
      <iframe src={resumePDF} frameBorder="0" title="Resume"></iframe>
      <a href={resumePDF} className="download-button" download="Zachary_Sanger_Resume.pdf">Download Resume</a>
    </div>
  );
};

export default Resume;
