import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      ></div>
      <header className="p-[15px] shadow-xl ">
        <div className="max-w-[1200px] mx-auto border border-red-400 flex items-center text-[#686b78]">
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
        </div>
      </header>
    </>
  );
};

export default Header;
