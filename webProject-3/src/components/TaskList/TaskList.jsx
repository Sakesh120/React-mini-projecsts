import React from "react";

const TaskList = () => {
  return (
    <div
      id="tastlist"
      className="h-[55%] overflow-x-auto lg:py-5 py-2 w-full lg:mt-10 mt-7 flex  items-center justify-center  gap-5 flex-wrap lg:flex-nowrap lg:justify-start"
    >
      <div className="flex-shrink-0 h-full lg:w-[300px] w-[200px] bg-yellow-300 rounded-xl"></div>
      <div className="flex-shrink-0 h-full lg:w-[300px] w-[200px] bg-yellow-300 rounded-xl"></div>
      <div className="flex-shrink-0 h-full lg:w-[300px] w-[200px] bg-yellow-300 rounded-xl"></div>
      <div className="flex-shrink-0 h-full lg:w-[300px] w-[200px] bg-yellow-300 rounded-xl"></div>
      <div className="flex-shrink-0 h-full lg:w-[300px] w-[200px] bg-yellow-300 rounded-xl"></div>
      <div className="flex-shrink-0 h-full lg:w-[300px] w-[200px] bg-yellow-300 rounded-xl"></div>
    </div>
  );
};

export default TaskList;
