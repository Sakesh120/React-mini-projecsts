import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import { MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { CgClose } from "react-icons/cg";
import { useCart } from "../context/CartContext";
import { FaBarsStaggered } from "react-icons/fa6";
import { GiCrossMark } from "react-icons/gi";
import ReasponsiveMenu from "./ReasponsiveMenu";

const Navbar = ({ location, getLocation, setOpenDropdown, openDropdown }) => {
  const { cartItem } = useCart();
  const [openNav, setOpenNav] = useState(false);
  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <div className="bg-white py-3 shadow-2xl px-4 md:px-1 ">
      <div className="max-w-6xl mx-auto flex justify-between items-center ">
        {/* logo section */}
        <div className="flex gap-7 items-center">
          <Link to={"/"}>
            <h1 className="font-bold text-3xl">
              <span className="text-red-500 font-serif ">Z</span>aptro
            </h1>
          </Link>
          <div className="md:flex gap-1 cursor-pointer text-gray-700 items-center hidden">
            <MapPin className="text-red-500" />
            <span className="font-semibold ">
              {location ? (
                <div className="-space-y-2">
                  <p className="text-[14px]">{location.county}</p>
                  <p className="text-[13px]">{location.state}</p>
                </div>
              ) : (
                "Add Address"
              )}
            </span>
            <FaCaretDown onClick={toggleDropdown} />
          </div>
          {openDropdown ? (
            <div className="w-[250px] h-max shadow-2xl z-50 bg-white fixed top-16 left-60 border-2 p-5 border-gray-100 rounded-md">
              <h1 className="font-semibold mb-4 text-xl flex justify-between ">
                Change Location{" "}
                <span onClick={toggleDropdown} className="cursor-pointer">
                  <CgClose />
                </span>
              </h1>
              <button
                onClick={getLocation}
                className="bg-red-500 text-white px-3 py-1 rounded-md font-bold  cursor-pointer hover:bg-red-800 hover:font-bold transition-[3s]"
              >
                Detect my location
              </button>
            </div>
          ) : null}
        </div>
        {/* menu section */}
        <nav className="flex gap-7 items-center">
          <ul className="md:flex gap-7  items-center text-xl font-semibold *:cursor-pointer*:transition-[5s] hidden">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 transition-all border-red-500 text-gray-700"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 transition-all border-red-500 text-gray-700"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>Products</li>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 transition-all border-red-500 text-gray-700"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-3 transition-all border-red-500 text-gray-700"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>
          <Link to={"/card"} className="relative">
            <FiShoppingCart className="h-7 w-7" />
            <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white ">
              {cartItem.length}
            </span>
          </Link>

          <div className="md:block hidden">
            <SignedOut>
              <SignInButton className="cursor-pointer bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-800 transition-[3s]" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          {openNav ? (
            <GiCrossMark
              onClick={() => setOpenNav(false)}
              className="w-20 h-5 cursor-pointer md:hidden"
            />
          ) : (
            <FaBarsStaggered
              onClick={() => setOpenNav(true)}
              className="w-20 h-5 cursor-pointer md:hidden"
            />
          )}
        </nav>
      </div>
      <ReasponsiveMenu openNav={openNav} setOpenNav={setOpenNav} />
    </div>
  );
};

export default Navbar;
