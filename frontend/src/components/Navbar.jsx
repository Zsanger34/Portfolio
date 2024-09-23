import React from 'react';
import '../CSS Files/Navbar.css';
import { Link } from 'react-router-dom';
import { ReactComponent as GithubIcon } from '../assets/icons/Github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/icons/Linkedin.svg';
import { ReactComponent as YouTubeIcon } from '../assets/icons/Youtube.svg';

const Navbar = () => {
  return (
      <nav className="navbar">
          <div className="navbar-logo">
              <Link to="/">
                  <h2 className="logo-text">Zachary Sanger</h2>
              </Link>
          </div>
          <ul className="navbar-links">
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/resume">Resume</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/homelab">HomeLab</Link></li>
              <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="navbar-icons">
              <a href="https://github.com/Zsanger34" target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="icon"/>
              </a>
              <a href="https://www.linkedin.com/in/zachary-sanger/" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon className="icon"/>
              </a>
              {/*<a href="https://www.youtube.com/your-youtube" target="_blank" rel="noopener noreferrer">*/}
              {/*    <YouTubeIcon className="icon"/>*/}
              {/*</a>*/}
          </div>
      </nav>
  );
};

export default Navbar;
