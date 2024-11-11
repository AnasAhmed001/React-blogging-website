import React, { useState } from 'react'
import { getAllData } from '../config/firebase/firebasemethods';


const Home = () => {

  const [blogs, setBlogs] = useState([]);

  const renderBlogs = async () => {
    
    try {
      const data = await getAllData('blogs'); 
      setBlogs(data);
    } catch (err) {
      console.log(err);
    }
  };




  return (
    <>
    <div className='flex justify-center mt-5 text-4xl font-bold'>Home</div>
    <div>
      <h1>All Blogs</h1>
    </div>

    <div className='card '>
      <div className='card-title'>
        
      </div>

    </div>
    </>
  )
}

export default Home