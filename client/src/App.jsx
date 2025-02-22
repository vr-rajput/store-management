import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import { CreatePost } from './Components/CreatePost';
import { PostList } from './Components/PostList';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { useState } from 'react';
import PostListProvider from './store/Post-list-store';

function App() {

  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className='app-container'>
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
        <div className='app-content'>
          <Header></Header>
          {selectedTab === "Home" ? <PostList></PostList> : <CreatePost />}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}
export default App
