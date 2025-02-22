import { createContext, useReducer } from "react";

// const DEFAULT_VALUES = ;


export const PostList = createContext({
  postList: [],
  addPost: () => { },
  deletePost: () => { }
});

const postListReducer = (currPostList, action) => {
  console.log('postlsitreducer called', currPostList)
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter((post) => post.postId !== action.payload.postId)
  }
  return currPostList
}

const PostListProvider = ({ children }) => {

  const [postList, dispatchPostList] = useReducer(postListReducer, [])

  const addPost = (userId, posttitle, body, reaction, tags) => {
    console.log(`${userId} ${posttitle} ${body},${reaction} ${tags}`)

    const response = fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(Obj => (console.log(Obj.posts)));
    console.log('api called')

    dispatchPostList({
      type: "ADD_POST",
      payload: Obj,
    })
  };


  // {
  //   id: Date.now(),
  //   userId: userId,
  //   title: posttitle,
  //   discreption: body,
  //   reaction: reaction,
  //   tags: tags
  // },
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      }
    })
    console.log(`delete post called for ${postId}`);
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
}

const DEFAULT_VALUES = [{
  userName: "Vicky Roy",
  id: "1",
  postId: "sj1",
  title: 'I am Going to mumbai',
  discreption: "i am goin to mumbai for vecations Hello somethin new called ",
  reaction: "2",
  tags: ['Amerika', 'Mumabi', 'Delhi'],
},
{
  userName: "suraj",
  id: "2",
  postId: "Ab2",
  title: 'welcome back Guys',
  discreption: "I ma really love u",
  reaction: "15",
  tags: ['Amerika', 'Mumabi', 'Delhi'],
}]

export default PostListProvider;