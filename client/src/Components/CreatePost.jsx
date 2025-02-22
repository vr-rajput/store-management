import { useContext, useRef } from "react";
import { PostList } from "../store/Post-list-store";

export const CreatePost = () => {

  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const descreptionElement = useRef();
  const reactionElement = useRef();
  const tagsElement = useRef();

  const handerSubmite = (event) => {
    event.preventDefault()
    const userId = userIdElement.current.value;
    const posttitle = postTitleElement.current.value;
    const body = descreptionElement.current.value;
    const reaction = reactionElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    addPost(userId, posttitle, body, reaction, tags)
  }

  return (
    <form className="create-post" onSubmit={handerSubmite}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">Your userId</label>
        <input type="text" className="form-control" ref={userIdElement} id="title" placeholder="Enter your User Id" />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input type="text" className="form-control" ref={postTitleElement} id="title" placeholder="How are you Feeling batter.." />
      </div>

      <div className="mb-3">
        <label htmlFor="descreption" className="form-label">Post Content</label>
        <textarea className="form-control" ref={descreptionElement} id="descreption" rows="3" placeholder="Tell me about it"></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">Reactions</label>
        <input type="text" className="form-control" ref={reactionElement} id="title" placeholder="Number of Reactions" />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Tags</label>
        <input type="text" className="form-control" ref={tagsElement} id="tags" placeholder="tag your friends" />
      </div>

      <button type="submit" className="btn btn-primary">post</button>
    </form>
  );
}