import React from 'react';
import '../CSS Files/Contact.css';
import { ReactComponent as GithubIcon } from '../assets/icons/Github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/icons/Linkedin.svg';

const Contact = () => {
  return (
      <div className="contact-section">
          <h2>Contact Me</h2>
          <p>
              I’m always open to discussing new opportunities, collaborations, or just a friendly chat.
              Feel free to reach out via email or connect with me on LinkedIn or GitHub!
          </p>

          <div className="contact-links">
              <a href="mailto:sangerzachary@gmail.com" className="contact-email">
                  sangerzachary@gmail.com
              </a>

              <div className="contact-icons">
                  <a href="https://github.com/Zsanger34" target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="icon"/>
                  </a>
                  <a href="https://www.linkedin.com/in/zachary-sanger/" target="_blank" rel="noopener noreferrer">
                      <LinkedInIcon className="icon"/>
                  </a>
              </div>
          </div>

          <p className="location">Buffalo, NY</p>
          <p className="location">Long Island, NY</p>

      </div>
  );
};

export default Contact;
