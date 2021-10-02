const initialState = {
  user: null,
  isLoading: false,
};

const userState = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.value,
      };

    default:
      return state;
  }
};

export default userState;
