import React from "react";

const AcceptTask = ({ data }) => {
  console.log(data.title);
  return (
    <div className="flex-shrink-0 h-auto w-full sm:w-[250px] lg:w-[300px] p-4 sm:p-5 bg-green-400 rounded-xl">
      {/* Top Section */}
      <div className="flex flex-wrap justify-between items-center gap-2">
        <h3 className="bg-red-600 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded text-white">
          {data.category}
        </h3>
        <h4 className="text-xs sm:text-sm">{data.date}</h4>
      </div>

      {/* Title */}
      <h2 className="mt-4 text-lg sm:text-xl lg:text-2xl font-semibold break-words">
        {data.title}
      </h2>

      {/* Description */}
      <p className="text-xs sm:text-sm text-gray-800 mt-2 break-words line-clamp-4">
        {data.description}
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-between gap-2 mt-5">
        <button className="bg-green-500 py-2 px-3 text-xs sm:text-sm text-white rounded-sm cursor-pointer hover:bg-green-600 transition">
          Mark as Completed
        </button>
        <button className="bg-red-500 py-2 px-3 text-xs sm:text-sm text-white rounded-sm cursor-pointer hover:bg-red-600 transition">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
