import React from "react";

import { NavLink } from "react-router-dom";

const Product = ({product, index}) => {
  return (
    <NavLink
      key={index}
      to={`/productcard/${index}`}
      className="w-[300px] h-[300px]  relative transition-transform duration-300 transform hover:-translate-y-5 flex flex-col items-center"
    >
      <img src={product.imageUrl} className="h-[200px]" />
      <h3 className="text-left w-[100%] text-lg font-semibold">
        {product.name}
      </h3>
      <p className="text-left w-[100%] text-base font-semibold">
        ${product.price}
      </p>
      <p className="text-left w-[100%] text-base">{product.description}</p>
    </NavLink>
  );
};

export default Product;
