import { useLocation } from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from 'axios'
import Header from '../../Component/Header/Header'
import Posts from '../../Component/Posts/Posts'
import SideBar from '../../Component/Sidebar/SideBar'
import './Home.css'


const Home = () => {
  
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
  // console.log(search)
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/posts/"+search);
        // console.log(response.data);
        setPosts(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchPosts();
  }, [search]);
  return (
    <>
    <Header/>
    <div className='home'>
      <Posts posts={posts}/>
      <SideBar/>
    </div>
    </>
    
  )
}

export default Home