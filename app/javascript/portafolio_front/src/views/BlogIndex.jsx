import React from 'react'
import { useState, useEffect } from "react"
import axios from 'axios'

const BlogIndex = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000/blogs")
      .then(function (response) {
        setBlogs(response.data);
        console.log(response);
      });
  }, []);



  return (
    <div className='w-screen h-screen bg-[#000]'>
      {blogs.map((blog) => {
        return (
          <div key={blog.id} className='w-96 h-2/6 bg-white'>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
          </div>
        )
      })}
    </div>
  )
}

export default BlogIndex
