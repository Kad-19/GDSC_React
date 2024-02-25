import React, { useState } from "react";

import { useParams, NavLink } from "react-router-dom";
import { productsList } from "../ProductsList";

const ProductCard = () => {
  const { prodId } = useParams();
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const product = productsList[prodId];


  const btnStyle = (sz) => {
    return {
      backgroundColor: `${sz === size ? "#c6d2ed" : "white"}`,
    };
  };

  const increase = () => {
    setQuantity((prev) => prev + 1);
  };
  const decrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-[70%] my-[7rem] grid gap-x-[8rem] grid-cols-2 grid-rows-2">
        <section className=" h-[500px] row-span-2 flex items-center">
          <img src={product.imageUrl} className="max-h-[500px]" />
        </section>
        <section className="flex flex-col gap-[1rem] w-[60%]">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="font-semibold">${product.price}</p>
          <p>{product.description}</p>
        </section>
        <section className="flex flex-col gap-[1rem] ">
          <p className="text-lg font-bold">Size</p>
          <div className="flex gap-[1rem]">
            <button
              className=" border p-[15px] font-semibold "
              onClick={() => setSize("S")}
              style={btnStyle("S")}
            >
              S
            </button>
            <button
              className=" border p-[15px] font-semibold"
              onClick={() => setSize("M")}
              style={btnStyle("M")}
            >
              M
            </button>
            <button
              className=" border p-[15px] font-semibold"
              onClick={() => setSize("L")}
              style={btnStyle("L")}
            >
              L
            </button>
          </div>
          <div className="flex gap-[3rem] items-end">
            <NavLink to={`/cart/${prodId}/${size}/${quantity}`} className="text-center py-[0.5rem] px-[6rem] h-[3rem] bg-slate-400 ">
              Add to cart
            </NavLink>
            <div className="flex flex-col">
              <p className="my-2">Quantity</p>
              <div className="flex gap-[1rem] border p-[0.5rem]">
                <button onClick={() => decrease()} className="px-[5px]">
                  -
                </button>
                <p>{quantity}</p>
                <button onClick={() => increase()} className="px-[5px]">+</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductCard;
