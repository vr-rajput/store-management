import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { PostList } from './Components/PostList';
import { CreatePost } from './Components/CreatePost';
import { useState } from 'react';

function App() {

  const [selectedTab, setSelectedTab] = useState("Home");
  const PostDetails = [{
    userName: "Vicky Roy",
    postId: 1,
    title: 'I am Going to mumbai',
    discreption: "i am goin to mumbai for vecations Hello somethin new called ",
    reaction: "",
    tags: ['Amerika', 'Mumabi', 'Delhi'],
    views: '450',
    like: "1",
    email: "vicky.roy@gmail.com"
  },
  {
    userName: "suraj",
    postId: 2,
    title: 'welcome back Guys',
    discreption: "I ma really love u",
    reaction: "",
    tags: ['Amerika', 'Mumabi', 'Delhi'],
    views: '150',
    link: "1000",
    email: "suraj@gmail.com"
  },
  {
    userName: "sk",
    postId: 3,
    title: 'welcome to nasik',
    discreption: "Femouse place is mahatama budh tample",
    reaction: "",
    tags: ['Amerika', 'Mumabi', 'Delhi'],
    views: '50',
    link: "150",
    email: "suraj@gmail.com"
  }]
  const [currentPost, setPost] = useState(PostDetails);

  console.log(currentPost)
  return (
    <div className='app-container'>
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} currentPost={currentPost}></Sidebar>
      <div className='app-content'>
        <Header></Header>
        {selectedTab === "Home" ? <PostList currentPost={currentPost}></PostList> : <CreatePost />}
        <Footer></Footer>
      </div>
    </div>
  );
}
export default App
