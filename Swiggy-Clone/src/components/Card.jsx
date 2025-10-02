import React from "react";

const Card = ({ info }) => {
  return (
    <div className="w-[273px] shrink-0 grow">
      <div className="h-[182px] rounded-[15px] overflow-hidden relative">
        <img className="object-cover w-full h-full" src={info.image} alt="" />
        <div className="image-overlay absolute w-full h-full top-0 flex items-end p-2 text-white text-[25px] font-bold tracking-tighter">
          {info.offer}
        </div>
      </div>
      <div className="mt-[5px] flex flex-col  text-[16px] items-start line-clamp-2 leading-[22px]">
        <h1 className="text-[20px] font-bold">{info.title}</h1>
        <h2>{info.rating}</h2>
        <h2>
          {info.minTime} <span>{info.maxTime}</span>
        </h2>
        <h2>{info.place}</h2>
      </div>
    </div>
  );
};

export default Card;
