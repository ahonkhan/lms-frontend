import React, { useContext } from "react";
import { GetAuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const authContext = useContext(GetAuthContext);
  if (authContext.user?.role === "admin") {
    return children;
  }
  return <Navigate replace to={"/dashboard"} />;
};

export default AdminLayout;
