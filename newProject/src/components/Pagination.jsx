import React from "react";

const Pagination = ({ page, pageHandler }) => {
  return (
    <div className="mt-10 space-x-4 flex justify-center gap-3 items-center *:cursor-pointer">
      <button
        disabled={page === 1}
        className={`${
          page === 1 ? "bg-red-400" : "bg-red-500"
        } text-white font-semibold px-3 py-1 rounded-md `}
      >
        Prev
      </button>
      1
      <button
        disabled={page === 1}
        className={`${
          page === 1 ? "bg-red-400" : "bg-red-500"
        } text-white font-semibold px-3 py-1 rounded-md `}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
