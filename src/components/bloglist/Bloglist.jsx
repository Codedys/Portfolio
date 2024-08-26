import ".././blog/blog.css";
import { Link,useLoaderData } from "react-router-dom";

 export async function allPublications(query) {
  try {
    const response = await fetch("https://gql.hashnode.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
      
      const res = await response.json();
      
      if (res ) {
        return res.data.publication.posts.edges;
      } else {
        return []; 
      }

    } catch (error) {
      console.log(error);
    }
  }



const Bloglist = () => {
  const publications = useLoaderData()
  

    
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
    <div className="listofblogs">
      <h1>📝 Blog</h1>
      <p>Thoughts about design, development, building products, and life</p>

      {publications ? (
        publications.map((element, index) => (
          <div key={index} className="blog">
            <Link to={`/blog/${element.node.id}`}>
              {element.node.title}{" "}
            </Link>

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
        <p>No posts found</p>
      )}
    </div>
  );
};


export default Bloglist; 
