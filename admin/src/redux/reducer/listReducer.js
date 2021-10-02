const initialState = {
  lists: [],
  listContent: null,
  listDetail: null,
  listForm: {
    title: "",
    type: "",
    genre: "",
  },
  isLoading: false,
  error: null,
  message: null,
};

const listState = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LISTS":
      return {
        ...state,
        lists: action.value,
      };

    case "SET_LIST_DETAIL":
      return {
        ...state,
        listDetail: action.value,
      };

    case "SET_LIST_CONTENT":
      return {
        ...state,
        listContent: action.value,
      };

    case "SET_LIST_FORM":
      return {
        ...state,
        listForm: {
          ...state.listForm,
          [action.name]: action.value,
        },
      };

    case "SET_LIST_FORM_CLEAR":
      return {
        ...state,
        listForm: {
          ...state.listForm,
          title: "",
          genre: "",
          type: "",
        },
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

export default listState;
