const initialState = {
  name: "william",
  age: 22,
  isLoading: false,
};

const globalState = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.value,
      };

    default:
      return state;
  }
};

export default globalState;