import React from "react";
import { productsList } from "../ProductsList";

const CartCard = ({ prod }) => {

  return (
    <div className="py-[2rem] mx-[2rem] grid grid-cols-4 grid-rows-4 w-[600px] gap-[1rem] border-b font-semibold">
      <img className="row-span-4 w-[150px] h-[150px]" />
      <p className="col-span-2 text-xl font-bold">
        {productsList[prod.prodId].name}
      </p>
      <p className="col-start-2">Size: {prod.size}</p>
      <p className="col-start-2">Quantity: {prod.quantity}</p>
      <p className="col-start-2 text-xl font-bold">
        ${productsList[prod.prodId].price}
      </p>
      <p className="col-start-4 row-start-3 text-right">by Vender name</p>
      <button className="col-start-4 row-start-4 text-right">Remove</button>
    </div>
  );
};

export default CartCard;
