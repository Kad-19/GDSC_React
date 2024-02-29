import React from "react";
import BlogCard from "./BlogCard";

const BlogsPage = ({ blogs, setBlogs }) => {
  const handleDelete = (index) => {
    const updatedBlogs = blogs.filter((blog) => blog.id != index);
    setBlogs(updatedBlogs);
    console.log(updatedBlogs);
  };
  
  const reveresedBlogs = blogs.slice().reverse();
  return (
    <div className="mx-5">
      <h2 className="py-5 mt-5">My blogs</h2>
      {reveresedBlogs.map((blog, index) => (
        <BlogCard
          key={index}
          title={blog.title}
          text={blog.text}
          date={blog.date}
          index={blog.id}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default BlogsPage;
