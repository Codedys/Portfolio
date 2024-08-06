
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../components/home/Home";
import About from "../components/about/About";


const router = createBrowserRouter([
  {
    path: "/",
    element: <About/>,
  },
]);

export default router;