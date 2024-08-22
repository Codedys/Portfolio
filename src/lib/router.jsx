import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import App from "../App";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Blog from "../components/blog/Blog";
import Timeline from "../components/timeline/Timeline";
import Bucketlist from "../components/bucketlist/Bucketlist";

import Blogpost from "../components/blogpost/Blogpost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/bucketlist",
        element: <Bucketlist />,
      },
    ],
  },
]);

export default router;
