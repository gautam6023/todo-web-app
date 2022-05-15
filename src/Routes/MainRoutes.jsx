import { Routes, Route } from "react-router";
// import Navbar from "../Components/Sidebar";
import Login from "../Components/Login";
import React from "react";
import Sidebar from "../Components/Sidebar";
import Home from "../Components/Home";
import ReqAuth from "./ReqAuth";
import CreateTask from "../Components/CreateTask";

const MainRoutes = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route
          path="/"
          element={
            <ReqAuth>
              <Home />
            </ReqAuth>
          }
        />
        <Route path="/createtask" element={<CreateTask />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
