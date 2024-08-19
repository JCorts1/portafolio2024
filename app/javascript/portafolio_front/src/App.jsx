import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Projects from "./views/Projects";
import BlogCreate from "./views/BlogCreate";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog-post" element={<BlogCreate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
