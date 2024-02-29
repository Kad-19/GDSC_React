import React from "react";

import { NavLink } from "react-router-dom";

const BlogCard = ({title, date, text, index, handleDelete}) => {
  return (
    <div className="card m-4">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{date}</h6>
        <p className="card-text">
          {text}
        </p>
        <NavLink to={`post/${index}`} className="btn btn-primary m-2">
          Update
        </NavLink>
        <a href="#" className="btn btn-primary m-2" onClick={() => handleDelete(index)}>
          Delete
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
