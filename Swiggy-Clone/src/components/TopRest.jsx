import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import Card from "./Card";

const TopRest = () => {
  const data = [
    {
      image: "/images/2b4f62d606d1b2bfba9ba9e5386fabb7.jpeg",
      offer: "Items at ₹179",
      title: "Pizza Hut",
      rating: 4.2,
      minTime: 30,
      maxTime: 40,
      name: "Pizzas",
      place: "New Jodhpur",
    },
    {
      image: "/images/75d0b3ebeb56fe2484c944e94cac7a8d.jpeg",
      offer: "₹50 OFF ABOVE ₹199",
      title: "Janta Sweet Home",
      rating: 4.5,
      minTime: 35,
      maxTime: 40,
      name: "Sweets,South Indian",
      place: "Shastri Nagar",
    },
    {
      image: "/images/cef5bf4cc31dc3c46a1e1b027c5627e4.jpeg",
      offer: "₹85 OFF ABOVE ₹149",
      title: "Parihaar Bhojnalay",
      rating: 4.3,
      minTime: 35,
      maxTime: 40,
      name: "North India, Thalis",
      place: "Sardarpura",
    },
    {
      image: "/images/eillc7d7hbrzcuussus5.jpeg",
      offer: "₹70 OFF ABOVE ₹149",
      title: "Kwality Walls Frozen",
      rating: 4.5,
      minTime: 25,
      maxTime: 25,
      name: "Desserts,Ice Cream",
      place: "Chopsani Housing Board",
    },
    {
      image: "/images/6e04be27387483a7c00444f8e8241108.jpeg",
      offer: "₹1-5 OFF ABOVE ₹179",
      title: "The Good Bowl",
      rating: 4.4,
      minTime: 30,
      maxTime: 35,
      name: "Biryani, North India",
      place: "Shastri Nagar",
    },
    {
      image: "/images/w7ndo1dkkk6kf4qfz2p1.jpeg",
      offer: "₹100 OFF ABOVE ₹499",
      title: "NIC Ice Creams",
      rating: 4.7,
      minTime: 25,
      maxTime: 30,
      name: "Desserts,Ice Cream",
      place: "Sardarpura",
    },
    {
      image: "/images/f1bc9ddf53de574cdc35ab2f717df234.jpeg",
      offer: "Items at ₹109",
      title: "Dosh Center",
      rating: 4.0,
      minTime: 35,
      maxTime: 40,
      name: "South Indian",
      place: "Chopsani Housing Board",
    },
    {
      image: "/images/919cb3be0e7406f86f6741ebe7c30128.jpeg",
      offer: "₹125 OFF ABOVE ₹349",
      title: "Lunch Box - Meals and Thalis",
      rating: 4.3,
      minTime: 30,
      maxTime: 35,
      name: "Biryani, North India",
      place: "Shastri Nagar",
    },
    {
      image: "/images/535fc9f9c135f7982317bbb6a64a1ffc.jpeg",
      offer: "₹70 OFF ABOVE ₹249",
      title: "McDonald's",
      rating: 4.4,
      minTime: 30,
      maxTime: 35,
      name: "American",
      place: "Rawaton Ka Bass",
    },
    {
      image: "/images/2a41aa363a8ae1e98a4cce95c2d0c589.jpeg",
      offer: "₹100 OFF ABOVE ₹449",
      title: "Kajal's Cake",
      rating: 4.5,
      minTime: 35,
      maxTime: 40,
      name: "Cake",
      place: "Chopsani Housing Board",
    },
  ];
  return (
    <div className="lg:max-w-[1200px] mx-auto ">
      <div className="flex justify-between items-center  mt-4">
        <div className="text-2xl font-bold">
          Top restaurant chains in Jodhpur
        </div>
        <div className="flex justify-center gap-3 items-center [&>*]:cursor-pointer [&>*]:active:bg-[#cabdbd] ">
          <div
            className="bg-[#e2e2e2] w-[30px] h-[30px] rounded-full flex justify-center items-center "
            onClick={() => {
              if (slide == 0) return false;
              setSlide(slide - 2);
            }}
          >
            <GoArrowLeft />
          </div>
          <div
            className="bg-[#e2e2e2]  w-[30px] h-[30px] rounded-full flex justify-center items-center"
            onClick={() => {
              if (Categories.length - 8 == slide) return false;
              setSlide(slide + 2);
            }}
          >
            <GoArrowRight />
          </div>
        </div>
      </div>
      <div className="flex mt-4">
        <Card data={data} />
      </div>
    </div>
  );
};

export default TopRest;
