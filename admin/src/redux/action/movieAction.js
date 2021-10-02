import * as api from "../../api";

export const inputMovieError = (message) => (dispatch) => {
  dispatch({ type: "SET_ERROR", value: message });

  setTimeout(() => {
    dispatch({ type: "SET_ERROR", value: null });
  }, 5000);
};

export const setMovieForm = (name, value) => {
  return {
    type: "SET_MOVIE_FORM",
    name,
    value,
  };
};

export const getMovies = () => async (dispatch) => {
  try {
    const movies = await api.getMovies();

    dispatch({ type: "SET_MOVIES", value: movies.data });
  } catch (err) {
    dispatch({ type: "SET_ERROR", value: err });
  }
};

export const getMovie = (id) => async (dispatch) => {
  try {
    const movie = await api.getMovie(id);

    dispatch({ type: "SET_MOVIE", value: movie.data });
  } catch (err) {
    dispatch({ type: "SET_ERROR", value: err });
  }
};

export const createMovie = (data, history) => async (dispatch) => {
  try {
    await api.createMovie(data);

    dispatch({ type: "SET_MOVIE_FORM_CLEAR" });

    dispatch({ type: "SET_MOVIE_PREVIEW_CLEAR" });

    dispatch({ type: "SET_ERROR", value: null });

    dispatch({ type: "SET_MESSAGE", value: "Create Movie Success" });
    setTimeout(() => {
      dispatch({ type: "SET_MESSAGE", value: null });
    }, 5000);

    history.push("/movie");
  } catch (err) {
    dispatch({ type: "SET_ERROR", value: err });
    dispatch({ type: "SET_MOVIE_PREVIEW_CLEAR" });
  }
};

export const updateMovie = (id, data, history) => async (dispatch) => {
  try {
    await api.updateMovie(id, data);

    history.push("/movie");

    dispatch({ type: "SET_MOVIE_PREVIEW_CLEAR" });

    dispatch({ type: "SET_MESSAGE", value: "Update Movie Success" });

    setTimeout(() => {
      dispatch({ type: "SET_MESSAGE", value: null });
    }, 5000);
  } catch (err) {
    dispatch({ type: "SET_ERROR", value: err });
  }
};

export const deleteMovie = (id) => async (dispatch) => {
  try {
    await api.deleteMovie(id);

    const movies = await api.getMovies();

    dispatch({ type: "SET_MOVIES", value: movies.data });

    dispatch({ type: "SET_MESSAGE", value: "Delete Movie Success" });

    setTimeout(() => {
      dispatch({ type: "SET_MESSAGE", value: null });
    }, 5000);
  } catch (err) {
    dispatch({ type: "SET_ERROR", value: err });
  }
};
