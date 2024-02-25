import React, { useState } from "react";

import { NavLink, useParams } from "react-router-dom";

import { productsList } from "./../ProductsList";
import Product from "./Product";

const Products = () => {
  const { categ } = useParams();
  const [prodList, setProdList] = useState(productsList);
  const filterProducts = (category) => {
    if (category) {
      if (category == "All") {
        setProdList(productsList);
      } else {
        const filterd = productsList.filter(
          (prod) => prod.category == category
        );
        setProdList(filterd);
      }
    }
  };

  const search = (value) => {
    const filtered = productsList.filter((prod) =>
      prod.name.toLowerCase().includes(value.toLowerCase())
    );
    setProdList(filtered);
  };

  return (
    <div
      className="my-[5rem] items-center justify-center flex flex-col"
      onLoad={() => {
        filterProducts(categ);
      }}
    >
      <section className="w-[80%] flex justify-between my-[2rem]">
        <div className="flex gap-[1rem]">
          <h1 className="text-3xl">Categories</h1>
          <div>
            <button
              className="bg-slate-600 text-white p-[0.5rem] rounded-l"
              onClick={() => filterProducts("Electronics")}
            >
              Electronics
            </button>
            <button
              className="bg-[#89c2d9] p-[0.5rem]"
              onClick={() => filterProducts("Fitness")}
            >
              Fitness
            </button>
            <button
              className="bg-slate-600 text-white p-[0.5rem]"
              onClick={() => filterProducts("Fashion")}
            >
              Fashion
            </button>
            <button
              className="bg-[#89c2d9] p-[0.5rem]"
              onClick={() => filterProducts("Footwear")}
            >
              Footwear
            </button>
            <button
              className="bg-slate-600 text-white p-[0.5rem]"
              onClick={() => filterProducts("Appliances")}
            >
              Appliances
            </button>
            <button
              className="p-[0.5rem] bg-[#89c2d9] rounded-r"
              onClick={() => filterProducts("All")}
            >
              All
            </button>
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search product"
            className="border rounded px-[3px] py-[3px] mx-[5px]"
            onChange={(e) => search(e.target.value)}
          />
        </div>
      </section>
      <section className="w-[80%] my-[5rem]">
        <div className="flex justify-evenly items-center flex-wrap gap-[50px]">
          {prodList.map((product, index) => (
            <Product key={index} product={product} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
