import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Blogs.css";
import Navbar from "@/components/Navbar";

const BlogIndex = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("https://portafolio2024-production.up.railway.app/blogs").then(function (response) {
      setBlogs(response.data);
      console.log(response);
    });
  }, []);

  return (
    <div className="blog">
      <div className="blog-filter flex flex-col">
        <div className="sticky">
          <Navbar />
        </div>
        <div className="blog-content">
          {blogs.map((blog) => {
            return (
              <div
                key={blog.id}
                className="blog-card  mt-10 p-2"
              >
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <h1 className="text-white text-5xl font-sedgwick">
                    {blog.title}
                  </h1>
                  <p className="blog-text font-montserrat text-xl mt-10 w-5/6 h-fit p-4 rounded-lg p-10">
                    {blog.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;
