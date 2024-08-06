import router from "./lib/router";
import { RouterProvider } from 'react-router-dom';


const App = () => {
  return (
    <div className="container">
      <nav>
        <div className="userinfo">
          <img src="./profile.jpeg" alt="" />
          <span>Gerald Jackson</span>
          <img className="icon" src="./light.png" alt="" />
        </div>
        <div className="socials">
          <img src="./github.png" alt="" />
          <img src="linkedin.png" alt="" />
          <img src="twitter.png" alt="" />
        </div>
      </nav>


      
      <main>
        <div className="sidebar">
          <div className="route-elements">
            <img src="home.png" alt="" />
            <span>Home</span>
          </div>
          <div className="route-elements">
            <img src="about.png" alt="" />
            <span>About</span>
          </div>
          <div className="route-elements">
            <img src="projects.png" alt="" />
            <span>Projects</span>
          </div>
          <div className="route-elements">
            <img src="blog.png" alt="" />
            <span>Blog</span>
          </div>
          <div className="route-elements">
            <img src="resources.png" alt="" />
            <span>Resources</span>
          </div>
          <div className="route-elements">
            <img src="contact.png" alt="" />
            <span>Contact</span>
          </div>
        </div>
        <div className="page-content">
        <RouterProvider router={router} />

        </div>
      </main>
    </div>
  );
};

export default App;
