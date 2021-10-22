import axios from "axios";
import actions from "./authAction";

import action from "./authAction";

const baseURL = `https://connections-api.herokuapp.com`;

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ''
  }
}

 const registerOperation = (user) => async (dispatch) => {
  dispatch(action.registerRequest);
  try {
    const result = await axios.post(`${baseURL}/users/signup`, user);
    token.set(result.data.token)
    dispatch(action.registerSuccess(result.data));
  } catch (error) {
    dispatch(actions.registerError(error.message));
  }
};

 const loginOperation = (user) => async (dispatch) => {
  dispatch(actions.loginRequest);
  try {
    const result = await axios.post(`${baseURL}/users/login`, user);
    token.set(result.data.token)
    dispatch(action.loginSuccess(result.data))
  } catch (error) {
    dispatch(actions.loginError(error.message));
  }
};

 const logOutOperation = () => async (dispatch) => {
  dispatch(actions.logOutRequest);
  try {
    await axios.post(`${baseURL}/users/logout`);
    token.unset()
    dispatch(action.logOutSuccess())
  } catch (error) {
    dispatch(actions.logOutError(error.message));
  }
}

export default {registerOperation, loginOperation, logOutOperation};
