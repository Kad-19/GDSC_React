import React from "react";
import { productsList } from "../ProductsList";
import Product from "./Product";

import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <section className=" h-[600px] overflow-hidden">
        <img src="./img/shop.jpg" className=" w-[100%]" />
      </section>
      <section className="my-[10rem] flex items-center justify-center flex-col gap-[5rem]">
        <div className="flex items-center flex-col gap-[2rem] w-[40%]">
          <h1 className=" text-4xl font-bold">Categories</h1>
          <p className="text-center text-slate-700 text-base ">
            Explore our diverse range of categories to discover high-quality
            products tailored to your needs. From cutting-edge electronics to
            timeless fashion essentials, our carefully curated selection ensures
            you find the perfect items for every aspect of your life. Shop with
            confidence, knowing that each category is filled with top-notch
            products from trusted brands, offering a seamless and enjoyable
            shopping experience.
          </p>
          <NavLink
            to="/products"
            className="text-xl font-semibold border py-[0.5rem] px-[2rem] rounded bg-slate-300 hover:bg-inherit transition ease-in-out duration-300"
          >
            Show all Categories
          </NavLink>
        </div>
        <div className="flex items-center justify-between w-[70%] gap-[15px]">
          <NavLink
            to="/products/Appliances"
            className="w-[350px] h-[450px] relative transition-transform duration-300 transform hover:-translate-y-5 flex flex-col items-center"
          >
            <img src="../img/Appliances.jpg" className="h-[400px] w-[350px]" />
            <p className="my-[5px] font-semibold text-3xl">Appliances</p>
          </NavLink>
          <NavLink
            to="/products/Electronics"
            className="w-[350px] h-[450px] relative transition-transform duration-300 transform hover:-translate-y-5  flex flex-col items-center"
          >
            <img src="../img/Electronics.jpg" className="h-[400px] w-[350px]" />
            <p className="my-[5px] font-semibold text-3xl">Electronics</p>
          </NavLink>
          <NavLink
            to="/products/Fashion"
            className="w-[350px] h-[450px] relative transition-transform duration-300 transform hover:-translate-y-5  flex flex-col items-center"
          >
            <img src="../img/Fashion.jpg" className="h-[400px] w-[350px]" />
            <p className="my-[5px] font-semibold text-3xl">Fashion</p>
          </NavLink>
        </div>
      </section>
      <section className="my-[10rem] flex items-center justify-center flex-col gap-[5rem]">
        <div className="flex items-center flex-col gap-[2rem] w-[40%]">
          <h1 className=" text-4xl font-bold">Our latest arrivals</h1>
          <p className="text-center text-slate-700 text-base ">
            Discover the freshest additions to our collection with our latest
            arrivals. Stay ahead of the trends and indulge in a shopping
            experience that introduces you to the newest and most coveted
            products. From stylish apparel to innovative gadgets, our constantly
            updated selection ensures you have access to the latest and greatest
            items in the market. Explore our latest arrivals and elevate your
            lifestyle with the hottest products on the market.
          </p>
          <NavLink
            to="/products"
            className="text-xl font-semibold border py-[0.5rem] px-[2rem] rounded bg-slate-300 hover:bg-inherit transition ease-in-out duration-300"
          >
            Show all Products
          </NavLink>
        </div>
        <div className="flex items-center justify-between w-[70%] gap-[15px]">
          <Product product={productsList[8]} index={8} />
          <Product product={productsList[9]} index={9} />
          <Product product={productsList[10]} index={10} />
        </div>
      </section>
      <section className="my-[10rem] flex items-center justify-center flex-col gap-[5rem]">
        <div className="flex items-center flex-col gap-[2rem] w-[40%]">
          <h1 className=" text-4xl font-bold">Our Products</h1>
          <p className="text-center text-slate-700 text-base ">
            From everyday essentials to luxurious indulgences, our curated
            collection reflects a commitment to quality and style. Whether
            you're seeking the latest tech innovations or timeless home decor,
            each item has been thoughtfully selected to cater to diverse tastes.
            Elevate your shopping experience as you browse through "Our
            Products," where excellence is not just a standard but a promise.
            Discover a world of possibilities that align with your lifestyle and
            bring a touch of sophistication to your every purchase.
          </p>
          <NavLink
            to="/products"
            className="text-xl font-semibold border py-[0.5rem] px-[2rem] rounded bg-slate-300 hover:bg-inherit transition ease-in-out duration-300"
          >
            Show all Products
          </NavLink>
        </div>
        <div className="flex items-center justify-between w-[70%] gap-[15px]">
          <Product product={productsList[3]} index={3} />
          <Product product={productsList[12]} index={12} />
          <Product product={productsList[19]} index={19} />
        </div>
      </section>
    </div>
  );
};

export default Home;
