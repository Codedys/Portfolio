import "./about.css";

const About = () => {
  return (
    <div className="about-main">
      <h1>About Me</h1>
      <div className="about-me">
        <div className="text">
          <p>
          I'm a Software Engineer by training and trade. I spend most of my time reading books about tech, self-help, fiction, and philosophy. If you find this interesting, welcome to my domain. This is the space where I share insights from my personal experiences as a junior software engineer, showcase some cool projects I'm building, post technical articles, and write about general life adventures.
          </p>
        </div>
        <img src="aboutpart.jpeg" alt="" />
      </div>
      
      <h3>Career</h3>
      <div className="career">
      I'm currently in my final year at Kenyatta University, pursuing a Bachelor's Degree in Computer Science. I work part-time at Keypad Solutions and I am currently available for full-time or contract roles 🙂. Over the course of my four years at university, I've worked on personal projects ranging from CLI tools to fullstack applications. I enjoy bringing ideas to life and  I am looking to establish myself in data engineering, with a goal of becoming a machine learning engineer. If you're interested, feel free to connect with me on LinkedIn or send me an email.
      </div>
      <h3>Life</h3>
      <div className="life">
      If I'm not writing code or exploring open-source projects (and breaking a few things as I try to figure out how they work), you'll find me enjoying my hobbies. I love skateboarding and listening to old-school rap artists like Fat Joe and Rick Ross (I know, I've refused to evolve). I also enjoy exploring, trying out new things, and dissecting Kendrick Lamar's lyrics.
      </div>
      <h3>Recent thoughts</h3>
      <div className="thoughts">
        <a href="https://oberejackson.vercel.app/blog/661653ad8d11bcf90baed36e" target="_blank">
          Comparing Solidity with Clarity
        </a>
        <p>Writing smart contracts for Bitcoin was limited in the past</p>
        <div className="date">
          <img src="clock.png" alt="" />
          <p>Fri Dec 2023</p>
        </div>
      </div>
      <div className="thoughts">
        <a href="https://oberejackson.vercel.app/blog/6621743cbe424d2d968e6c0f" target="_blank">
        Building on Bitcoin Layers With the Hiro Platform
        </a>
        <p>Bitcoin is the highest-valued token on the planet</p>
        <div className="date">
          <img src="clock.png" alt="" />
          <p>Mon Jan 2024</p>
        </div>
      </div>
      <div className="thoughts">
        <a href="https://oberejackson.vercel.app/blog/660468b71b0b20cc9a2b4e9e" target="_blank">
        Creating a Token-Gated Web Page With Clarity
          
        </a>
        <p>This tutorial shows how to create a token-gated website using Clarity </p>
        <div className="date">
          <img src="clock.png" alt="" />
          <p>Tue May 2024</p>
        </div>
      </div>
    </div>
  );
};

export default About;
