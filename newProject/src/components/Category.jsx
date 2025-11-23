import { useEffect } from "react";
import { getData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const { categoryOnlyData } = getData();
  const navigate = useNavigate();
  return (
    <div className="bg-[#101829] ">
      <div className="max-w-7xl mx-auto md:flex md:gap-4 items-center md:justify-around py-7 px-4 grid grid-cols-3 gap-2 ">
        {categoryOnlyData.map((item, index) => {
          return (
            <div key={index}>
              <button
                onClick={() => navigate(`/category/${item}`)}
                className="bg-linear-to-r text-[12px] md:text-[20px] from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer  uppercase"
              >
                {item}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
