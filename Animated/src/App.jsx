import React from "react";
import "./index.css";
import Canvas from "./Canvas";
import data from "./Data";

const App = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-black text-white">
        {data.map((item, index) => {
          <div key={index}>
            {item.map((canvasData, index) => {
              <Canvas key={index} details={canvasData} />;
            })}
          </div>;
        })}
      </div>
    </>
  );
};

export default App;
