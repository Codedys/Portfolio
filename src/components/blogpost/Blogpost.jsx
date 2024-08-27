// import "./blogpost.css";
import { useEffect, useState } from "react";
import { post } from "../../lib/query";
import { useParams } from "react-router-dom";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

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
        setBlog(res.data.post.content.html);
      } catch (error) {
        console.log(error);
      }
    }

    fetchSinglePost(post);
  }, [id]);

  useEffect(() => {
    if (blog) {
      Prism.highlightAll();

    
      const codeBlocks = document.querySelectorAll("pre code");
      codeBlocks.forEach((block) => {
        const button = document.createElement("button");
        button.className = "copy-button";
        button.innerText = "Copy";
        block.parentNode.insertBefore(button, block);

        button.addEventListener("click", () => {
          const code = block.innerText;
          navigator.clipboard.writeText(code).then(() => {
            button.innerText = "Copied!";
            setTimeout(() => {
              button.innerText = "Copy";
            }, 2000);
          });
        });
      });
    }
  }, [blog]);

  return (
    <div className="blogpost-main">
      {blog ? (
        <div dangerouslySetInnerHTML={{ __html: blog }} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Blogpost;
