import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { MdDeleteOutline } from "react-icons/md";
import { LuNotebookText } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { GiShoppingBag, GiTakeMyMoney } from "react-icons/gi";
import { useUser } from "@clerk/clerk-react";

const Card = ({ location, getLocation }) => {
  const { cartItem, updateQauntity } = useCart();
  const { user } = useUser();
  console.log(location);

  const totalPrice = cartItem.reduce((total, item) => total + item.price, 0);
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
                          updateQauntity(cartItem, item.id, "decrease")
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="cursor-pointer "
                        onClick={() =>
                          updateQauntity(cartItem, item.id, "increase")
                        }
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
                    value={user.fullName}
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="">Address</label>
                  <input
                    type="text"
                    placeholder="Bataoo Kaha pe bhejana hai..."
                    className="p-2 rounded-md"
                    value={location ? location.county : ""}
                  />
                </div>
                <div className="flex w-full space-y-1 gap-2">
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="">State</label>
                    <input
                      type="text"
                      placeholder="State"
                      className="p-2 rounded-md "
                      value={location ? location.state : ""}
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
                      value={location ? location.postcode : ""}
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
                      value={location ? location.country : ""}
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
                  <button
                    className="bg-red-500 text-white px-3 py-1 font-semibold rounded-md mt-3 cursor-pointer hover:bg-red-700 transition duration-500"
                    onClick={getLocation}
                  >
                    Detect Location
                  </button>
                </div>
              </div>
              <div className="bg-white border border-gray-100 rounded-md p-7 mt-4 space-y-2 shadow-xl h-max">
                <h1 className="text-gray-800 font-bold text-xl">
                  Bill Details
                </h1>
                <div className="flex justify-between items-center">
                  <h1 className="flex gap-1 text-gray-700 items-center">
                    <span>
                      <LuNotebookText />
                    </span>
                    Items total
                  </h1>
                  <p>${totalPrice}</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="flex gap-1 text-gray-700 items-center">
                    <span>
                      <TbTruckDelivery />
                    </span>
                    Delivery Charges
                  </h1>
                  <p className="text-red-500 font-semibold ">
                    <span className="text-gray-600 line-through">$25</span> FREE
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="flex gap-1 text-gray-700 items-center">
                    <span>
                      <GiShoppingBag />
                    </span>
                    Handling Charges
                  </h1>
                  <p className="text-red-700 font-semibold ">$5</p>
                </div>
                <hr className="text-gray-200 mt-2" />
                <div className="justify-between flex items-center mt-1">
                  <h1 className="flex gap-1 text-gray-700 items-center text-lg font-semibold">
                    <span>
                      <GiTakeMyMoney />
                    </span>
                    Grand Total
                  </h1>
                  <p className="font-semibold texxt-lg">${totalPrice + 5}</p>
                </div>
                <div>
                  <h1 className="font-semibold text-gray-700 mb-3 mt-7">
                    Apply PromoCode
                  </h1>
                  <div className="flex gap-3 items-center">
                    <input
                      type="text"
                      placeholder="Enter Code.."
                      className="p-2 pl-3 rounded-full w-full"
                    />
                    <button className="bg-white text-black px-3 py-1 font-semibold rounded-md  cursor-pointer border-2 border-gray-200 hover:bg-gray-300 transition duration-500">
                      Apply
                    </button>
                  </div>
                </div>
                <button className="bg-red-500 text-white px-3 py-1 font-semibold rounded-md mt-3 w-full cursor-pointer hover:bg-red-700 transition duration-500">
                  Proceed to Checkout
                </button>
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
