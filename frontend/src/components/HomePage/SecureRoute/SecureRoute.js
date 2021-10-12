import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const SecureRoute = ({ ...rest }) => {
  const { user } = useSelector((state) => state.authReducer);
  return user ? <Route {...rest} /> : <Redirect to={{ pathname: "/" }} />;
};

export default SecureRoute;