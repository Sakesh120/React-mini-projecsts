import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import data from "./Data";
import Canvas from "./Canvas";
import LocomotiveScroll from "locomotive-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingRef = useRef(null);
  const growingSpan = useRef(null);
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useGSAP(() => {
    headingRef.current.addEventListener("click", (e) => {
      setShowCanvas(!showCanvas);
      if (!showCanvas) {
        setShowCanvas(!showCanvas);
        gsap.set(growingSpan.current, {
          top: e.clientY,
          left: e.clientX,
        });

        gsap.to(growingSpan.current, {
          scale: 1000,
          duration: 1.5,
          ease: "power4.inOut",
        });
        gsap.to(".paraBorder", {
          borderBottomColor: "gray",
        });
      } else {
        gsap.to(growingSpan.current, {
          scale: 0,
          duration: 2,
          ease: "power4.in",
        });
        gsap.to("body", {
          backgroundColor: "#fcffff",
        });
        gsap.to(".paraBorder", {
          borderBottomColor: "#ebe6e7",
        });
      }
    });
  }, [showCanvas]);
  return (
    <>
      <span
        ref={growingSpan}
        className="growing block fixed top-[-10%] left-[-10%] w-5 h-5 rounded-full "
      ></span>
      <div className="w-full  min-h-screen relative">
        {showCanvas &&
          data[0].map((canvasData, canvasIndex) => {
            return <Canvas key={canvasIndex} details={canvasData} />;
          })}

        <div className="w-full z-1 h-screen  relative">
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
            <div className="text  w-[40%]">
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
          <div className="w-full absolute mt-50  left-0 pl-5">
            <h1
              ref={headingRef}
              className="text-[13rem] font-normal tracking-tight  leading-none z-99"
            >
              Thirtysixstudio
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full paraBorder relative h-screen py-10 border-b border-gray-200">
        {showCanvas &&
          data[1].map((canvasData, canvasIndex) => {
            return <Canvas key={canvasIndex} details={canvasData} />;
          })}
        <div className="textContainer mt-30 w-full px-[20%] flex justify-between">
          <div className="w-[50%]">
            <h1 className=" text-xl ml-5">01 --- WHAT WE DO</h1>
            <img
              src="https://pngimg.com/uploads/iphone16/iphone16_PNG27.png"
              alt=""
            />
          </div>
          <div className="text w-[40%]">
            <h3 className="text-3xl leading-[1.4] ">
              We aim to elevate digital production in the advertising space,
              bringing your ideas to life.
            </h3>
            <p className="text-[15px] mt-20 leading-[1.3] font-normal">
              As a contemporary studio, we use cutting-edge design practices and
              the latest technologies to deliver current digital work.
            </p>
            <p className="text-[15px] mt-5 leading-[1.3] font-normal">
              Our commitment to innovation and simplicity, paired with our agile
              approach, ensures your journey with us is smooth and enjoyable
              from start to finish.
            </p>
          </div>
        </div>
      </div>
      <div className="paraBorder w-full  min-h-screen relative border-b border-gray-200">
        {showCanvas &&
          data[2].map((canvasData, canvasIndex) => {
            return <Canvas key={canvasIndex} details={canvasData} />;
          })}
        <div className="textContainer mt-50 w-full px-[20%] ">
          <div className="w-full">
            <p className=" text-sm font-bold mt-0">OUR SERVICES</p>
            <h1 className="text-3xl leading-[1.4] mt-30">
              We provide you with captivating design, interactive animations,
              reliable code, and immaculate project coordination. Whether you
              need acampaign built froms cratchor assistance at a specific
              phase, we’ve got you covered.
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full  min-h-screen relative">
        {showCanvas &&
          data[3].map((canvasData, canvasIndex) => {
            return <Canvas key={canvasIndex} details={canvasData} />;
          })}
        <div className="textContainer mt-30 w-full px-[20%] ">
          <div className="links flex py-4 flex-col w-full">
            {[
              "CREATIVE",
              "DESIGN",
              "ANIMATION",
              "TECHNOLOGY",
              "PROJECT DELIVERY",
              "EXAMPLE PRODUCTS",
            ].map((lable, index) => (
              <div className="w-full flex justify-between border-b py-2 items-center px-4 text-lg h-20">
                <h3>{lable}</h3>
                <p className=" paraBorder px-4 rounded-4xl border border-gray-300 hover:border-gray-500 cursor-pointer flex justify-center items-center transition-[3s]">
                  +
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
