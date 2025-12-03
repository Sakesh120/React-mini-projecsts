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
        {data[0].map((canvasData, canvasIndex) => {
          return <Canvas key={canvasIndex} details={canvasData} />;
        })}
      </div>
    </>
  );
};

export default App;
