import * as api from "../../api";

export const login = (data, history) => async (dispatch) => {
  const user = await api.login(data);

  localStorage.setItem("user", JSON.stringify(user.data));

  dispatch({ type: "SET_LOGIN_FORM_CLEAR" });

  history.push("/");
};

export const register = (data, history) => async (dispatch) => {
  await api.register(data);
  history.push("/login");
};

export const logout = (history) => async (dispatch) => {
  localStorage.clear();

  history.push("/login");
  
  dispatch({ type: "SET_USER", value: null });

};
