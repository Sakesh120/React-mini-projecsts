import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-[287px] lg:w-[300px] w-[200px] p-5 bg-blue-400 rounded-xl">
      <div className="flex justify-between items-center ">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title} t</h2>
      <p className="text-sm text-gray-400 mt-2">{data.description}</p>
      <div className="mt-15">
        <button className="w-full bg-green-500 py-1 px-2 text-sm text-white  rounded-sm cursor-pointer">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
