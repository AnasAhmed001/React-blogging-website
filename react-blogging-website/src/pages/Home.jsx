import React, { useState } from 'react'


const Home = () => {

  const [GetAllData, setGetAllData] = useState([]);

  const GetDataFromFireStore = async(data)=> {
    console.log(data);
    try{
      const response = await getAllData("blogs")
    }catch(error){
      console.log(error);
      
    }
    
  }




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