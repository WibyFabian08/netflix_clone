import * as api from "../../api";

export const getMovies = () => async (dispatch) => {
  try {
    const movies = await api.getMovies();

    dispatch({ type: "SET_MOVIES", value: movies.data });
  } catch (err) {
    console.log();
  }
};

export const getMovie = (id) => async (dispatch) => {
  try {
    const movie = await api.getMovie(id);

    dispatch({ type: "SET_MOVIE", value: movie.data });
  } catch (err) {
    console.log(err);
  }
};

export const getRandomMovie = () => async (dispatch) => {
  try {
    const random = await api.getRandomMovie();

    dispatch({ type: "SET_RANDOM_MOVIE", value: random.data });
  } catch (err) {
    console.log(err);
  }
};

export const getTypeMovie = (genre) => async (dispatch) => {
  try {
    const movies = await api.getTypeMovie(genre);

    dispatch({ type: "SET_MOVIES", value: movies.data });
  } catch (err) {
    console.log(err)
  }
}

export const getTypeSeries = (genre) => async (dispatch) => {
  try {
    const movies = await api.getTypeSeries(genre);

    dispatch({ type: "SET_MOVIES", value: movies.data });
  } catch (err) {
    console.log(err)
  }
}
