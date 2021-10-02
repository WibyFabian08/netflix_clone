import React from "react";

import { Button, SelectGenre } from "../elements";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useSelector } from "react-redux";

const Featured = ({ type, setGenre, genre }) => {
  const {randomMovie} = useSelector((state) => state.movieState);

  return (
    <div className="relative h-screen overflow-hidden">
      <img
        src={randomMovie ? `http://localhost:3000${randomMovie[0]?.image}` : ''}
        className="object-cover w-full h-full"
        alt="hero"
      />
      {type && (
        <SelectGenre type={type} value={genre} onChange={(e) => setGenre(e.target.value)}></SelectGenre>
      )}
      <div
        className="absolute z-20 w-full pr-14 md:pr-0 md:w-1/3 left-8 md:left-24"
        style={{ top: "40%" }}
      >
        <img src={randomMovie ? `http://localhost:3000${randomMovie[0]?.movieLogo}` : ''} width={300} alt="logo" />
        <p className="my-3 text-white">
          {randomMovie ? randomMovie[0]?.desc : 'Desc'}
        </p>
        <div className="flex items-center">
          <Button play movie={randomMovie}>
            <PlayArrowIcon style={{ color: "black" }}></PlayArrowIcon> Play
          </Button>
          <div className="mx-2"></div>
          <Button info>
            <InfoOutlinedIcon style={{ color: "white" }}></InfoOutlinedIcon>{" "}
            Info
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
