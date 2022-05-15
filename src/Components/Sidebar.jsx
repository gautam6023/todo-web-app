import React from "react";
import { NavbarContainer } from "./Navbar.styled";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { updateToken } from "../Redux/Auth/action";
import { logoutUser } from "../Redux/Auth/action";
import UserDetails from "./UserDetails";
import TodosFilter from "./TodosFilter";
import { Link } from "react-router-dom";

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
    }
  }, []);

  const login = () => {
    navigate("/login");
  };
  return (
    <NavbarContainer>
      <div className="logoCon">
        <Link to="/" className="logoCon" style={{ textDecoration: "none" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/67/Microsoft_To-Do_icon.png"
            alt=""
          />

          <p>My Todo List</p>
        </Link>
      </div>
      <br />
      {token ? (
        <>
          {/* Profile user */}
          <UserDetails />

          <TodosFilter />
          <Link to={"createtask"}>Add Task</Link>
          <div className="logOut">
            <button
              onClick={() => {
                dispatch(logoutUser());
                navigate("/login");
              }}
            >
              Logout
            </button>
          </div>
        </>
      ) : (
        <div className="login">
          <button onClick={login}>Login</button>
        </div>
      )}
    </NavbarContainer>
  );
};

export default Sidebar;
