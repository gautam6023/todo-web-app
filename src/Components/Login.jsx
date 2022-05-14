import React, { useState, useEffect } from "react";
import { LoginContainer } from "./Login.styled";
import { getToken } from "../Redux/Auth/action";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";

const Login = () => {
  //let tokenLocal = localStorage.getItem("token");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const from = location?.state?.from?.pathname || "/";
  const { token, isLoading, isError } = useSelector((state) => state.isAuth);
  //Handling change
  console.log(location);

  //   useEffect(() => {
  //     if (tokenLocal) {
  //       navigate(from, { replace: true });
  //     }
  //   }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(
      getToken({
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      })
    );
  };

  //   const Toast = Swal.mixin({
  //     toast: isLoading,
  //     position: "center",
  //     showConfirmButton: false,
  //     timer: 3000,
  //     timerProgressBar: true,
  //     didOpen: (toast) => {
  //       toast.addEventListener("mouseenter", Swal.stopTimer);
  //       toast.addEventListener("mouseleave", Swal.resumeTimer);
  //     },
  //   });

  if (isLoading) {
    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-100%, -50%)",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  //   if (token) {
  //     Toast.fire({
  //       icon: "success",
  //       title: "Signed in successfully",
  //     });
  //   }

  if (isError) {
    return <h1>Oops... Something went wrong</h1>;
  }

  return (
    <LoginContainer onSubmit={(e) => handleSubmit(e)}>
      <h1>Login</h1>
      <div className="inpField">
        <label>Email :</label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="inpField">
        <label>Password :</label>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <div className="inpField">
        <div></div>
        <button type="submit">Submit</button>
      </div>
    </LoginContainer>
  );
};

export default Login;
