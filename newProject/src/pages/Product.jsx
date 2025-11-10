import React, { useEffect, useState } from "react";
import { getData } from "../context/DataContext";
import FilterSection from "../components/FilterSection";
import Loading from "../assets/Loading4.webm";
import ProductCard from "../components/ProductCard";
import { CloudCog } from "lucide-react";

const Product = () => {
  const { data, fetchAllProducts } = getData();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    console.log(category);
  };
  const filterData = data?.filter((item) => {
    const matchesSearch = item.title
      ?.toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      !category ||
      category.toLowerCase() === "all" ||
      item.category?.toLowerCase() === category.toLowerCase();
    const matchesPrice =
      item.price >= (priceRange?.[0] ?? 0) &&
      item.price <= (priceRange?.[1] ?? Infinity);

    return matchesSearch && matchesCategory && matchesPrice;
  });
  console.log(filterData);
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        {data?.length > 0 ? (
          <div className="flex gap-8">
            <FilterSection
              search={search}
              setSearch={setSearch}
              category={category}
              setCategory={setCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              handleCategoryChange={handleCategoryChange}
            />
            <div className="grid grid-cols-4 gap-7 mt-10 ">
              {filterData?.map((product, index) => {
                return <ProductCard product={product} key={index} />;
              })}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-[400px]">
            <video muted autoPlay loop>
              <source src={Loading} type="video/webm" />
            </video>
          </div>
        )}
      </div>
    </>
  );
};

export default Product;
