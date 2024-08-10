import { RouterProvider, Link } from "react-router-dom";
import router from "./lib/router";


const App = () => {
  return (
    <div className="container">
      <nav>
        <div className="userinfo">
          <img src="./profile.jpeg" alt="" />
          <div className="name">
            <h3>Gerald Jackson</h3>
            <span>Software Engineer</span>
          </div>
          <img className="icon" src="./light.png" alt="" />
        </div>
        <div className="socials">
          <img src="email.png" alt="" />
          <img src="linkedin.png" alt="" />
          <img src="twitter.png" alt="" />
        </div>
      </nav>

      <main>
        <div className="sidebar">
          <div className="route-elements">
            <a href="/">
            
              <img src="home.png" alt="" />
              <h4>Home</h4>
            </a>
           
          
          </div>
          <div className="route-elements">
              <a href="/timeline">
              <img src="schedule.png" alt="" />
              <h4>Timeline</h4>
              </a>
            
          </div>
          <div className="route-elements">
              <a href="/about">
              <img src="about.png" alt="" />
              <h4>About</h4>
              </a>
            
          </div>
          <div className="route-elements">
            <a href="/projects">
              <img src="projects.png" alt="" />
              <h4>Projects</h4>
            </a>
            
          </div>
          <div className="route-elements">
              <a href="/blog">
              <img src="blog.png" alt="" />
              <h4>Blog</h4>
              </a>
           
          </div>
          <div className="route-elements">
            <img className="desktop" src="resources.png" alt="" />
            <div className="underitems">
              <h3>Resources</h3>
              <div>
                <img src="cv.png" alt="" />
                <span>My CV</span>
              </div>
              <div>
                <img src="bucket.png" alt="" />
                <span>Bucket List</span>
              </div>
              <div>
                <img src="bookmark.png" alt="" />
                <span>Bookmarks</span>
              </div>
            </div>
          </div>
          <div className="route-elements">
            <img className="desktop" src="contact.png" alt="" />
            <div className="underitems">
              <h3>Contacts</h3>
              <div>
                <img src="email.png" alt="" />
                <span>Shoot me an email !</span>
              </div>
              <div>
                <img src="twitter.png" alt="" />
                <span>@Jackson__Gerald</span>
              </div>
              <div>
                <img src="linkedin.png" alt="" />
                <span>Connect with me on LinkedIn</span>
              </div>
            </div>
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
