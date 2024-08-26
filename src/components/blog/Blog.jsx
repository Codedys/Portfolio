import "./blog.css";
import { Outlet } from "react-router-dom";

const Blog = () => {
  return (
    <div className="blog-main">
      <Outlet />
    </div>
  );
};

export default Blog;
