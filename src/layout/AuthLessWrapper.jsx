import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { GetAuthContext } from "../contexts/AuthContext";

const AuthLessWrapper = ({ children }) => {
  const authContext = useContext(GetAuthContext);

  if (authContext.user !== null) {
    return <Navigate replace to="/" />;
  }
  return children;
};

export default AuthLessWrapper;
