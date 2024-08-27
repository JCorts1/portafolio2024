import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Home from "./views/Home";
import Contact from "./views/Contact";
import Projects from "./views/Projects";
import BlogCreate from "./views/BlogCreate";
import BlogIndex from "./views/BlogIndex"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import "./App.css";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  { path: '/projects', element: <Projects /> },
  { path: '/contact', element: <Contact /> },
  { path: '/blog-post', element: <BlogCreate /> },
  { path: '/blog', element: <BlogIndex /> },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={(routes)} />
  </React.StrictMode>,
)
