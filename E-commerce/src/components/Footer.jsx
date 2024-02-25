import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col gap-[5px] items-center py-[20px] bg-[#a9d6e5]">
        <nav className="flex gap-[10px]">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </nav>
        <p>&copy; 2024 Your Ecommerce Website</p>
      </div>
    </div>
  );
};

export default Footer;
