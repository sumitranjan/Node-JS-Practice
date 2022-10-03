import React from "react";
import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

//HOC??
const ReqAuth = ({ children }) => {
  //if the user is authenticated navigate him to the protected route,
  // else navigate him to the login page

  const location = useLocation();
  console.log(location)
  const [isAuth, setIsAuth] = useState(false);

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }
  return children;
};

export default ReqAuth;
