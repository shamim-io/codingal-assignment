import React from "react";

function PostCard({ title, body }) {
  console.log(title);
  return (
    <div className="m-6 p-5 shadow md:shadow-lg">
      <p className="font-bold p-2">{title}</p>
      <p>{body}</p>
    </div>
  );
}

export default PostCard;
