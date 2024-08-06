
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../components/home/Home";
import About from "../components/about/About";
import  Projects from "../components/projects/Projects"
import Blog from "../components/blog/Blog"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Blog/>,
  },
]);

export default router;