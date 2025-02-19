import React from "react";
export const Post = ({ post }) => {
  console.log(post)
  return (
    <div className="card postList" style={{ width: "18rem" }}>
      <div className="card-body postCarts">
        <h5 className="card-title">{post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {post.views}
          </span>
        </h5>
        <p className="card-text">{post.discreption}</p>
        {post.tags.map((tag) => <span className="badge text-bg-primary">{tag}</span>)}
      </div>
    </div >
  );
} 