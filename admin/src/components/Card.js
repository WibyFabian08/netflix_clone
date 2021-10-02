import React from "react";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Card = ({ title, qty, up, progress }) => {
  return (
    <div className="w-full px-2 mb-5 -mx-2 md:w-2/6 md:mb-0">
      <div className="w-full p-5 transition-all duration-300 bg-white border border-gray-200 border-solid rounded-lg hover:shadow-xl">
        <h2 className="text-lg font-light text-black">{title}</h2>
        <div className="flex items-center my-2">
          <h2 className="inline-block text-2xl font-semibold">{`$ ${qty}`}</h2>
          <p className="mx-2">{up ? `+${progress}` : `-${progress}`}</p>
          {up ? (
            <ArrowUpwardIcon style={{ color: "green" }}></ArrowUpwardIcon>
          ) : (
            <ArrowDownwardIcon style={{ color: "red" }}></ArrowDownwardIcon>
          )}
        </div>
        <p className="text-sm text-gray-400">Compared to last month</p>
      </div>
    </div>
  );
};

export default Card;
