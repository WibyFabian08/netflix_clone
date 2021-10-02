const initialState = {
  movies: [],
  movie: {},
  isLoading: false,
  error: null,
  moviePreview: {
    image: null,
    logo: null,
    trailer: null,
    video: null,
  },
  movieForm: {
    title: "",
    year: "",
    desc: "",
    limit: "",
    image: null,
    movieLogo: null,
    trailer: null,
    video: null,
    list: "",
  },
  message: null,
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

    case "SET_ERROR":
      return {
        ...state,
        error: action.value,
      };

    case "SET_MOVIE_PREVIEW":
      return {
        ...state,
        moviePreview: {
          ...state.moviePreview,
          [action.name]: action.value,
        },
      };

    case "SET_MOVIE_PREVIEW_CLEAR":
      return {
        ...state,
        moviePreview: {
          ...state.moviePreview,
          image: null,
          movieLogo: null,
          trailer: null,
          video: null,
        },
      };

    case "SET_MOVIE_FORM":
      return {
        ...state,
        movieForm: {
          ...state.movieForm,
          [action.name]: action.value,
        },
      };

    case "SET_MOVIE_FORM_CLEAR":
      return {
        ...state,
        movieForm: {
          ...state.movieForm,
          title: "",
          year: "",
          desc: "",
          limit: "",
          image: null,
          movieLogo: null,
          trailer: null,
          video: null,
          list: "",
        },
      };

    case "SET_MESSAGE":
      return {
        ...state,
        message: action.value,
      };

    default:
      return state;
  }
};

export default movieState;
