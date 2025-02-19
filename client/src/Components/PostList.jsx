import { Post } from "./Post";

export const PostList = ({ currentPost }) => {
  console.log('>>>>>>', currentPost)
  return (
    <div>
      {currentPost.map((post) => <Post key={post.postId} post={post}></Post>)}
    </div>
  );
}