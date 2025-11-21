import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getData } from "../context/DataContext";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Loading from "../assets/Loading4.webm";
import Lottie from "lottie-react";
import notfound from "../assets/notfound.json";
import { TiArrowBack } from "react-icons/ti";

const CategoryProduct = () => {
  const params = useParams();
  const category = params.category;
  const { data, fetchAllProducts } = getData();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllProducts();
    window.scrollTo(0, 0);
  }, []);

  // Filter products by category
  const categoryProducts = data?.filter(
    (item) =>
      item.category?.toLowerCase() === category?.toLowerCase() &&
      item.title?.toLowerCase().includes(search.toLowerCase())
  );

  const dynamicPage = Math.ceil(categoryProducts?.length / 8);

  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 mb-10">
      <div className="flex justify-start items-center">
        <button
          onClick={() => navigate("/")}
          className="w-fit px-3 py-2 bg-black text-white font-semibold mt-5 rounded-xl shadow-lg cursor-pointer flex items-center  mb-2 gap-1"
        >
          <span>
            <TiArrowBack />
          </span>
          Back
        </button>
      </div>
      {data?.length > 0 ? (
        <div className="w-full">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2 capitalize">
              {category} Products
            </h1>
            <p className="text-gray-600">
              Showing {categoryProducts?.length} products
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search in this category..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {categoryProducts?.length > 0 ? (
            <div className="flex flex-col justify-center items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-10 w-full">
                {categoryProducts
                  ?.slice(page * 8 - 8, page * 8)
                  .map((product, index) => (
                    <ProductCard product={product} key={index} />
                  ))}
              </div>
              {dynamicPage > 1 && (
                <Pagination
                  page={page}
                  pageHandler={pageHandler}
                  dynamicPage={dynamicPage}
                />
              )}
            </div>
          ) : (
            <div className="flex justify-center items-center md:h-[600px] w-full mt-10">
              <div className="text-center">
                <Lottie
                  animationData={notfound}
                  className="w-[300px] mx-auto"
                />
                <p className="text-gray-600 text-lg mt-4">
                  No products found in this category
                </p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[400px]">
          <video muted autoPlay loop>
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;
