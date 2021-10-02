import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Navbar, Featured, List } from "../components";
import { getMovies, getRandomMovie, getTypeMovie, getTypeSeries } from "../redux/action/movieAction";

const Home = ({ match }) => {
  const [genre, setGenre] = useState("");
  const [type, setType] = useState(null);

  const { movies } = useSelector((state) => state.movieState);

  const dispatch = useDispatch();

  useEffect(() => {
    if (match.path === "/") {
      setType(null);
    } else if (match.path === "/movie") {
      setType("Movie");
    } else if (match.path === "/series") {
      setType("Series");
    }
  }, [type, match.path]);

  useEffect(() => {
    dispatch(getRandomMovie());

    return () => {
      dispatch({ type: "SET_RANDOM_MOVIE", value: null });
    };
  }, [dispatch]);

  useEffect(() => {
    if (type === null) {
      dispatch(getMovies());
    } else if (type === "Movie") {
      dispatch(getTypeMovie(genre))
    } else if (type === "Series") {
      dispatch(getTypeSeries(genre))
    }

    return () => {
      dispatch({ type: "SET_MOVIES", value: [] });
    };
  }, [dispatch, type, genre]);

  return (
    <div className="pb-20 overflow-hidden bg-black">
      <Navbar></Navbar>
      <Featured type={type} genre={genre} setGenre={setGenre}></Featured>
      {movies.length > 0 ?
        movies.map((movie) => {
          return <List key={movie._id} movie={movie}></List>;
        }) : <div className="p-10 text-xl text-center text-white">Movie Not Found</div>}
    </div>
  );
};

export default Home;
