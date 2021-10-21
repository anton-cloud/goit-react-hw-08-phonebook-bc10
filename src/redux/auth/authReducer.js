import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import actions from "./authAction";

const {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logOutRequest,
  logOutSuccess,
  logOutError
} = actions;

const authUserReducer = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]:(_, { payload }) => payload.user,
  [logOutSuccess]:() => null,

});

const authTokenReducer = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logOutSuccess]:() => null,
});

const authLoaderReducer = createReducer(false, {
  [registerRequest]: () => true,
  [registerSuccess]: () => false,
  [registerError]: () => false,
  [loginRequest]: () => true,
  [loginSuccess]: () => false,
  [loginError]: () => false,
  [logOutRequest]: () => true,
  [logOutSuccess]: () => false,
  [logOutError]: () => false,
});

const authErrorReducer = createReducer("", {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logOutError]: (_, { payload }) => payload,

});

const authReducer = combineReducers({
  user: authUserReducer,
  token: authTokenReducer,
  loader: authLoaderReducer,
  error: authErrorReducer,
});

export default authReducer;
