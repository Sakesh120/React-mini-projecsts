import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { FaHandsHelping } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };
  const hideSideMenu = () => {
    setToggle(false);
  };

  const links = [
    {
      icon: <IoMdSearch />,
      name: "Search",
    },
    {
      icon: <CiDiscount1 />,
      name: "Offers",
      sup: "new",
    },
    {
      icon: <FaHandsHelping />,
      name: "Help",
    },
    {
      icon: <FaSignInAlt />,
      name: "Sign In",
    },
    {
      icon: <FaOpencart />,
      name: "Cart",
    },
  ];

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-[500ms] z-[99]"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      ></div>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-[500px] bg-white h-full absolute duration-[500ms]"
        style={{
          left: toggle ? "0%" : "-100%",
        }}
      ></div>
      <header className="p-[15px] shadow-xl ">
        <div className="max-w-[1200px] mx-auto  flex items-center text-[#686b78]">
          <div className="w-[90px]">
            <img src="images/logo1.png" className="w-full" alt="" />
          </div>
          <div className=" ">
            <span className="font-bold border-b-[3px] text-[#222] border-black cursor-pointer mr-[5px]  transition-[1s]">
              Ratanada
            </span>
            Jodhpur, Rajasthan, India{" "}
            <RxCaretDown
              fontSize={25}
              className="inline text-[0.9rem] font-bold text-[#fc8019] cursor-pointer"
              onClick={showSideMenu}
            />
          </div>
          <nav className="flex list-none gap-8 ml-auto  text-[18px] font-semibold">
            {links.map((item, index) => (
              <li
                className="flex items-center gap-2 cursor-pointer hover:text-[#fc8019] transition-[0.8s] hover:scale-[1.1]"
                key={index}
              >
                {item.icon}
                {item.name}
                <sup className="text-amber-400">{item.sup}</sup>
              </li>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
