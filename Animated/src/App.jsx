import React, { useEffect } from "react";
import "./index.css";
import data from "./Data";
import Canvas from "./Canvas";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  });
  return (
    <>
      <div className="w-full  min-h-screen text-black relative">
        {/* {data[0].map((canvasData, canvasIndex) => {
          return <Canvas key={canvasIndex} details={canvasData} />;
        })} */}
        <div className="w-full h-screen text-white">
          <nav className=" top-0 left-0 w-full p-6 px-10 flex justify-between items-center z-50 ">
            <div className="text-2xl font-semibold ">Thirtysixstudio</div>
            <div className="links flex gap-10 items-center">
              {["Home", "About", "Projects", "Contact"].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-md hover:text-gray-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="textContainer w-full px-[20%]">
            <div className="text text-white w-[40%]">
              <h3 className="text-3xl leading-[1.4] ">
                At Thirtysixstudio, we build digital assets and immersive
                experiences for purposeful brands.
              </h3>
              <p className="text-[15px] mt-10 leading-[1.3] font-normal">
                We're a boutique production studio focused on design, animation,
                and technology, constantly rethinking what digital craft can do
                for present-day ads and campaigns.
              </p>
              <p className="mt-10">Scroll</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
