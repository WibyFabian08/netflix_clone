const initialState = {
  movies: [],
  movie: null,
  randomMovie: null,
};

const movieState = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        movies: action.value,
      };

    case "SET_MOVIE":
      return {
        ...state,
        movie: action.value,
      };

    case "SET_RANDOM_MOVIE":
      return {
        ...state,
        randomMovie: action.value,
      };

    default:
      return state;
  }
};

export default movieState;
