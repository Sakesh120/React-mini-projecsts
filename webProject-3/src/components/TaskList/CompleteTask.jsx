import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-[220px] w-full sm:w-[250px] lg:w-[300px] p-4 sm:p-5 bg-yellow-400 rounded-xl">
      {/* Header */}
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

      {/* Button */}
      <div className="mt-5">
        <button className="w-full bg-green-500 py-2 px-3 text-xs sm:text-sm text-white rounded-sm cursor-pointer hover:bg-green-600 transition">
          Completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
