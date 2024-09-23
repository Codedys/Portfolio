import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main">
      <h1>Hey 👋</h1>
      <p>
        My name is Gerald Jackson, welcome to my innate domain! <br />I am a
        Software Engineer in Nairobi Kenya 🇰🇪. I love building Software and over
        engineer
      </p>
      <h3>
        What I have been upto lately...  <Link  className="t-link" to= "/timeline">View All</Link>{" "}
      </h3>
      <div className="timeline-cards">
        <div className="t-cards">
          <h5>Building a react time chat app</h5>
          <p>Built a real time chat application with react js and firebase</p>
          <p className="date">14 May 2024</p>
        </div>
        <div className="t-cards">
          <h5>Building a react time chat app</h5>
          <p>Built a real time chat application with react js and firebase</p>
          <p className="date">14 May 2024</p>
        </div>
        <div className="t-cards">
          <h5>Building a react time chat app</h5>
          <p>Built a real time chat application with react js and firebase</p>
          <p className="date">14 May 2024</p>
        </div>
        <div className="t-cards">
          <h5>Building a react time chat app</h5>
          <p>Built a real time chat application with react js and firebase</p>
          <p className="date">14 May 2024</p>
        </div>
      </div>
      <div className="project-card">
        <h3>
          Projects I have built and shipped... <Link  className="t-li" to= "/projects">View All</Link>{" "}
        </h3>

        <div className="p-cards">
          <img src="profile.jpeg" alt="" />
          <div className="description">
            <div className="title">
              <img src="profile.jpeg" alt="" />
              <h5>Projets</h5>
            </div>
            <p>Real time react chat app</p>
            <p className="date">14 May 2024</p>
          </div>
        </div>
        <div className="p-cards">
          <img src="profile.jpeg" alt="" />
          <div className="description">
            <div className="title">
              <img src="profile.jpeg" alt="" />
              <h5>Projets</h5>
            </div>
            <p>Real time react chat app</p>
            <p className="date">14 May 2024</p>
          </div>
        </div>
        <div className="p-cards">
          <img src="profile.jpeg" alt="" />
          <div className="description">
            <div className="title">
              <img src="profile.jpeg" alt="" />
              <h5>Projets</h5>
            </div>
            <p>Real time react chat app</p>
            <p className="date">14 May 2024</p>
          </div>
        </div>
        <div className="p-cards">
          <img src="profile.jpeg" alt="" />
          <div className="description">
            <div className="title">
              <img src="profile.jpeg" alt="" />
              <h5>Projets</h5>
            </div>
            <p>Real time react chat app</p>
            <p className="date">14 May 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
