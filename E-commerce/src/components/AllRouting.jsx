import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Cart from "./Cart";
import ProductCard from "./ProductCard";
import NotFound from "./NotFound";
import Orders from "./Orders";

const AllRouting = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:categ?" element={<Products />} />
        <Route path="/cart/:prodId?/:size?/:quantity?" element={<Cart />} />
        <Route path="/productcard/:prodId" element={<ProductCard />} />
        <Route path="/orders" element={<Orders/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AllRouting;
