import React from "react";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex items-center justify-between py-2 fixed top-0 w-[100%] z-[1] bg-slate-400 text-white">
      <h1 className="text-3xl mx-10">E-commerce</h1>
      <div className="flex items-center justify-evenly w-[400px] mr-[4rem] text-xl">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/orders">Orders</NavLink>
      </div>
    </nav>
  );
};

export default Header;
