import { Outlet, Link, NavLink } from "react-router-dom";
import Popup from "./components/popup/Popup";
import { useState,useEffect } from "react";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/jacksonobere.pdf";
    link.download = "ObereCv.pdf";
    link.click();
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };
  // useEffect(() => {
  //   if (darkMode) {
  //     document.body.classList.add('dark-theme');
  //   } else {
  //     document.body.classList.remove('dark-theme');
  //   }
  // }, [darkMode]);

  return (
    <div className="container">
      <nav>
        <div className="userinfo">
          <img src="/profile.jpeg" alt="" />
          <div className="name">
            <h3>Gerald Jackson</h3>
            <span>Software Engineer</span>
          </div>
          {/* <img
            onClick={() => {setDarkMode((previous)=>!previous)}}
            className="icon"
            src={darkMode ? "/light.png" : "/dark.png"}
            alt=""
          /> */}
        </div>
        <div className="socials">
          <a href=""></a>
          <img src="/email.png" alt="" />
          <a href=""></a>
          <img src="/linkedin.png" alt="" />
          <img src="/twitter.png" alt="" />
        </div>
      </nav>

      <main>
        <div className="sidebar">
          <div className="route-elements">
            <NavLink
              className={({ isActive, isPending }) =>
                `links ${isPending ? "pending" : isActive ? "active" : ""}`
              }
              to="/"
            >
              <img src="/home.png" alt="" />
              <h4>Home</h4>
            </NavLink>
          </div>
          <div className="route-elements">
            <NavLink
              className={({ isActive, isPending }) =>
                `links ${isPending ? "pending" : isActive ? "active" : ""}`
              }
              to="timeline"
            >
              <img src="/schedule.png" alt="" />
              <h4>Timeline</h4>
            </NavLink>
          </div>
          <div className="route-elements">
            <NavLink
              className={({ isActive, isPending }) =>
                `links ${isPending ? "pending" : isActive ? "active" : ""}`
              }
              to="about"
            >
              <img src="/about.png" alt="" />
              <h4>About</h4>
            </NavLink>
          </div>
          <div className="route-elements">
            <NavLink
              className={({ isActive, isPending }) =>
                `links ${isPending ? "pending" : isActive ? "active" : ""}`
              }
              to="projects"
            >
              <img src="/projects.png" alt="" />
              <h4>Projects</h4>
            </NavLink>
          </div>
          <div className="route-elements">
            <NavLink
              className={({ isActive, isPending }) =>
                `links ${isPending ? "pending" : isActive ? "active" : ""}`
              }
              to="blog"
            >
              <img src="/blog.png" alt="" />
              <h4>Blog</h4>
            </NavLink>
          </div>
          <div className="route-elements">
            <Link onClick={handleToggle} className="desktop">
              <img src="/resources.png" alt="" />
              <h4>Resources</h4>
            </Link>
            <div className="underitems">
              <h3>Resources</h3>
              <div onClick={handleDownload}>
                <img src="/cv.png" alt="" />
                <span>My CV</span>
              </div>
              <Link className="ulinks" to="bucketlist">
                <img src="/bucket.png" alt="" />
                <span>Bucket List</span>
              </Link>
              <Link className="ulinks" to="bookmarks">
                <img src="/bookmark.png" alt="" />
                <span>Bookmarks</span>
              </Link>
            </div>
          </div>
          <div className="route-elements">
            <div className="underitems">
              <h3>Contacts</h3>
              <a href="mailto:oberegeraldjackson@gmail.com" target="_blank">
                <img src="/email.png" alt="" />
                <span>Shoot me an email !</span>
              </a>

              <a href="https://x.com/Jackson__Gerald" target="blank">
                <img src="/twitter.png" alt="" />
                <span>@Jackson__Gerald</span>
              </a>

              <a href="https://x.com/Jackson__Gerald" target="blank">
                <img src="/linkedin.png" alt="" />
                <span>Connect with me on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="page-content">
          {toggle ? <Popup clickToggler={handleToggle} /> : null}
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default App;
