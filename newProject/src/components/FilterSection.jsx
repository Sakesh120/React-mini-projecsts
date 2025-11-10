import React from "react";
import { getData } from "../context/DataContext";

const FilterSection = ({
  category,
  search,
  setSearch,
  priceRange,
  setPriceRange,
  handleCategoryChange,
}) => {
  const { categoryOnlyData } = getData();

  return (
    <div className="bg-gray-100 mt-10 rounded-md h-max ">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="bg-white p-2 rounded-md border-gray-400 border-2"
      />
      {/* category data */}
      <h1 className="mt-5 font-semibold text-xl">Category</h1>
      <div className="flex flex-col gap-2 mt-3 ">
        {categoryOnlyData?.map((item, index) => {
          return (
            <div key={index} className="flex gap-2">
              <input
                type="checkbox"
                name={item}
                checked={category === item}
                value={item}
                onChange={handleCategoryChange}
              />
              <button className="cursor-pointer uppercase">{item}</button>
            </div>
          );
        })}
      </div>

      {/* price range */}
      <h1 className="mt-20 font-semibold text-xl">Price Range</h1>
      <div className=" flex flex-col gap-2 ">
        <label htmlFor="">
          Price range : ${priceRange[0]} - ${priceRange[1]}
        </label>
        <input
          type="range"
          className=" cursor-pointer"
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
        />
      </div>
      <button className="bg-orange-500 hover:bg-red-700 cursor-pointer text-white rounded-md py-2 mt-5 px-2 ">
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSection;
