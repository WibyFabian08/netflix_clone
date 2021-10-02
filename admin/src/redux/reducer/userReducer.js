const initialState = {
  userForm: {
    username: "",
    email: "",
    password: "",
    image: null,
    isAdmin: false,
  },
  users: [],
  user: {},
  isLoading: false,
  error: null,
  imagePreview: null,
  message: null,
};

const userState = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.value,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.value,
      };

    case "SET_USER_FORM":
      return {
        ...state,
        userForm: {
          ...state.userForm,
          [action.name]: action.value,
        },
      };

    case "SET_USER_FORM_CLEAR":
      return {
        ...state,
        userForm: {
          ...state.userForm,
          username: "",
          email: "",
          password: "",
          image: null,
          isAdmin: false,
        },
      };

    case "SET_IMAGE_PREVIEW":
      return {
        ...state,
        imagePreview: action.value,
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.value,
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

export default userState;
