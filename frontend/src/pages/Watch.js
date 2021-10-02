import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getMovie } from "../redux/action/movieAction";

const Watch = ({ match }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => state.movieState);

  useEffect(() => {
    dispatch(getMovie(match.params.id));

    return () => {
      dispatch({ type: "SET_MOVIE", value: null });
    };
  }, [match.params.id, dispatch]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white">
      <div
        className="absolute top-0 left-0 z-20 flex items-center p-5 text-white"
        style={{ cursor: "pointer" }}
        onClick={() => history.goBack()}
      >
        <ArrowBackIcon style={{ color: "white" }}></ArrowBackIcon> Back Home
      </div>
      <video
        src={movie ? `http://localhost:3000${movie?.video}` : ""}
        autoPlay={true}
        progress={"true"}
        className="object-cover w-full h-full"
        controls={true}
      ></video>
    </div>
  );
};

export default Watch;
