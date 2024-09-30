import "./about.css";

const About = () => {
  return (
    <div className="about-main">
      <h1>About Me</h1>
      <div className="about-me">
        <div className="text">
          <p>
            I'm a Software Engineer by training and trade. I spend most of my
            time reading books about tech, self-help,fiction and philosophy. If
            you find this interesting, Welcome to my innate domain. This is my
            space where I give insights of my personal experiences as a junior
            software engineer,share some cool projects I am building, technical
            articles and other writtings together with general life adventures
          </p>
        </div>
        <img src="aboutpart.jpeg" alt="" />
      </div>
      <h3>Career</h3>
      <div className="career">
        I'm currently in my final year at Kenyatta University pursuing
        Bachelor's Degree in Computer Science , I part time work at Keypad
        Solutions and is currently availalbe for full time/contract roles 🙂 .
        Over the course of my 4 year campus life I have worked on solo personal
        projects that span from CLI tools to fullstack applications enjoy the
        process of giving life to an idea, I am looking to get my footing in
        data engineering and become a machine learning engineer while at it.If
        interested you can connect on Linkedin or shoot me an email.
      </div>
      <h3>Life</h3>
      <div className="life">
        If I am not writing code or snooping through open source projects
        breaking a few things as I try to figure out how they work you will find
        me on my hobbies. I enjoy stkateboarding and listening to old school rap
        songs, the likes of Fat Joe and Rick Ross (I know I have refused to
        evolve). I also enjoy exploring, trying out new stuff and dissecting
        Kendric Lamar's lyrics.
      </div>
      <h3>Recent thoughts</h3>
      <div className="thoughts">
        <a href="https://www.example.com" target="_blank">
          Permisionless path
        </a>
        <p>How I got into SWE and all</p>
        <div className="date">
          <img src="clock.png" alt="" />
          <p>Fri Dec 2024</p>
        </div>
      </div>
      <div className="thoughts">
        <a href="https://www.example.com" target="_blank">
          Permisionless path
        </a>
        <p>How I got into SWE and all</p>
        <div className="date">
          <img src="clock.png" alt="" />
          <p>Fri Dec 2024</p>
        </div>
      </div>
      <div className="thoughts">
        <a href="https://www.example.com" target="_blank">
          Permisionless path
        </a>
        <p>How I got into SWE and all</p>
        <div className="date">
          <img src="clock.png" alt="" />
          <p>Fri Dec 2024</p>
        </div>
      </div>
    </div>
  );
};

export default About;
