import React, { useEffect } from "react";
import { getData } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  AiOutlineAccountBook,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import Category from "./Category";

const Carousel = () => {
  const { data, fetchAllProducts } = getData();
  console.log(data);
  useEffect(() => {
    fetchAllProducts();
  }, []);
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={`arrow ${className}`}
        style={{ zIndex: 3 }}
      >
        <AiOutlineArrowLeft
          className="arrows"
          style={{
            ...style,
            display: "block",
            borderRadius: "50px",
            background: "#f53347",
            color: "white",
            position: "absolute",
            padding: "2px",
            left: "50px",
          }}
          onMouseOver="this.style.backgroundColor=`#555`"
        />
      </div>
    );
  };
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={`arrow ${className}`}
        style={{ zIndex: 3 }}
      >
        <AiOutlineArrowRight
          className="arrows"
          style={{
            ...style,
            display: "block",
            borderRadius: "50px",
            background: "#f53347",
            color: "white",
            position: "absolute",
            padding: "2px",
            right: "50px",
          }}
          onMouseOver="this.style.backgroundColor=`#555`"
        />
      </div>
    );
  };

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // pauseOnHover: false,
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
  };
  return (
    <div>
      <Slider {...settings}>
        {data?.slice(0, 7).map((item, index) => {
          return (
            <div
              key={index}
              className="bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10  w-screen"
            >
              <div className="flex md:flex-row flex-col gap-8 md:gap-15 justify-center h-[600px] w-full items-center px-4">
                <div className="space-y-6">
                  <h3 className="text-red-500 font-semibold text-sm">
                    One Of the best Choice in {item.category}
                  </h3>
                  <h1 className="md:text-2xl text-xl font-bold uppercase line-clamp-3 md:w-[500px] text-white">
                    {item.title}
                  </h1>
                  <p className="md:w-[500px] line-clamp-4 text-gray-400 pr-7">
                    {item.description}
                  </p>
                  <button className="bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer mt-2 ">
                    Shop now
                  </button>
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className=" md:mw-[450px] md:h-[450px] mw-[350px]  h-[350px] hover:scale-105 transition-all "
                />
              </div>
            </div>
          );
        })}
      </Slider>
      <Category />
    </div>
  );
};

export default Carousel;
