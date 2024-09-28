import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { auth, getData, sendData } from '../config/firebase/firebasemethods'
import { onAuthStateChanged } from 'firebase/auth'

const Dashboard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
     onAuthStateChanged(auth , async(user)=>{
        if(user){
          console.log(user.uid)
          const blogsData = await getData("blogs" , user.uid)
          console.log(blogsData)
          setBlogs([...blogsData])
        }
    });
  }, [])

  const sendDatatoFirestore = async (data) => {
    console.log(data)
    try {
      const response = await sendData({
        title: data.title,
        description: data.description,
        uid: auth.currentUser.uid
      }, 'blogs')
      blogs.push({
        title: data.title,
        description: data.description,
        uid: auth.currentUser.uid
      })
      setBlogs([...blogs])
      console.log(response);


    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
    <div>
      <h1 >Dashboard</h1>
    </div>  
      <form onSubmit={handleSubmit(sendDatatoFirestore)}>
        <input type="text" placeholder='title' {...register("title", { required: true })} /> <br />
        {errors.title && <span>This field is required</span>}
        <br />
        <textarea placeholder='enter description' {...register("description", { required: true })} ></textarea> <br /><br />
        {errors.description && <span>This field is required</span>}

        <button type='submit'>add Blog</button>
      </form>

      <h1>User Blogs</h1>
      <div className='rounded-md'>
        {blogs.length > 0 ? blogs.map((item, index) => {
          return <div key={index}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        }) : <h1>No blogs found</h1>}
      </div>
    </>
  )
}

export default Dashboard