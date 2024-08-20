import "./blog.css";
import { useEffect, useState } from "react";
import posts from "../../lib/query";

const Blog = () => {


  const [publications, setPublications] = useState(null);

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

       const data = await response.json()
       return data
        
      } catch (error) {
        console.log(error);
      }

      
    }
     
    async function fetchPublications() {
      const values = await allPublications(posts);
      if (values) {
        setPublications(values);
      }
    }
    
    fetchPublications();

  }, []);

  const isoString  = publications.data.publication.posts.edges[0].node.publishedAt
  const date = new Date(isoString).toISOString().split('T')[0];

  return (
    <div className="blog-main">
      <h1>📝 Blog</h1>
      <p>Thoughts about design, development,building products and life</p>

      <div className="blog">
      {publications ? ( 
          <>
            <a href="https://www.example.com" target="_blank">
              {publications.data.publication.posts.edges[0].node.title}
            </a>
            <p>{publications.data.publication.posts.edges[0].node.brief}</p>
            <div className="stamps">
              <div className="timestamp">
                <img src="clock.png" alt="clock" />
                <p>{date}</p>
              </div>
              <div className="readtime">
                <p>{publications.data.publication.posts.edges[0].node.readTimeInMinutes} min</p>
              </div>
            </div>
          </>
        ) : (
          <p>Loading...</p> // Loading state while data is being fetched
        )}
      </div>
    </div>
  );
};

export default Blog;
