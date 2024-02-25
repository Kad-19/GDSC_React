import React, { useState } from "react";
import CartCard from "./CartCard";
import { useParams } from "react-router-dom";
import CartNumber from "../CartNumber";

const Cart = () => {
  const { prodId, size, quantity } = useParams();
  const [cartItems, setCartItems] = useState([
    {
      id: 0,
      prodId: 1,
      size: "S",
      quantity: 2,
    },
  ]);

  const addToCart = () => {
    const item = {
      id: 0,
      prodId: prodId,
      size: size,
      quantity: quantity,
    };
    console.log(item);
    console.log("Abebe");
    setCartItems((prev) => [...prev, item]);
  };

  return (
    <div
      className="w-[80%] flex flex-col justify-center m-[5rem]  min-h-[100vh]"
      
    >
      <h1 className="text-3xl font-semibold">Your Cart</h1>
      <div className="flex justify-between">
        <div>
          <p className="font-semibold">
            Not ready to checkout? Continue Shopping
          </p>

          {cartItems.map((item, index) => (
            <CartCard key={index} prod={item} />
          ))}
        </div>
        <div>
          <h3 className="mb-[5rem] text-xl font-semibold">Order Summary</h3>
          <div className="grid grid-cols-2 grid-row-5 gap-[1rem]">
            <p>Subtotal</p>
            <p className="text-right">$188</p>
            <p>Shipping</p>
            <p className="text-right">Calculated at the next step</p>
            <hr className="col-span-2" />
            <p>Total</p>
            <p className="text-right">$188</p>
            <button className="col-span-2 text-white bg-black mt-[1rem] h-[3rem]">
              Continue to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
