import React from "react";
import { SlBasket } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="border relative border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max ">
      <img
        src={product.image}
        alt=""
        className="bg-gray-100 aspect-square object-fit-contain"
        onClick={() => navigate(`/products/${product.id}`)}
      />
      <h1 className="line-clamp-2 p-1 font-semibold overflow-hidden ">
        {product.title}
      </h1>
      <p className="my-1 text-lg text-gray-800 font-bold">${product.price}</p>
      <button className="bg-red-500 hover:bg-red-700 px-3 py-2 text-lg rounded-md flex text-white gap-1 cursor-pointer w-full items-center justify-center font-semibold">
        <SlBasket className="w-6 h-6" /> Add to Card
      </button>
    </div>
  );
};

export default ProductCard;
