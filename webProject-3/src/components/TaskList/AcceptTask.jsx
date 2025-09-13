import React from "react";

const AcceptTask = ({ data }) => {
  console.log(data.title);
  return (
    <div className="flex-shrink-0 h-[287px] lg:w-[300px] w-[200px] p-5 bg-green-400 rounded-xl">
      <div className="flex justify-between items-center ">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.date} </h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title} </h2>
      <p className="text-sm text-gray-400 mt-2">{data.description}</p>
      <div className="flex justify-between mt-15 mb-1">
        <button className="bg-green-500 py-1 px-2 text-sm text-white  rounded-sm cursor-pointer">
          Mark as Completed
        </button>
        <button className="bg-red-500 py-1 px-2 text-sm text-white rounded-sm cursor-pointer">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
