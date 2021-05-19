import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "./PostCard";

function Posts() {
  const [post, setPost] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (res) {
          //   console.log(res);
          return res;
        }

        throw new Error("something went wrong while requesting posts");
      })
      .then((myRes) => setPost(myRes.data))
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <h1>{error}</h1>;

  return (
    <div>
      {post &&
        post.map((item) => <PostCard title={item.title} body={item.body} />)}
    </div>
  );
}

export default Posts;
