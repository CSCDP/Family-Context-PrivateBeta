import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { checkAuthState } from "../../actions/auth";

import AuthForm from "./authForm";

const Auth = ({ children }) => {
  const dispatch = useDispatch();
  const authentication = useSelector(state => state.authentication);

  if (authentication.authenticated === "authenticated") {
    return (<>{children}</>);
  } else if (authentication.authenticated === "unauthenticated") {
    return (<AuthForm/>)
  } else {
    dispatch(checkAuthState());
    return (<div>Loading...</div>)
  }
};

export default Auth;
