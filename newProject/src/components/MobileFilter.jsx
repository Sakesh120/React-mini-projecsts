import React from "react";
import { ImFilter } from "react-icons/im";
import { getData } from "../context/DataContext";

const MobileFilter = ({
  openFilter,
  setOpenFilter,
  category,
  search,
  setSearch,
  priceRange,
  setPriceRange,
  handleCategoryChange,
  setCategory,
}) => {
  const { categoryOnlyData } = getData();
  const togglefilter = () => {
    setOpenFilter(!openFilter);
  };
  return (
    <>
      <div className="bg-gray-100 flex justify-between items-center md:hidden px-4 p-2 mt-5">
        <h1 className="text-gray-800 font-semibold text-xl">Filters</h1>
        <ImFilter onClick={togglefilter} className="text-gray-800" />
      </div>
      {openFilter ? (
        <div className="bg-gray-100 p-2 md:hidden">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="bg-white p-2 rounded-lg border-gray-400 border-2 w-full"
          />

          {/* category part */}
          <h1 className="mt-7 font-semibold text-xl">Category</h1>
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
                    onClick={() => setOpenFilter(false)}
                  />
                  <button className="cursor-pointer uppercase">{item}</button>
                </div>
              );
            })}
          </div>
          {/* price range */}
          <h1 className="mt-10 font-semibold text-xl">Price Range</h1>
          <div className=" flex flex-col gap-2 w-[60%]">
            <label htmlFor="">
              Price range : ${priceRange[0]} - ${priceRange[1]}
            </label>
            <input
              type="range"
              min="0"
              max="1000"
              className=" cursor-pointer"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], Number(e.target.value)])
              }
            />
          </div>

          <button
            className="bg-orange-500 hover:bg-red-700 cursor-pointer text-white rounded-md py-2 mt-5 px-2 mb-1 "
            onClick={() => {
              setSearch("");
              setCategory("all");
              setPriceRange([0, 1000]);
              setOpenFilter(false);
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : null}
    </>
  );
};

export default MobileFilter;
