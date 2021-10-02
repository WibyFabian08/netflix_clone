import React, { useEffect } from "react";

import { withRouter, useHistory } from "react-router-dom";

import { AdminLayout } from "../layout";
import { CardDetail, CardEdit } from "../components";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovie,
  setMovieForm,
  updateMovie,
} from "../redux/action/movieAction";

const Movie = ({ match }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { movie, movieForm } = useSelector((state) => state.movieState);

  const handleChange = (e) => {
    dispatch({
      type: "SET_MOVIE_FORM",
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("title", movieForm.title);
    data.append("limit", movieForm.limit);
    data.append("year", movieForm.year);
    data.append("desc", movieForm.desc);
    data.append("image", movieForm.image);
    data.append("movieLogo", movieForm.movieLogo);
    data.append("trailer", movieForm.trailer);
    data.append("video", movieForm.video);
    if (movieForm.list !== "") {
      data.append("listId", movieForm.list);
    }

    dispatch(updateMovie(match.params.id, data, history));
  };

  useEffect(() => {
    dispatch(getMovie(match.params.id));

    return () => {
      dispatch({type: 'SET_MOVIE', value: {}})
    }
  }, [dispatch, match.params.id]);

  useEffect(() => {
    dispatch(setMovieForm("title", movie.title));
    dispatch(setMovieForm("limit", movie.limit));
    dispatch(setMovieForm("year", movie.year));
    dispatch(setMovieForm("desc", movie.desc));
    dispatch(setMovieForm("image", movie.image));
    dispatch(setMovieForm("movieLogo", movie.movieLogo));
    dispatch(setMovieForm("trailer", movie.trailer));
    dispatch(setMovieForm("video", movie.video));
  }, [dispatch, movie]);

  return (
    <AdminLayout>
      <h2 className="text-xl font-semibold">Detail Movie</h2>
      <div className="flex flex-wrap w-full mt-5 -mx-2">
        <div className="w-full px-2 mb-5 md:w-1/3 md:mb-0">
          <div className="p-5 bg-white rounded-lg shadow-xl">
            <CardDetail movie data={movie}></CardDetail>
          </div>
        </div>
        <div className="w-full px-2 md:w-2/3">
          <div className="p-5 bg-white rounded-lg shadow-xl">
            <CardEdit
              label="Edit Movie"
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              movie
              data={movieForm}
            ></CardEdit>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default withRouter(Movie);
