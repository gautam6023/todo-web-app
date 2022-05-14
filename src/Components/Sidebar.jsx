import React from "react";
import { NavbarContainer } from "./Navbar.styled";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { updateToken } from "../Redux/Auth/action";
let tokenLocal = localStorage.getItem("token");
const Sidebar = () => {
  const { token } = useSelector((state) => state.isAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!tokenLocal) {
      navigate("/login");
    } else {
      dispatch(updateToken(tokenLocal));
      // navigate("/");
    }
  }, [tokenLocal]);

  const login = () => {
    navigate("/login");
  };
  return (
    <NavbarContainer>
      <div className="logoCon">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/67/Microsoft_To-Do_icon.png"
          alt=""
        />
        <p>My Todo List</p>
      </div>
      <br />
      {token ? (
        <div className="logOut">
          <button>Logout</button>
        </div>
      ) : (
        <div className="login">
          <button onClick={login}>Login</button>
        </div>
      )}
    </NavbarContainer>
  );
};

export default Sidebar;