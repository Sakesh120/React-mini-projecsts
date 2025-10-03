import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const Category = () => {
  const [slide, setSlide] = useState(0);
  const Categories = [
    {
      img: "/images/Dosa.jpeg",
      name: "Dosa",
    },
    {
      img: "/images/Pizza.jpeg",
      name: "Pizza",
    },
    {
      img: "/images/Pasta.jpeg",
      name: "Pasta",
    },
    {
      img: "/images/Poori.jpeg",
      name: "Poori",
    },
    {
      img: "/images/Rolls.jpeg",
      name: "Rolls",
    },
    {
      img: "/images/Salad.jpeg",
      name: "salad",
    },
    {
      img: "/images/Paratha.jpeg",
      name: "Paratha",
    },
    {
      img: "/images/Noodles.jpeg",
      name: "Noodles",
    },
    {
      img: "/images/Khichdi.jpeg",
      name: "Khichdi",
    },
    {
      img: "/images/Ice_Creams.jpeg",
      name: "Ice Cream",
    },
    {
      img: "/images/Gulab_Jamun.jpeg",
      name: "Gulab Jamun",
    },
    {
      img: "/images/Cakes.jpeg",
      name: "Cake",
    },
    {
      img: "/images/Burger.jpeg",
      name: "Burger",
    },
    {
      img: "/images/Chinese.jpeg",
      name: "Chinese",
    },
    {
      img: "/images/Biryani_2.jpeg",
      name: "Biryani",
    },
    {
      img: "/images/Chole_Bature.jpeg",
      name: "Chole Bature",
    },
  ];
  return (
    <div className="lg:max-w-[1200px] mx-auto  ">
      <div className="flex justify-between items-center  mt-4">
        <div className="text-2xl font-bold">What's on your mind?</div>
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
      <div className="flex overflow-hidden ">
        {Categories.map((item, index) => (
          <div
            style={{
              transform: `translateX(-${slide * 100}%)`,
            }}
            key={index}
            className="w-[150px] shrink-0 duration-500"
          >
            <img src={item.img} alt={item.name} />
          </div>
        ))}
      </div>

      <hr className="my-6 border-[1px] border-[#c5c9c2]" />
    </div>
  );
};

export default Category;
