import React, { useContext } from "react";
import { Navigate, useLoaderData, useLocation } from "react-router-dom";
import { AuthCondext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthCondext);
  const data = useLoaderData();
  const location = useLocation();
    const from = location?.state?.from?.pathname;

  if (user) {
    return children;
  }
  return <Navigate state={{from: location}} to="/login" replace />;
};

export default PrivateRoute;
