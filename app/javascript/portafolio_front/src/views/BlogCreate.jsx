import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const BlogCreate = () => {

  const [blog, setBlog] = useState({
    title: "",
    content: ""
  });

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:3000/blogs", {blog: blog});
      console.log(blog);
  }

  return (
    <div className='bg-[#000] w-screen h-screen'>
      <form onSubmit={handleSubmit} className='flex flex-col w-10/12 items-center pt-44'>
        <label htmlFor="blogTitle" className='text-white'>Title:</label>
        <input onChange={(event)=> {
          setBlog({...blog, title:event.target.value})
        }} id="blogTitle" />
        <label htmlFor="content" className='text-white'>Content:</label>
        <textarea onChange={(event) => {
          setBlog({...blog, content:event.target.value})
        }} id="content"
        cols="40"
        rows="10" className='mt-10'></textarea>
        <button className='button mt-10'>Post</button>
      </form>
    </div>
  )
}

export default BlogCreate
