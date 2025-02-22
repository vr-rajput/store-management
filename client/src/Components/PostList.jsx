import { useContext } from "react";
import { Post } from "./Post";
import { PostList as postListData } from "../store/Post-list-store";
import WelcomeMessage from "./welcomeMessage";

export const PostList = () => {//{ currentPost }
  const { postList } = useContext(postListData);
  console.log(".......", postList.length)

  return (
    <div>
      {postList.length === 0 ? <WelcomeMessage /> : null}
      {postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </div>
  );
}