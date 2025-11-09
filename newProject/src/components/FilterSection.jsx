import React from "react";
import { getData } from "../context/DataContext";

const FilterSection = () => {
  const { categoryOnlyData } = getData();

  return (
    <div className="bg-gray-100 mt-10 rounded-md h-max ">
      <input
        type="text"
        placeholder="Search..."
        className="bg-white p-2 rounded-md border-gray-400 border-2"
      />
      {/* category data */}
      <h1 className="mt-5 font-semibold text-xl">Category</h1>
      <div className="flex flex-col gap-2 mt-3 ">
        {categoryOnlyData?.map((item, index) => {
          return (
            <div key={index} className="flex gap-2">
              <input type="checkbox" />
              <button className="cursor-pointer uppercase">{item}</button>
            </div>
          );
        })}
      </div>

      {/* price range */}
      <h1 className="mt-10 font-semibold text-xl">Price Range</h1>
      <div className=" flex flex-col gap-2 ">
        <label htmlFor="">Price range : $0 - $1000</label>
        <input type="range" className=" cursor-pointer" />
      </div>
      <button className="bg-orange-500 hover:bg-red-700 cursor-pointer text-white rounded-md py-2 mt-5 px-2 ">
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSection;
