import { UserButton, useUser } from "@clerk/clerk-react";
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
        </div>
        <ul className="flex gap-5 items-start text-xl font-semibold *:cursor-pointer*:transition-[5s] flex-col mt-15 ">
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
      </div>
    </div>
  );
};

export default ReasponsiveMenu;
