import React, { useState } from "react";

import { Button } from "react-bootstrap";

import "./App.css";
import Navbar from "./components/Navbar";
import BlogsPage from "./components/BlogsPage";
import PostForm from "./components/PostForm";
import { Routes, Route } from "react-router-dom";

const blogsList = [
  {
    id: 0,
    title: "The Art of Simplicity",
    text: "Embracing simplicity can lead to a more fulfilling life. In this blog post, we explore the beauty of simplicity and its impact on our well-being.",
    date: "2/29/2024, 9:18:00 PM",
  },
  {
    id: 1,
    title: "Exploring Mindfulness",
    text: "Mindfulness is a powerful practice that can bring peace and clarity to our hectic lives. Learn how to incorporate mindfulness into your daily routine.",
    date: "2/29/2024, 9:18:00 PM",
  },
  {
    id: 2,
    title: "Tech Trends: A Glimpse into the Future",
    text: "Discover the latest trends in technology that are shaping the future. From artificial intelligence to virtual reality, the tech landscape is evolving rapidly.",
    date: "2/29/2024, 9:18:00 PM",
  },
  {
    id: 3,
    title: "Healthy Habits for a Balanced Life",
    text: "Maintaining a healthy lifestyle is crucial for overall well-being. Explore practical tips and habits that can contribute to a more balanced and fulfilling life.",
    date: "2/29/2024, 9:18:00 PM",
  },
  {
    id: 4,
    title: "The Power of Gratitude",
    text: "Cultivating a gratitude practice can transform your outlook on life. Dive into the positive effects of expressing gratitude and how it can enhance your daily experience.",
    date: "2/29/2024, 9:18:00 PM",
  },
];



const App = () => {
  const [blogs, setBlogs] = useState(blogsList);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogsPage blogs={blogs} setBlogs={setBlogs}/>} />
        <Route path="/post/:index" element={<PostForm setBlogs={setBlogs} blogs={blogs}/>} />
      </Routes>
    </div>
  );
};

export default App;
