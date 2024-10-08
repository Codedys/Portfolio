import "./projects.css";
import { projectData } from "../../binding/projects_bind";

const Projects = () => {
  return (
    <div className="projects-main">
      <h1>🚀 Projects</h1>
      <p>Here's a list of stuff i've shipped</p>

      <div className="projects-card">
        {projectData.map((data, index) => (
          <a  style={{ textDecoration: 'none', color: 'inherit' }}  href={data.link} key={index} className="cards" target="blank">
            <img src={data.photo} alt="" />
            <div className="description">
              <div className="title">
                <img src={data.thumbNail} alt="" />
                <h5>{data.name}</h5>
              </div>
              <p>{data.description}</p>
              <p className="date">{data.date}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
