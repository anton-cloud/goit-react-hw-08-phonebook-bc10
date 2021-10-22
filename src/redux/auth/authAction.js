import { createAction } from "@reduxjs/toolkit";

const registerRequest = createAction("auth/register_Request");
const registerSuccess = createAction("auth/register_Success");
const registerError = createAction("auth/register_Error");

const loginRequest = createAction("auth/login_Request");
const loginSuccess = createAction("auth/login_Success");
const loginError = createAction("auth/login_Error");

const logOutRequest = createAction("auth/logOut_Request");
const logOutSuccess = createAction("auth/logOut_Success");
const logOutError = createAction("auth/logOut_Error");

const authActions =  {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logOutRequest,
  logOutSuccess,
  logOutError
};

export default authActions;
