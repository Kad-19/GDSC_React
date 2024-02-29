import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <h2 className="navbar-brand fs-3 mx-5">Thoughts corner</h2>

      <div className="navbar-nav ms-auto fs-4 mx-5">
        <div className="nav-item">
          <NavLink to="/" className="nav-link">
            My blog
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/post/-1" className="nav-link">
            Post
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
