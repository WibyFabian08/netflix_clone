import React, { useRef, useState } from "react";

import ListItem from "./ListItem";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const List = ({ movie }) => {
  const listRef = useRef(null);
  const [step, setStep] = useState(0);

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x;

    if (direction === "right") {
      setStep(step - 1);
      listRef.current.style.transform = `translateX(${286 + distance}px)`;
    }

    if (direction === "left") {
      setStep(step + 1);
      listRef.current.style.transform = `translateX(${-286 + distance}px)`;
    }
  };

  return (
    <div className="relative w-full py-5 mt-5">
      <h2 className="mb-5 ml-8 text-white md:ml-24">{movie && movie.title}</h2>
      {step > 0 && (
        <div
          className="absolute left-0 z-20 flex flex-col items-center justify-center bg-black opacity-50 md:left-10"
          onClick={() => handleClick("right")}
          style={{ height: 150, cursor: "pointer" }}
        >
          <ArrowBackIosIcon
            style={{ color: "white" }}
            fontSize="large"
          ></ArrowBackIosIcon>
        </div>
      )}
      <div
        className="relative flex items-center transition-all duration-500 flex-nowrap"
        style={{ transform: "translateX(0px)" }}
        ref={listRef}
      >
        {/* fake children */}
        <div className="ml-8 md:ml-24"></div>
        {movie &&
          movie?.movieId &&
          movie?.movieId.map((movie, index) => {
            return <ListItem key={index} movie={movie}></ListItem>;
          })}
      </div>
      {step < 9 && (
        <div
          className="absolute right-0 z-20 flex flex-col items-center justify-center bg-black opacity-50 top-16 md:right-10"
          onClick={() => handleClick("left")}
          style={{ height: 150, cursor: "pointer" }}
        >
          <ArrowForwardIosIcon
            style={{ color: "white" }}
            fontSize="large"
          ></ArrowForwardIosIcon>
        </div>
      )}
    </div>
  );
};

export default List;
