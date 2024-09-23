import "./home.css";
import { Link } from "react-router-dom";
import { timelineData } from "../../binding/timeline_bind";
import { projectData } from "../../binding/projects_bind";

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
        What I have been upto lately...{" "}
        <Link className="t-link" to="/timeline">
          View All
        </Link>{" "}
      </h3>
      <div className="timeline-cards">
        {timelineData.slice(0, 4).map((data, index) => (
          <div key={index} className="t-cards">
            <h5>{data.name}</h5>
            <p>{data.description}</p>
            <p className="date">{data.date}</p>
          </div>
        ))}
      </div>
      <div className="project-card">
        <h3>
          Projects I have built and shipped...{" "}
          <Link className="t-li" to="/projects">
            View All
          </Link>{" "}
        </h3>
        {projectData.slice(0, 3).map((data,index) => (
          <div  key={index} className="p-cards">
            <img src={data.photo} alt="" />
            <div className="description">
              <div className="title">
                <img src={data.thumbNail} alt="" />
                <h5>{data.name}</h5>
              </div>
              <p>{data.description}</p>
              <p className="date">{data.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
