import React, { useState } from "react";

import { Button } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";

const PostForm = ({ setBlogs, blogs }) => {
  const { index } = useParams();
  let date = new Date();
  let dateString = date.toLocaleString();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const [load, setLoad] = useState(0);

  const handleUpdate = () => {
    if (index != -1) {
      setTitle(blogs[index].title);
      setText(blogs[index].text);
    }
    setLoad(1);
  };

  if (load == 0) {
    handleUpdate();
    setLoad(1);
  }

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleText = (e) => {
    setText(e.target.value);
  };

  const handlePost = (e) => {
    e.preventDefault();
    if (index == -1) {
      const blog = {
        id: blogs.length,
        title: title,
        text: text,
        date: dateString,
      };
      setBlogs([...blogs, blog]);
    } else {
      const blog = {
        id: index,
        title: title,
        text: text,
        date: dateString,
      };
      const updatedBlogs = blogs;
      updatedBlogs[index] = blog;
      setBlogs(updatedBlogs);
    }
  };

  return (
    <form className="mx-5">
      <div className="mb-3 my-5 py-5">
        <label htmlFor="exampleFormControlInput1" className="form-label fs-3">
          Blog Title
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Title"
          onChange={(e) => handleTitle(e)}
          value={title}
          required
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label fs-3"
        >
          Blog text
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          onChange={(e) => handleText(e)}
          value={text}
          required
        ></textarea>
      </div>
      <div>
        <Button type="submit" onClick={(e) => handlePost(e)} className="fs-4">
          <NavLink to="/" className="text-white nav-link">
            Post
          </NavLink>
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
