import { RiDeleteBack2Fill } from "react-icons/ri";
import React, { useContext } from "react";
import { PostList } from "../store/Post-list-store";


export const Post = ({ post }) => {
  const { deletePost } = useContext(PostList)

  return (
    <div className="card postList" style={{ width: "30rem" }}>
      <div className="card-body postCarts">
        <h5 className="card-title">{post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.postId)}>
            <RiDeleteBack2Fill />
          </span>
        </h5>
        <p className="card-text">{post.discreption}</p>
        {post.tags.map((tag) => <span key={tag} className="badge text-bg-primary hashtag">{tag}</span>)}
      </div>
      <div className="alert alert-primary reaction" role="alert">
        This post has bee reacted by {post.reaction} people
      </div>
    </div >
  );
} 