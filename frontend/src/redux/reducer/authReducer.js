const initialState = {
  formRegister: {
    username: "",
    email: "",
    password: "",
  },
  formLogin: {
    email: "",
    password: "",
  },
  isLoading: false,
  error: null
};

const authState = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGIN_FORM":
      return {
        ...state,
        formLogin: {
          ...state.formLogin,
          [action.name]: action.value,
        },
      };

    case "SET_LOGIN_FORM_CLEAR":
      return {
        ...state,
        formLogin: {
          ...state.formLogin,
          email: "",
          password: "",
        },
      };

    case "SET_REGISTER_FORM":
      return {
        ...state,
        formRegister: {
          ...state.formRegister,
          [action.name]: action.value,
        },
      };

    case "SET_REGISTER_FORM_CLEAR":
      return {
        ...state,
        formRegister: {
          ...state.formRegister,
          username: "",
          email: "",
          password: "",
        },
      };

    default:
      return state;
  }
};

export default authState;
