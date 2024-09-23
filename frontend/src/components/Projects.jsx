import React from 'react';
import '../CSS Files/Projects.css';

const Projects = () => {
  const projectList = [
    { name: 'DreamInsight', description: 'An AI-powered dream analysis system.', link: 'https://github.com/your-github/dreaminsight' },
    { name: 'PriceProwler', description: 'Price comparison app for various products.', link: 'https://github.com/your-github/priceprowler' },
    { name: 'AI Calendar App', description: 'AI-assisted calendar app for schedule optimization.', link: 'https://github.com/your-github/aicalendar' }
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-row">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
        <div className="placeholder-card">
          More to come!
        </div>
        <div className="placeholder-card">
          More to come!
        </div>
        <div className="placeholder-card">
          More to come!
        </div>
      </div>
    </section>
  );
};

export default Projects;
