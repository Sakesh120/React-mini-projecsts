import { SignIn, SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ReasponsiveMenu = ({ openNav, setOpenNav }) => {
  const { user } = useUser();

  return (
    <div
      className={`${
        openNav ? "left-0" : "-left-full"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all`}
    >
      <div>
        <div className="flex items-center justify-start gap-3">
          {user ? <UserButton size={50} /> : <FaUserCircle size={50} />}
          <h1 className="text-md font-semibold text-gray-800">
            {user ? (
              user.fullName
            ) : (
              <SignInButton className="cursor-pointer bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-800 transition-[3s]">
                Sign In
              </SignInButton>
            )}
            <br />
            <p className="text-[12px] text-[#bec70d]">Premium user</p>
          </h1>
        </div>
        <nav className=" mt-12">
          <ul className="flex gap-5 items-start text-xl font-semibold *:cursor-pointer *:transition-[5s] flex-col ">
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
              <li onClick={() => setOpenNav(false)}>Home</li>
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
              <li onClick={() => setOpenNav(false)}>Products</li>
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
              <li onClick={() => setOpenNav(false)}>About</li>
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
              <li onClick={() => setOpenNav(false)}>Contact</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ReasponsiveMenu;
