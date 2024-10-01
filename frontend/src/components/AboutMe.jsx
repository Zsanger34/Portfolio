import React from 'react';
import '../CSS Files/AboutMe.css';

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div>
        {/* About Me Section */}
        <h1>Hi, I'm Zachary Sanger!</h1>
        <h2>I am a Software Engineer</h2>
        <p>
        I'm a senior at the University at Buffalo, studying Computer Science and set to graduate in May 2025. I’m passionate about using code to tackle real-world challenges and find ways to make life easier through automation. I love figuring out how to streamline processes and build solutions that have a real impact. Whether it’s optimizing workflows or exploring new tech, I’m always excited to find ways that coding can improve everyday life.
        </p>

        {/* My Journey in Tech Section */}
        <h2>My Journey in Tech</h2>
        <p>
        I got my start by taking apart computers as a kid—even if I didn’t always know how to put them back together! Since then, I've come a long way, becoming an IT technician, diving into coding projects, and learning a lot along the way. My journey has always been about working on projects that mean something to me personally. At the forefront is DreamInsight—a platform that blends automation and analysis to dive deep into dreams. I’m constantly evolving it, as it aligns perfectly with my passions and skills in full-stack development. I also spend time working on homelabs, home automation, and building a Magic Mirror to explore how tech can enhance everyday life.
        </p>
        <p>
          My focus is primarily on backend systems, with a growing interest in IoT. While most of my work has been individual, participating in hackathons taught me the value of collaborating with others, finding joy in coding alongside peers, and developing unique solutions together.
        </p>

        {/* Passionate About Learning and Growth Section */}
        <h2>Passionate About Learning and Growth</h2>
        <p>
        I'm always learning—it's a continuous journey for me. I’m currently working on several projects, like my AI Classifier, and developing tools to help me stay committed to self-improvement. I love using technology to optimize my day-to-day life, whether it's setting up my Magic Mirror, building an AI Calendar, or tracking my wellness with the Oura Ring for a data-driven approach to better living.
        </p>
        <p>
          I draw inspiration from thinkers like Aristotle, who emphasized the value of continuous learning, and Cal Newport, the author of <em>Deep Work</em>. Their teachings drive my commitment to refining my skills and pushing the boundaries of what I can achieve.
        </p>

        {/* Beyond the Code Section */}
        <h2>Beyond the Code</h2>
        <p>
        I'm just as passionate about staying healthy and being creative as I am about tech. My time in the gym reflects my commitment to hard work and discipline—qualities I bring to my work in IT, where I strive to create tech solutions that truly help users.  
        </p>
        <p>
        Outside of coding, cooking is a creative outlet for me, and I enjoy experimenting with new recipes. Reading is another way I keep my mind sharp and ready for any challenges, whether they’re in tech or in life.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
