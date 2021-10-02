import React, { useState } from "react";

import { Link } from "react-router-dom";

import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";

const ListItem = ({movie}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="px-2">
      <div
        className="relative overflow-hidden bg-black list-item"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {!isHover && (
          <img
            src={movie ? `http://localhost:3000${movie?.image}` : ''}
            className="object-cover w-full h-full"
            alt="thumb"
          />
        )}
        {isHover && (
          <>
            <video
              src={movie ? `http://localhost:3000${movie?.video}` : ''}
              className="object-cover w-full"
              autoPlay={true}
              muted={true}
              loop={true}
            ></video>
            <div className="flex items-center mt-2">
              <Link to={`/watch/${movie._id}`}>
                <PlayArrowIcon
                  style={{ color: "white" }}
                  className="p-1 mx-2 overflow-hidden border border-white border-solid rounded-full"
                ></PlayArrowIcon>
              </Link>
              <AddIcon
                style={{ color: "white" }}
                className="p-1 mx-2 overflow-hidden border border-white border-solid rounded-full"
              ></AddIcon>
              <ThumbUpAltOutlinedIcon
                style={{ color: "white" }}
                className="p-1 mx-2 overflow-hidden border border-white border-solid rounded-full"
              ></ThumbUpAltOutlinedIcon>
              <ThumbDownAltOutlinedIcon
                style={{ color: "white" }}
                className="p-1 mx-2 overflow-hidden border border-white border-solid rounded-full"
              ></ThumbDownAltOutlinedIcon>
            </div>
            <div className="my-4">
              <p className="text-xs text-gray-400">
                1 hour 14 mins{" "}
                <span className="px-2 border border-gray-400 border-solid">
                  +{movie && movie?.limit}
                </span>{" "}
                {movie && movie?.year}{" "}
              </p>
            </div>
            <p className="text-xs text-gray-400">
            {movie && movie?.desc}
            </p>
            <p className="mt-4 text-xs text-gray-400">{movie && movie?.title}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ListItem;
