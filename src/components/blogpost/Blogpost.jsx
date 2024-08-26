import "./blogpost.css";

import { useEffect } from "react";
import { post } from "../../lib/query";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Blogpost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    async function fetchSinglePost(query) {
      try {
        const data = await fetch("https://gql.hashnode.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query,
            variables: { id },
          }),
        });
        const res = await data.json();


        setBlog(res.data.post.content.html)
      } catch (error) {
        console.log(error);
      }
    }

    fetchSinglePost(post)
  
  }, [id]);

  return (
    <div>
      {blog ? (
        <div dangerouslySetInnerHTML={{ __html: blog }} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Blogpost;
