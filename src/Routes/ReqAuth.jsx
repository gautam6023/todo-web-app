import React from "react";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";
let token = localStorage.getItem("token") || "";

export const ReqAuth = ({ children }) => {
  // const { token } = useSelector((state) => state.isAuth);
  console.log(token);
  if (token) {
    return children;
  }

  return <Navigate to={"/login"} />;
};

export default ReqAuth;
