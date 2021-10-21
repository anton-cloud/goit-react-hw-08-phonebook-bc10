import React from 'react'
import AuthForm from './AuthForm';
import { useDispatch } from "react-redux";
import authOperation from '../../redux/auth/authOperation';


const AuthFormContainer = () => {
  const dispatch = useDispatch()

  const register = (user) => {
    dispatch(authOperation.registerOperation(user))
  }
  const login = (user) => {
    dispatch(authOperation.loginOperation(user))
  }

  return (
    <AuthForm register={register} login={login}/>
  );
}

export default AuthFormContainer;