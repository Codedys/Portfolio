import "./blog.css";
import { useEffect, useState } from "react";
import posts from "../../lib/query";

const Blog = () => {
  const [publications, setPublications] = useState(null);
  // const [date, setDate] = useState(null);

  useEffect(() => {
    async function allPublications(query) {
      try {
        const response = await fetch("https://gql.hashnode.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });

        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    }

    async function fetchPublications() {
      const values = await allPublications(posts);
      if (values) {
        const value = values.data.publication.posts.edges;
        setPublications(value);
      }
    }

    fetchPublications();
  }, []);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getUTCDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getUTCFullYear();

    const suffix = (day) =>
      day % 10 === 1 && day !== 11
        ? "st"
        : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
        ? "rd"
        : "th";

    return `${day}${suffix(day)} ${month} ${year}`;
  }

  return (
    <div className="blog-main">
      <h1>📝 Blog</h1>
      <p>Thoughts about design, development, building products, and life</p>

      {publications ? (
        publications.map((element,index)=>(
          
          <div key={index} className="blog">
            <a
              href="https://www.example.com"
        
              >
              {element.node.title}
            </a>
            <p>{element.node.brief}</p>
            <div className="stamps">
              <div className="timestamp">
                <img src="clock.png" alt="clock" />
                <p>{formatDate(element.node.publishedAt)}</p>
              </div>
              <div className="readtime">
                <p>{element.node.readTimeInMinutes} min</p>
              </div>
            </div>
          </div>
        
      ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Blog;
