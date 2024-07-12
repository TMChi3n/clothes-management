import React from "react";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("access_token");
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default AuthRoute;
