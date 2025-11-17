import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { MdDeleteOutline } from "react-icons/md";

const Card = () => {
  const { cartItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="mt-10 max-w-6xl mx-auto mb-5 ">
      {cartItem.length > 0 ? (
        <div className="">
          <h1 className="font-bold text-2xl">My Cart ({cartItem.length})</h1>
          <div>
            <div className="mt-10">
              {cartItem.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-100 p-5 rounded-md items-center justify-between mt-3 w-ful flex "
                  >
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-[120px] h-[120px] shadow-lg shadow-gray-300 p-2 bg-white rounded-2xl "
                      />
                      <div>
                        <h1 className="w-[300px] line-clamp-2">{item.title}</h1>
                        <p className="text-red-500 font-semibold text-lg">
                          ${item.price}
                        </p>
                      </div>
                    </div>
                    <div className="bg-red-500 text-white flex gap-4 p-2 rounded-md font-bold text-xl justify-around items-center w-[7vw]">
                      <button
                        className="cursor-pointer "
                        onClick={() =>
                          quantity > 1
                            ? setQuantity(quantity - 1)
                            : setQuantity(quantity)
                        }
                      >
                        -
                      </button>
                      <span>{quantity}</span>
                      <button
                        className="cursor-pointer "
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <span className="hover:bg-white transition-all rounded-full p-3 hover:shadow-2xl ">
                      <MdDeleteOutline className="text-red-500 text-2xl cursor-pointer" />
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-2 gap-20">
              <div className="bg-gray-100 rounded-md p-7 mt-4 space-y-2 ">
                <h1 className="text-gray-800 font-bold text-xl ">
                  Delivery Info
                </h1>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="">Full Name</label>
                  <input
                    type="text"
                    placeholder="Nam likhoo Tumhara...."
                    className="p-2 rounded-md"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="">Address</label>
                  <input
                    type="text"
                    placeholder="Bataoo Kaha pe bhejana hai..."
                    className="p-2 rounded-md"
                  />
                </div>
                <div className="flex w-full space-y-1 gap-2">
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="">State</label>
                    <input
                      type="text"
                      placeholder="State"
                      className="p-2 rounded-md "
                    />
                  </div>
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="">PostCode</label>
                    <input
                      type="text"
                      maxLength={6}
                      minLength={6}
                      placeholder="Code"
                      className="p-2 rounded-md "
                    />
                  </div>
                </div>
                <div className="flex w-full space-y-1 gap-2">
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="">Country</label>
                    <input
                      type="text"
                      placeholder="india"
                      className="p-2 rounded-md "
                    />
                  </div>
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="">Phone no</label>
                    <input
                      type="text"
                      maxLength={10}
                      minLength={10}
                      placeholder="contact number"
                      className="p-2 rounded-md "
                    />
                  </div>
                </div>
                <button className="bg-red-500 text-white px-3 py-1 font-semibold rounded-md mt-3 cursor-pointer hover:bg-red-700 transition duration-500">
                  Submit
                </button>
                <div className="flex items-center w-full text-gray-700 justify-center">
                  --------- OR ---------
                </div>
                <div className="flex justify-center">
                  <button className="bg-red-500 text-white px-3 py-1 font-semibold rounded-md mt-3 cursor-pointer hover:bg-red-700 transition duration-500">
                    Detect Location
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-2xl">Cart is empty</div>
      )}
    </div>
  );
};

export default Card;
