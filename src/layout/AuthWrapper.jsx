import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { GetAuthContext } from "../contexts/AuthContext";

const AuthWrapper = ({ children }) => {
  const authContext = useContext(GetAuthContext);
  if (authContext.user === null) {
    return <Navigate replace to="/login" />;
  } else {
    return children;
  }
};

export default AuthWrapper;
