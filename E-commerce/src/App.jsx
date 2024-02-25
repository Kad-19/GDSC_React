import React, { useState } from "react";

import "./App.css";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import Cart from "./components/Cart";
import AllRouting from "./components/AllRouting";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />

      <AllRouting />
      <Footer />
    </div>
  );
};

export default App;
