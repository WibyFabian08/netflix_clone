import * as api from "../../api";

export const inputListError = (message) => (dispatch) => {
  dispatch({ type: "SET_ERROR", value: message });

  setTimeout(() => {
    dispatch({ type: "SET_ERROR", value: null });
  }, 5000);
};

export const setListForm = (name, value) => {
  return {
    type: "SET_LIST_FORM",
    name,
    value,
  };
};

export const getLists = () => async (dispatch) => {
  try {
    const lists = await api.getLists();

    dispatch({ type: "SET_LISTS", value: lists.data });
  } catch (err) {
    dispatch({ type: "SET_ERROR", value: err });
  }
};

export const getList = (id) => async (dispatch) => {
  try {
    const list = await api.getList(id);

    dispatch({ type: "SET_LIST_DETAIL", value: list.data });
  } catch (err) {
    dispatch({ type: "SET_ERROR", value: err });
  }
};

export const getMovieByListId = (id) => async (dispatch) => {
  try {
    const listMovie = await api.getMovieByListId(id);

    dispatch({ type: "SET_LIST_CONTENT", value: listMovie.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: "SET_ERROR", value: err });
  }
};

export const createList = (data, history) => async (dispatch) => {
  try {
    await api.createList(data);

    dispatch({ type: "SET_LIST_FORM_CLEAR" });

    history.push("/list");
  } catch (err) {
    dispatch({ type: "SET_ERROR", value: err });
  }
};

export const updateList = (id, data, history) => async (dispatch) => {
  try {
    await api.updateList(id, data);

    history.push("/list");

    dispatch({ type: "SET_MESSAGE", value: "Update List Success" });

    setTimeout(() => {
      dispatch({ type: "SET_MESSAGE", value: null });
    }, 5000);

    dispatch({ type: "SET_LIST_FORM_CLEAR" });
  } catch (err) {
    dispatch({ type: "SET_ERROR", value: err });
  }
};

export const deleteList = (id) => async (dispatch) => {
  try {
    await api.deleteList(id);

    const lists = await api.getLists();

    dispatch({ type: "SET_LISTS", value: lists.data });
  } catch (err) {
    dispatch({ type: "SET_ERROR", value: err });
  }
};

export const deleteMovieOnList = (listId, movieId) => async (dispatch) => {
  try {
    await api.deleteMovieOnList(listId, movieId);

    const listMovie = await api.getMovieByListId(listId);

    dispatch({ type: "SET_LIST_CONTENT", value: listMovie.data });
  } catch (err) {
    dispatch({ type: "SET_ERROR", value: err });
  }
};
