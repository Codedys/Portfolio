import { Outlet, Link } from "react-router-dom";
import Popup from "./components/popup/Popup";
import { useState } from "react";

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="container">
      <nav>
        <div className="userinfo">
          <img src="/profile.jpeg" alt="" />
          <div className="name">
            <h3>Gerald Jackson</h3>
            <span>Software Engineer</span>
          </div>
          <img className="icon" src="/light.png" alt="" />
        </div>
        <div className="socials">
          <img src="/email.png" alt="" />
          <img src="/linkedin.png" alt="" />
          <img src="/twitter.png" alt="" />
        </div>
      </nav>

      <main>
        <div className="sidebar">
          <div className="route-elements">
            <Link className="links" to="/">
              <img src="/home.png" alt="" />
              <h4>Home</h4>
            </Link>
          </div>
          <div className="route-elements">
            <Link className="links" to="timeline">
              <img src="/schedule.png" alt="" />
              <h4>Timeline</h4>
            </Link>
          </div>
          <div className="route-elements">
            <Link className="links" to="about">
              <img src="/about.png" alt="" />
              <h4>About</h4>
            </Link>
          </div>
          <div className="route-elements">
            <Link className="links" to="projects">
              <img src="/projects.png" alt="" />
              <h4>Projects</h4>
            </Link>
          </div>
          <div className="route-elements">
            <Link className="links" to="blog">
              <img src="/blog.png" alt="" />
              <h4>Blog</h4>
            </Link>
          </div>
          <div className="route-elements">
            <Link onClick={()=> setToggle(!toggle)} className="desktop">
              <img src="resources.png" alt="" />
              <h4>Resources</h4>
            </Link>
            <div className="underitems">
              <h3>Resources</h3>
              <div>
                <img src="/cv.png" alt="" />
                <span>My CV</span>
              </div>
              <div>
                <img src="/bucket.png" alt="" />
                <span>Bucket List</span>
              </div>
              <div>
                <img src="/bookmark.png" alt="" />
                <span>Bookmarks</span>
              </div>
            </div>
          </div>
          <div className="route-elements">
            <div className="underitems">
              <h3>Contacts</h3>
              <div>
                <img src="/email.png" alt="" />
                <span>Shoot me an email !</span>
              </div>
              <div>
                <img src="/twitter.png" alt="" />
                <span>@Jackson__Gerald</span>
              </div>
              <div>
                <img src="/linkedin.png" alt="" />
                <span>Connect with me on LinkedIn</span>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content">
          {toggle ? <Popup /> : null}
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default App;
