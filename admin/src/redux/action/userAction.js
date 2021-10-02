import * as api from "../../api";

export const inputUserError = (message) => (dispatch) => {
  dispatch({ type: "SET_ERROR", value: message });

  setTimeout(() => {
    dispatch({ type: "SET_ERROR", value: null });
  }, 5000);
};

export const setUserForm = (name, value) => {
  return {
    type: "SET_USER_FORM",
    name,
    value,
  };
};

export const getUsers = () => async (dispatch) => {
  try {
    const users = await api.getUsers();

    dispatch({ type: "SET_USERS", value: users.data });
  } catch (err) {
    dispatch({ type: "SET_ERROR", value: err });
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    const user = await api.getUser(id);

    dispatch({ type: "SET_USER", value: user.data });
  } catch (err) {
    dispatch({ type: "SET_ERROR", value: err });
  }
};

export const createUser = (data, history) => async (dispatch) => {
  try {
    await api.createUser(data);

    dispatch({ type: "SET_USER_FORM_CLEAR" });

    history.push("/users");

    dispatch({ type: "SET_ERROR", value: null });

    dispatch({ type: "SET_MESSAGE", value: "Create User Success" });
    setTimeout(() => {
      dispatch({ type: "SET_MESSAGE", value: null });
    }, 5000);
  } catch (err) {
    dispatch({ type: "SET_ERROR", value: err });
  }
};

export const updateUser = (id, data, history) => async (dispatch) => {
  try {
    await api.updateUser(id, data);

    dispatch({ type: "SET_IMAGE_PREVIEW", value: null });

    history.push("/users");

    dispatch({ type: "SET_MESSAGE", value: "Update User Success" });

    setTimeout(() => {
      dispatch({ type: "SET_MESSAGE", value: null });
    }, 5000);
  } catch (err) {
    dispatch({ type: "SET_ERROR", value: err });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await api.deleteUser(id);

    const users = await api.getUsers();

    dispatch({ type: "SET_USERS", value: users.data });

    dispatch({ type: "SET_MESSAGE", value: "Delete User Success" });

    setTimeout(() => {
      dispatch({ type: "SET_MESSAGE", value: null });
    }, 5000);
  } catch (err) {
    dispatch({ type: "SET_ERROR", value: err });
  }
};
