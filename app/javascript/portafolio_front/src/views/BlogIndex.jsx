import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Blogs.css";

const BlogIndex = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:3000/blogs").then(function (response) {
      setBlogs(response.data);
      console.log(response);
    });
  }, []);

  return (
    <div className="blog">
      <div className="blog-filter flex flex-col justify-center items-center">
        {blogs.map((blog) => {
          return (
            <div key={blog.id} className="blog-card w-5/6 flex flex-col justify-center items-center mt-12 p-10">
              <div className="w-full h-full flex flex-col justify-center items-center">
                <h1 className="text-white text-5xl font-sedgwick">{blog.title}</h1>
                <p className="blog-text text-2xl mt-10 bg-[#fff] w-5/6 h-3/4 rounded-lg p-10">{blog.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogIndex;
