import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../assets/Loading4.webm";
import Breadcrums from "./Breadcrums";
import { SlBasket } from "react-icons/sl";
import { useCart } from "../context/CartContext";

const SingleProduct = () => {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState("");
  const { addToCart } = useCart();
  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${params.id}`
      );
      const product = res.data;
      console.log(product);
      setSingleProduct(product);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, []);
  return (
    <>
      {singleProduct ? (
        <div className="px-4 pb-4 md:px-0">
          <Breadcrums title={singleProduct.title} />
          <div className="max-w-[700px] mx-auto md:p-6 grid grid-cols-2 gap-10 items-center">
            {/* product image */}
            <div className="w-full">
              <img
                src={singleProduct.image}
                alt={singleProduct.title}
                className="rounded-2xl w-full object-cover"
              />
            </div>
            {/* product deteils */}
            <div className="flex flex-col gap-4">
              <h1 className="md:text-2xl font-bold text-gray-600">
                {singleProduct.title}
              </h1>
              <h2 className="text-2xl text-gray-500 font-semibold">
                / {singleProduct.category}
              </h2>
              <p className="text-xl text-red-500 font-bold">
                ${singleProduct.price}
                <span className="text-gray-600 ml-2 line-through">
                  ${Math.ceil(singleProduct.price)}.{singleProduct.id}
                </span>
                <span className="bg-red-600 text-white font-semibold rounded-[10px] p-2 ml-2">
                  {singleProduct.id}% discount
                </span>
              </p>
              <p className="text-gray-600 text-[12px]">
                {singleProduct.description}
              </p>
              {/* quantity selector */}
              <div className="flex items-center gap-4 ">
                <label htmlFor="" className="text-sm font-medium text-gray-700">
                  Quntity
                </label>
                <input
                  type="number"
                  min={1}
                  value={1}
                  className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => addToCart(singleProduct)}
                  className="bg-red-500 hover:bg-red-700 px-3 py-2 text-lg rounded-md flex text-white gap-1 cursor-pointer w-[50%] items-center justify-center font-semibold"
                >
                  <SlBasket className="w-6 h-6" /> Add to Card
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <video muted autoPlay loop>
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </>
  );
};
export default SingleProduct;
