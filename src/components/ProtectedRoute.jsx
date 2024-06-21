import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component }) => {
  const isLoggedIn = !!localStorage.getItem("token");
  return isLoggedIn ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
