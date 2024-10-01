import React from 'react';
import '../CSS Files/Resume.css';
import { ReactComponent as GithubIcon } from '../assets/icons/Github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/icons/Linkedin.svg';
import ResumePDF from '../assets/Resume.pdf';  // Make sure your resume PDF is in the correct path

const Resume = () => {
  return (
    <div className="resume-section">
      {/* Download button */}
      <a href={ResumePDF} className="download-resume" download="Zachary_Sanger_Resume.pdf">
        Download PDF
      </a>

      {/* Header Section */}
      <div className="resume-header">
        <h1>Zachary Sanger</h1>
        <p className="tagline">Computer Scientist Crafting Innovative Solutions</p>
        <p className="contact-info">
          <a href="mailto:sangerzachary@gmail.com">sangerzachary@gmail.com</a> |
          <a href="tel:+16315535867"> (631) 553-5867</a> |
          Buffalo, NY
        </p>
        <div className="resume-icons">
          <a href="https://github.com/Zsanger34" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/zachary-sanger/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="icon" />
          </a>
        </div>
      </div>

      {/* Executive Summary */}
      <section className="summary-section">
        <h2>About Me</h2>
        <p>
          I am a passionate Computer Science student skilled in full-stack development, cloud technologies,
          and problem-solving. I enjoy working on projects that blend creativity with technical prowess,
          and I'm always eager to explore new technologies. I thrive in collaborative environments and
          am constantly looking for opportunities to expand my knowledge and contribute to meaningful projects.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Programming Languages</h3>
            <p>Java, Python, Scala, C, JavaScript, SQL</p>
          </div>
          <div className="skill-card">
            <h3>Technologies & Tools</h3>
            <p>Git, Docker, Kubernetes, React, Django, Flask, Maven</p>
          </div>
          <div className="skill-card">
            <h3>Cloud & DevOps</h3>
            <p>REST APIs, PowerShell, Bash</p>
          </div>
          <div className="skill-card">
            <h3>Soft Skills</h3>
            <p>Problem-Solving, Teamwork, Communication, Adaptability</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2>Key Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>EmotionAI</h3>
            <p>
              Developed an AI system using Convolutional Neural Networks (CNNs) and OpenCV for real-time emotion detection.
            </p>
          </div>
          <div className="project-card">
            <h3>EnemyAI</h3>
            <p>
              Developed a mini-game in Scala using BFS for enemy tracking and a physics engine for projectiles.
            </p>
          </div>
          <div className="project-card">
            <h3>DreamInsight</h3>
            <p>
              Built the front end for a sleep analysis platform using React and JavaScript, enhancing user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <h2>Experience</h2>
        <div className="experience-card">
          <h3>IT Technician - Techworks Consulting</h3>
          <p>May 2022 - Present | Remote</p>
          <ul>
            <li>Automated repetitive tasks using bash and PowerShell, improving team efficiency.</li>
            <li>Resolved support tickets for software, hardware, and network issues.</li>
            <li>Collaborated with teams to ensure uptime and resolve complex issues.</li>
          </ul>
        </div>
      </section>

      {/* Contact Call to Action */}
      <div className="contact-cta">
        <h2>Let's Connect</h2>
        <p>I'm always open to discussing new opportunities. Feel free to reach out!</p>
        <a href="mailto:sangerzachary@gmail.com" className="cta-button">Contact Me</a>
      </div>
    </div>
  );
};

export default Resume;
